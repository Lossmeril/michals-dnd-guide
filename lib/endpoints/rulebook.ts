"use server";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

import type { Rulebook } from "@/lib/rules/character";

const db = async () => createClient(await cookies());

// The whole rulebook in one go; it's small and every editor step needs it
export const fetchRulebook = async (): Promise<Rulebook> => {
  const supabase = await db();
  const [
    races,
    backgrounds,
    items,
    languages,
    languageRelations,
    traits,
    classes,
    skills,
    classParents,
    perks,
    classPerks,
    requirements,
  ] =
    await Promise.all([
      supabase.from("races").select().order("sort"),
      supabase.from("backgrounds").select().order("sort"),
      supabase.from("items").select().order("sort"),
      supabase.from("languages").select().order("sort"),
      supabase.from("language_relations").select(),
      // RLS returns premade, approved and the viewer's own custom traits
      supabase.from("traits").select().order("name"),
      supabase.from("classes").select().order("sort"),
      supabase.from("skills").select().order("sort"),
      supabase.from("class_parents").select(),
      supabase.from("perks").select().order("name"),
      supabase.from("class_perks").select().order("sort"),
      supabase.from("perk_requirements").select("*, perk_requirement_classes(class_id)"),
    ]);

  for (const r of [
    races,
    backgrounds,
    items,
    languages,
    languageRelations,
    traits,
    classes,
    skills,
    classParents, perks, classPerks, requirements]) {
    if (r.error) throw r.error;
  }

  return {
    races: races.data!,
    backgrounds: backgrounds.data!,
    items: items.data!,
    languages: languages.data!,
    languageRelations: languageRelations.data!,
    traits: traits.data!,
    classes: classes.data!,
    skills: skills.data!,
    classParents: classParents.data!,
    perks: perks.data!,
    classPerks: classPerks.data!,
    requirements: requirements.data!.map(({ perk_requirement_classes, ...r }) => ({
      ...r,
      class_ids: perk_requirement_classes.map((c) => c.class_id),
    })),
  };
};
