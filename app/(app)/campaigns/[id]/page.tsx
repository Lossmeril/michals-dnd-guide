"use client";

import { use } from "react";
import { toast } from "sonner";
import MeritCounter from "@/components/game/meritCounter";
import Card, { CardGrid } from "@/components/ui/card";
import CoverImage from "@/components/ui/coverImage";
import DeleteButton from "@/components/ui/deleteButton";
import EditableText from "@/components/ui/editableText";
import { Heading, SkeletonInlineText } from "@/components/ui/typography";
import { campaignCover } from "@/lib/campaignCover";
import { useLoad } from "@/lib/hooks/useLoad";
import { fetchCampaignDetails } from "@/lib/specialFecthers/playerCampaigns";
import type { Campaign } from "@/lib/types/campaign";
import {
  addCharacterToCampaign,
  deleteCampaign,
  removeCharacterFromCampaign,
  saveCampaign,
  setMeritPoints,
} from "./actions";
import { AddCharacterSelect } from "./addCharacterSelect";
import { CoverUpload } from "./coverUpload";
import { useDict } from "@/lib/i18n/client";

const CampaignDetailsPage = ({ params }: PageProps<"/campaigns/[id]">) => {
  const campaignId = Number(use(params).id);
  const t = useDict().campaigns;

  const {
    data: details,
    loading,
    setData: setDetails,
    reload,
  } = useLoad(() => fetchCampaignDetails(campaignId), [campaignId]);

  if (loading) {
    return (
      <>
        <div className="skeleton w-full h-64 mb-8 rounded-lg" />
        <SkeletonInlineText width="w-80" height="h-8" />
      </>
    );
  }

  if (!details) return <p>{t.notFound}</p>;

  const { campaign, userId, isDm, dmName, members, availableCharacters } =
    details;
  const cover = campaignCover(campaign);

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
    else reload();
  };

  const removeCharacter = async (characterId: number, name: string) => {
    if (!window.confirm(t.takeOut(name))) return;
    const { error } = await removeCharacterFromCampaign(campaign.id, characterId);
    if (error) toast.error(error);
    else {
      toast.success(t.left(name));
      reload();
    }
  };

  return (
    <>
      <CoverImage
        src={cover.src}
        alt={campaign.name || t.coverAlt}
        imageClassName={cover.className}
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
        placeholder={t.unnamed}
        readOnly={!isDm}
        className="mb-2"
      />
      <p className="text-xs text-dnd-ink/75 mb-8">{t.dmedBy} {dmName}</p>

      <EditableText
        value={campaign}
        field="description"
        onSave={save}
        placeholder={t.noDescription}
        readOnly={!isDm}
        multiline
        className="mb-20"
      />

      <Heading level={2}>{t.characters}</Heading>
      {isDm && (
        <AddCharacterSelect
          options={availableCharacters.map(({ character, playerName }) => ({
            id: character.id,
            label: `${character.name} (${playerName})`,
          }))}
          onAdd={addCharacter}
        />
      )}
      <CardGrid empty={t.noMembers} className="mb-20">
        {members.map(({ character, playerName, membership }) => (
          <Card
            key={character.id}
            title={character.name}
            imageUrl={character.image_url}
          >
            <p className="text-xs text-dnd-ink/75">
              {t.levelPlayedBy(character.level, playerName)}
            </p>
            <MeritCounter
              points={membership.merit_points}
              canAward={isDm}
              canSpend={isDm || character.owner === userId}
              onChange={(points) => setMeritPoints(membership.id, points)}
            />
            {(isDm || character.owner === userId) && (
              <button
                type="button"
                className="button-secondary text-xs px-3 py-1 mt-3"
                onClick={() => removeCharacter(character.id, character.name)}
              >
                {isDm ? t.removeFrom : t.leave}
              </button>
            )}
          </Card>
        ))}
      </CardGrid>

      {isDm && (
        <section className="border-t border-dnd-gold pt-6 mb-10">
          <Heading level={2}>{t.deleteHeading}</Heading>
          <p className="text-sm mb-4">
            {t.deleteText}
          </p>
          <DeleteButton
            what="campaign"
            name={campaign.name ?? ""}
            consequences={t.deleteConsequences}
            onDelete={() => deleteCampaign(campaign.id)}
            then="/campaigns"
          />
        </section>
      )}
    </>
  );
};

export default CampaignDetailsPage;
