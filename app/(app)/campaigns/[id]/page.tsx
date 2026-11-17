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
import Link from "next/link";
import {
  addPlayerToCampaign,
  deleteCampaign,
  removePlayerFromCampaign,
  saveCampaign,
  setCampaignCharacter,
  setMeritPoints,
} from "./actions";
import { AddPlayerSelect } from "./addPlayerSelect";
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

  const { campaign, userId, isDm, dmName, members, availablePlayers, myCharacters } =
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

  const addPlayer = async (playerId: string) => {
    const { error } = await addPlayerToCampaign(campaign.id, playerId);
    if (error) toast.error(error);
    else reload();
  };

  const removePlayer = async (playerId: string, name: string) => {
    const self = playerId === userId;
    if (!window.confirm(self ? t.leaveConfirm : t.takeOut(name))) return;
    const { error } = await removePlayerFromCampaign(campaign.id, playerId);
    if (error) toast.error(error);
    else {
      toast.success(self ? t.left : t.removed(name));
      reload();
    }
  };

  const putForward = async (value: string) => {
    const { error } = await setCampaignCharacter(
      campaign.id,
      value ? Number(value) : null,
    );
    if (error) toast.error(error);
    else reload();
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

      <Heading level={2}>{t.players}</Heading>
      {isDm && (
        <AddPlayerSelect
          options={availablePlayers.map((p) => ({
            id: p.id,
            label: p.display_name || t.unknown,
          }))}
          onAdd={addPlayer}
        />
      )}
      <CardGrid empty={t.noMembers} className="mb-20">
        {members.map(({ membership, player, playerName, character }) => {
          const mine = membership.player === userId;
          return (
            <Card
              key={membership.id}
              title={character?.name ?? playerName}
              imageUrl={character?.image_url ?? player?.avatar_url}
            >
              <p className="text-xs text-dnd-ink/75">
                {character
                  ? t.levelPlayedBy(character.level, playerName)
                  : t.noCharacterYet(playerName)}
              </p>
              {mine &&
                (myCharacters.length > 0 ? (
                  <label className="block text-xs font-bold mt-3">
                    {t.yourCharacter}
                    <select
                      className="block mt-1 w-full font-normal"
                      value={membership.character_id ?? ""}
                      onChange={(e) => putForward(e.target.value)}
                    >
                      <option value="">{t.noCharacter}</option>
                      {myCharacters.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </label>
                ) : (
                  <p className="text-xs mt-3">
                    {t.noOwnCharacters}{" "}
                    <Link href="/characters/new" className="link">
                      {t.createOne}
                    </Link>
                  </p>
                ))}
              <MeritCounter
                points={membership.merit_points}
                canAward={isDm}
                canSpend={isDm || mine}
                onChange={(points) => setMeritPoints(membership.id, points)}
              />
              {(isDm || mine) && (
                <button
                  type="button"
                  className="button-secondary text-xs px-3 py-1 mt-3"
                  onClick={() => removePlayer(membership.player, playerName)}
                >
                  {mine ? t.leave : t.removeFrom}
                </button>
              )}
            </Card>
          );
        })}
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
