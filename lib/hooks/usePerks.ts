"use client";

import { useEffect, useState } from "react";
import type { Perk, PerkInsert, PerkUpdate, PerkWithDetails } from "@/types/perks";
import { perksRepo } from "../repos/perks";

type UsePerksOptions = {
  perkType?: Perk["perk_type"];
};

const EMPTY_DETAILS: Pick<PerkWithDetails, "perk_classes" | "spell_details" | "racial_perk_details" | "perk_prerequisites"> = {
  perk_classes: [],
  spell_details: null,
  racial_perk_details: null,
  perk_prerequisites: [],
};

export function usePerks(opts: UsePerksOptions = {}) {
  const [perks, setPerks] = useState<PerkWithDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  async function reload() {
    setLoading(true);
    setError(null);
    try {
      const data = await perksRepo.list(opts);
      setPerks(data);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void reload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opts.perkType]);

  async function create(payload: PerkInsert) {
    const created = await perksRepo.insert(payload);
    setPerks((prev) => [...prev, { ...EMPTY_DETAILS, ...created }]);
    return created;
  }

  async function update(id: Perk["id"], patch: PerkUpdate) {
    const updated = await perksRepo.update(id, patch);
    setPerks((prev) => prev.map((p) => (p.id === id ? { ...p, ...updated } : p)));
    return updated;
  }

  async function remove(id: Perk["id"]) {
    await perksRepo.delete(id);
    setPerks((prev) => prev.filter((p) => p.id !== id));
  }

  return { perks, setPerks, loading, error, reload, create, update, remove };
}