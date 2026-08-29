"use client";

import { useEffect, useState } from "react";
import type { CharacterPerk } from "@/types/perks";
import { characterPerksRepo } from "../repos/characterPerks";

export function useCharacterPerks(characterId: number) {
  const [characterPerks, setCharacterPerks] = useState<CharacterPerk[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  async function reload() {
    setLoading(true);
    setError(null);
    try {
      const data = await characterPerksRepo.list({ characterId });
      setCharacterPerks(data);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void reload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [characterId]);

  async function add(perkId: string) {
    const created = await characterPerksRepo.insert({ character_id: characterId, perk_id: perkId });
    setCharacterPerks((prev) => [...prev, created]);
    return created;
  }

  async function remove(id: CharacterPerk["id"]) {
    await characterPerksRepo.delete(id);
    setCharacterPerks((prev) => prev.filter((cp) => cp.id !== id));
  }

  return { characterPerks, setCharacterPerks, loading, error, reload, add, remove };
}