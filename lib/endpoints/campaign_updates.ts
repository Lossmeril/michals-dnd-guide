"use server";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

import type { TablesInsert } from "@/lib/types/database.types";

const db = async () => createClient(await cookies());

// Filtered in the query rather than in a fetcher: a campaign's feed can grow long
export const fetchCampaign_UpdatesInCampaign = async (campaignId: number) => {
  const { data, error } = await (await db())
    .from("campaign_updates")
    .select()
    .eq("campaign_id", campaignId)
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data;
};

// `author` defaults to the logged-in user in the database
export const createCampaign_Update = async (
  input: TablesInsert<"campaign_updates">,
) => {
  const { data, error } = await (await db())
    .from("campaign_updates")
    .insert(input)
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const deleteCampaign_Update = async (id: number) => {
  const { error } = await (await db())
    .from("campaign_updates")
    .delete()
    .eq("id", id);
  if (error) throw error;
};
