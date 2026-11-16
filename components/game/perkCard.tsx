"use client";

import { FaCheck, FaLock } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
import type { PerkState } from "@/lib/rules/character";
import { useDict } from "@/lib/i18n/client";
import {
  componentName,
  costOf,
  damageTypeName,
  durationName,
} from "@/lib/rules/format";
import type { Tables } from "@/lib/types/database.types";
import { Flavour } from "@/components/ui/typography";
import { RESOURCE_STYLES } from "./resources";

/** Markdown emphasis and line breaks removed, for clamped previews */
const plainText = (text: string) =>
  text.replace(/\*\*|\*|__/g, "").replace(/\s*\n+\s*/g, " ");

const DEFAULT_IMAGE = "/img/perks/default.webp";

/**
 * Square picture for perks and traits; the images carry their own frames.
 * Size it by width; the square ratio is applied last so a className can't
 * stretch it.
 */
export const SquareImage: React.FC<{
  src: string | null;
  className?: string;
}> = ({ src, className }) => (
  <div
    className={twMerge(
      "relative w-24 shrink-0",
      className,
      "aspect-square h-auto",
    )}
  >
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src={src || DEFAULT_IMAGE}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
    />
  </div>
);

export const PerkImage: React.FC<{
  perk: Tables<"perks">;
  className?: string;
}> = ({ perk, className }) => (
  <SquareImage src={perk.image_url} className={className} />
);

/** "Passive", "Granted automatically" or the activation price as a coloured pill */
export const PerkCost: React.FC<{ perk: Tables<"perks"> }> = ({ perk }) => {
  const t = useDict();
  if (perk.kind === "aspect")
    return <p className="text-xs italic text-dnd-ink/60">{t.perk.granted}</p>;
  const cost = costOf(perk, t.lang);
  if (!cost)
    return <p className="text-xs italic text-dnd-ink/60">{t.perk.passive}</p>;
  return (
    <p
      className={twMerge(
        "inline-block text-xs font-semibold leading-tight rounded-lg border px-2 py-0.5",
        RESOURCE_STYLES[perk.cost_resource!].pill,
      )}
    >
      {cost}
    </p>
  );
};

const RIBBONS = {
  core: { text: "core", color: "bg-dnd-red-dark text-white" },
  spell: { text: "spell", color: "bg-soul text-white" },
} as const;

const ribbonOf = (perk: Tables<"perks">, core: boolean) =>
  core ? RIBBONS.core : perk.kind === "spell" ? RIBBONS.spell : null;

const STATE_STYLES: Record<PerkState, string> = {
  held: "border-dnd-red ring-2 ring-dnd-red/50",
  available: "border-dnd-gold hover:border-dnd-red hover:shadow-lg",
  full: "border-dnd-gold opacity-60",
  elsewhere: "border-dnd-gold opacity-60",
  locked: "border-dnd-ink/20 opacity-55 grayscale",
};

const StateNote: React.FC<{ state?: PerkState; note: string }> = ({
  state,
  note,
}) => (
  <p
    className={twMerge(
      "flex items-center gap-1.5 text-xs",
      state === "held" ? "text-dnd-red font-semibold" : "text-dnd-ink/70",
    )}
  >
    {state === "held" && <FaCheck className="shrink-0" />}
    {state === "locked" && <FaLock className="shrink-0" />}
    {note}
  </p>
);

interface PerkCardProps {
  perk: Tables<"perks">;
  /** A core spell of the class it's shown in */
  core?: boolean;
  /** How the perk relates to the character; omit for plain rulebook display */
  state?: PerkState;
  /** Status line, e.g. "Picked" or "Needs Fighter 5" */
  note?: string | null;
  /** Requirements, listed on the full card */
  requires?: string;
  /** Small card for grids and trees; opens details on click */
  compact?: boolean;
  onOpen?: () => void;
  /** A button under the card, e.g. "Pick" */
  action?: React.ReactNode;
  className?: string;
}

const PerkCard: React.FC<PerkCardProps> = ({
  perk,
  core = false,
  state,
  note,
  requires,
  compact = false,
  onOpen,
  action,
  className,
}) => {
  const t = useDict();
  if (perk.kind === "aspect")
    return (
      <AspectCard
        {...{ perk, state, note, requires, compact, onOpen, action, className }}
      />
    );

  const ribbon = ribbonOf(perk, core);

  return (
    <div
      className={twMerge(
        "relative h-full flex flex-col bg-dnd-bg border rounded-lg shadow-md overflow-hidden transition-all",
        state ? STATE_STYLES[state] : "border-dnd-red-dark",
        compact ? "p-3" : "p-5",
        className,
      )}
    >
      {ribbon && (
        <span
          className={twMerge(
            "absolute top-0 right-0 text-center font-bold uppercase whitespace-nowrap rotate-45 shadow-sm",
            // The band's centre sits on the corner's diagonal, far enough in that the label fits the visible part
            compact
              ? "w-32 py-0.5 text-[10px] leading-4 translate-x-[33px] translate-y-[23px]"
              : "w-40 py-1 text-xs leading-4 translate-x-[43px] translate-y-[25px]",
            ribbon.color,
          )}
        >
          {t.perk[ribbon.text]}
        </span>
      )}

      {compact ? (
        <div className="flex flex-col gap-1.5 flex-1">
          <div
            className={twMerge("flex items-center gap-3", ribbon && "pr-12")}
          >
            <PerkImage perk={perk} className="w-12" />
            <div className="min-w-0 flex flex-col gap-1">
              <p className="font-bold text-dnd-red libre leading-tight line-clamp-2">
                {perk.name}
              </p>
              <div>
                <PerkCost perk={perk} />
              </div>
            </div>
          </div>
          <Flavour text={perk.flavour} className="text-xs line-clamp-2" />
          {perk.description && (
            <p className="text-xs text-dnd-ink/80 line-clamp-3">
              {plainText(perk.description)}
            </p>
          )}
          {note && (
            <div className="mt-auto pt-1">
              <StateNote state={state} note={note} />
            </div>
          )}
        </div>
      ) : (
        <>
          <PerkImage perk={perk} className="mb-3" />
          <p className="text-base font-bold text-dnd-red libre leading-tight mb-1 pr-12">
            {perk.name}
          </p>
          <div className="mb-3">
            <PerkCost perk={perk} />
          </div>
          <Flavour text={perk.flavour} className="text-xs mb-2" />
          {perk.description && (
            <p className="text-xs whitespace-pre-line mb-3">
              {perk.description}
            </p>
          )}
          <SpellDetails perk={perk} />
          {requires && (
            <p className="text-xs mb-1">
              <span className="font-bold">{t.perk.requires}</span> {requires}
            </p>
          )}
          {note && <StateNote state={state} note={note} />}
        </>
      )}

      {onOpen && (
        <button
          type="button"
          onClick={onOpen}
          aria-label={t.perk.details(perk.name)}
          className="absolute inset-0 p-0 rounded-lg bg-transparent hover:bg-transparent"
        />
      )}
      {action && <div className="relative z-10 mt-3">{action}</div>}
    </div>
  );
};

/**
 * An aspect: a vertical card with its picture across the top, fading into the
 * card, and the name and text under it. It stands at the head of its perks,
 * in the first column of their grid. No ribbon and no flavour line.
 */
const AspectCard: React.FC<Omit<PerkCardProps, "core">> = ({
  perk,
  state,
  note,
  requires,
  compact = false,
  onOpen,
  action,
  className,
}) => {
  const t = useDict();
  return (
    <div
      className={twMerge(
        "relative h-full flex flex-col bg-dnd-accent-yellow border rounded-lg shadow-md overflow-hidden transition-all",
        state ? STATE_STYLES[state] : "border-dnd-red-dark",
        className,
      )}
    >
      <div className="relative w-full aspect-[4/3] shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={perk.image_url || DEFAULT_IMAGE}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-dnd-accent-yellow to-transparent" />
      </div>
      <div
        className={twMerge(
          "min-w-0 flex-1 flex flex-col -mt-2 relative",
          compact ? "px-3 pb-3 gap-1.5" : "px-5 pb-5 gap-2",
        )}
      >
        <p className="text-[10px] font-bold uppercase tracking-widest text-dnd-ink/60">
          {t.print.tags.aspect}
        </p>
        <p
          className={twMerge(
            "font-bold text-dnd-red libre leading-tight",
            compact ? "text-lg line-clamp-2" : "text-xl",
          )}
        >
          {perk.name}
        </p>
        <PerkCost perk={perk} />
        {perk.description && (
          <p
            className={twMerge(
              "text-xs",
              compact ? "text-dnd-ink/80 line-clamp-6" : "whitespace-pre-line",
            )}
          >
            {compact ? plainText(perk.description) : perk.description}
          </p>
        )}
        {!compact && requires && (
          <p className="text-xs">
            <span className="font-bold">{t.perk.requires}</span> {requires}
          </p>
        )}
        {note && (
          <div className="mt-auto pt-1">
            <StateNote state={state} note={note} />
          </div>
        )}
        {action && <div className="relative z-10 mt-1">{action}</div>}
      </div>
      {onOpen && (
        <button
          type="button"
          onClick={onOpen}
          aria-label={t.perk.details(perk.name)}
          className="absolute inset-0 p-0 rounded-lg bg-transparent hover:bg-transparent"
        />
      )}
    </div>
  );
};

const SpellDetails: React.FC<{ perk: Tables<"perks"> }> = ({ perk }) => {
  const t = useDict();
  const types = perk.damage_types
    ?.map((d) => damageTypeName(d, t.lang))
    .join("/");
  const damage =
    t.lang === "cs"
      ? perk.damage?.replace(/(\d|\b)d(\d)/g, "$1k$2")
      : perk.damage;
  const rows = [
    [
      t.perk.components,
      perk.components?.map((c) => componentName(c, t.lang)).join(", "),
    ],
    [t.perk.material, perk.material_note],
    [t.perk.range, perk.range],
    [t.perk.area, perk.area],
    [t.perk.damage, damage && `${damage}${types ? ` ${types}` : ""}`],
    [t.perk.duration, perk.duration && durationName(perk.duration, t.lang)],
  ].filter(([, value]) => value);

  if (rows.length === 0) return null;
  return (
    <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-xs mb-3 p-3 rounded bg-soul/5 border border-soul/20">
      {rows.map(([label, value]) => (
        <div key={label} className="contents">
          <dt className="font-bold">{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
};

export default PerkCard;
