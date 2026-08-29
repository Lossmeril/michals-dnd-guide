"use client";

import type { CharacterPerk } from "@/types/perks";
import { characterPerksRepo } from "@/lib/repos/characterPerks";
import { queryKeys } from "./queryKeys";
import { useRelationQuery } from "./useRelationQuery";

/**
 * Perks acquired by one character. Cached per character id.
 * Shape: `{ characterPerks, loading, error, reload, add, remove }`.
 */
export function useCharacterPerks(characterId: number) {
  const { data, loading, error, reload, invalidate } =
    useRelationQuery<CharacterPerk>(queryKeys.characterPerks(characterId), () =>
      characterPerksRepo.list({ characterId }),
    );

  return {
    characterPerks: data,
    loading,
    error,
    reload,
    add: async (perkId: string) => {
      const created = await characterPerksRepo.insert({
        character_id: characterId,
        perk_id: perkId,
      });
      await invalidate();
      return created;
    },
    remove: async (id: CharacterPerk["id"]) => {
      await characterPerksRepo.delete(id);
      await invalidate();
    },
  };
}
