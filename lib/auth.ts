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

/** Sends anyone but admins home; the database enforces the same with RLS */
export const requireAdmin = async () => {
  const user = await requireUser();
  const supabase = createClient(await cookies());
  const { data } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle();
  if (data?.role !== "admin") redirect("/");
  return user;
};
