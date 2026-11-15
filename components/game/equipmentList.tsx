import {
  bundleContents,
  describeContents,
  describeEquipment,
  equipmentOf,
  type Item,
} from "@/lib/rules/equipment";
import type { Lang } from "@/lib/i18n/localize";
import type { Json } from "@/lib/types/database.types";

/**
 * A background's starting gear, one line per group: "Any weapon and Shield, or …",
 * then what's inside each kit it offers
 */
const EquipmentList: React.FC<{
  items: Item[];
  equipment: Json;
  className?: string;
  lang?: Lang;
}> = ({ items, equipment, className, lang = "en" }) => {
  const groups = equipmentOf(items, equipment);
  const lines = describeEquipment(items, groups, lang);
  if (lines.length === 0) return null;
  const bundles = [
    ...new Set(groups.flatMap((g) => g.options.flatMap((o) => o.entries.flatMap((e) => e.items)))),
  ]
    .map((id) => items.find((i) => i.id === id))
    .filter((i): i is Item => bundleContents(i).length > 0);
  return (
    <div className={className}>
      <ul className="list-disc pl-4 space-y-0.5">
        {lines.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
      {bundles.length > 0 && (
        <ul className="mt-1 pl-4 text-xs text-dnd-ink/70 space-y-0.5">
          {bundles.map((b) => (
            <li key={b.id}>
              <strong>{b.name}:</strong> {describeContents(items, bundleContents(b))}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EquipmentList;
