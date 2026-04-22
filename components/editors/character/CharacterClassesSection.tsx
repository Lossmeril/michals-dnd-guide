"use client";

import React, { useCallback, useEffect, useMemo } from "react";
import ClassCard from "./ClassCard";
import { Class } from "@/types/classes";
import { useClassPrerequisites } from "@/lib/hooks/useClassPrerequisites";
import { doesMeetClassPrerequisitesFromLevels } from "@/lib/functions/validators/classRequirements";

type Props = {
  classes: Class[];
  classLevels: Record<string, number>;
  setClassLevels: React.Dispatch<React.SetStateAction<Record<string, number>>>;

  minLevel?: number;
  maxLevel?: number;
  title?: string;

  noMorePointsToSpend?: boolean;
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
  noMorePointsToSpend = false,
}) => {
  const { classPrerequisites } = useClassPrerequisites();

  const onChangeLevel = useCallback(
    (classId: string, value: string) => {
      const parsed = value.trim() === "" ? 0 : Number.parseInt(value, 10);
      const next = Number.isFinite(parsed)
        ? clamp(parsed, minLevel, maxLevel)
        : 0;

      setClassLevels((prev) => ({
        ...prev,
        [classId]: next,
      }));
    },
    [minLevel, maxLevel, setClassLevels],
  );

  // Precompute metReqs per classId so it’s consistent everywhere
  const metReqsById = useMemo(() => {
    const map: Record<string, boolean> = {};
    for (const c of classes) {
      map[c.id] = doesMeetClassPrerequisitesFromLevels(
        c,
        classLevels,
        classPrerequisites,
      );
    }
    return map;
  }, [classes, classLevels, classPrerequisites]);

  // Optional: if something becomes disabled, force its level to 0 (in parent)
  useEffect(() => {
    setClassLevels((prev) => {
      let changed = false;
      const next: Record<string, number> = { ...prev };

      for (const c of classes) {
        if (!metReqsById[c.id] && (next[c.id] ?? 0) > 0) {
          next[c.id] = 0;
          changed = true;
        }
      }

      return changed ? next : prev;
    });
  }, [metReqsById, classes, setClassLevels]);

  const renderRank = (rank: "basic" | "advanced" | "mighty", label: string) => (
    <>
      <h3>{label}</h3>
      <div className="col-span-9 grid grid-cols-5 gap-4">
        {classes
          .filter((c) => c.class_rank === rank)
          .map((c) => (
            <ClassCard
              key={c.id}
              c={c}
              onChangeLevel={onChangeLevel}
              classLevels={classLevels}
              metReqs={metReqsById[c.id]}
              noMorePointsToSpend={noMorePointsToSpend}
            />
          ))}
      </div>
    </>
  );

  return (
    <section className="col-span-9 border-1 border-dnd-ink/20 rounded-lg p-5 w-full grid grid-cols-9 gap-4">
      <h2 className="col-span-9">{title}</h2>

      {renderRank("basic", "Basic classes")}
      {renderRank("advanced", "Advanced classes")}
      {renderRank("mighty", "Mighty classes")}
    </section>
  );
};

export default CharacterClassesSection;
