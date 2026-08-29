"use client";

import type { AspectPerk, AspectPerkInsert } from "@/types/perks";
import { aspectPerksRepo } from "@/lib/repos/aspectPerks";
import { queryKeys } from "./queryKeys";
import { useRelationQuery } from "./useRelationQuery";

/**
 * Perks belonging to an aspect (or every aspect/perk link when `aspectId` is
 * omitted). Cached per aspect id.
 * Shape: `{ aspectPerks, loading, error, reload, add, remove }`.
 */
export function useAspectPerks(aspectId?: string) {
  const { data, loading, error, reload, invalidate } =
    useRelationQuery<AspectPerk>(queryKeys.aspectPerks(aspectId), () =>
      aspectPerksRepo.list(aspectId),
    );

  return {
    aspectPerks: data,
    loading,
    error,
    reload,
    add: async (payload: AspectPerkInsert) => {
      const created = await aspectPerksRepo.insert(payload);
      await invalidate();
      return created;
    },
    remove: async (linkAspectId: string, perkId: string) => {
      await aspectPerksRepo.delete(linkAspectId, perkId);
      await invalidate();
    },
  };
}
