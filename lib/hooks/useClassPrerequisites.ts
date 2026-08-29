"use client";

import { classPrerequisitesRepo } from "@/lib/repos/classPrerequisites";
import { queryKeys } from "./queryKeys";
import { useEntityCollection } from "./useEntityCollection";

/**
 * All class-prerequisite rows, cached under `queryKeys.classPrerequisites`.
 * Same shape as before:
 * `{ classPrerequisites, loading, error, reload, create, update, remove }`.
 */
export function useClassPrerequisites() {
  const { items, ...rest } = useEntityCollection(
    queryKeys.classPrerequisites,
    classPrerequisitesRepo,
  );
  return { classPrerequisites: items, ...rest };
}
