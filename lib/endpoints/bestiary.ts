"use server";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

import { localizeDeep } from "@/lib/i18n/localize";
import { getLang } from "@/lib/i18n/server";
import type { Bestiary } from "@/lib/rules/bestiary";

// Texts are in the reader's language, or both (`raw`) for the admin editors
export const fetchBestiary = async (raw = false): Promise<Bestiary> => {
  const supabase = createClient(await cookies());
  const [categories, creatures] = await Promise.all([
    supabase.from("bestiary_categories").select().order("sort"),
    supabase.from("creatures").select().order("sort"),
  ]);
  if (categories.error) throw categories.error;
  if (creatures.error) throw creatures.error;

  const b: Bestiary = { categories: categories.data, creatures: creatures.data };
  return raw ? b : localizeDeep(b, await getLang());
};
