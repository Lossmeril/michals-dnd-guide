"use client";

import { SkeletonCard } from "@/components/ui/card";
import { Heading } from "@/components/ui/typography";
import { fetchCharactersPlayerSees } from "@/lib/specialFecthers/playerCharacters";
import { Tables } from "@/lib/types/database.types";
import { useEffect, useState } from "react";

const CharactersPage = () => {
  const [loading, setLoading] = useState(true);

  const [ownedCharacters, setOwnedCharacters] = useState<
    Tables<"characters">[] | null
  >(null);
  const [otherCharacters, setOtherCharacters] = useState<
    Tables<"characters">[] | null
  >(null);

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        const data = await fetchCharactersPlayerSees();
        setOwnedCharacters(data.owned);
        setOtherCharacters(data.other);
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
      <Heading level={1}>Characters</Heading>

      <Heading level={2}>Your characters</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
        {loading ? (
          <SkeletonCard />
        ) : ownedCharacters && ownedCharacters.length > 0 ? (
          ownedCharacters.map((character) => (
            <p key={character.id}>{character.name}</p>
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
            <p key={character.id}>{character.name}</p>
          ))
        ) : (
          <p>No other characters found.</p>
        )}
      </div>
    </>
  );
};

export default CharactersPage;
