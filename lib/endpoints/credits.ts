"use server";

import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

export const fetchCredits = async () => {
  const { data, error } = await createClient(await cookies())
    .from("credits")
    .select()
    .order("sort")
    .order("id");
  if (error) throw error;
  return data;
};
