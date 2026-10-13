import { FaCheck, FaLock } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
import type { PerkState } from "@/lib/rules/character";
import { costOf, DURATION_NAMES } from "@/lib/rules/format";
import type { Tables } from "@/lib/types/database.types";
import { Flavour } from "./typography";

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

const COST_COLORS: Record<string, string> = {
  body: "text-body border-body bg-body/10",
  soul: "text-soul border-soul bg-soul/10",
  charisma: "text-charisma border-charisma bg-charisma/10",
  material: "text-dnd-ink border-dnd-ink/40 bg-material/40",
  coin: "text-dnd-ink border-charisma/60 bg-coin/40",
};

/** "Passive", "Granted automatically" or the activation price as a coloured pill */
export const PerkCost: React.FC<{ perk: Tables<"perks"> }> = ({ perk }) => {
  if (perk.kind === "aspect")
    return (
      <p className="text-xs italic text-dnd-ink/60">Granted automatically</p>
    );
  const cost = costOf(perk);
  if (!cost) return <p className="text-xs italic text-dnd-ink/60">Passive</p>;
  return (
    <p
      className={twMerge(
        "inline-block text-xs font-semibold rounded-full border px-2 py-0.5",
        COST_COLORS[perk.cost_resource!],
      )}
    >
      {cost}
    </p>
  );
};

const RIBBONS = {
  aspect: { text: "Aspect", color: "bg-dnd-gold text-dnd-red-dark" },
  core: { text: "Core spell", color: "bg-soul text-white" },
  spell: { text: "Spell", color: "bg-soul text-white" },
};

const ribbonOf = (perk: Tables<"perks">, core: boolean) =>
  perk.kind === "aspect"
    ? RIBBONS.aspect
    : core
      ? RIBBONS.core
      : perk.kind === "spell"
        ? RIBBONS.spell
        : null;

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
  const ribbon = ribbonOf(perk, core);

  return (
    <div
      className={twMerge(
        "relative h-full flex flex-col bg-dnd-bg border rounded-lg shadow-md overflow-hidden transition-all",
        perk.kind === "aspect" && "bg-dnd-accent-yellow",
        state ? STATE_STYLES[state] : "border-dnd-red-dark",
        compact ? "p-3" : "p-5",
        className,
      )}
    >
      {ribbon && (
        <span
          className={twMerge(
            "absolute top-0 right-0 text-center font-bold uppercase rotate-45",
            compact
              ? "w-24 py-0.5 text-[10px] translate-x-7 translate-y-3"
              : "w-32 py-1 text-xs translate-x-9 translate-y-4",
            ribbon.color,
          )}
        >
          {ribbon.text}
        </span>
      )}

      {compact ? (
        <div className="flex flex-col gap-1 flex-1">
          <PerkImage perk={perk} className="w-16 mb-2" />
          <div className="min-w-0 flex flex-col gap-1">
            <p className="font-bold text-dnd-red libre leading-tight">
              {perk.name}
            </p>
            <div>
              <PerkCost perk={perk} />
            </div>
            <Flavour text={perk.flavour} className="text-xs" />
            {perk.description && (
              <p className="text-xs text-dnd-ink/80 line-clamp-3">
                {perk.description}
              </p>
            )}
            {note && <StateNote state={state} note={note} />}
          </div>
        </div>
      ) : (
        <>
          <PerkImage perk={perk} className="mb-3" />
          <p className="text-xl font-bold text-dnd-red libre leading-tight mb-1 pr-12">
            {perk.name}
          </p>
          <div className="mb-3">
            <PerkCost perk={perk} />
          </div>
          <Flavour text={perk.flavour} className="text-sm mb-2" />
          {perk.description && (
            <p className="text-sm whitespace-pre-line mb-3">
              {perk.description}
            </p>
          )}
          <SpellDetails perk={perk} />
          {requires && (
            <p className="text-xs mb-1">
              <span className="font-bold">Requires:</span> {requires}
            </p>
          )}
          {note && <StateNote state={state} note={note} />}
        </>
      )}

      {onOpen && (
        <button
          type="button"
          onClick={onOpen}
          aria-label={`${perk.name} details`}
          className="absolute inset-0 p-0 rounded-lg bg-transparent hover:bg-transparent"
        />
      )}
      {action && <div className="relative z-10 mt-3">{action}</div>}
    </div>
  );
};

const SpellDetails: React.FC<{ perk: Tables<"perks"> }> = ({ perk }) => {
  const rows = [
    ["Components", perk.components?.join(", ")],
    ["Material", perk.material_note],
    ["Range", perk.range],
    ["Area", perk.area],
    [
      "Damage",
      perk.damage &&
        `${perk.damage}${perk.damage_types?.length ? ` ${perk.damage_types.join("/")}` : ""}`,
    ],
    ["Duration", perk.duration && DURATION_NAMES[perk.duration]],
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
