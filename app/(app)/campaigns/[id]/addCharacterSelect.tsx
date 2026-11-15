"use client";

import Link from "next/link";
import { useState } from "react";
import { useDict } from "@/lib/i18n/client";

interface AddCharacterSelectProps {
  options: { id: number; label: string }[];
  onAdd: (characterId: number) => Promise<void>;
}

export const AddCharacterSelect: React.FC<AddCharacterSelectProps> = ({
  options,
  onAdd,
}) => {
  const [selected, setSelected] = useState("");
  const t = useDict().campaigns;

  // Say why there's nothing to add, instead of showing nothing
  if (options.length === 0) {
    return (
      <p className="text-sm text-dnd-ink/70 mb-8">
        {t.noneToAdd}{" "}
        <Link href="/characters/new" className="link">
          {t.createOne}
        </Link>
        {t.first}
      </p>
    );
  }

  return (
    <div className="flex items-center gap-2 mb-8">
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
          await onAdd(Number(selected));
          setSelected("");
        }}
      >
        {t.add}
      </button>
    </div>
  );
};
