"use client";

import { useState } from "react";

interface AddCharacterSelectProps {
  options: { id: number; label: string }[];
  onAdd: (characterId: number) => Promise<void>;
}

export const AddCharacterSelect: React.FC<AddCharacterSelectProps> = ({
  options,
  onAdd,
}) => {
  const [selected, setSelected] = useState("");

  if (options.length === 0) return null;

  return (
    <div className="flex items-center gap-2 mb-8">
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        <option value="" disabled>
          Choose a character…
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
        className="disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={async () => {
          await onAdd(Number(selected));
          setSelected("");
        }}
      >
        Add to campaign
      </button>
    </div>
  );
};
