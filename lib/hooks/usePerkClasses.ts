"use client";

import type { PerkClass } from "@/types/perks";
import { perkClassesRepo } from "@/lib/repos/perkClasses";
import { queryKeys } from "./queryKeys";
import { useRelationQuery } from "./useRelationQuery";

/**
 * Which classes can learn a given perk. Cached per perk id.
 * Shape: `{ perkClasses, loading, error, reload, add, remove }`.
 */
export function usePerkClasses(perkId: string) {
  const { data, loading, error, reload, invalidate } =
    useRelationQuery<PerkClass>(queryKeys.perkClasses(perkId), () =>
      perkClassesRepo.list(perkId),
    );

  return {
    perkClasses: data,
    loading,
    error,
    reload,
    add: async (classId: string) => {
      const created = await perkClassesRepo.insert({
        perk_id: perkId,
        class_id: classId,
      });
      await invalidate();
      return created;
    },
    remove: async (classId: string) => {
      await perkClassesRepo.delete(perkId, classId);
      await invalidate();
    },
  };
}
