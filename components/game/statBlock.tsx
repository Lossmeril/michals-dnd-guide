import { twMerge } from "tailwind-merge";
import { RESOURCE_NAMES } from "@/lib/rules/format";
import { type Pool, RESOURCE_STYLES } from "./resources";

interface StatBlockProps {
  resource: Pool;
  /** Points from the starting 15 and level-ups */
  base: number;
  /** Points granted by perks; drawn after the base ones with a coloured border */
  bonus?: number;
  exhausted?: number;
  scarred?: number;
  /** The pool's name in the reader's language; English by default */
  name?: string;
}

/** A line from top-right to bottom-left, plus the other diagonal when scarred */
const Cross: React.FC<{ both: boolean }> = ({ both }) => (
  <svg
    viewBox="0 0 10 20"
    preserveAspectRatio="none"
    className="absolute inset-0 w-full h-full text-dnd-ink"
  >
    <line
      x1="10"
      y1="0"
      x2="0"
      y2="20"
      stroke="currentColor"
      strokeWidth="1.5"
      vectorEffect="non-scaling-stroke"
    />
    {both && (
      <line
        x1="0"
        y1="0"
        x2="10"
        y2="20"
        stroke="currentColor"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
    )}
  </svg>
);

const StatBlock: React.FC<StatBlockProps> = ({
  resource,
  base,
  bonus = 0,
  exhausted = 0,
  scarred = 0,
  name = RESOURCE_NAMES[resource],
}) => {
  const { icon, text, border } = RESOURCE_STYLES[resource];
  const total = base + bonus;

  // Scars take the last points first, exhaustion the ones just before them
  const stateOf = (i: number) =>
    i >= total - scarred
      ? "scarred"
      : i >= total - scarred - exhausted
        ? "exhausted"
        : "fresh";

  return (
    <div
      className="flex items-center gap-3"
      aria-label={`${name}: ${total} points, ${exhausted} exhausted, ${scarred} scarred`}
    >
      <span
        className={twMerge(
          "flex items-center gap-1 w-28 shrink-0 font-bold libre",
          text,
        )}
      >
        <span className="text-xl">{icon}</span>
        {name}
      </span>
      <div className="flex flex-wrap gap-1">
        {Array.from({ length: total }, (_, i) => {
          const state = stateOf(i);
          return (
            <span
              key={i}
              className={twMerge(
                "relative w-5 h-8 rounded-sm border-2 bg-white/60",
                i < base ? "border-dnd-ink/40" : border,
                state === "scarred" && "opacity-40",
              )}
            >
              {state !== "fresh" && <Cross both={state === "scarred"} />}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default StatBlock;
