"use server";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { requireUser } from "@/lib/auth";
import { fetchCharacterBuild } from "@/lib/endpoints/character_build";
import { fetchRulebook } from "@/lib/endpoints/rulebook";
import {
  backgroundEquipment,
  validateBuild,
  type Build,
} from "@/lib/rules/character";
import { startingItems } from "@/lib/rules/equipment";
import { uploadImage } from "@/lib/uploadImage";
import { check, fileFrom, type Result, toResult } from "@/lib/result";
import type { Tables } from "@/lib/types/database.types";

interface SaveCharacterInput {
  /** Omit to create a new character */
  characterId?: number;
  name: string;
  backstory: string;
  personality: string;
  /** Only used when creating; an existing character keeps its levels */
  startLevel: number;
  build: Build;
}

export async function saveCharacter(
  input: SaveCharacterInput,
): Promise<Result<number>> {
  const user = await requireUser();
  return toResult(async () => {
    const name = input.name.trim();
    if (!name) throw new Error("Give your character a name.");

    // Levels come from the stored character, never from the browser
    let level = input.startLevel;
    let startLevel = input.startLevel;
    if (input.characterId) {
      const existing = await fetchCharacterBuild(input.characterId);
      if (existing?.character.owner !== user.id) {
        throw new Error("Character not found.");
      }
      level = existing.character.level;
      startLevel = existing.character.start_level;
    }

    const rb = await fetchRulebook();
    const { errors } = validateBuild(
      rb,
      input.build,
      level,
      startLevel,
    );
    if (errors.length) throw new Error(errors[0]);

    const { build } = input;
    const supabase = createClient(await cookies());
    const { data, error } = await supabase.rpc("save_character_build", {
      p_character_id: input.characterId,
      p_name: name,
      p_backstory: input.backstory.trim() || undefined,
      p_race_id: build.raceId ?? undefined,
      p_background_id: build.backgroundId ?? undefined,
      p_languages: build.languages,
      p_equipment_picks: build.equipment,
      // Resolved here from the checked picks, never sent by the browser
      p_items: startingItems(backgroundEquipment(rb, build), build.equipment),
      p_traits: build.traitIds,
      p_level: level,
      p_start_level: startLevel,
      p_body: build.body,
      p_soul: build.soul,
      p_charisma: build.charisma,
      p_classes: Object.entries(build.classes).map(([class_id, lvl]) => ({
        class_id,
        level: lvl,
      })),
      p_perks: build.perks.map((p) => ({
        perk_id: p.perkId,
        class_id: p.classId,
      })),
    });
    if (error) throw error;

    // Not part of the build function; the owner can update it directly
    const { error: personalityError } = await supabase
      .from("characters")
      .update({ personality: input.personality.trim() || null })
      .eq("id", data);
    if (personalityError) throw personalityError;
    return data;
  });
}

/** A player-written trait; it waits for the campaign DM's approval */
export async function createCustomTrait(input: {
  name: string;
  flavour: string;
  description: string;
  upside: string;
  downside: string;
}): Promise<Result<Tables<"traits">>> {
  await requireUser();
  return toResult(async () => {
    const [name, flavour, description, upside, downside] = [
      input.name,
      input.flavour,
      input.description,
      input.upside,
      input.downside,
    ].map((v) => v.trim());
    if (!name || !upside || !downside)
      throw new Error("A trait needs a name, an upside and a downside.");

    const supabase = createClient(await cookies());
    const { data, error } = await supabase
      .from("traits")
      .insert({
        name,
        flavour: flavour || null,
        description: description || null,
        upside,
        downside,
        is_custom: true,
      })
      .select()
      .single();
    if (error) throw error;
    return data;
  });
}

export async function uploadCharacterPortrait(
  characterId: number,
  formData: FormData,
): Promise<Result<string>> {
  const user = await requireUser();
  return toResult(async () => {
    const file = fileFrom(formData);
    const existing = await fetchCharacterBuild(characterId);
    if (existing?.character.owner !== user.id)
      throw new Error("Character not found.");

    const supabase = createClient(await cookies());
    const { publicUrl } = await uploadImage(
      supabase,
      "characters",
      file,
      String(characterId),
    );
    check(
      await supabase
        .from("characters")
        .update({ image_url: publicUrl })
        .eq("id", characterId),
    );
    return publicUrl;
  });
}
