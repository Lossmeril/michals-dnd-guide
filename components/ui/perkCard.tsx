import { twMerge } from "tailwind-merge";
import Eyebrow from "@/components/ui/eyebrow";
import { costOf, spellLine } from "@/lib/rules/format";
import type { Tables } from "@/lib/types/database.types";

const DEFAULT_IMAGE = "/img/perks/default.webp";

/** Square perk picture with the decorative frame on top */
export const PerkImage: React.FC<{
  perk: Tables<"perks">;
  className?: string;
}> = ({ perk, className }) => (
  <div className={twMerge("relative w-24 aspect-square shrink-0", className)}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src={perk.image_url || DEFAULT_IMAGE}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
    />
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src="/img/perks/frame.svg"
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
    />
  </div>
);

interface PerkCardProps {
  perk: Tables<"perks">;
  /** Extra labels, e.g. "core" or "aspect" */
  tags?: string[];
}

const PerkCard: React.FC<PerkCardProps> = ({ perk, tags = [] }) => {
  const spell = spellLine(perk);

  return (
    <div className="relative h-full p-4 bg-dnd-bg border border-dnd-red-dark rounded-lg shadow-md overflow-hidden">
      {perk.kind === "spell" && (
        <span className="absolute top-0 right-0 w-28 py-1 text-center text-xs font-bold uppercase text-white bg-soul rotate-45 translate-x-8 translate-y-3">
          Spell
        </span>
      )}
      <PerkImage perk={perk} className="mb-3" />
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-1">
          {tags.map((t) => (
            <Eyebrow key={t} text={t} />
          ))}
        </div>
      )}
      <p className="text-lg font-bold text-dnd-red libre leading-tight">
        {perk.name}
      </p>
      <p className="text-xs italic text-dnd-ink/60 mb-2">
        {costOf(perk) ?? "Passive"}
      </p>
      {spell && <p className="text-xs text-dnd-ink/75 mb-2">{spell}</p>}
      {perk.description && <p className="text-sm">{perk.description}</p>}
    </div>
  );
};

export default PerkCard;
