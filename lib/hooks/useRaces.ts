"use client";

import { useEffect, useState } from "react";
import { racesRepo } from "@/lib/repos/races";
import type { Race, RaceUpdate } from "@/types/races";

export function useRaces() {
  const [races, setRaces] = useState<Race[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  async function reload() {
    setLoading(true);
    setError(null);
    try {
      const data = await racesRepo.list();
      setRaces(data);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void reload();
  }, []);

  async function update(id: Race["id"], patch: RaceUpdate) {
    const updated = await racesRepo.update(id, patch);
    setRaces((prev) => prev.map((r) => (r.id === id ? updated : r)));
    return updated;
  }

  async function remove(id: Race["id"]) {
    await racesRepo.delete(id);
    setRaces((prev) => prev.filter((r) => r.id !== id));
  }

  return { races, setRaces, loading, error, reload, update, remove };
}
