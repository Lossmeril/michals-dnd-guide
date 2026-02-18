"use client";

import { useEffect, useState } from "react";

export const GridPreview = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;

    const handler = (e: KeyboardEvent) => {
      if (e.metaKey && e.key === "g") {
        setVisible((v) => !v);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  if (process.env.NODE_ENV !== "development" || !visible) {
    return null;
  }

  return (
    <div className="app-grid-preview">
      <div className="app-grid-preview-inner">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="app-grid-preview-col" />
        ))}
      </div>
    </div>
  );
};
