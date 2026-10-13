import Link from "next/link";
import MagicBadge from "@/components/ui/magicBadge";
import PortraitCard from "@/components/ui/portraitCard";
import { findClass, parentsOf, type Rulebook } from "@/lib/rules/character";
import type { Tables } from "@/lib/types/database.types";

/** Class cards linking to each class's rulebook page */
const ClassGrid: React.FC<{ rb: Rulebook; rank: Tables<"classes">["rank"] }> = ({
  rb,
  rank,
}) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-6">
    {rb.classes
      .filter((c) => c.rank === rank)
      .map((c) => (
        <Link
          key={c.id}
          href={`/rulebook/classes/${c.id}`}
          className="block hover:-translate-y-0.5 transition-transform"
        >
          <PortraitCard
            title={c.name}
            imageUrl={c.image_url}
            badges={
              c.magic !== "none" && (
                <span className="rounded-full bg-dnd-bg/90">
                  <MagicBadge magic={c.magic} />
                </span>
              )
            }
            subtitle={parentsOf(rb, c.id)
              .map((id) => findClass(rb, id)?.name)
              .join(" + ")}
          />
        </Link>
      ))}
  </div>
);

export default ClassGrid;
