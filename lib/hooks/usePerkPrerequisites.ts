"use client";

import type { PerkPrerequisite, PerkPrerequisiteInsert } from "@/types/perks";
import { perkPrerequisitesRepo } from "@/lib/repos/perkPrerequisites";
import { queryKeys } from "./queryKeys";
import { useRelationQuery } from "./useRelationQuery";

/**
 * Prerequisite rows for a given perk. Cached per perk id.
 * `add` takes the payload without `for_perk_id` — the hook fills it in.
 * Shape: `{ perkPrerequisites, loading, error, reload, add, remove }`.
 */
export function usePerkPrerequisites(perkId: string) {
  const { data, loading, error, reload, invalidate } =
    useRelationQuery<PerkPrerequisite>(
      queryKeys.perkPrerequisites(perkId),
      () => perkPrerequisitesRepo.list(perkId),
    );

  return {
    perkPrerequisites: data,
    loading,
    error,
    reload,
    add: async (payload: Omit<PerkPrerequisiteInsert, "for_perk_id">) => {
      const created = await perkPrerequisitesRepo.insert({
        ...payload,
        for_perk_id: perkId,
      });
      await invalidate();
      return created;
    },
    remove: async (id: PerkPrerequisite["id"]) => {
      await perkPrerequisitesRepo.delete(id);
      await invalidate();
    },
  };
}
