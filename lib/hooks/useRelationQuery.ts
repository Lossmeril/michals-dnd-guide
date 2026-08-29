"use client";

// =============================================================================
// useRelationQuery
// -----------------------------------------------------------------------------
// Read side shared by the small perk-relation hooks (useCharacterPerks,
// usePerkClasses, usePerkPrerequisites, useAspectPerks). Each of those layers
// its own `add` / `remove` on top and calls `invalidate()` after a write, so
// the list refetches.
// =============================================================================

import { useQuery, useQueryClient } from "@tanstack/react-query";

export function useRelationQuery<T>(
  key: readonly unknown[],
  fetcher: () => Promise<T[]>,
) {
  const queryClient = useQueryClient();
  const query = useQuery({ queryKey: key, queryFn: fetcher });

  return {
    data: query.data ?? [],
    loading: query.isLoading,
    error: (query.error as Error) ?? null,
    reload: async () => {
      await query.refetch();
    },
    invalidate: () => queryClient.invalidateQueries({ queryKey: key }),
  };
}
