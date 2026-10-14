"use client";

import { type DependencyList, useEffect, useState } from "react";

/**
 * Loads data in the browser when the deps change. `reload` fetches again,
 * e.g. after posting something; the old data stays on screen meanwhile.
 */
export const useLoad = <T>(load: () => Promise<T>, deps: DependencyList) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [version, setVersion] = useState(0);

  useEffect(() => {
    let current = true;
    load()
      .then((result) => current && setData(result))
      .catch((error) => console.error("Error loading:", error))
      .finally(() => current && setLoading(false));
    return () => {
      current = false;
    };
    // The caller lists what `load` depends on, like useEffect's own deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, version]);

  return {
    data,
    loading,
    /** Replace the data locally, e.g. with what a save returned */
    setData,
    reload: () => setVersion((v) => v + 1),
  };
};
