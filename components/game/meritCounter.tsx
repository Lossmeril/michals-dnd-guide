"use client";

// A character's merit points in one campaign (see the Merit points rulebook
// page). The DM awards and spends them; the player can only spend them.

import { useState } from "react";
import { toast } from "sonner";
import type { Result } from "@/lib/result";
import { useDict } from "@/lib/i18n/client";

const MeritCounter: React.FC<{
  points: number;
  canAward: boolean;
  canSpend: boolean;
  onChange: (points: number) => Promise<Result<number>>;
}> = ({ points: initial, canAward, canSpend, onChange }) => {
  const [points, setPoints] = useState(initial);
  const [pending, setPending] = useState(false);
  const t = useDict().ui;

  const change = async (next: number) => {
    setPending(true);
    const { error } = await onChange(next);
    setPending(false);
    if (error !== null) toast.error(error);
    else setPoints(next);
  };

  return (
    <div className="flex items-center gap-2 text-xs mt-2">
      <span className="font-bold">{t.meritPoints}</span>
      {canSpend && (
        <button
          type="button"
          className="button-secondary px-2 py-0 leading-5"
          aria-label={t.spendMerit}
          disabled={pending || points === 0}
          onClick={() => change(points - 1)}
        >
          −
        </button>
      )}
      <span>{points}</span>
      {canAward && (
        <button
          type="button"
          className="button-secondary px-2 py-0 leading-5"
          aria-label={t.awardMerit}
          disabled={pending}
          onClick={() => change(points + 1)}
        >
          +
        </button>
      )}
    </div>
  );
};

export default MeritCounter;
