"use client";

import React from "react";
import ClassCard from "./ClassCard";

type ClassItem = {
  id: number;
  name: string;
};

type Props = {
  classes: ClassItem[];
  classLevels: Record<number, number>;
  setClassLevels: React.Dispatch<React.SetStateAction<Record<number, number>>>;
  minLevel?: number; // optional customization
  maxLevel?: number; // optional customization
  title?: string; // optional customization
};

const clamp = (n: number, min: number, max: number) =>
  Math.max(min, Math.min(max, n));

const CharacterClassesSection: React.FC<Props> = ({
  classes,
  classLevels,
  setClassLevels,
  minLevel = 0,
  maxLevel = 5,
  title = "Classes",
}) => {
  const onChangeLevel = (classId: number, value: string) => {
    // allow empty string while typing -> treat as 0
    const parsed = value.trim() === "" ? 0 : Number.parseInt(value, 10);
    const next = Number.isFinite(parsed)
      ? clamp(parsed, minLevel, maxLevel)
      : 0;

    setClassLevels((prev) => ({
      ...prev,
      [classId]: next,
    }));
  };

  return (
    <section className="col-span-9 border-1 border-dnd-ink/20 rounded-lg p-5 w-full grid grid-cols-9 gap-4">
      <h2 className="col-span-9">{title}</h2>

      <div className="col-span-9 grid grid-cols-5 gap-4">
        {classes.map((c) => (
          <ClassCard
            key={c.id}
            c={c}
            onChangeLevel={onChangeLevel}
            classLevels={classLevels}
          />
        ))}
      </div>
    </section>
  );
};

export default CharacterClassesSection;
