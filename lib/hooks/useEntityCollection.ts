"use client";

// =============================================================================
// useEntityCollection
// -----------------------------------------------------------------------------
// Shared read + write state for a whole table, backed by react-query. The
// per-entity hooks (useRaces, useClasses, ...) are thin adapters over this:
// they pass a query key and a repo, then rename `items` to `races` / `classes`
// / ... so their existing callers don't change.
//
// Why every component sharing one hook = one fetch:
//   react-query dedupes by `queryKey`. Two components mounting `useRaces()`
//   read the same cache entry; only one network request goes out, and a route
//   change back to a visited page is served from cache (see `staleTime` in
//   app/providers.tsx).
//
// Mutations invalidate rather than optimistically patch the array:
//   `create/update/remove` run the repo call, then mark the query stale so it
//   refetches. Simpler than hand-rolled optimistic splicing, always ends up
//   consistent with the DB, and these tables are small. If a specific screen
//   ever needs instant feedback, that screen can add an optimistic update.
// =============================================================================

import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { CrudRepo } from "@/lib/repos/createCrudRepo";

export function useEntityCollection<Row, Insert, Update>(
  key: readonly unknown[],
  repo: CrudRepo<Row, Insert, Update>,
) {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: key,
    queryFn: () => repo.list(),
  });

  const invalidate = () => queryClient.invalidateQueries({ queryKey: key });

  return {
    /** Adapters rename this (e.g. to `races`). Never `undefined`. */
    items: query.data ?? [],
    loading: query.isLoading,
    error: (query.error as Error) ?? null,

    /** Force a refetch — used after DB cascade deletes touch this table. */
    reload: async () => {
      await query.refetch();
    },

    create: async (payload: Insert) => {
      const created = await repo.insert(payload);
      await invalidate();
      return created;
    },

    // `Parameters<typeof repo.update>[0]` is the table's real key type
    // (number for characters, string for classes/races), carried through
    // from `CrudRepo`.
    update: async (id: Parameters<typeof repo.update>[0], patch: Update) => {
      const updated = await repo.update(id, patch);
      await invalidate();
      return updated;
    },

    remove: async (id: Parameters<typeof repo.delete>[0]) => {
      await repo.delete(id);
      await invalidate();
    },
  };
}
