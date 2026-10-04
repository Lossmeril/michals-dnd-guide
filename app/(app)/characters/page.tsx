"use client";

import { fetchCharacters } from "@/lib/endpoints/characters";
import { Tables } from "@/lib/types/database.types";
import { useEffect, useState } from "react";

const CharactersPage = () => {
  const [loading, setLoading] = useState(true);

  const [characters, setCharacters] = useState<Tables<"characters">[] | null>(
    null,
  );

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        const data = await fetchCharacters();
        setCharacters(data);
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        setLoading(false);
      }
    };

    loadCharacters();
  }, []);

  return (
    <main className="flex-1 flex flex-col items-center justify-center max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-10">Characters</h1>
      {loading ? (
        <p>Loading...</p>
      ) : !characters ? (
        <p>No characters found.</p>
      ) : (
        <ul>
          {characters.map((character) => (
            <li key={character.id}>{character.name}</li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default CharactersPage;
