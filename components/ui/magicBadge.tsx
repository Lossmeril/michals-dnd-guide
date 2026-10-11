import { GiBleedingEye, GiTemplarEye } from "react-icons/gi";
import type { Tables } from "@/lib/types/database.types";

const BADGES = {
  full: { label: "Magic", icon: <GiTemplarEye /> },
  pseudo: { label: "Pseudo-magic", icon: <GiBleedingEye /> },
};

/** Shown next to a class name; non-magic classes get nothing */
const MagicBadge: React.FC<{ magic: Tables<"classes">["magic"] }> = ({
  magic,
}) => {
  if (magic === "none") return null;
  const { label, icon } = BADGES[magic];

  return (
    <span className="inline-flex items-center gap-1 align-middle text-xs font-semibold normal-case rounded-full px-2 py-0.5 border border-accent-purple/50 bg-accent-purple/20 text-dnd-ink/75">
      <span className="text-sm">{icon}</span>
      {label}
    </span>
  );
};

export default MagicBadge;
