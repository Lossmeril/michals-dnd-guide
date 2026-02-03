"use client";

import { useEffect, useMemo, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/browser";
import Card from "@/components/ui/card";
import type { DB_Class, ClassRank } from "@/types/class";

type PrereqRow = { child_class_id: string; parent_class_id: string };
export type ClassLevels = Record<string, number>; // class_id -> level (1..5), missing/0 = none

type Props = {
  characterId: string;

  levels: ClassLevels;
  setLevels: (next: ClassLevels) => void;

  // global budget
  levelCap: number;
  levelSpent: number;
  levelLeft: number;

  setError: (e: string | null) => void;
};

const inputClass =
  "w-full rounded-xl border-2 border-red-900/30 bg-white/60 p-3 text-dnd-ink outline-none focus:border-red-900";

const clampInt = (n: number, min: number, max: number) =>
  Math.max(min, Math.min(max, Number.isFinite(n) ? Math.floor(n) : min));

const rankOrder = (r: ClassRank) =>
  r === "basic" ? 0 : r === "advanced" ? 1 : 2;

export const CharacterClassesStep: React.FC<Props> = ({
  characterId,
  levels,
  setLevels,
  levelCap,
  levelSpent,
  levelLeft,
  setError,
}) => {
  const [classes, setClasses] = useState<DB_Class[]>([]);
  const [prereqs, setPrereqs] = useState<PrereqRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(null);

      const supabase = supabaseBrowser();

      const [
        { data: cls, error: clsErr },
        { data: pr, error: prErr },
        { data: cc, error: ccErr },
      ] = await Promise.all([
        supabase
          .from("classes")
          .select("*")
          .order("title", { ascending: true }),
        supabase
          .from("class_prerequisites")
          .select("child_class_id,parent_class_id"),
        supabase
          .from("character_classes")
          .select("class_id,level")
          .eq("character_id", characterId),
      ]);

      if (clsErr) setError(clsErr.message);
      if (prErr) setError(prErr.message);
      if (ccErr) setError(ccErr.message);

      setClasses((cls ?? []) as DB_Class[]);
      setPrereqs((pr ?? []) as PrereqRow[]);

      // seed from DB
      const next: ClassLevels = {};
      (cc ?? []).forEach((row: any) => {
        if (row.level && row.level > 0) next[row.class_id] = row.level;
      });
      setLevels(next);

      setLoading(false);
    };

    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [characterId]);

  const prereqMap = useMemo(() => {
    const m = new Map<string, string[]>();
    prereqs.forEach((r) => {
      const arr = m.get(r.child_class_id) ?? [];
      arr.push(r.parent_class_id);
      m.set(r.child_class_id, arr);
    });
    return m;
  }, [prereqs]);

  const prereqTotalLevels = (childId: string, current: ClassLevels) => {
    const parents = prereqMap.get(childId) ?? [];
    return parents.reduce((sum, pid) => sum + (current[pid] ?? 0), 0);
  };

  const isUnlocked = (c: DB_Class, current: ClassLevels) => {
    if (c.rank === "basic") return true;
    // rule: advanced/mighty require 6 total levels in prereq classes
    return prereqTotalLevels(c.id, current) >= 6;
  };

  const sorted = useMemo(() => {
    return [...classes].sort((a, b) => {
      const ra = rankOrder(a.rank);
      const rb = rankOrder(b.rank);
      if (ra !== rb) return ra - rb;
      return a.title.localeCompare(b.title);
    });
  }, [classes]);

  const setLevel = (classId: string, nextRaw: number) => {
    setError(null);

    const currentLevel = levels[classId] ?? 0;
    const nextLevel = clampInt(nextRaw, 0, 5);

    const cls = classes.find((x) => x.id === classId);
    if (!cls) return;

    // locked classes cannot be increased above 0
    if (!isUnlocked(cls, levels) && nextLevel > 0) return;

    // budget check (delta-based)
    const delta = nextLevel - currentLevel;
    if (delta > 0 && levelLeft - delta < 0) {
      setError(`Not enough level points left. You have ${levelLeft}.`);
      return;
    }

    const next: ClassLevels = { ...levels, [classId]: nextLevel };
    if (nextLevel === 0) delete next[classId];
    setLevels(next);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="font-serif text-xl text-dnd-ink">Classes</h2>
          <p className="text-sm text-dnd-ink/70">
            Level budget: <span className="font-semibold">{levelCap}</span> •
            Spent: <span className="font-semibold">{levelSpent}</span> • Left:{" "}
            <span className="font-semibold">{levelLeft}</span>
          </p>
        </div>
      </div>

      {loading && <p className="text-sm opacity-70">Loading classes…</p>}

      {!loading && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sorted.map((c) => {
            const level = levels[c.id] ?? 0;
            const owned = level > 0;
            const unlocked = isUnlocked(c, levels);

            const prereqLevels =
              c.rank === "basic" ? null : prereqTotalLevels(c.id, levels);

            const stateClass = owned
              ? "grayscale-0 ring-2 ring-red-900/70"
              : unlocked
                ? "grayscale opacity-80 hover:opacity-100 hover:grayscale-0"
                : "opacity-50 pointer-events-none";

            return (
              <div key={c.id}>
                <Card
                  title={c.title}
                  description={c.short_desc ?? c.description ?? ""}
                  imageSrc={
                    c.image_url?.trim()
                      ? c.image_url
                      : "https://placehold.co/640x360?text=No%20Image"
                  }
                  imageAlt={c.title}
                  className={["transition", stateClass].join(" ")}
                  imagePos="center"
                >
                  {c.rank !== "basic" && (
                    <p className="text-xs text-dnd-ink/60">
                      Prereq levels:{" "}
                      <span className="font-semibold">{prereqLevels}</span> / 6
                    </p>
                  )}

                  <div className="mt-3 flex items-center justify-between gap-3">
                    <div className="text-xs text-dnd-ink/70">Level (0–5)</div>
                    <input
                      type="number"
                      min={0}
                      max={5}
                      step={1}
                      value={level}
                      disabled={!unlocked}
                      onChange={(e) => setLevel(c.id, e.target.valueAsNumber)}
                      className={[inputClass, "w-24"].join(" ")}
                    />
                  </div>

                  {!unlocked && c.rank !== "basic" && (
                    <p className="mt-2 text-xs text-dnd-ink/60">
                      Locked: need 6 total levels in prerequisites.
                    </p>
                  )}
                </Card>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
