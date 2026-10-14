"use server";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { requireUser } from "@/lib/auth";
import { fetchCampaign, updateCampaign } from "@/lib/endpoints/campaigns";
import { createCampaign_Player } from "@/lib/endpoints/campaign_players";
import { fetchCharacter } from "@/lib/endpoints/characters";
import { uploadImage } from "@/lib/uploadImage";
import type { CampaignUpdate } from "@/lib/types/campaign";

type Result<T> = { data: T; error: null } | { data: null; error: string };

// The page hides edits from players; this enforces it on the server too
const asDm = async <T>(
  campaignId: number,
  run: () => Promise<T>,
): Promise<Result<T>> => {
  const user = await requireUser();
  try {
    const campaign = await fetchCampaign(campaignId);
    if (campaign?.dm !== user.id) {
      throw new Error("Only the DM can edit this campaign.");
    }
    return { data: await run(), error: null };
  } catch (e) {
    return { data: null, error: (e as Error).message };
  }
};

export async function saveCampaign(campaignId: number, patch: CampaignUpdate) {
  // Only pass through the fields the page may edit
  const { name, description } = patch;
  return asDm(campaignId, () =>
    updateCampaign(campaignId, { name, description }),
  );
}

export async function uploadCampaignCover(
  campaignId: number,
  formData: FormData,
) {
  return asDm(campaignId, async () => {
    const file = formData.get("file");
    if (!(file instanceof File) || file.size === 0) throw new Error("No file");

    const supabase = createClient(await cookies());
    const { publicUrl } = await uploadImage(
      supabase,
      "campaigns",
      file,
      String(campaignId),
    );
    return updateCampaign(campaignId, { image_url: publicUrl });
  });
}

export async function addCharacterToCampaign(
  campaignId: number,
  characterId: number,
) {
  return asDm(campaignId, () =>
    createCampaign_Player({
      campaign_id: campaignId,
      character_id: characterId,
    }),
  );
}

/** The DM can take out any character; a player can take out their own */
export async function removeCharacterFromCampaign(
  campaignId: number,
  characterId: number,
): Promise<Result<null>> {
  const user = await requireUser();
  try {
    const [campaign, character] = await Promise.all([
      fetchCampaign(campaignId),
      fetchCharacter(characterId),
    ]);
    if (campaign?.dm !== user.id && character?.owner !== user.id) {
      throw new Error("Only the DM or the character's player can do that.");
    }
    const supabase = createClient(await cookies());
    const { error } = await supabase
      .from("campaign_players")
      .delete()
      .eq("campaign_id", campaignId)
      .eq("character_id", characterId);
    if (error) throw error;
    return { data: null, error: null };
  } catch (e) {
    return { data: null, error: (e as Error).message };
  }
}
