import "server-only";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

import type { TablesInsert, TablesUpdate } from "@/lib/types/database.types";

const db = async () => createClient(await cookies());

export const fetchCharacters = async () => {
  const { data, error } = await (await db())
    .from("characters")
    .select()
    .order("name");
  if (error) throw error;
  return data; // inferred as Tables<"characters">[]
};

export const fetchCharacter = async (id: number) => {
  const { data, error } = await (await db())
    .from("characters")
    .select()
    .eq("id", id)
    .maybeSingle();
  if (error) throw error;
  return data; // Tables<"characters"> | null
};

export const createCharacter = async (input: TablesInsert<"characters">) => {
  const { data, error } = await (await db())
    .from("characters")
    .insert(input)
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const updateCharacter = async (
  id: number,
  patch: TablesUpdate<"characters">,
) => {
  const { data, error } = await (await db())
    .from("characters")
    .update(patch)
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const deleteCharacter = async (id: number) => {
  const { error } = await (await db()).from("characters").delete().eq("id", id);
  if (error) throw error;
};
