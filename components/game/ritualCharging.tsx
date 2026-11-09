// The part of an Incantor's ritual item a player works with on paper: stored
// points to tick, the charging table, and blanks to fill in by hand. Used by
// the ```ritual-item stat block and the printed character sheet.

import { twMerge } from "tailwind-merge";
import type { Dict } from "@/lib/i18n/dictionaries";
import { RITUAL_ITEM_MAX, RITUAL_OCCASIONS } from "@/lib/rules/statBlocks";

type T = Dict["statBlock"]["ritual"];

const Heading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="libre font-bold text-dnd-red-dark leading-tight">{children}</p>
);

const RitualCharging: React.FC<{ t: T; className?: string }> = ({ t, className }) => (
  <div className={twMerge("flex flex-col gap-2 text-xs leading-snug", className)}>
    {/* Stored points: tick in pencil */}
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
      <Heading>{t.stored}</Heading>
      <span className="inline-flex gap-2 px-1">
        {Array.from({ length: RITUAL_ITEM_MAX }, (_, i) => (
          <span key={i} className="inline-block w-4 h-4 rotate-45 border-2 border-soul bg-white" />
        ))}
      </span>
      <span className="italic text-dnd-ink/70">{t.storedNote}</span>
    </div>

    {/* What each occasion allows */}
    <div>
      <Heading>{t.charging}</Heading>
      <table className="w-full">
        <thead>
          <tr className="text-left text-dnd-red-dark border-b border-dnd-gold">
            <th className="py-0.5 font-bold">{t.occasion}</th>
            <th className="py-0.5 font-bold text-center w-12">{t.points}</th>
          </tr>
        </thead>
        <tbody>
          {RITUAL_OCCASIONS.map((o) => (
            <tr key={o.key} className="border-b border-dnd-gold/40 last:border-0">
              <td className="py-0.5">{t.occasions[o.key]}</td>
              <td className="py-0.5 text-center font-bold">{o.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-1 px-2 py-1 bg-dnd-accent-yellow/80 border-l-4 border-dnd-gold">
        <strong>{t.noStack}</strong> {t.cost}
      </p>
    </div>

    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
      <Heading>{t.link}</Heading>
      {t.seasons.map((season) => (
        <span key={season} className="inline-flex items-center gap-1">
          <span className="inline-block w-3 h-3 border border-dnd-ink/60 bg-white" /> {season}
        </span>
      ))}
    </div>
  </div>
);

export default RitualCharging;
