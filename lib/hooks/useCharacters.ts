"use client";

import { charactersRepo } from "@/lib/repos/characters";
import { queryKeys } from "./queryKeys";
import { useEntityById } from "./useEntityById";
import { useEntityCollection } from "./useEntityCollection";

/**
 * All characters, cached under `queryKeys.characters` and shared by every caller.
 * Same shape as before: `{ characters, loading, error, reload, create, update, remove }`.
 */
export function useCharacters() {
  const { items, ...rest } = useEntityCollection(
    queryKeys.characters,
    charactersRepo,
  );
  return { characters: items, ...rest };
}

/**
 * One character by id, cached under `queryKeys.character(id)`.
 * `character` is `null` while loading and also if the id doesn't exist —
 * check `loading` first to tell the two apart.
 *
 * `characters.id` is numeric; the route param is a string, so callers pass
 * `Number(id)`.
 */
export function useCharacter(id: number) {
  const { data, ...rest } = useEntityById(
    queryKeys.character(id),
    charactersRepo,
    id,
  );
  return { character: data, ...rest };
}
