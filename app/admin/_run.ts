// Shared by the admin server actions; not an action module itself, so these
// helpers can't be called from the browser

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/auth";
import type { Result } from "@/lib/result";
import type { TablesInsert } from "@/lib/types/database.types";
import { createClient } from "@/utils/supabase/server";

export { check } from "@/lib/result";

// Every action checks the admin role here; RLS checks it again in the database

export const db = async () => createClient(await cookies());

/** Postgres error codes worth a friendlier message */
const explain = (e: { code?: string; message: string }) =>
  e.code === "23503"
    ? "It's still in use (e.g. by a character), so it can't be removed."
    : e.code === "23505"
      ? "Something with that id already exists."
      : e.message;

export const run = async <T>(work: () => Promise<T>): Promise<Result<T>> => {
  await requireAdmin();
  try {
    const data = await work();
    revalidatePath("/admin", "layout");
    // The rulebook shows what the admin pages edit
    revalidatePath("/rulebook", "layout");
    return { data, error: null };
  } catch (e) {
    return { data: null, error: explain(e as { code?: string; message: string }) };
  }
};

/** Tables whose rows are keyed by a slug that never changes */
export type SlugTable =
  | "races"
  | "classes"
  | "perks"
  | "backgrounds"
  | "languages"
  | "items"
  | "bestiary_categories"
  | "creatures";

/** Inserts a new row, or updates an existing one by its id */
export const saveBySlug = async <T extends SlugTable>(
  table: T,
  isNew: boolean,
  row: TablesInsert<T> & { id: string },
) => {
  const t = (await db()).from(table as SlugTable);
  const { error } = isNew
    ? await t.insert(row as never)
    : await t.update(row as never).eq("id", row.id);
  if (error) throw error;
  return row.id;
};
