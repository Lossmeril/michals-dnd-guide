import { twMerge } from "tailwind-merge";
import {
  describeEquipment,
  equipmentOf,
  type Item,
} from "@/lib/rules/equipment";
import type { Json } from "@/lib/types/database.types";

/** A background's starting gear, one line per group: "Any weapon and Shield, or …" */
const EquipmentList: React.FC<{
  items: Item[];
  equipment: Json;
  className?: string;
}> = ({ items, equipment, className }) => {
  const lines = describeEquipment(items, equipmentOf(items, equipment));
  if (lines.length === 0) return null;
  return (
    <ul className={twMerge("list-disc pl-4 space-y-0.5", className)}>
      {lines.map((line, i) => (
        <li key={i}>{line}</li>
      ))}
    </ul>
  );
};

export default EquipmentList;
