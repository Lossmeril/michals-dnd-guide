"use client";

import { useEffect, useState } from "react";
import {
  ClassPrerequisite,
  ClassPrerequisiteInsert,
  ClassPrerequisiteUpdate,
} from "@/types/classPrerequisities";
import { classPrerequisitesRepo } from "../repos/classPrerequisites";

export function useClassPrerequisites() {
  const [classPrerequisites, setClassPrerequisites] = useState<
    ClassPrerequisite[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  async function reload() {
    setLoading(true);
    setError(null);
    try {
      const data = await classPrerequisitesRepo.list();
      setClassPrerequisites(data);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void reload();
  }, []);

  async function create(payload: ClassPrerequisiteInsert) {
    const created = await classPrerequisitesRepo.insert(payload);
    setClassPrerequisites((prev) => [...prev, created]);
    return created;
  }

  async function update(
    id: ClassPrerequisite["id"],
    patch: ClassPrerequisiteUpdate,
  ) {
    const updated = await classPrerequisitesRepo.update(id, patch);
    setClassPrerequisites((prev) =>
      prev.map((c) => (c.id === id ? updated : c)),
    );
    return updated;
  }

  async function remove(id: ClassPrerequisite["id"]) {
    await classPrerequisitesRepo.delete(id);
    setClassPrerequisites((prev) => prev.filter((c) => c.id !== id));
  }

  return {
    classPrerequisites,
    setClassPrerequisites,
    loading,
    error,
    reload,
    create,
    update,
    remove,
  };
}
