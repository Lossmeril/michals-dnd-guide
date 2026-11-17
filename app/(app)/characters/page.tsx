"use client";

import Link from "next/link";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { CardGrid } from "@/components/ui/card";
import { Heading } from "@/components/ui/typography";
import { fetchCharacterSummaries } from "@/lib/endpoints/character_build";
import { fetchLevelInfo } from "@/lib/endpoints/level_grants";
import { useLoad } from "@/lib/hooks/useLoad";
import { fetchCharactersPlayerSees } from "@/lib/specialFecthers/playerCharacters";
import type { Tables } from "@/lib/types/database.types";
import { CharacterCard } from "./characterCard";
import { useDict } from "@/lib/i18n/client";

const CharactersPage = () => {
  const t = useDict().lists;
  const { data, loading, reload } = useLoad(async () => {
    const { owned, other } = await fetchCharactersPlayerSees();
    const all = [...(owned ?? []), ...(other ?? [])];
    const ids = all.map((c) => c.id);
    const [summaries, levels] = await Promise.all([
      fetchCharacterSummaries(ids),
      fetchLevelInfo(ids),
    ]);
    return { owned: owned ?? [], other: other ?? [], summaries, levels };
  }, []);

  const card = (character: Tables<"characters">) => (
    <CharacterCard
      key={character.id}
      character={character}
      raceName={data?.summaries.raceNames[character.race_id ?? ""]}
      classes={data?.summaries.classesByCharacter[character.id] ?? []}
      levelInfo={data?.levels[character.id]}
      onLevelChange={reload}
    />
  );

  return (
    <>
      <Breadcrumbs items={[{ label: t.characters }]} />
      <Heading level={1}>{t.characters}</Heading>

      <Link href="/characters/new" className="button inline-block mb-10">
        {t.newCharacter}
      </Link>

      <Heading level={2}>{t.yourCharacters}</Heading>
      <CardGrid loading={loading} empty={t.noOwned} className="mb-20">
        {data?.owned.map(card)}
      </CardGrid>

      <Heading level={2}>{t.othersCharacters}</Heading>
      <CardGrid loading={loading} empty={t.noOthers} className="mb-20">
        {data?.other.map(card)}
      </CardGrid>
    </>
  );
};

export default CharactersPage;
