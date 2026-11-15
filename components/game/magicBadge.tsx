"use client";

import { GiBleedingEye, GiTemplarEye } from "react-icons/gi";
import { useDict } from "@/lib/i18n/client";
import type { Tables } from "@/lib/types/database.types";

const BADGES = {
  awakened: {
    label: "awakened",
    icon: <GiTemplarEye />,
    color: "border-accent-purple/50 bg-accent-purple/20",
  },
  latent: {
    label: "latent",
    icon: <GiBleedingEye />,
    color: "border-accent-green/50 bg-accent-green/20",
  },
};

/** Shown next to a class name; dormant classes get nothing */
const MagicBadge: React.FC<{ magic: Tables<"classes">["magic"] }> = ({
  magic,
}) => {
  const t = useDict();
  if (magic === "dormant") return null;
  const { label, icon, color } = BADGES[magic];

  return (
    <span
      className={`inline-flex items-center gap-1 align-middle text-xs font-semibold normal-case rounded-full px-2 py-0.5 border text-dnd-ink/75 ${color}`}
    >
      <span className="text-sm">{icon}</span>
      {t.magic[label as "awakened" | "latent"]}
    </span>
  );
};

export default MagicBadge;
