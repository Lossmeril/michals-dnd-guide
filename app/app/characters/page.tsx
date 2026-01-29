"use client";

import { useEffect, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/browser";
import type { DB_Character } from "@/types/character";

import { AppPageLayout } from "@/components/layouts/base";
import Link from "next/link";

const CharactersPage = () => {
  const [characters, setCharacters] = useState<DB_Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCharacters = async () => {
      const supabase = supabaseBrowser();

      const { data, error } = await supabase
        .from("characters")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        setError(error.message);
      } else {
        setCharacters(data ?? []);
      }

      setLoading(false);
    };

    loadCharacters();
  }, []);

  return (
    <AppPageLayout title="Your Characters">
      {loading && <p className="text-sm opacity-70">Loading characters…</p>}

      {error && (
        <div className="mt-4 rounded-xl border-2 border-red-900/30 bg-white/60 p-3 text-sm text-red-900">
          {error}
        </div>
      )}

      {!loading && !error && characters.length === 0 && (
        <p className="mt-4 text-sm opacity-70">
          You don’t have any characters yet.
        </p>
      )}

      <section>
        <table className="w-full">
          <thead>
            <tr className="border-b-2 border-red-900 p-2 text-left">
              <th className="w-20">Image</th>
              <th>Name</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {characters.map((character) => (
              <tr
                key={character.id}
                className="w-full even:bg-[#F5EBD1] odd:bg-transparent p-2"
              >
                <td className="">
                  <div className="overflow-hidden bg-white/50 w-16 h-16">
                    {character.image_url?.trim() ? (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={character.image_url}
                        alt={character.name}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="flex items-center justify-center w-full h-full text-sm text-[#2b1d0e]/50">
                        No Image
                      </div>
                    )}
                  </div>
                </td>
                <td>{character.name}</td>
                <td>
                  <Link href={`/characters/${character.id}`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </AppPageLayout>
  );
};

export default CharactersPage;
