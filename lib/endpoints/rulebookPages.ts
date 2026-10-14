import { cookies } from "next/headers";
import { cache } from "react";
import type { NavChapter } from "@/lib/rulebookNav";
import { createClient } from "@/utils/supabase/server";

const db = async () => createClient(await cookies());

/** Chapters with their pages, in reading order; once per request */
export const fetchRulebookNav = cache(async (): Promise<NavChapter[]> => {
  const supabase = await db();
  const { data, error } = await supabase
    .from("rulebook_chapters")
    .select("id, title, pages:rulebook_pages(id, slug, title, position)")
    .order("position");
  if (error) throw error;

  return data.map((chapter) => ({
    id: chapter.id,
    title: chapter.title,
    pages: [...chapter.pages]
      .sort((a, b) => a.position - b.position)
      .map(({ id, slug, title }) => ({ id, slug, title })),
  }));
});

export const fetchRulebookPage = cache(async (slug: string) => {
  const supabase = await db();
  const { data, error } = await supabase
    .from("rulebook_pages")
    .select()
    .eq("slug", slug)
    .maybeSingle();
  if (error) throw error;
  return data;
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
