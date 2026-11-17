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
import { useDict } from "@/lib/i18n/client";

const CampaignCard: React.FC<{
  campaign: Tables<"campaigns">;
}> = ({ campaign }) => {
  const t = useDict().campaigns;
  const { data, loading } = useLoad(async () => {
    const [players, dm] = await Promise.all([
      fetchPlayersInCampaign(campaign.id),
      fetchProfile(campaign.dm!),
    ]);
    return { players: players ?? [], dm };
  }, [campaign.id, campaign.dm]);
  const cover = campaignCover(campaign);

  return (
    <Card
      title={campaign.name || t.unnamed}
      link={`/campaigns/${campaign.id}`}
      imageUrl={cover.src}
      imageClassName={cover.className}
      eyebrows={
<Eyebrow text={t.newCrumb} color="green" />
      }
    >
      <p className="text-xs text-dnd-ink/75 mb-4">
        {t.dmedBy} {data?.dm?.display_name || <SkeletonInlineText />}
      </p>

      {loading ? (
        <SkeletonAvatarGroup count={3} />
      ) : (
        data && (
          <AvatarGroup
            avatars={[
              ...(data.dm
                ? [
                    {
                      name: data.dm.display_name || t.unknown,
                      imgSrc: data.dm.avatar_url || undefined,
                      highlight: true,
                    },
                  ]
                : []),
              ...data.players
                .filter((player) => player.id !== data.dm?.id)
                .map((player) => ({
                  name: player.display_name || t.unknown,
                  imgSrc: player.avatar_url || undefined,
                })),
            ]}
          />
        )
      )}
    </Card>
  );
};

const CampaignsPage = () => {
  const t = useDict().campaigns;
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
      <Breadcrumbs items={[{ label: t.campaigns }]} />
      <Heading level={1}>{t.campaigns}</Heading>
      {data?.canCreate && (
        <Link href="/campaigns/new" className="button inline-block mb-10">
          {t.newCampaign}
        </Link>
      )}

      <Heading level={2}>{t.youDm}</Heading>
      <CardGrid loading={loading} empty={t.none} className="mb-20">
        {data?.dm.map((campaign) => (
          <CampaignCard key={campaign.id} campaign={campaign} />
        ))}
      </CardGrid>

      <Heading level={2}>{t.youPlay}</Heading>
      <CardGrid loading={loading} empty={t.none} className="mb-20">
        {data?.player.map((campaign) => (
          <CampaignCard key={campaign.id} campaign={campaign} />
        ))}
      </CardGrid>
    </>
  );
};

export default CampaignsPage;
