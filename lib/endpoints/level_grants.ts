"use server";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { requireUser } from "@/lib/auth";
import { check, toResult } from "@/lib/result";

const db = async () => createClient(await cookies());

export type LevelGrant = {
  id: number;
  characterId: number;
  campaignId: number | null;
  campaignName: string | null;
  grantedBy: string | null;
  reason: string | null;
  createdAt: string;
  /** The viewer DMs the campaign it came from, so they can undo it */
  canUndo: boolean;
};

export type LevelInfo = {
  /** Newest first */
  grants: LevelGrant[];
  /** Campaigns the viewer DMs where this character is the player's pick */
  grantableIn: { id: number; name: string }[];
};

/** Level history and what the viewer may grant, for a set of characters */
export const fetchLevelInfo = async (
  characterIds: number[],
): Promise<Record<number, LevelInfo>> => {
  const result: Record<number, LevelInfo> = Object.fromEntries(
    characterIds.map((id) => [id, { grants: [], grantableIn: [] }]),
  );
  if (characterIds.length === 0) return result;

  const [user, supabase] = await Promise.all([requireUser(), db()]);
  const [grants, members, campaigns, profiles] = await Promise.all([
    supabase
      .from("character_level_grants")
      .select()
      .in("character_id", characterIds)
      .order("created_at", { ascending: false }),
    supabase
      .from("campaign_players")
      .select("campaign_id, character_id")
      .in("character_id", characterIds),
    supabase.from("campaigns").select("id, name, dm"),
    supabase.from("profiles").select("id, display_name"),
  ]).then((all) => all.map((r) => check(r).data ?? []));

  const campaignsById = new Map(
    (campaigns as { id: number; name: string | null; dm: string | null }[]).map(
      (c) => [c.id, c],
    ),
  );
  const nameOf = new Map(
    (profiles as { id: string; display_name: string | null }[]).map((p) => [
      p.id,
      p.display_name,
    ]),
  );

  for (const g of grants as {
    id: number;
    character_id: number;
    campaign_id: number | null;
    granted_by: string | null;
    reason: string | null;
    created_at: string;
  }[]) {
    const campaign = g.campaign_id ? campaignsById.get(g.campaign_id) : null;
    result[g.character_id].grants.push({
      id: g.id,
      characterId: g.character_id,
      campaignId: g.campaign_id,
      campaignName: campaign?.name ?? null,
      grantedBy: g.granted_by ? (nameOf.get(g.granted_by) ?? null) : null,
      reason: g.reason,
      createdAt: g.created_at,
      canUndo: campaign?.dm === user.id,
    });
  }

  for (const m of members as {
    campaign_id: number;
    character_id: number | null;
  }[]) {
    const campaign = campaignsById.get(m.campaign_id);
    if (m.character_id && campaign?.dm === user.id) {
      result[m.character_id].grantableIn.push({
        id: campaign.id,
        name: campaign.name ?? "",
      });
    }
  }
  return result;
};

/** The DM of a campaign the character plays in grants a level */
export async function grantLevel(
  characterId: number,
  campaignId: number,
  reason: string,
) {
  await requireUser();
  return toResult(async () => {
    check(
      await (await db()).rpc("grant_level", {
        p_character_id: characterId,
        p_campaign_id: campaignId,
        p_reason: reason.trim() || undefined,
      }),
    );
    return null;
  });
}

/** The DM of the campaign a level came from undoes it */
export async function revokeLevel(grantId: number) {
  await requireUser();
  return toResult(async () => {
    check(await (await db()).rpc("revoke_level", { p_grant_id: grantId }));
    return null;
  });
}
