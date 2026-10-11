"use server";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

import type { Build } from "@/lib/rules/character";

const db = async () => createClient(await cookies());

export const fetchCharacterBuild = async (characterId: number) => {
  const { data, error } = await (await db())
    .from("characters")
    .select("*, character_classes(class_id, level), character_perks(perk_id, class_id)")
    .eq("id", characterId)
    .maybeSingle();
  if (error) throw error;
  if (!data) return null;

  const { character_classes, character_perks, ...character } = data;
  const build: Build = {
    raceId: character.race_id,
    classes: Object.fromEntries(character_classes.map((c) => [c.class_id, c.level])),
    perks: character_perks.map((p) => ({ perkId: p.perk_id, classId: p.class_id })),
    body: character.body,
    soul: character.soul,
    charisma: character.charisma,
  };
  return { character, build };
};

// Classes and race names for character cards, one query per table for any number of characters
export const fetchCharacterSummaries = async (characterIds: number[]) => {
  const supabase = await db();
  const [classes, races] = await Promise.all([
    supabase
      .from("character_classes")
      .select("character_id, level, classes(name, sort)")
      .in("character_id", characterIds),
    supabase.from("races").select("id, name"),
  ]);
  if (classes.error) throw classes.error;
  if (races.error) throw races.error;

  // Plain objects: server action results must be serializable
  const classesByCharacter: Record<number, string[]> = {};
  for (const c of classes.data.sort((a, b) => a.classes.sort - b.classes.sort)) {
    (classesByCharacter[c.character_id] ??= []).push(`${c.classes.name} ${c.level}`);
  }
  const raceNames = Object.fromEntries(races.data.map((r) => [r.id, r.name]));

  return { classesByCharacter, raceNames };
};
