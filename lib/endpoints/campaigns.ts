"use server";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

import type { TablesInsert, TablesUpdate } from "@/lib/types/database.types";

const db = async () => createClient(await cookies());

export const fetchCampaigns = async () => {
  const { data, error } = await (await db())
    .from("campaigns")
    .select()
    .order("id", { ascending: true });
  if (error) throw error;
  return data;
};

export const fetchCampaign = async (id: number) => {
  const { data, error } = await (await db())
    .from("campaigns")
    .select()
    .eq("id", id)
    .maybeSingle();
  if (error) throw error;
  return data;
};

export const createCampaign = async (input: TablesInsert<"campaigns">) => {
  const { data, error } = await (await db())
    .from("campaigns")
    .insert(input)
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const updateCampaign = async (
  id: number,
  patch: TablesUpdate<"campaigns">,
) => {
  const { data, error } = await (await db())
    .from("campaigns")
    .update(patch)
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const deleteCampaign = async (id: number) => {
  const { error } = await (await db()).from("campaigns").delete().eq("id", id);
  if (error) throw error;
};
