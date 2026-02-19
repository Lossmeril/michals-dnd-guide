"use client";

import { useEffect, useState } from "react";
import { charactersRepo } from "@/lib/repos/characters";
import type {
  Character,
  CharacterInsert,
  CharacterUpdate,
} from "@/types/characters";

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

  async function create(payload: CharacterInsert) {
    const created = await charactersRepo.insert(payload);
    setCharacters((prev) => [...prev, created]);
    return created;
  }

  async function update(id: Character["id"], patch: CharacterUpdate) {
    const updated = await charactersRepo.update(id, patch);
    setCharacters((prev) => prev.map((c) => (c.id === id ? updated : c)));
    return updated;
  }

  async function remove(id: Character["id"]) {
    await charactersRepo.delete(id);
    setCharacters((prev) => prev.filter((c) => c.id !== id));
  }

  return {
    characters,
    setCharacters,
    loading,
    error,
    reload,
    create,
    update,
    remove,
  };
}
