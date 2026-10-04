import { fetchCampaign_Players } from "../endpoints/campaign_players";
import { fetchCampaigns } from "../endpoints/campaigns";
import { fetchCharacters } from "../endpoints/characters";

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

  console.log("Campaigns player is part of:", campaignsPlayerIsPartOf);

  return {
    campaignsPlayerIsPartOf: campaignsPlayerIsPartOf,
    campaignsPlayerDMs: campaignsPlayerDMs,
  };
};
