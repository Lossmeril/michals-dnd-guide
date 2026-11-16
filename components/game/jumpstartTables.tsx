"use client";

// A background's d8 jumpstart tables: archetypes (with a recommended
// loadout), quirks, ideals, bonds and flaws, each ending with "make up your
// own". In the editor each line can be used, or a d8 rolled.

import { useState } from "react";
import { Overline } from "@/components/ui/typography";
import { useDict } from "@/lib/i18n/client";
import {
  JUMPSTART_TABLES,
  type JumpstartLine,
  jumpstartLines,
  type JumpstartTable,
} from "@/lib/rules/fortune";
import type { Tables } from "@/lib/types/database.types";

const JumpstartTables: React.FC<{
  background: Tables<"backgrounds">;
  /** Given in the editor: puts the line into the personality or backstory */
  onUse?: (table: JumpstartTable, line: JumpstartLine) => void;
}> = ({ background, onUse }) => {
  const j = useDict().fortune.jumpstart;
  const [rolled, setRolled] = useState<Partial<Record<JumpstartTable, number>>>({});

  const tables = JUMPSTART_TABLES.map((table) => ({
    table,
    lines: jumpstartLines(background[table], table),
  })).filter((t) => t.lines.length > 0);
  if (tables.length === 0) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6">
      {tables.map(({ table, lines }) => (
        <div key={table} className={table === "archetypes" ? "lg:col-span-2" : undefined}>
          <div className="flex items-center justify-between gap-2 mb-2">
            <Overline>
              d8 · {j.tables[table]}
            </Overline>
            {onUse && (
              <button
                type="button"
                className="button-link text-xs"
                onClick={() =>
                  setRolled({ ...rolled, [table]: Math.floor(Math.random() * 8) })
                }
              >
                {j.roll}
              </button>
            )}
          </div>
          <ol className="text-sm flex flex-col gap-1.5">
            {lines.map((line, i) => (
              <li
                key={i}
                className={`flex gap-2 items-baseline rounded px-1 ${rolled[table] === i ? "bg-dnd-accent-yellow" : ""}`}
              >
                <span className="font-bold text-dnd-red w-4 shrink-0">{i + 1}</span>
                <span className="flex-1">
                  {line.name && <strong>{line.name}. </strong>}
                  {line.text}
                  {line.recommended && (
                    <span className="block text-xs text-dnd-ink/60">
                      {j.recommended} {line.recommended}
                    </span>
                  )}
                </span>
                {onUse && (
                  <button
                    type="button"
                    className="button-link text-xs shrink-0"
                    onClick={() => onUse(table, line)}
                  >
                    {j.use}
                  </button>
                )}
              </li>
            ))}
            <li className="flex gap-2 items-baseline px-1 text-dnd-ink/70 italic">
              <span className="font-bold text-dnd-red w-4 shrink-0 not-italic">9</span>
              <span>{j.own}</span>
            </li>
          </ol>
        </div>
      ))}
    </div>
  );
};

export default JumpstartTables;
