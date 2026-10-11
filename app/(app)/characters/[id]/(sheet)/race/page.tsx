"use client";

import { use } from "react";
import { SkeletonCard } from "@/components/ui/card";
import CoverImage from "@/components/ui/coverImage";
import PerkCard from "@/components/ui/perkCard";
import { Heading } from "@/components/ui/typography";
import { findPerk } from "@/lib/rules/character";
import { useCharacterSheet } from "../useCharacterSheet";

const CharacterRacePage = ({ params }: PageProps<"/characters/[id]/race">) => {
  const { loading, sheet } = useCharacterSheet(Number(use(params).id));

  if (loading) return <SkeletonCard />;
  if (!sheet) return <p>Character not found.</p>;

  const { rb, build } = sheet;
  const race = rb.races.find((r) => r.id === build.raceId);
  const racial = build.perks.find((p) => p.classId === null);
  const perk = racial && findPerk(rb, racial.perkId);

  if (!race) return <p>No race picked yet.</p>;

  return (
    <>
      {race.image_url && <CoverImage src={race.image_url} alt={race.name} />}
      <Heading level={1}>{race.plural ?? race.name}</Heading>
      {race.blurb && <p className="mb-4">{race.blurb}</p>}
      {race.description && (
        <p className="whitespace-pre-line mb-10">{race.description}</p>
      )}

      <Heading level={2}>Racial perk</Heading>
      {perk ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <PerkCard perk={perk} tags={["racial"]} />
        </div>
      ) : (
        <p>No racial perk picked yet.</p>
      )}
    </>
  );
};

export default CharacterRacePage;
