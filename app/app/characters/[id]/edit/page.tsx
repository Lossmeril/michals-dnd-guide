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
import CharacterEditorShell from "@/components/editors/characterCreator";

import type { Attributes } from "@/components/editors/characterCreatorSteps/2attributesStep";

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

    class_level_cap: 8,

    race_id: null,
    racial_perk_id: null,
  });

  const [attributes, setAttributes] = useState<Attributes>({
    body: 5,
    soul: 5,
    charisma: 5,
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
        class_level_cap: data.class_level_cap,
        race_id: data.race_id,
        racial_perk_id: data.racial_perk_id,
      });

      // load attributes
      const { data: defs, error: defsErr } = await supabase
        .from("stat_definitions")
        .select("id,key")
        .in("key", ["body", "soul", "charisma"]);

      if (!defsErr && defs?.length) {
        const byKey = Object.fromEntries(
          defs.map((d) => [d.key, d.id]),
        ) as Record<"body" | "soul" | "charisma", string>;

        const { data: rows } = await supabase
          .from("character_stats")
          .select("stat_id,value")
          .eq("character_id", characterId)
          .in("stat_id", Object.values(byKey));

        const map = new Map((rows ?? []).map((r) => [r.stat_id, r.value ?? 5]));

        setAttributes({
          body: Number(map.get(byKey.body) ?? 5),
          soul: Number(map.get(byKey.soul) ?? 5),
          charisma: Number(map.get(byKey.charisma) ?? 5),
        });
      } else {
        setAttributes({ body: 5, soul: 5, charisma: 5 });
      }

      setLoading(false);
    };

    load();
  }, [characterId]);

  const save = async (character: Character) => {
    const supabase = supabaseBrowser();

    // 1) save character row (existing)
    const payload: CharacterUpdate = {
      name: character.name.trim(),
      backstory: character.backstory,
      image_url: character.image_url,

      updated_at: new Date().toISOString(),

      race_id: character.race_id ?? null,
    };

    const { error: updateError } = await supabase
      .from("characters")
      .update(payload)
      .eq("id", characterId);

    if (updateError) return;

    // 2) upsert attributes
    const { data: defs } = await supabase
      .from("stat_definitions")
      .select("id,key")
      .in("key", ["body", "soul", "charisma"]);

    const byKey = Object.fromEntries(
      (defs ?? []).map((d) => [d.key, d.id]),
    ) as Record<"body" | "soul" | "charisma", string>;

    const rows = (["body", "soul", "charisma"] as const).map((k) => ({
      character_id: characterId,
      stat_id: byKey[k],
      value: attributes[k],
      updated_at: new Date().toISOString(),
    }));

    // character_stats has PK (character_id, stat_id) so upsert works
    await supabase.from("character_stats").upsert(rows);

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
    <AppPageLayout title={`Editing ${initialCharacter.name}`}>
      <CharacterEditorShell
        characterId={characterId}
        initialCharacter={initialCharacter}
        attributes={attributes}
        setAttributes={setAttributes}
        onSave={save}
        onCancel={() => router.push(`/app/characters/${characterId}`)}
      />
    </AppPageLayout>
  );
};

export default CharacterEditPage;
