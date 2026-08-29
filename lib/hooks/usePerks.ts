"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { Perk, PerkInsert, PerkUpdate } from "@/types/perks";
import { perksRepo } from "@/lib/repos/perks";
import { queryKeys } from "./queryKeys";

type UsePerksOptions = {
  perkType?: Perk["perk_type"];
};

/**
 * Perks, each with its joined classes / spell / racial / prerequisite rows,
 * optionally filtered by type.
 *
 * Bespoke rather than `useEntityCollection` because the read shape
 * (`PerkWithDetails`) differs from the write shape (`Perk`) and the query key
 * depends on `perkType`.
 *
 * Mutations invalidate every `["perks", ...]` query, so the list refetches
 * with fully-joined rows — no need to stitch placeholder detail arrays onto a
 * freshly-created perk the way the hand-rolled hook did.
 */
export function usePerks(opts: UsePerksOptions = {}) {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: queryKeys.perks(opts.perkType),
    queryFn: () => perksRepo.list(opts),
  });

  // Prefix match: clears this filtered list, the unfiltered list, and any
  // single-perk ["perks", id] entry.
  const invalidate = () =>
    queryClient.invalidateQueries({ queryKey: queryKeys.perks() });

  return {
    perks: query.data ?? [],
    loading: query.isLoading,
    error: (query.error as Error) ?? null,

    reload: async () => {
      await query.refetch();
    },

    create: async (payload: PerkInsert) => {
      const created = await perksRepo.insert(payload);
      await invalidate();
      return created;
    },

    update: async (id: Perk["id"], patch: PerkUpdate) => {
      const updated = await perksRepo.update(id, patch);
      await invalidate();
      return updated;
    },

    remove: async (id: Perk["id"]) => {
      await perksRepo.delete(id);
      await invalidate();
    },
  };
}

/**
 * One perk by id, with its joined detail rows, cached under `queryKeys.perk(id)`.
 * `perk` is `null` while loading and also if the id doesn't exist — check
 * `loading` first to tell the two apart.
 *
 * Bespoke (not `useEntityById`) because `perksRepo.getById` returns the joined
 * `PerkWithDetails`, not a plain `Perk`.
 */
export function usePerk(id: string) {
  const query = useQuery({
    queryKey: queryKeys.perk(id),
    queryFn: () => perksRepo.getById(id),
  });

  return {
    perk: query.data ?? null,
    loading: query.isLoading,
    error: (query.error as Error) ?? null,
    reload: async () => {
      await query.refetch();
    },
  };
}
