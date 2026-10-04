"use server";

import { cache } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export const getUser = cache(async () => {
  const supabase = createClient(await cookies());
  const { data, error } = await supabase.auth.getUser();
  return error ? null : data.user;
});

export const requireUser = async () => {
  const user = await getUser();
  if (!user) redirect("/login");
  return user;
};
