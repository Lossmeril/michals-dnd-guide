"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase/browser";

import type { Character, CharacterInsert } from "@/types/character";
import { AppPageLayout } from "@/components/layouts/base";
import CharacterEditorShell from "@/components/layouts/characterCreator";

const NewCharacterPage = () => {
  const router = useRouter();

  const [saving, setSaving] = useState(false);

  const initialCharacter: Character = {
    name: "",
    backstory: null,
    image_url: null,
  };

  const create = async (character: Character) => {
    setSaving(true);

    const supabase = supabaseBrowser();
    const { data: auth } = await supabase.auth.getUser();
    const user = auth.user;

    // Check authentication
    if (!user) {
      setSaving(false);
      router.replace("/login?next=/app/characters/new");
      return;
    }

    const payload: CharacterInsert = {
      owner_user_id: user.id,
      ...character,
      name: character.name.trim(),
    };

    const { error: insertError } = await supabase
      .from("characters")
      .insert(payload);

    setSaving(false);

    if (insertError) {
      return;
    }

    router.push("/app/characters");
    router.refresh();
  };

  return (
    <AppPageLayout title="Create New Character">
      <CharacterEditorShell
        initialCharacter={initialCharacter}
        submitLabel="Create Character"
        submittingLabel="Creating…"
        isSubmitting={saving}
        onSave={create}
        onCancel={() => router.back()}
      />
    </AppPageLayout>
  );
};

export default NewCharacterPage;
