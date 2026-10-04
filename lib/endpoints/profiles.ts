"use server";

import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

const db = async () => createClient(await cookies());

export const fetchProfile = async (userId: string) => {
  const { data, error } = await (await db())
    .from("profiles")
    .select()
    .eq("id", userId)
    .maybeSingle();
  if (error) throw error;
  return data;
};
