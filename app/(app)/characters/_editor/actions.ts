"use server";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { requireUser } from "@/lib/auth";
import { fetchCharacterBuild } from "@/lib/endpoints/character_build";
import { fetchRulebook } from "@/lib/endpoints/rulebook";
import { validateBuild, type Build } from "@/lib/rules/character";

type Result<T> = { data: T; error: null } | { data: null; error: string };

interface SaveCharacterInput {
  /** Omit to create a new character */
  characterId?: number;
  name: string;
  backstory: string;
  /** Only used when creating; an existing character keeps its levels */
  startLevel: number;
  build: Build;
}

export async function saveCharacter(
  input: SaveCharacterInput,
): Promise<Result<number>> {
  const user = await requireUser();
  try {
    const name = input.name.trim();
    if (!name) throw new Error("Give your character a name.");

    // Levels come from the stored character, never from the browser
    let level = input.startLevel;
    if (input.characterId) {
      const existing = await fetchCharacterBuild(input.characterId);
      if (existing?.character.owner !== user.id) {
        throw new Error("Character not found.");
      }
      level = existing.character.level;
    }

    const { errors } = validateBuild(await fetchRulebook(), input.build, level);
    if (errors.length) throw new Error(errors[0]);

    const { build } = input;
    const supabase = createClient(await cookies());
    const { data, error } = await supabase.rpc("save_character_build", {
      p_character_id: input.characterId,
      p_name: name,
      p_backstory: input.backstory.trim() || undefined,
      p_race_id: build.raceId ?? undefined,
      p_level: level,
      p_start_level: input.startLevel,
      p_body: build.body,
      p_soul: build.soul,
      p_charisma: build.charisma,
      p_classes: Object.entries(build.classes).map(([class_id, lvl]) => ({
        class_id,
        level: lvl,
      })),
      p_perks: build.perks.map((p) => ({
        perk_id: p.perkId,
        class_id: p.classId,
      })),
    });
    if (error) throw error;
    return { data, error: null };
  } catch (e) {
    return { data: null, error: (e as Error).message };
  }
}
