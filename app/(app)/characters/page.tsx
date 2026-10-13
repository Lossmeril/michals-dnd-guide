"use client";

import { SkeletonCard } from "@/components/ui/card";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Heading } from "@/components/ui/typography";
import { fetchCharacterSummaries } from "@/lib/endpoints/character_build";
import { fetchCharactersPlayerSees } from "@/lib/specialFecthers/playerCharacters";
import { Tables } from "@/lib/types/database.types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CharacterCard } from "./characterCard";

const CharactersPage = () => {
  const [loading, setLoading] = useState(true);

  const [ownedCharacters, setOwnedCharacters] = useState<
    Tables<"characters">[] | null
  >(null);
  const [otherCharacters, setOtherCharacters] = useState<
    Tables<"characters">[] | null
  >(null);
  const [summaries, setSummaries] = useState<Awaited<
    ReturnType<typeof fetchCharacterSummaries>
  > | null>(null);

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        const data = await fetchCharactersPlayerSees();
        setOwnedCharacters(data.owned);
        setOtherCharacters(data.other);
        const ids = [...(data.owned ?? []), ...(data.other ?? [])].map((c) => c.id);
        setSummaries(await fetchCharacterSummaries(ids));
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCharacters();
  }, []);

  return (
    <>
      <Breadcrumbs items={[{ label: "Characters" }]} />
      <Heading level={1}>Characters</Heading>

      <Link href="/characters/new" className="button inline-block mb-10">
        New character
      </Link>

      <Heading level={2}>Your characters</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
        {loading ? (
          <SkeletonCard />
        ) : ownedCharacters && ownedCharacters.length > 0 ? (
          ownedCharacters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              raceName={summaries?.raceNames[character.race_id ?? ""]}
              classes={summaries?.classesByCharacter[character.id] ?? []}
            />
          ))
        ) : (
          <p>No owned characters found.</p>
        )}
      </div>

      <Heading level={2}>Other people&apos;s characters</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
        {loading ? (
          <SkeletonCard />
        ) : otherCharacters && otherCharacters.length > 0 ? (
          otherCharacters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              raceName={summaries?.raceNames[character.race_id ?? ""]}
              classes={summaries?.classesByCharacter[character.id] ?? []}
            />
          ))
        ) : (
          <p>No other characters found.</p>
        )}
      </div>
    </>
  );
};

export default CharactersPage;
