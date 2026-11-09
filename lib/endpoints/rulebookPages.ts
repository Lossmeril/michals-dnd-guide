import { cookies } from "next/headers";
import { cache } from "react";
import { localize, localizeDeep } from "@/lib/i18n/localize";
import { getLang } from "@/lib/i18n/server";
import type { NavChapter } from "@/lib/rulebookNav";
import { createClient } from "@/utils/supabase/server";

const db = async () => createClient(await cookies());

/**
 * Chapters with their pages, in reading order; once per request. Titles are
 * in the reader's language, or both (`raw`) for the admin pages.
 */
export const fetchRulebookNav = cache(async (raw = false): Promise<NavChapter[]> => {
  const supabase = await db();
  const { data, error } = await supabase
    .from("rulebook_chapters")
    .select("id, title, pages:rulebook_pages(id, slug, title, position)")
    .order("position");
  if (error) throw error;

  const nav = data.map((chapter) => ({
    id: chapter.id,
    title: chapter.title,
    pages: [...chapter.pages]
      .sort((a, b) => a.position - b.position)
      .map(({ id, slug, title }) => ({ id, slug, title })),
  }));
  return raw ? nav : localizeDeep(nav, await getLang());
});

/** A page in the reader's language; :::en / :::cs blocks are left to the renderer */
export const fetchRulebookPage = cache(async (slug: string) => {
  const supabase = await db();
  const { data, error } = await supabase
    .from("rulebook_pages")
    .select()
    .eq("slug", slug)
    .maybeSingle();
  if (error) throw error;
  if (!data) return data;
  const lang = await getLang();
  return {
    ...data,
    title: localize(data.title, lang),
    intro: localize(data.intro, lang),
    content: localize(data.content, lang),
  };
});

export const fetchRulebookPageById = async (id: string) => {
  const supabase = await db();
  const { data, error } = await supabase
    .from("rulebook_pages")
    .select()
    .eq("id", id)
    .maybeSingle();
  if (error) throw error;
  return data;
};
