"use client";

import { racesRepo } from "@/lib/repos/races";
import { queryKeys } from "./queryKeys";
import { useEntityById } from "./useEntityById";
import { useEntityCollection } from "./useEntityCollection";

/**
 * All races, cached under `queryKeys.races` and shared by every caller.
 * Returns the same shape the hand-rolled hook did:
 * `{ races, loading, error, reload, create, update, remove }`.
 */
export function useRaces() {
  const { items, ...rest } = useEntityCollection(queryKeys.races, racesRepo);
  return { races: items, ...rest };
}

/**
 * One race by id, cached under `queryKeys.race(id)`.
 * `race` is `null` while loading and also if the id doesn't exist — check
 * `loading` first to tell the two apart.
 */
export function useRace(id: string) {
  const { data, ...rest } = useEntityById(queryKeys.race(id), racesRepo, id);
  return { race: data, ...rest };
}
