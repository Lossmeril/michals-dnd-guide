"use client";

import { useEffect, useState } from "react";
import { playersRepo } from "@/lib/repos/players";
import type { Player, PlayerInsert, PlayerUpdate } from "@/types/players";

export function usePlayers() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  async function reload() {
    setLoading(true);
    setError(null);
    try {
      const data = await playersRepo.list();
      setPlayers(data);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void reload();
  }, []);

  async function create(payload: PlayerInsert) {
    const created = await playersRepo.insert(payload);
    setPlayers((prev) => [...prev, created]);
    return created;
  }

  async function update(id: Player["id"], patch: PlayerUpdate) {
    const updated = await playersRepo.update(id, patch);
    setPlayers((prev) => prev.map((p) => (p.id === id ? updated : p)));
    return updated;
  }

  async function remove(id: Player["id"]) {
    await playersRepo.delete(id);
    setPlayers((prev) => prev.filter((p) => p.id !== id));
  }

  return {
    players,
    setPlayers,
    loading,
    error,
    reload,
    create,
    update,
    remove,
  };
}
