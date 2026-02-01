"use client";

import { useMemo } from "react";
import Button from "@/components/ui/button";
import type { DB_Class, ClassRank } from "@/types/class";

type Props = {
  rank: ClassRank;
  allCandidates: DB_Class[];
  selectedParentIds: string[];
  setSelectedParentIds: (ids: string[]) => void;

  error?: string | null;
  setError?: (e: string | null) => void;

  onSave: () => Promise<void>;
  saving: boolean;
};

const PrerequisitesEditor = ({
  rank,
  allCandidates,
  selectedParentIds,
  setSelectedParentIds,
  error,
  setError,
  onSave,
  saving,
}: Props) => {
  const requiredText =
    rank === "advanced"
      ? "Pick exactly 2 Basic classes."
      : rank === "mighty"
        ? "Pick 3–5 Advanced classes."
        : "Basic classes have no prerequisites.";

  const { min, max } = useMemo(() => {
    if (rank === "advanced") return { min: 2, max: 2 };
    if (rank === "mighty") return { min: 3, max: 5 };
    return { min: 0, max: 0 };
  }, [rank]);

  const toggle = (id: string) => {
    if (setError) setError(null);

    const isSelected = selectedParentIds.includes(id);

    if (isSelected) {
      setSelectedParentIds(selectedParentIds.filter((x) => x !== id));
      return;
    }

    // enforce max
    if (rank !== "basic" && selectedParentIds.length >= max) {
      setError?.(`You can select at most ${max}.`);
      return;
    }

    setSelectedParentIds([...selectedParentIds, id]);
  };

  const count = selectedParentIds.length;
  const isValid = rank === "basic" ? true : count >= min && count <= max;

  return (
    <section className="mt-8 space-y-3">
      <div className="flex items-end justify-between">
        <div>
          <h3>Prerequisites</h3>
          <p className="text-sm text-dnd-ink/70">{requiredText}</p>
          {rank !== "basic" && (
            <p className="mt-1 text-sm text-dnd-ink/70">
              Selected: <span className="font-semibold">{count}</span>
              {rank === "advanced" ? " / 2" : " / 3–5"}
            </p>
          )}
        </div>

        {rank !== "basic" && (
          <Button
            label={saving ? "Saving…" : "Save prerequisites"}
            onClick={onSave}
            disabled={saving || !isValid}
          />
        )}
      </div>

      {error && (
        <div className="rounded-xl border-2 border-red-900/30 bg-white/60 p-3 text-sm text-red-900">
          {error}
        </div>
      )}

      {rank === "basic" ? (
        <div className="rounded-xl border-2 border-red-900/20 bg-white/50 p-4 text-sm text-dnd-ink/70">
          This class has no prerequisites.
        </div>
      ) : (
        <div className="grid gap-2 sm:grid-cols-2">
          {allCandidates.map((c) => {
            const checked = selectedParentIds.includes(c.id);

            return (
              <label
                key={c.id}
                className="flex items-center gap-3 rounded-xl border-2 border-red-900/20 bg-white/50 p-3 hover:bg-white/70"
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggle(c.id)}
                  className="h-4 w-4 accent-red-900"
                />
                <span className="font-serif text-dnd-ink">{c.title}</span>
              </label>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default PrerequisitesEditor;
