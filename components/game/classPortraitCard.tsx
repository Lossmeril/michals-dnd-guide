import PortraitCard from "@/components/ui/portraitCard";
import type { Tables } from "@/lib/types/database.types";
import MagicBadge from "./magicBadge";

/** A class's portrait card with its magic badge over the picture */
const ClassPortraitCard: React.FC<
  Omit<React.ComponentProps<typeof PortraitCard>, "title" | "imageUrl" | "badges"> & {
    cls: Pick<Tables<"classes">, "name" | "image_url" | "magic">;
  }
> = ({ cls, ...props }) => (
  <PortraitCard
    title={cls.name || "Unnamed"}
    imageUrl={cls.image_url}
    badges={
      cls.magic !== "none" && (
        <span className="rounded-full bg-dnd-bg/90">
          <MagicBadge magic={cls.magic} />
        </span>
      )
    }
    {...props}
  />
);

export default ClassPortraitCard;
