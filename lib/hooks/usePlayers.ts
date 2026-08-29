"use client";

import { playersRepo } from "@/lib/repos/players";
import { queryKeys } from "./queryKeys";
import { useEntityCollection } from "./useEntityCollection";

/**
 * All players, cached under `queryKeys.players`. Because the cache is shared,
 * the navbar and the "create character" modal now trigger a single request
 * between them instead of one each.
 * Same shape as before: `{ players, loading, error, reload, create, update, remove }`.
 */
export function usePlayers() {
  const { items, ...rest } = useEntityCollection(queryKeys.players, playersRepo);
  return { players: items, ...rest };
}
