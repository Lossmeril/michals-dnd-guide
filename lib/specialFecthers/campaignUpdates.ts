import { requireUser } from "../auth";
import { fetchCampaign } from "../endpoints/campaigns";
import { fetchCampaign_UpdatesInCampaign } from "../endpoints/campaign_updates";
import { fetchProfiles } from "../endpoints/profiles";

export const fetchCampaignUpdates = async (campaignId: number) => {
  const [user, campaign, updates, profiles] = await Promise.all([
    requireUser(),
    fetchCampaign(campaignId),
    fetchCampaign_UpdatesInCampaign(campaignId),
    fetchProfiles(),
  ]);

  if (!campaign) return null;

  return {
    userId: user.id,
    isDm: campaign.dm === user.id,
    dmId: campaign.dm,
    posts: updates.map((update) => ({
      update,
      author: profiles.find((p) => p.id === update.author) ?? null,
    })),
  };
};

export type CampaignUpdates = NonNullable<
  Awaited<ReturnType<typeof fetchCampaignUpdates>>
>;
