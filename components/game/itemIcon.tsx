import type { IconType } from "react-icons";
import {
  GiCheckedShield,
  GiChestArmor,
  GiCrossedSwords,
  GiKnapsack,
  GiShirt,
  GiToolbox,
} from "react-icons/gi";
import { twMerge } from "tailwind-merge";
import type { Tables } from "@/lib/types/database.types";

/** Stand-ins for items without their own picture */
const KIND_ICONS: Record<Tables<"items">["kind"], IconType> = {
  weapon: GiCrossedSwords,
  armour: GiChestArmor,
  shield: GiCheckedShield,
  clothing: GiShirt,
  tool: GiToolbox,
  gear: GiKnapsack,
};

/** An item's square picture, or an ink icon of its kind */
const ItemIcon: React.FC<{
  item: Pick<Tables<"items">, "kind" | "image_url"> | undefined;
  className?: string;
}> = ({ item, className }) => {
  const box = twMerge(
    "w-8 h-8 shrink-0 rounded border border-dnd-gold bg-dnd-bg",
    className,
  );
  if (item?.image_url) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={item.image_url} alt="" className={twMerge(box, "object-cover")} />;
  }
  const Icon = KIND_ICONS[item?.kind ?? "gear"];
  return (
    <span className={twMerge(box, "inline-flex items-center justify-center text-dnd-ink/70")}>
      <Icon aria-hidden className="w-3/5 h-3/5" />
    </span>
  );
};

export default ItemIcon;
