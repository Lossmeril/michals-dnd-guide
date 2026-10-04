"use server";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

import type { TablesInsert, TablesUpdate } from "@/lib/types/database.types";

const db = async () => createClient(await cookies());

export const fetchCampaign_Players = async () => {
  const { data, error } = await (await db())
    .from("campaign_players")
    .select()
    .order("id", { ascending: true });
  if (error) throw error;
  return data;
};

export const fetchCampaign_Player = async (id: number) => {
  const { data, error } = await (await db())
    .from("campaign_players")
    .select()
    .eq("id", id)
    .maybeSingle();
  if (error) throw error;
  return data;
};

export const createCampaign_Player = async (
  input: TablesInsert<"campaign_players">,
) => {
  const { data, error } = await (await db())
    .from("campaign_players")
    .insert(input)
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const updateCampaign_Player = async (
  id: number,
  patch: TablesUpdate<"campaign_players">,
) => {
  const { data, error } = await (await db())
    .from("campaign_players")
    .update(patch)
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const deleteCampaign_Player = async (id: number) => {
  const { error } = await (await db())
    .from("campaign_players")
    .delete()
    .eq("id", id);
  if (error) throw error;
};
