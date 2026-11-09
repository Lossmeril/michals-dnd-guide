import { twMerge } from "tailwind-merge";
import { panelClass } from "@/components/ui/panel";
import type { Tables } from "@/lib/types/database.types";
import { SquareImage } from "./perkCard";
import TraitText from "./traitText";

/** A trait's picture, name and texts, e.g. in a list of a character's traits */
const TraitCard: React.FC<{
  trait: Tables<"traits">;
  /** After the name, e.g. "awaiting DM approval" */
  badge?: React.ReactNode;
  className?: string;
}> = ({ trait, badge, className }) => (
  <li
    className={twMerge(panelClass, "p-4 shadow-none flex flex-col gap-2", className)}
  >
    <SquareImage src={trait.image_url} className="w-16" />
    <p className="libre font-bold text-dnd-red">
      {trait.name}
      {badge && (
        <span className="ml-2 text-xs font-normal text-dnd-ink/60">{badge}</span>
      )}
    </p>
    <TraitText trait={trait} />
  </li>
);

/** A grid of trait cards */
export const TraitList: React.FC<{
  traits: Tables<"traits">[];
  /** Shows "awaiting DM approval" on custom traits not approved yet */
  showApproval?: boolean;
  className?: string;
}> = ({ traits, showApproval, className }) => (
  <ul className={twMerge("grid grid-cols-1 md:grid-cols-2 gap-4", className)}>
    {traits.map((t) => (
      <TraitCard
        key={t.id}
        trait={t}
        badge={
          showApproval &&
          t.is_custom &&
          !t.approved_by &&
          "awaiting DM approval"
        }
      />
    ))}
  </ul>
);

export default TraitCard;
