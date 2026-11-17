"use client";

import { useState } from "react";
import { useDict } from "@/lib/i18n/client";

interface AddPlayerSelectProps {
  options: { id: string; label: string }[];
  onAdd: (playerId: string) => Promise<void>;
}

/** The DM picks a player to add; the player brings a character later */
export const AddPlayerSelect: React.FC<AddPlayerSelectProps> = ({
  options,
  onAdd,
}) => {
  const [selected, setSelected] = useState("");
  const t = useDict().campaigns;

  if (options.length === 0) {
    return <p className="text-sm text-dnd-ink/70 mb-8">{t.everyoneIn}</p>;
  }

  return (
    <div className="flex flex-wrap items-center gap-2 mb-8">
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        <option value="" disabled>
          {t.choose}
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
      <button
        type="button"
        disabled={!selected}
        onClick={async () => {
          await onAdd(selected);
          setSelected("");
        }}
      >
        {t.add}
      </button>
    </div>
  );
};
