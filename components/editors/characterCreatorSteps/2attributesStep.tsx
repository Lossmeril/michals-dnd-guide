"use client";

import { useMemo } from "react";
import { TextInput } from "@/components/ui/inputs";

export type Attributes = {
  body: number;
  soul: number;
  charisma: number;
};

type Props = {
  value: Attributes;
  onChange: (patch: Partial<Attributes>) => void;
  setError: (e: string | null) => void;
};

const clampInt = (raw: string, fallback: number) => {
  const n = Number.parseInt(raw, 10);
  return Number.isFinite(n) ? n : fallback;
};

export const CharacterAttributesStep: React.FC<Props> = ({
  value,
  onChange,
  setError,
}) => {
  const total = useMemo(
    () => value.body + value.soul + value.charisma,
    [value.body, value.soul, value.charisma],
  );

  const set = (k: keyof Attributes, raw: string) => {
    setError(null);
    const next = clampInt(raw, value[k]);
    if (next < 0) {
      setError("Attributes cannot be negative.");
      return;
    }
    onChange({ [k]: next });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-serif text-xl text-dnd-ink mb-2">
          Define your character&apos;s abilities
        </h3>
        <p className="text-sm text-dnd-ink/70">
          You define your character&apos;s abilities through three attributes.
          Every character gets a total of 15 points in the beginning to allocate
          between Body, Soul, and Charisma. You may use level-up points to
          increase these attributes later on.
        </p>
        <p className="mt-2 text-sm text-dnd-ink/80">
          Total points allocated: <span className="font-semibold">{total}</span>
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-row flex-nowrap gap-4">
          <div className="w-xs">
            <TextInput
              label="Body"
              value={String(value.body)}
              onChange={(e) => set("body", e.target.value)}
              error={null}
              type="number"
            />
          </div>
        </div>
        <div className="flex flex-row flex-nowrap gap-4">
          <div className="w-xs">
            <TextInput
              label="Soul"
              value={String(value.soul)}
              onChange={(e) => set("soul", e.target.value)}
              error={null}
              type="number"
            />
          </div>
        </div>
        <div className="flex flex-row flex-nowrap gap-4">
          <div className="w-xs">
            <TextInput
              label="Charisma"
              value={String(value.charisma)}
              onChange={(e) => set("charisma", e.target.value)}
              error={null}
              type="number"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
