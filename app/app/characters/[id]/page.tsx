"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase/browser";

import type {
  Character,
  CharacterUpdate,
  DB_Character,
} from "@/types/character";
import { TextArea, TextInput } from "@/components/ui/inputs";
import { AppPageLayout } from "@/components/layouts/base";
import {
  CharacterLayout,
  CharacterLayoutBox,
} from "@/components/layouts/character";
import Link from "next/link";
import Button from "@/components/ui/button";

type PageProps = {
  params: Promise<{ id: string }>;
};

const CharacterEditPage = ({ params }: PageProps) => {
  const router = useRouter();
  const { id: characterId } = use(params);

  const [character, setCharacter] = useState<Character>({
    name: "",
    backstory: null,
    image_url: null,
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notFound, setNotFound] = useState(false);

  // Load character
  useEffect(() => {
    const load = async () => {
      setError(null);
      setLoading(true);

      const supabase = supabaseBrowser();

      const { data, error } = await supabase
        .from("characters")
        .select("*")
        .eq("id", characterId)
        .single<DB_Character>();

      if (error) {
        // With RLS, "not found" and "not allowed" can look the same.
        // We'll treat it as notFound for UI simplicity.
        setNotFound(true);
        setLoading(false);
        return;
      }

      setCharacter({
        name: data.name,
        backstory: data.backstory,
        image_url: data.image_url,
      });

      setLoading(false);
    };

    load();
  }, [characterId]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!character.name.trim()) {
      setError("Name is required.");
      return;
    }

    setSaving(true);

    const supabase = supabaseBrowser();

    const payload: CharacterUpdate = {
      name: character.name.trim(),
      backstory: character.backstory,
      image_url: character.image_url,
      updated_at: new Date().toISOString(),
    };

    const { error: updateError } = await supabase
      .from("characters")
      .update(payload)
      .eq("id", characterId);

    setSaving(false);

    if (updateError) {
      setError(updateError.message);
      return;
    }

    router.refresh();
  };

  if (loading) {
    return (
      <AppPageLayout title="Character">
        <p className="text-sm opacity-70">Loading…</p>
      </AppPageLayout>
    );
  }

  if (notFound) {
    return (
      <AppPageLayout title="Character">
        <div className="text-red-900">
          <strong>Error:</strong> Character not found (or you don’t have
          access).
        </div>

        <Link
          href="/app/characters"
          className="mt-4 rounded-xl border-2 border-red-900/30 bg-transparent px-4 py-2 font-serif text-sm text-red-900 transition hover:bg-red-900/5"
        >
          Back to Characters
        </Link>
      </AppPageLayout>
    );
  }

  return (
    <AppPageLayout title={`Edit: ${character.name || "Character"}`}>
      <form onSubmit={handleSave} className="mt-2 space-y-5">
        <CharacterLayout>
          <CharacterLayoutBox colspan={2}>
            <TextInput
              label="Name"
              value={character.name}
              onChange={(e) =>
                setCharacter((c) => ({ ...c, name: e.target.value }))
              }
              required
              error={null}
            />

            <TextArea
              label="Backstory"
              value={character.backstory ?? ""}
              onChange={(e) =>
                setCharacter((c) => ({
                  ...c,
                  backstory: e.target.value.trim() ? e.target.value : null,
                }))
              }
              error={null}
            />

            <TextInput
              label="Image URL"
              value={character.image_url ?? ""}
              onChange={(e) =>
                setCharacter((c) => ({
                  ...c,
                  image_url: e.target.value.trim() ? e.target.value : null,
                }))
              }
              placeholder="https://…"
              inputMode="url"
              error={null}
            />
          </CharacterLayoutBox>

          <CharacterLayoutBox colspan={1} className="p-0">
            <div className="overflow-hidden rounded-xl border-2 border-red-900/20 bg-white/50 w-full h-full">
              {character.image_url?.trim() ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={character.image_url}
                  alt="Character preview"
                  className="h-full w-full object-cover"
                  onError={() =>
                    setError("Could not load image from that URL.")
                  }
                />
              ) : null}
            </div>
          </CharacterLayoutBox>

          <CharacterLayoutBox
            colspan={6}
            className="flex items-center justify-between"
          >
            {error && (
              <div className="rounded-xl border-2 border-red-900/30 bg-white/60 p-3 text-sm text-red-900">
                {error}
              </div>
            )}

            <div className="flex items-center gap-3">
              <Button
                label={saving ? "Saving…" : "Save"}
                type="submit"
                disabled={saving}
                mode="default"
              />

              <Button
                label="Back"
                mode="inverted"
                onClick={() => router.push("/app/characters")}
              />
            </div>
          </CharacterLayoutBox>
        </CharacterLayout>
      </form>
    </AppPageLayout>
  );
};

export default CharacterEditPage;
