import { GiBleedingEye, GiTemplarEye } from "react-icons/gi";
import type { Tables } from "@/lib/types/database.types";

const BADGES = {
  full: {
    label: "Magic",
    icon: <GiTemplarEye />,
    color: "border-accent-purple/50 bg-accent-purple/20",
  },
  pseudo: {
    label: "Pseudo-magic",
    icon: <GiBleedingEye />,
    color: "border-accent-green/50 bg-accent-green/20",
  },
};

/** Shown next to a class name; non-magic classes get nothing */
const MagicBadge: React.FC<{ magic: Tables<"classes">["magic"] }> = ({
  magic,
}) => {
  if (magic === "none") return null;
  const { label, icon, color } = BADGES[magic];

  return (
    <span
      className={`inline-flex items-center gap-1 align-middle text-xs font-semibold normal-case rounded-full px-2 py-0.5 border text-dnd-ink/75 ${color}`}
    >
      <span className="text-sm">{icon}</span>
      {label}
    </span>
  );
};

export default MagicBadge;
