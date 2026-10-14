// Shared by the admin server actions; not an action module itself, so these
// helpers can't be called from the browser

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/auth";
import { createClient } from "@/utils/supabase/server";

// Every action checks the admin role here; RLS checks it again in the database

export type Result<T = null> = { data: T; error: null } | { data: null; error: string };

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

/** Throws the Supabase error, so `run` can turn it into a message */
export const check = <T extends { error: unknown }>(res: T) => {
  if (res.error) throw res.error;
  return res;
};
