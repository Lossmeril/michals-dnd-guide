import { requireUser } from "../auth";
import { fetchCampaign_Players } from "../endpoints/campaign_players";
import { fetchCampaign, fetchCampaigns } from "../endpoints/campaigns";
import { fetchCharacters } from "../endpoints/characters";
import { fetchLevelInfo } from "../endpoints/level_grants";
import { fetchProfiles } from "../endpoints/profiles";

export const fetchCampaignsPlayerIsPartOf = async (
  playerId: string,
): Promise<{
  campaignsPlayerIsPartOf:
    | import("../types/database.types").Tables<"campaigns">[]
    | null;
  campaignsPlayerDMs:
    | import("../types/database.types").Tables<"campaigns">[]
    | null;
}> => {
  const campaigns = await fetchCampaigns();

  // If there are no campaigns, return empty arrays
  if (!campaigns) {
    return {
      campaignsPlayerIsPartOf: [],
      campaignsPlayerDMs: [],
    };
  }

  // Filter campaigns where the player is the DM
  const campaignsPlayerDMs = campaigns.filter(
    (campaign) => campaign.dm === playerId,
  );

  // Campaigns the player was added to, with or without a character
  const campaignPlayers = await fetchCampaign_Players();
  const campaignsPlayerIsPartOf = campaigns.filter((campaign) =>
    campaignPlayers.some(
      (cp) => cp.campaign_id === campaign.id && cp.player === playerId,
    ),
  );

  return {
    campaignsPlayerIsPartOf: campaignsPlayerIsPartOf,
    campaignsPlayerDMs: campaignsPlayerDMs,
  };
};

export const fetchPlayersInCampaign = async (
  campaignId: number,
): Promise<import("../types/database.types").Tables<"profiles">[] | null> => {
  const [campaignPlayers, profiles] = await Promise.all([
    fetchCampaign_Players(),
    fetchProfiles(),
  ]);
  const playerIds = campaignPlayers
    .filter((cp) => cp.campaign_id === campaignId)
    .map((cp) => cp.player);
  const players = profiles.filter((profile) => playerIds.includes(profile.id));
  return players.length > 0 ? players : null;
};

export const fetchCampaignDetails = async (campaignId: number) => {
  const [user, campaign, campaignPlayers, characters, profiles] =
    await Promise.all([
      requireUser(),
      fetchCampaign(campaignId),
      fetchCampaign_Players(),
      fetchCharacters(),
      fetchProfiles(),
    ]);

  if (!campaign) return null;

  const memberships = campaignPlayers.filter(
    (cp) => cp.campaign_id === campaignId,
  );
  const memberIds = memberships.map((cp) => cp.player);

  const playerName = (profileId: string) =>
    profiles.find((p) => p.id === profileId)?.display_name || "Unknown";

  // Level history and grants, for the DM's "Grant a level"
  const levels = await fetchLevelInfo(
    memberships.flatMap((m) => (m.character_id ? [m.character_id] : [])),
  );

  return {
    campaign,
    levels,
    userId: user.id,
    isDm: campaign.dm === user.id,
    dmName: campaign.dm ? playerName(campaign.dm) : null,
    // Players added by the DM, each with the character they put forward (if any)
    members: memberships.map((membership) => ({
      membership,
      player: profiles.find((p) => p.id === membership.player) ?? null,
      playerName: playerName(membership.player),
      character:
        characters.find((c) => c.id === membership.character_id) ?? null,
    })),
    // People the DM can still add: everyone but the DM and those already in
    availablePlayers: profiles.filter(
      (p) => p.id !== campaign.dm && !memberIds.includes(p.id),
    ),
    // The user's own characters, to put one forward
    myCharacters: characters.filter((c) => c.owner === user.id),
  };
};

export type CampaignDetails = NonNullable<
  Awaited<ReturnType<typeof fetchCampaignDetails>>
>;
