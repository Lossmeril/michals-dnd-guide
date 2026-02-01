"use client";

import { useEffect, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/browser";
import type { DB_Character } from "@/types/character";

import { AppPageLayout } from "@/components/layouts/base";

import Button from "@/components/ui/button";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";

// REUSABLE STANDARDIZED CLASS TABLE
const CharactersTable = ({
  characters,
  title,
}: {
  characters: DB_Character[];
  title?: string;
}) => {
  return (
    <Table title={title}>
      <TableHead
        titles={[
          { title: "Image", width: "5%" },
          { title: "Name", width: "10%" },
          { title: "Edit", width: "10%" },
        ]}
      ></TableHead>

      <TableBody>
        {characters.map((c) => (
          <TableRow key={c.id}>
            <TableCell>
              <div className="overflow-hidden bg-white/50 w-16 h-16">
                {c.image_url?.trim() ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={c.image_url}
                    alt={c.name}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-sm text-[#2b1d0e]/50">
                    No Image
                  </div>
                )}
              </div>
            </TableCell>

            <TableCell className="align-center">
              <div className="font-serif text-dnd-ink">{c.name}</div>
            </TableCell>

            <TableCell className="align-center">
              <Button
                href={`/app/characters/${c.id}/edit`}
                label="Edit"
                mode="inverted"
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

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
        {!loading && !error && characters.length > 0 && (
          <CharactersTable characters={characters} />
        )}
      </section>
    </AppPageLayout>
  );
};

export default CharactersPage;
