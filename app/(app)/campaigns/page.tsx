"use client";

import { AvatarGroup, SkeletonAvatarGroup } from "@/components/ui/avatar";
import Card, { SkeletonCard } from "@/components/ui/card";
import { Heading, SkeletonInlineText } from "@/components/ui/typography";
import { IMG_DEFAULTS } from "@/data/constants";
import { requireUser } from "@/lib/auth";
import { fetchProfile } from "@/lib/endpoints/profiles";
import {
  fetchCampaignsPlayerIsPartOf,
  fetchPlayersInCampaign,
} from "@/lib/specialFecthers/playerCampaigns";
import { Tables } from "@/lib/types/database.types";
import { useEffect, useState } from "react";

const CampaignCard: React.FC<{
  campaign: Tables<"campaigns">;
}> = ({ campaign }) => {
  const [avatarsLoading, setAvatarsLoading] = useState(true);
  const [players, setPlayers] = useState<Tables<"profiles">[] | null>(null);
  const [dm, setDm] = useState<string | null>(null);

  useEffect(() => {
    const loadPlayers = async () => {
      try {
        const data = await fetchPlayersInCampaign(campaign.id);
        const dm = await fetchProfile(campaign.dm!);
        setPlayers(data ? data : null);
        setDm(dm ? dm.display_name : null);
      } catch (error) {
        console.error("Error fetching players:", error);
      } finally {
        setAvatarsLoading(false);
      }
    };

    loadPlayers();
  }, [campaign.id, campaign.dm]);

  return (
    <Card
      key={campaign.id}
      title={campaign.name || "Unnamed Campaign"}
      imageUrl={campaign.image_url?.trim() || IMG_DEFAULTS.campaign_image}
      imageClassName={!campaign.image_url?.trim() ? "grayscale opacity-50" : ""}
    >
      <p className="text-xs text-dnd-ink/75 mb-4">
        DMed by {dm || <SkeletonInlineText />}
      </p>

      {avatarsLoading ? (
        <SkeletonAvatarGroup count={3} />
      ) : players && players.length > 0 ? (
        <AvatarGroup
          avatars={players.map((player) => ({
            name: player.display_name || "Unknown",
            imgSrc: player.avatar_url || undefined,
          }))}
        />
      ) : (
        <></>
      )}
    </Card>
  );
};

const CampaignsPage = () => {
  const [loading, setLoading] = useState(true);

  const [DMcampaigns, setDMcampaigns] = useState<Tables<"campaigns">[] | null>(
    null,
  );
  const [playerCampaigns, setPlayerCampaigns] = useState<
    Tables<"campaigns">[] | null
  >(null);

  useEffect(() => {
    const loadCampaigns = async () => {
      try {
        // Fetch the user and their profile
        const user = await requireUser();
        const player = await fetchProfile(user.id);

        const data = await fetchCampaignsPlayerIsPartOf(player?.id || "");

        // Set the campaigns where the user is a DM and where they are a player
        setDMcampaigns(
          data.campaignsPlayerDMs ? data.campaignsPlayerDMs : null,
        );
        setPlayerCampaigns(
          data.campaignsPlayerIsPartOf ? data.campaignsPlayerIsPartOf : null,
        );
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCampaigns();
  }, []);

  return (
    <>
      <Heading level={1}>Campaigns</Heading>

      <Heading level={2}>
        Campaigns you are <span style={{ fontSize: "larger" }}>DM</span>ing
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
        {loading ? (
          <SkeletonCard />
        ) : DMcampaigns && DMcampaigns.length > 0 ? (
          DMcampaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))
        ) : (
          <p>No campaigns found.</p>
        )}
      </div>

      <Heading level={2}>Campaigns you are a player in</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
        {loading ? (
          <SkeletonCard />
        ) : playerCampaigns && playerCampaigns.length > 0 ? (
          playerCampaigns.map((campaign) => (
            <CampaignCard key={campaign.id} campaign={campaign} />
          ))
        ) : (
          <p>No campaigns found.</p>
        )}
      </div>
    </>
  );
};

export default CampaignsPage;
