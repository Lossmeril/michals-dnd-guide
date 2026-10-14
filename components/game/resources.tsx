// The look of each resource, used everywhere it appears: stat blocks, perk
// prices, rulebook text. Names live in lib/rules/format.ts.

import { GiBiceps, GiDramaMasks, GiSheikahEye } from "react-icons/gi";
import { RESOURCE_NAMES } from "@/lib/rules/format";

export type Pool = "body" | "soul" | "charisma";
export type ResourceKey = Pool | "material" | "coin";

export const RESOURCE_STYLES: Record<
  ResourceKey,
  {
    /** Text in the resource's colour */
    text: string;
    /** Border in the resource's colour, e.g. bonus points in a stat block */
    border: string;
    /** A tinted pill, e.g. a perk's price */
    pill: string;
    icon?: React.ReactNode;
  }
> = {
  body: {
    text: "text-body",
    border: "border-body",
    pill: "text-body border-body bg-body/10",
    icon: <GiBiceps />,
  },
  soul: {
    text: "text-soul",
    border: "border-soul",
    pill: "text-soul border-soul bg-soul/10",
    icon: <GiSheikahEye />,
  },
  charisma: {
    text: "text-charisma",
    border: "border-charisma",
    pill: "text-charisma border-charisma bg-charisma/10",
    icon: <GiDramaMasks />,
  },
  material: {
    text: "text-dnd-ink",
    border: "border-dnd-ink/40",
    pill: "text-dnd-ink border-dnd-ink/40 bg-material/40",
  },
  coin: {
    text: "text-[#9a7d1a]",
    border: "border-charisma/60",
    pill: "text-dnd-ink border-charisma/60 bg-coin/40",
  },
};

/** A resource's name in its colour, e.g. <ResourceName r="body" /> */
export const ResourceName: React.FC<{
  r: ResourceKey;
  children?: React.ReactNode;
}> = ({ r, children }) => (
  <strong className={RESOURCE_STYLES[r].text}>
    {children ?? (r === "coin" ? "Coins" : RESOURCE_NAMES[r])}
  </strong>
);
