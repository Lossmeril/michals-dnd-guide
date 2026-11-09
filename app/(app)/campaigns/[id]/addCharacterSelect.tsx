"use client";

import Link from "next/link";
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

  // Say why there's nothing to add, instead of showing nothing
  if (options.length === 0) {
    return (
      <p className="text-sm text-dnd-ink/70 mb-8">
        No characters to add yet. Players join a campaign with a character,
        so someone has to{" "}
        <Link href="/characters/new" className="link">
          create one
        </Link>{" "}
        first.
      </p>
    );
  }

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
