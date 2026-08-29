"use client";

import { classesRepo } from "@/lib/repos/classes";
import { queryKeys } from "./queryKeys";
import { useEntityById } from "./useEntityById";
import { useEntityCollection } from "./useEntityCollection";

/**
 * All classes, cached under `queryKeys.classes` and shared by every caller.
 * Same shape as before: `{ classes, loading, error, reload, create, update, remove }`.
 */
export function useClasses() {
  const { items, ...rest } = useEntityCollection(queryKeys.classes, classesRepo);
  return { classes: items, ...rest };
}

/**
 * One class by id, cached under `queryKeys.class(id)`.
 * `class_` is `null` while loading and also if the id doesn't exist — check
 * `loading` first to tell the two apart.
 */
export function useClass(id: string) {
  const { data, ...rest } = useEntityById(queryKeys.class(id), classesRepo, id);
  return { class_: data, ...rest };
}
