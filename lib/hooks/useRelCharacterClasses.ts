"use client";

import {
  RelCharacterClass,
  RelCharacterClassInsert,
  RelCharacterClassUpdate,
} from "@/types/relCharacterClass";
import { useEffect, useState } from "react";
import { relCharacterClassRepo } from "../repos/relCharacterClass";

export function useRelCharacterClasses() {
  const [relCharacterClasses, setRelCharacterClasses] = useState<
    RelCharacterClass[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  async function reload() {
    setLoading(true);
    setError(null);
    try {
      const data = await relCharacterClassRepo.list();
      setRelCharacterClasses(data);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void reload();
  }, []);

  async function create(payload: RelCharacterClassInsert) {
    const created = await relCharacterClassRepo.insert(payload);
    setRelCharacterClasses((prev) => [...prev, created]);
    return created;
  }

  async function update(
    id: RelCharacterClass["id"],
    patch: RelCharacterClassUpdate,
  ) {
    const updated = await relCharacterClassRepo.update(id, patch);
    setRelCharacterClasses((prev) =>
      prev.map((c) => (c.id === id ? updated : c)),
    );
    return updated;
  }

  async function remove(id: RelCharacterClass["id"]) {
    await relCharacterClassRepo.delete(id);
    setRelCharacterClasses((prev) => prev.filter((c) => c.id !== id));
  }

  return {
    relCharacterClasses,
    setRelCharacterClasses,
    loading,
    error,
    reload,
    update,
    remove,
    create,
  };
}
