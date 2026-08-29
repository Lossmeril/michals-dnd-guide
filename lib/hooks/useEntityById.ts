"use client";

// =============================================================================
// useEntityById
// -----------------------------------------------------------------------------
// One row, fetched by id and cached under its own key (e.g. ["races", "elf"]).
//
// This replaces the old [id]-editor-page pattern of "load the whole collection,
// then Array.find, then juggle didHydrate / dataReady / didInit flags":
//   - `loading` is true only while the request is in flight,
//   - `data === null` means the row genuinely does not exist,
//   - the result is cached, so list -> item -> back navigation is instant,
//   - a mutation elsewhere that invalidates ["races"] also refreshes this.
// =============================================================================

import { useQuery } from "@tanstack/react-query";
import type { CrudRepo } from "@/lib/repos/createCrudRepo";

export function useEntityById<Row, Insert, Update>(
  key: readonly unknown[],
  repo: CrudRepo<Row, Insert, Update>,
  id: Parameters<typeof repo.getById>[0],
) {
  const query = useQuery({
    queryKey: key,
    queryFn: () => repo.getById(id),
  });

  return {
    data: query.data ?? null,
    loading: query.isLoading,
    error: (query.error as Error) ?? null,
    reload: async () => {
      await query.refetch();
    },
  };
}
