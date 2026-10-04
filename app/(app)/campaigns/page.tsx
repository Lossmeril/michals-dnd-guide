"use client";

import { requireUser } from "@/lib/auth";
import { fetchProfile } from "@/lib/endpoints/profiles";
import { fetchCampaignsPlayerIsPartOf } from "@/lib/specialFecthers.ts/playerCampaigns";
import { Tables } from "@/lib/types/database.types";
import { useEffect, useState } from "react";

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
        const user = await requireUser();
        const player = await fetchProfile(user.id);

        const data = await fetchCampaignsPlayerIsPartOf(player?.id || "");
        setDMcampaigns(
          data.campaignsPlayerDMs ? data.campaignsPlayerDMs : null,
        );
        setPlayerCampaigns(
          data.campaignsPlayerIsPartOf ? data.campaignsPlayerIsPartOf : null,
        );

        console.log("DM campaigns:", data.campaignsPlayerDMs);
        console.log("Player campaigns:", data.campaignsPlayerIsPartOf);
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCampaigns();
  }, []);

  return (
    <main className="flex-1 flex flex-col items-center justify-center max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-10">Campaigns</h1>
      {loading ? (
        <p>Loading campaigns...</p>
      ) : DMcampaigns ? (
        <>
          <h2>Campaigns you are DM of</h2>
          <ul>
            {DMcampaigns.map((campaign) => (
              <li key={campaign.id}>{campaign.name}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>No campaigns found.</p>
      )}
      {playerCampaigns && (
        <>
          <h2>Campaigns you are a player in</h2>
          <ul>
            {playerCampaigns.map((campaign) => (
              <li key={campaign.id}>{campaign.name}</li>
            ))}
          </ul>
        </>
      )}
      {!loading && !DMcampaigns && !playerCampaigns && (
        <p>You are not part of any campaigns.</p>
      )}
    </main>
  );
};

export default CampaignsPage;
