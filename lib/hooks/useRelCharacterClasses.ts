"use client";

import { relCharacterClassRepo } from "@/lib/repos/relCharacterClass";
import { queryKeys } from "./queryKeys";
import { useEntityCollection } from "./useEntityCollection";

/**
 * All character↔class relation rows (which carry the per-class `level`),
 * cached under `queryKeys.relCharacterClasses`.
 * Same shape as before:
 * `{ relCharacterClasses, loading, error, reload, create, update, remove }`.
 */
export function useRelCharacterClasses() {
  const { items, ...rest } = useEntityCollection(
    queryKeys.relCharacterClasses,
    relCharacterClassRepo,
  );
  return { relCharacterClasses: items, ...rest };
}
