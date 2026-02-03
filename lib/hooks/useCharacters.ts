"use client";

import { useEffect, useState } from "react";
import { charactersRepo } from "@/lib/repos/characters";
import type { Character, CharacterUpdate } from "@/types/character";

export function useCharacters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  async function reload() {
    setLoading(true);
    setError(null);
    try {
      const data = await charactersRepo.list();
      setCharacters(data);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void reload();
  }, []);

  async function update(id: Character["id"], patch: CharacterUpdate) {
    const updated = await charactersRepo.update(id, patch);
    setCharacters((prev) => prev.map((c) => (c.id === id ? updated : c)));
    return updated;
  }

  async function remove(id: Character["id"]) {
    await charactersRepo.delete(id);
    setCharacters((prev) => prev.filter((c) => c.id !== id));
  }

  return { characters, setCharacters, loading, error, reload, update, remove };
}
