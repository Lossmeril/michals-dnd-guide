"use client";

import Link from "next/link";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { CardGrid } from "@/components/ui/card";
import { Heading } from "@/components/ui/typography";
import { fetchCharacterSummaries } from "@/lib/endpoints/character_build";
import { useLoad } from "@/lib/hooks/useLoad";
import { fetchCharactersPlayerSees } from "@/lib/specialFecthers/playerCharacters";
import type { Tables } from "@/lib/types/database.types";
import { CharacterCard } from "./characterCard";

const CharactersPage = () => {
  const { data, loading } = useLoad(async () => {
    const { owned, other } = await fetchCharactersPlayerSees();
    const all = [...(owned ?? []), ...(other ?? [])];
    const summaries = await fetchCharacterSummaries(all.map((c) => c.id));
    return { owned: owned ?? [], other: other ?? [], summaries };
  }, []);

  const card = (character: Tables<"characters">) => (
    <CharacterCard
      key={character.id}
      character={character}
      raceName={data?.summaries.raceNames[character.race_id ?? ""]}
      classes={data?.summaries.classesByCharacter[character.id] ?? []}
    />
  );

  return (
    <>
      <Breadcrumbs items={[{ label: "Characters" }]} />
      <Heading level={1}>Characters</Heading>

      <Link href="/characters/new" className="button inline-block mb-10">
        New character
      </Link>

      <Heading level={2}>Your characters</Heading>
      <CardGrid loading={loading} empty="No owned characters found." className="mb-20">
        {data?.owned.map(card)}
      </CardGrid>

      <Heading level={2}>Other people&apos;s characters</Heading>
      <CardGrid loading={loading} empty="No other characters found." className="mb-20">
        {data?.other.map(card)}
      </CardGrid>
    </>
  );
};

export default CharactersPage;
