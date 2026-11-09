"use server";

import { requireAdmin } from "@/lib/auth";
import { INDEX_SLUG } from "@/lib/rulebookNav";
import type { TablesInsert } from "@/lib/types/database.types";
import { check, db, run } from "../_run";

type PageInput = Pick<
  TablesInsert<"rulebook_pages">,
  "title" | "slug" | "chapter_id" | "intro" | "content"
>;

/** The next free position at the end of a chapter */
const endOf = async (chapterId: string) => {
  const { data } = check(
    await (await db())
      .from("rulebook_pages")
      .select("position")
      .eq("chapter_id", chapterId)
      .order("position", { ascending: false })
      .limit(1),
  );
  return (data?.[0]?.position ?? -1) + 1;
};

/** Saves a page; a new page, or one moved to another chapter, goes last */
export async function saveRulebookPage(id: string | null, page: PageInput) {
  return run(async () => {
    const user = await requireAdmin();
    const supabase = await db();
    const row = { ...page, updated_by: user.id };

    if (!id) {
      const { data } = check(
        await supabase
          .from("rulebook_pages")
          .insert({ ...row, position: await endOf(page.chapter_id) })
          .select("id")
          .single(),
      );
      return data!.id;
    }

    const { data: old } = check(
      await supabase
        .from("rulebook_pages")
        .select("slug, chapter_id")
        .eq("id", id)
        .single(),
    );
    if (old!.slug === INDEX_SLUG && page.slug !== INDEX_SLUG) {
      throw new Error("The front page keeps the slug “index”.");
    }
    const moved = old!.chapter_id !== page.chapter_id;
    check(
      await supabase
        .from("rulebook_pages")
        .update(moved ? { ...row, position: await endOf(page.chapter_id) } : row)
        .eq("id", id),
    );
    return id;
  });
}

export async function deleteRulebookPage(id: string) {
  return run(async () => {
    const supabase = await db();
    const { data } = check(
      await supabase.from("rulebook_pages").select("slug").eq("id", id).single(),
    );
    if (data!.slug === INDEX_SLUG) throw new Error("The front page can't be deleted.");
    check(await supabase.from("rulebook_pages").delete().eq("id", id));
    return null;
  });
}

/** Swaps a row with its neighbour, renumbering the whole list */
const move = async (
  table: "rulebook_pages" | "rulebook_chapters",
  ids: string[],
  id: string,
  by: -1 | 1,
) => {
  const i = ids.indexOf(id);
  const j = i + by;
  if (i < 0 || j < 0 || j >= ids.length) return;
  [ids[i], ids[j]] = [ids[j], ids[i]];
  const supabase = await db();
  for (const [position, rowId] of ids.entries()) {
    check(await supabase.from(table).update({ position }).eq("id", rowId));
  }
};

export async function moveRulebookPage(id: string, by: -1 | 1) {
  return run(async () => {
    const supabase = await db();
    const { data: page } = check(
      await supabase.from("rulebook_pages").select("chapter_id").eq("id", id).single(),
    );
    const { data: pages } = check(
      await supabase
        .from("rulebook_pages")
        .select("id")
        .eq("chapter_id", page!.chapter_id)
        .order("position"),
    );
    await move("rulebook_pages", pages!.map((p) => p.id), id, by);
    return null;
  });
}

export async function saveRulebookChapter(id: string | null, title: string) {
  return run(async () => {
    const supabase = await db();
    if (id) {
      check(await supabase.from("rulebook_chapters").update({ title }).eq("id", id));
      return id;
    }
    const { data: last } = check(
      await supabase
        .from("rulebook_chapters")
        .select("position")
        .order("position", { ascending: false })
        .limit(1),
    );
    const { data } = check(
      await supabase
        .from("rulebook_chapters")
        .insert({ title, position: (last?.[0]?.position ?? -1) + 1 })
        .select("id")
        .single(),
    );
    return data!.id;
  });
}

export async function moveRulebookChapter(id: string, by: -1 | 1) {
  return run(async () => {
    const { data } = check(
      await (await db()).from("rulebook_chapters").select("id").order("position"),
    );
    await move("rulebook_chapters", data!.map((c) => c.id), id, by);
    return null;
  });
}

/** Only an empty chapter can go; its pages have to move or go first */
export async function deleteRulebookChapter(id: string) {
  return run(async () => {
    const supabase = await db();
    const { count } = check(
      await supabase
        .from("rulebook_pages")
        .select("id", { count: "exact", head: true })
        .eq("chapter_id", id),
    );
    if (count) throw new Error("Move or delete its pages first.");
    check(await supabase.from("rulebook_chapters").delete().eq("id", id));
    return null;
  });
}
