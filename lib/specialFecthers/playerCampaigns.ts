import { requireUser } from "../auth";
import { fetchCampaign_Players } from "../endpoints/campaign_players";
import { fetchCampaign, fetchCampaigns } from "../endpoints/campaigns";
import { fetchCharacters } from "../endpoints/characters";
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

  // Filter campaigns where the player is a participant (not DM)
  const ownedCharacters = (await fetchCharacters()).filter(
    (character) => character.owner === playerId,
  );
  const campaignPlayers = await fetchCampaign_Players();

  const campaignsPlayerIsPartOf = campaigns.filter((campaign) =>
    campaignPlayers.some(
      (cp) =>
        cp.campaign_id === campaign.id &&
        ownedCharacters.some((character) => character.id === cp.character_id),
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
  const campaignPlayers = await fetchCampaign_Players();
  const characters = await fetchCharacters();
  const profiles = await fetchProfiles();

  console.log(profiles);
  console.log(profiles.map((p) => p.id));

  // Get character IDs for the given campaign
  const charactersInCampaign = campaignPlayers
    .filter((cp) => cp.campaign_id === campaignId)
    .map((cp) => cp.character_id);

  // Get player IDs for those characters
  const playerIdsInCampaign = charactersInCampaign.map((charId) => {
    const character = characters.find((char) => char.id === charId);
    return character ? character.owner : null;
  });

  // Get profiles for those player IDs
  const playersInCampaign = profiles.filter((profile) => {
    console.log("Checking profile:", profile.id);
    return playerIdsInCampaign.includes(profile.id);
  });

  console.log("Players in campaign:", playersInCampaign);

  return playersInCampaign.length > 0 ? playersInCampaign : null;
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

  const memberIds = campaignPlayers
    .filter((cp) => cp.campaign_id === campaignId)
    .map((cp) => cp.character_id);

  const playerName = (profileId: string) =>
    profiles.find((p) => p.id === profileId)?.display_name || "Unknown";

  return {
    campaign,
    userId: user.id,
    isDm: campaign.dm === user.id,
    dmName: campaign.dm ? playerName(campaign.dm) : null,
    members: characters
      .filter((c) => memberIds.includes(c.id))
      .map((character) => ({
        character,
        playerName: playerName(character.owner),
      })),
    // Characters the DM can still add to the campaign
    availableCharacters: characters
      .filter((c) => !memberIds.includes(c.id))
      .map((character) => ({
        character,
        playerName: playerName(character.owner),
      })),
  };
};

export type CampaignDetails = NonNullable<
  Awaited<ReturnType<typeof fetchCampaignDetails>>
>;
