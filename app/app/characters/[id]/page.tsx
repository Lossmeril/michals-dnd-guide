"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase/browser";

import type { DB_Character } from "@/types/character";
import { AppPageLayout } from "@/components/layouts/base";
import {
  CharacterLayout,
  CharacterLayoutBox,
} from "@/components/layouts/character";
import Button from "@/components/ui/button";

type PageProps = {
  params: Promise<{ id: string }>;
};

const CharacterViewPage = ({ params }: PageProps) => {
  const router = useRouter();
  const { id: characterId } = use(params);

  const [character, setCharacter] = useState<DB_Character | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(null);

      const supabase = supabaseBrowser();
      const { data, error } = await supabase
        .from("characters")
        .select("*")
        .eq("id", characterId)
        .single<DB_Character>();

      if (error || !data) {
        setNotFound(true);
        setCharacter(null);
        setLoading(false);
        return;
      }

      setCharacter(data);
      setLoading(false);
    };

    load();
  }, [characterId]);

  if (loading) {
    return (
      <AppPageLayout title="Character">
        <p className="text-sm opacity-70">Loading…</p>
      </AppPageLayout>
    );
  }

  if (notFound || !character) {
    return (
      <AppPageLayout title="Character">
        <div className="text-red-900">
          <strong>Error:</strong> Character not found (or you don’t have
          access).
        </div>

        <div className="mt-4">
          <Button
            label="Back to Characters"
            mode="inverted"
            onClick={() => router.push("/app/characters")}
          />
        </div>
      </AppPageLayout>
    );
  }

  return (
    <AppPageLayout title={character.name}>
      <CharacterLayout>
        <CharacterLayoutBox colspan={2}>
          <div className="space-y-4">
            <div>
              <h2 className="font-serif text-xl text-dnd-red-dark">Name</h2>
              <p className="mt-1 text-dnd-ink">{character.name}</p>
            </div>

            <div>
              <h2 className="font-serif text-xl text-dnd-red-dark">
                Backstory
              </h2>
              <p className="mt-1 whitespace-pre-wrap text-dnd-ink/90">
                {character.backstory ? character.backstory : "—"}
              </p>
            </div>

            {error && (
              <div className="rounded-xl border-2 border-red-900/30 bg-white/60 p-3 text-sm text-red-900">
                {error}
              </div>
            )}
          </div>
        </CharacterLayoutBox>

        <CharacterLayoutBox colspan={1} className="p-0">
          <div className="overflow-hidden rounded-xl border-2 border-red-900/20 bg-white/50 w-full h-full">
            {character.image_url?.trim() ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={character.image_url}
                alt={`${character.name} portrait`}
                className="h-full w-full object-cover"
                onError={() => setError("Could not load image from that URL.")}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center text-sm text-dnd-ink/60">
                No image
              </div>
            )}
          </div>
        </CharacterLayoutBox>

        <CharacterLayoutBox
          colspan={6}
          className="flex items-center justify-between"
        >
          <Button
            label="Back"
            mode="inverted"
            onClick={() => router.push("/app/characters")}
          />

          <Button
            label="Edit"
            mode="default"
            onClick={() => router.push(`/app/characters/${characterId}/edit`)}
          />
        </CharacterLayoutBox>
      </CharacterLayout>
    </AppPageLayout>
  );
};

export default CharacterViewPage;
