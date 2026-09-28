"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { createClient } from "@/utils/supabase/server";

export async function logout() {
  const supabase = createClient(await cookies());
  await supabase.auth.signOut();

  revalidatePath("/", "layout");
  redirect("/login");
}
