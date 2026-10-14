"use client";

import { use, useEffect, useState } from "react";
import { toast } from "sonner";
import Card from "@/components/ui/card";
import CoverImage from "@/components/ui/coverImage";
import EditableText from "@/components/ui/editableText";
import { Heading, SkeletonInlineText } from "@/components/ui/typography";
import { IMG_DEFAULTS } from "@/data/constants";
import {
  CampaignDetails,
  fetchCampaignDetails,
} from "@/lib/specialFecthers/playerCampaigns";
import type { Campaign } from "@/lib/types/campaign";
import {
  addCharacterToCampaign,
  removeCharacterFromCampaign,
  saveCampaign,
} from "./actions";
import { AddCharacterSelect } from "./addCharacterSelect";
import { CoverUpload } from "./coverUpload";

const CampaignDetailsPage = ({ params }: PageProps<"/campaigns/[id]">) => {
  const campaignId = Number(use(params).id);

  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState<CampaignDetails | null>(null);
  // Bumped to refetch after the character list changes
  const [version, setVersion] = useState(0);

  useEffect(() => {
    const loadDetails = async () => {
      try {
        setDetails(await fetchCampaignDetails(campaignId));
      } catch (error) {
        console.error("Error fetching campaign:", error);
      } finally {
        setLoading(false);
      }
    };

    loadDetails();
  }, [campaignId, version]);

  if (loading) {
    return (
      <>
        <div className="skeleton w-full h-64 mb-8 rounded-lg" />
        <SkeletonInlineText width="w-80" height="h-8" />
      </>
    );
  }

  if (!details) return <p>Campaign not found.</p>;

  const { campaign, userId, isDm, dmName, members, availableCharacters } =
    details;
  const hasCover = !!campaign.image_url?.trim();

  const setCampaign = (updated: Campaign) =>
    setDetails({ ...details, campaign: updated });

  const save = async (patch: Partial<Campaign>) => {
    const { data, error } = await saveCampaign(campaign.id, patch);
    if (error !== null) {
      toast.error(error);
      throw new Error(error); // keeps EditableText in edit mode
    }
    setCampaign(data);
  };

  const addCharacter = async (characterId: number) => {
    const { error } = await addCharacterToCampaign(campaign.id, characterId);
    if (error) toast.error(error);
    else setVersion((v) => v + 1);
  };

  const removeCharacter = async (characterId: number, name: string) => {
    if (!window.confirm(`Take ${name} out of this campaign?`)) return;
    const { error } = await removeCharacterFromCampaign(campaign.id, characterId);
    if (error) toast.error(error);
    else {
      toast.success(`${name} left the campaign.`);
      setVersion((v) => v + 1);
    }
  };

  return (
    <>
      <CoverImage
        src={hasCover ? campaign.image_url! : IMG_DEFAULTS.campaign_image}
        alt={campaign.name || "Campaign cover"}
        imageClassName={hasCover ? "" : "grayscale opacity-50"}
      >
        {isDm && (
          <CoverUpload campaignId={campaign.id} onUploaded={setCampaign} />
        )}
      </CoverImage>

      <EditableText
        value={campaign}
        field="name"
        onSave={save}
        headingLevel={1}
        placeholder="Unnamed Campaign"
        readOnly={!isDm}
        className="mb-2"
      />
      <p className="text-xs text-dnd-ink/75 mb-8">DMed by {dmName}</p>

      <EditableText
        value={campaign}
        field="description"
        onSave={save}
        placeholder="No description yet."
        readOnly={!isDm}
        multiline
        className="mb-20"
      />

      <Heading level={2}>Characters</Heading>
      {isDm && (
        <AddCharacterSelect
          options={availableCharacters.map(({ character, playerName }) => ({
            id: character.id,
            label: `${character.name} (${playerName})`,
          }))}
          onAdd={addCharacter}
        />
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
        {members.length > 0 ? (
          members.map(({ character, playerName }) => (
            <Card
              key={character.id}
              title={character.name}
              imageUrl={character.image_url || "empty"}
            >
              <p className="text-xs text-dnd-ink/75">
                Level {character.level} · played by {playerName}
              </p>
              {(isDm || character.owner === userId) && (
                <button
                  type="button"
                  className="button-secondary text-xs px-3 py-1 mt-3"
                  onClick={() => removeCharacter(character.id, character.name)}
                >
                  {isDm ? "Remove from campaign" : "Leave campaign"}
                </button>
              )}
            </Card>
          ))
        ) : (
          <p>No characters in this campaign yet.</p>
        )}
      </div>
    </>
  );
};

export default CampaignDetailsPage;
