"use client";

import { useEffect, useState } from "react";
import type { PerkPrerequisite, PerkPrerequisiteInsert } from "@/types/perks";
import { perkPrerequisitesRepo } from "@/lib/repos/perkPrerequisites";

export function usePerkPrerequisites(perkId: string) {
  const [perkPrerequisites, setPerkPrerequisites] = useState<PerkPrerequisite[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  async function reload() {
    setLoading(true);
    setError(null);
    try {
      const data = await perkPrerequisitesRepo.list(perkId);
      setPerkPrerequisites(data);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void reload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [perkId]);

  async function add(payload: Omit<PerkPrerequisiteInsert, "for_perk_id">) {
    const created = await perkPrerequisitesRepo.insert({ ...payload, for_perk_id: perkId });
    setPerkPrerequisites((prev) => [...prev, created]);
    return created;
  }

  async function remove(id: PerkPrerequisite["id"]) {
    await perkPrerequisitesRepo.delete(id);
    setPerkPrerequisites((prev) => prev.filter((pp) => pp.id !== id));
  }

  return { perkPrerequisites, loading, error, reload, add, remove };
}
