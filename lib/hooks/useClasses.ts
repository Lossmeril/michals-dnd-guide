"use client";

import { useEffect, useState } from "react";
import { Class, ClassInsert, ClassUpdate } from "@/types/classes";
import { classesRepo } from "../repos/classes";

export function useClasses() {
  const [classes, setClasses] = useState<Class[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  async function reload() {
    setLoading(true);
    setError(null);
    try {
      const data = await classesRepo.list();
      setClasses(data);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void reload();
  }, []);

  async function create(payload: ClassInsert) {
    const created = await classesRepo.insert(payload);
    setClasses((prev) => [...prev, created]);
    return created;
  }

  async function update(id: Class["id"], patch: ClassUpdate) {
    const updated = await classesRepo.update(id, patch);
    setClasses((prev) => prev.map((c) => (c.id === id ? updated : c)));
    return updated;
  }

  async function remove(id: Class["id"]) {
    await classesRepo.delete(id);
    setClasses((prev) => prev.filter((c) => c.id !== id));
  }

  return {
    classes,
    setClasses,
    loading,
    error,
    reload,
    create,
    update,
    remove,
  };
}
