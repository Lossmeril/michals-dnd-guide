import type { IconType } from "react-icons";
import {
  GiD10,
  GiD12,
  GiD4,
  GiDiceEightFacesEight,
  GiDiceTwentyFacesTwenty,
  GiPerspectiveDiceSixFacesRandom,
} from "react-icons/gi";
import { twMerge } from "tailwind-merge";

export const DIE_SIDES = [4, 6, 8, 10, 12, 20] as const;
export type DieSides = (typeof DIE_SIDES)[number];

const ICONS: Record<DieSides, IconType> = {
  4: GiD4,
  6: GiPerspectiveDiceSixFacesRandom,
  8: GiDiceEightFacesEight,
  10: GiD10,
  12: GiD12,
  20: GiDiceTwentyFacesTwenty,
};

const isDie = (n: number): n is DieSides =>
  (DIE_SIDES as readonly number[]).includes(n);

/** The shape of a die, e.g. a d20 icon, without a number on it */
export const DieIcon: React.FC<{ sides: DieSides; className?: string }> = ({
  sides,
  className,
}) => {
  const Icon = ICONS[sides];
  return (
    <Icon
      aria-hidden
      className={twMerge("inline-block shrink-0 text-dnd-red", className)}
    />
  );
};

/**
 * Dice notation with an icon before each die, e.g. "2d6 + 1d4". Text that
 * isn't a die ("+ class level") stays as it is.
 */
export const DiceNotation: React.FC<{ text: string; className?: string }> = ({
  text,
  className,
}) => {
  const parts = text.split(/(\b\d*d(?:4|6|8|10|12|20)\b)/i);
  return (
    <span className={twMerge("whitespace-nowrap font-bold", className)}>
      {parts.map((part, i) => {
        const m = part.match(/^(\d*)d(\d+)$/i);
        if (!m || !isDie(Number(m[2]))) return part;
        return (
          <span key={i} className="inline-flex items-baseline gap-0.5">
            <DieIcon
              sides={Number(m[2]) as DieSides}
              className="self-center w-[1.35em] h-[1.35em]"
            />
            {part.toLowerCase()}
          </span>
        );
      })}
    </span>
  );
};

/** Which face SVG shows a roll; a d10's 10 is printed as 0 */
const faceFile = (sides: DieSides, value: number) =>
  `/img/dice/D${sides}_${sides === 10 && value === 10 ? 0 : value}.svg`;

/** One rolled die, its face drawn in ink */
export const DieFace: React.FC<{
  sides: DieSides;
  value: number;
  /** Greyed out, e.g. the die dropped by advantage */
  dropped?: boolean;
  className?: string;
}> = ({ sides, value, dropped, className }) => {
  const url = `url("${faceFile(sides, value)}")`;
  return (
    <span
      role="img"
      aria-label={`d${sides} showing ${value}${dropped ? ", dropped" : ""}`}
      title={`d${sides}: ${value}`}
      className={twMerge(
        "inline-block w-10 h-10 align-middle bg-dnd-ink",
        dropped && "opacity-30",
        className,
      )}
      style={{
        maskImage: url,
        WebkitMaskImage: url,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    />
  );
};

export type Roll = { sides: DieSides; value: number; dropped: boolean };

/**
 * Reads "d6 4 2" as two d6s showing 4 and 2. A "dN" switches the die for the
 * numbers after it ("d6 4 2 d4 3"); a number in brackets is dropped ("(1)").
 * Returns null when the text isn't a valid roll.
 */
export const parseRoll = (text: string): Roll[] | null => {
  let sides: DieSides | null = null;
  const rolls: Roll[] = [];
  for (const token of text.trim().split(/[\s,]+/)) {
    const die = token.match(/^d(\d+)$/i);
    if (die) {
      const n = Number(die[1]);
      if (!isDie(n)) return null;
      sides = n;
      continue;
    }
    const face = token.match(/^(\()?(\d+)\)?$/);
    if (!face || !sides) return null;
    const value = Number(face[2]);
    if (value < 1 || value > sides) return null;
    rolls.push({ sides, value, dropped: Boolean(face[1]) });
  }
  return rolls.length ? rolls : null;
};

/** A row of rolled dice, e.g. for "he rolls ⚃ ⚁" in an example */
export const RolledDice: React.FC<{ rolls: Roll[]; className?: string }> = ({
  rolls,
  className,
}) => (
  <span className={twMerge("inline-flex gap-1 align-middle mx-0.5", className)}>
    {rolls.map((r, i) => (
      <DieFace key={i} {...r} />
    ))}
  </span>
);
