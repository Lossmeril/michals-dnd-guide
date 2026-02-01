"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase/browser";

import type {
  Character,
  CharacterUpdate,
  DB_Character,
} from "@/types/character";
import { AppPageLayout } from "@/components/layouts/base";
import CharacterEditor from "@/components/layouts/characterCreator";

type PageProps = {
  params: Promise<{ id: string }>;
};

const CharacterEditPage = ({ params }: PageProps) => {
  const router = useRouter();
  const { id: characterId } = use(params);

  const [initialCharacter, setInitialCharacter] = useState<Character>({
    name: "",
    backstory: null,
    image_url: null,
  });

  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);

      const supabase = supabaseBrowser();

      const { data, error } = await supabase
        .from("characters")
        .select("*")
        .eq("id", characterId)
        .single<DB_Character>();

      if (error || !data) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      setInitialCharacter({
        name: data.name,
        backstory: data.backstory,
        image_url: data.image_url,
      });

      setLoading(false);
    };

    load();
  }, [characterId]);

  const save = async (character: Character) => {
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

    if (updateError) {
      return;
    }

    // after save, go back to view
    router.push(`/app/characters/${characterId}`);
    router.refresh();
  };

  if (loading) {
    return (
      <AppPageLayout title="Character">
        <p className="text-sm opacity-70">Loading...</p>
      </AppPageLayout>
    );
  }

  if (notFound) {
    return (
      <AppPageLayout title="Character">
        <div className="text-red-900">
          <strong>Error:</strong> Character not found (or you don&apos;t have
          access).
        </div>
      </AppPageLayout>
    );
  }

  return (
    <AppPageLayout title="Edit Character">
      <CharacterEditor
        characterId={characterId}
        initialCharacter={initialCharacter}
        onSave={save}
        onCancel={() => router.push(`/app/characters/${characterId}`)}
      />
    </AppPageLayout>
  );
};

export default CharacterEditPage;
