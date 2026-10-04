import { fetchCampaign_Players } from "../endpoints/campaign_players";
import { fetchCampaigns } from "../endpoints/campaigns";
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
