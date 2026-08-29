"use client";

import { useEffect, useState } from "react";
import type { PerkClass } from "@/types/perks";
import { perkClassesRepo } from "@/lib/repos/perkClasses";

export function usePerkClasses(perkId: string) {
  const [perkClasses, setPerkClasses] = useState<PerkClass[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  async function reload() {
    setLoading(true);
    setError(null);
    try {
      const data = await perkClassesRepo.list(perkId);
      setPerkClasses(data);
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

  async function add(classId: string) {
    const created = await perkClassesRepo.insert({ perk_id: perkId, class_id: classId });
    setPerkClasses((prev) => [...prev, created]);
    return created;
  }

  async function remove(classId: string) {
    await perkClassesRepo.delete(perkId, classId);
    setPerkClasses((prev) => prev.filter((pc) => pc.class_id !== classId));
  }

  return { perkClasses, loading, error, reload, add, remove };
}
