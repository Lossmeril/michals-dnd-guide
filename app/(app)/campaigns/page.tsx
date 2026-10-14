"use client";

import Link from "next/link";
import { AvatarGroup, SkeletonAvatarGroup } from "@/components/ui/avatar";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Card, { CardGrid } from "@/components/ui/card";
import Eyebrow from "@/components/ui/eyebrow";
import { Heading, SkeletonInlineText } from "@/components/ui/typography";
import { canRunCampaigns, requireUser } from "@/lib/auth";
import { campaignCover } from "@/lib/campaignCover";
import { fetchProfile } from "@/lib/endpoints/profiles";
import { useLoad } from "@/lib/hooks/useLoad";
import {
  fetchCampaignsPlayerIsPartOf,
  fetchPlayersInCampaign,
} from "@/lib/specialFecthers/playerCampaigns";
import { Tables } from "@/lib/types/database.types";

const CampaignCard: React.FC<{
  campaign: Tables<"campaigns">;
}> = ({ campaign }) => {
  const { data, loading } = useLoad(async () => {
    const [players, dm] = await Promise.all([
      fetchPlayersInCampaign(campaign.id),
      fetchProfile(campaign.dm!),
    ]);
    return { players: players ?? [], dmName: dm?.display_name ?? null };
  }, [campaign.id, campaign.dm]);
  const cover = campaignCover(campaign);

  return (
    <Card
      title={campaign.name || "Unnamed Campaign"}
      link={`/campaigns/${campaign.id}`}
      imageUrl={cover.src}
      imageClassName={cover.className}
      eyebrows={
        <>
          <Eyebrow text="Novinka" color="green" />
          <Eyebrow text="New" color="blue" />
        </>
      }
    >
      <p className="text-xs text-dnd-ink/75 mb-4">
        DMed by {data?.dmName || <SkeletonInlineText />}
      </p>

      {loading ? (
        <SkeletonAvatarGroup count={3} />
      ) : (
        data &&
        data.players.length > 0 && (
          <AvatarGroup
            avatars={data.players.map((player) => ({
              name: player.display_name || "Unknown",
              imgSrc: player.avatar_url || undefined,
            }))}
          />
        )
      )}
    </Card>
  );
};

const CampaignsPage = () => {
  const { data, loading } = useLoad(async () => {
    const user = await requireUser();
    const [player, canCreate] = await Promise.all([
      fetchProfile(user.id),
      canRunCampaigns(),
    ]);
    const campaigns = await fetchCampaignsPlayerIsPartOf(player?.id || "");
    return {
      canCreate,
      dm: campaigns.campaignsPlayerDMs ?? [],
      player: campaigns.campaignsPlayerIsPartOf ?? [],
    };
  }, []);

  return (
    <>
      <Breadcrumbs items={[{ label: "Campaigns" }]} />
      <Heading level={1}>Campaigns</Heading>
      {data?.canCreate && (
        <Link href="/campaigns/new" className="button inline-block mb-10">
          New campaign
        </Link>
      )}

      <Heading level={2}>
        Campaigns you are <span style={{ fontSize: "larger" }}>DM</span>ing
      </Heading>
      <CardGrid loading={loading} empty="No campaigns found." className="mb-20">
        {data?.dm.map((campaign) => (
          <CampaignCard key={campaign.id} campaign={campaign} />
        ))}
      </CardGrid>

      <Heading level={2}>Campaigns you are a player in</Heading>
      <CardGrid loading={loading} empty="No campaigns found." className="mb-20">
        {data?.player.map((campaign) => (
          <CampaignCard key={campaign.id} campaign={campaign} />
        ))}
      </CardGrid>
    </>
  );
};

export default CampaignsPage;
