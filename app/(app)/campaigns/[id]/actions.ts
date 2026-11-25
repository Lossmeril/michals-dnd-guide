"use server";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { requireUser } from "@/lib/auth";
import { fetchCampaign, updateCampaign } from "@/lib/endpoints/campaigns";
import { createCampaign_Player } from "@/lib/endpoints/campaign_players";
import { removeFolder, uploadImage } from "@/lib/uploadImage";
import { check, fileFrom, toResult } from "@/lib/result";
import type { CampaignUpdate } from "@/lib/types/campaign";
import { getDict } from "@/lib/i18n/server";

// The page hides edits from players; this enforces it on the server too
const asDm = async <T>(campaignId: number, run: () => Promise<T>) => {
  const user = await requireUser();
  return toResult(async () => {
    const campaign = await fetchCampaign(campaignId);
    if (campaign?.dm !== user.id) {
      throw new Error((await getDict()).campaigns.errors.onlyDm);
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

/** The DM deletes the campaign: its pictures, its updates and who was in it */
export async function deleteCampaign(campaignId: number) {
  return asDm(campaignId, async () => {
    const supabase = createClient(await cookies());
    await removeFolder(supabase, "campaigns", String(campaignId));
    await removeFolder(supabase, "campaignFiles", String(campaignId));
    // Updates and the character list go with it (on delete cascade);
    // the characters themselves stay with their players
    check(await supabase.from("campaigns").delete().eq("id", campaignId));
    return null;
  });
}

/** The DM adds a player; the player puts their character forward later */
export async function addPlayerToCampaign(campaignId: number, playerId: string) {
  return asDm(campaignId, () =>
    createCampaign_Player({ campaign_id: campaignId, player: playerId }),
  );
}

/** The DM can remove any player; a player can leave */
export async function removePlayerFromCampaign(
  campaignId: number,
  playerId: string,
) {
  const user = await requireUser();
  return toResult(async () => {
    const campaign = await fetchCampaign(campaignId);
    if (campaign?.dm !== user.id && playerId !== user.id) {
      throw new Error((await getDict()).campaigns.errors.dmOrPlayer);
    }
    const supabase = createClient(await cookies());
    check(
      await supabase
        .from("campaign_players")
        .delete()
        .eq("campaign_id", campaignId)
        .eq("player", playerId),
    );
    return null;
  });
}

/** A player puts one of their characters forward, or withdraws it (null) */
export async function setCampaignCharacter(
  campaignId: number,
  characterId: number | null,
) {
  await requireUser();
  return toResult(async () => {
    const supabase = createClient(await cookies());
    check(
      await supabase.rpc("set_campaign_character", {
        p_campaign_id: campaignId,
        p_character_id: characterId,
      }),
    );
    return characterId;
  });
}

/** The DM awards and spends merit points; a player can only spend their own */
export async function setMeritPoints(campaignPlayerId: number, points: number) {
  await requireUser();
  return toResult(async () => {
    const supabase = createClient(await cookies());
    check(
      await supabase.rpc("set_merit_points", {
        p_campaign_player_id: campaignPlayerId,
        p_points: points,
      }),
    );
    return points;
  });
}
