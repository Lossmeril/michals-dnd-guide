"use client";

import { useEffect, useState } from "react";
import type { AspectPerk, AspectPerkInsert } from "@/types/perks";
import { aspectPerksRepo } from "@/lib/repos/aspectPerks";

export function useAspectPerks(aspectId?: string) {
  const [aspectPerks, setAspectPerks] = useState<AspectPerk[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  async function reload() {
    setLoading(true);
    setError(null);
    try {
      const data = await aspectPerksRepo.list(aspectId);
      setAspectPerks(data);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void reload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aspectId]);

  async function add(payload: AspectPerkInsert) {
    const created = await aspectPerksRepo.insert(payload);
    setAspectPerks((prev) => [...prev, created]);
    return created;
  }

  async function remove(aspectId: string, perkId: string) {
    await aspectPerksRepo.delete(aspectId, perkId);
    setAspectPerks((prev) =>
      prev.filter((ap) => !(ap.aspect_id === aspectId && ap.perk_id === perkId)),
    );
  }

  return { aspectPerks, loading, error, reload, add, remove };
}
