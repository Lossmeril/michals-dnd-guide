"use server";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { requireUser } from "@/lib/auth";
import { fetchCampaign, updateCampaign } from "@/lib/endpoints/campaigns";
import { createCampaign_Player } from "@/lib/endpoints/campaign_players";
import { fetchCharacter } from "@/lib/endpoints/characters";
import { uploadImage } from "@/lib/uploadImage";
import { check, fileFrom, toResult } from "@/lib/result";
import type { CampaignUpdate } from "@/lib/types/campaign";

// The page hides edits from players; this enforces it on the server too
const asDm = async <T>(campaignId: number, run: () => Promise<T>) => {
  const user = await requireUser();
  return toResult(async () => {
    const campaign = await fetchCampaign(campaignId);
    if (campaign?.dm !== user.id) {
      throw new Error("Only the DM can edit this campaign.");
    }
    return run();
  });
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
    const supabase = createClient(await cookies());
    const { publicUrl } = await uploadImage(
      supabase,
      "campaigns",
      fileFrom(formData),
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
) {
  const user = await requireUser();
  return toResult(async () => {
    const [campaign, character] = await Promise.all([
      fetchCampaign(campaignId),
      fetchCharacter(characterId),
    ]);
    if (campaign?.dm !== user.id && character?.owner !== user.id) {
      throw new Error("Only the DM or the character's player can do that.");
    }
    const supabase = createClient(await cookies());
    check(
      await supabase
        .from("campaign_players")
        .delete()
        .eq("campaign_id", campaignId)
        .eq("character_id", characterId),
    );
    return null;
  });
}
