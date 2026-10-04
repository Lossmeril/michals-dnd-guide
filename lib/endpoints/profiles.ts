"use server";

import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { TablesInsert, TablesUpdate } from "../types/database.types";

const db = async () => createClient(await cookies());

export const fetchProfiles = async () => {
  const { data, error } = await (await db())
    .from("profiles")
    .select()
    .order("id", { ascending: true });
  if (error) throw error;
  return data; // inferred as Tables<"profiles">[]
};

export const fetchProfile = async (id: string) => {
  const { data, error } = await (await db())
    .from("profiles")
    .select()
    .eq("id", id)
    .maybeSingle();
  if (error) throw error;
  return data; // Tables<"profiles"> | null
};

export const createProfile = async (input: TablesInsert<"profiles">) => {
  const { data, error } = await (await db())
    .from("profiles")
    .insert(input)
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const updateProfile = async (
  id: string,
  patch: TablesUpdate<"profiles">,
) => {
  const { data, error } = await (await db())
    .from("profiles")
    .update(patch)
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const deleteProfile = async (id: string) => {
  const { error } = await (await db()).from("profiles").delete().eq("id", id);
  if (error) throw error;
};
