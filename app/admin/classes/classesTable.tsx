"use client";

import MagicBadge from "@/components/ui/magicBadge";
import {
  aspectsOf,
  choosablePerks,
  coreSpells,
  findClass,
  parentsOf,
  type Rulebook,
} from "@/lib/rules/character";
import { AdminTable, Thumb } from "../_components";

const ClassesTable: React.FC<{ rb: Rulebook }> = ({ rb }) => (
  <AdminTable
    rows={rb.classes}
    rowKey={(c) => c.id}
    href={(c) => `/admin/classes/${c.id}`}
    columns={[
      { label: "Class", render: (c) => c.name },
      { label: "", render: (c) => <Thumb src={c.image_url} />, className: "w-14" },
      { label: "Rank", render: (c) => c.rank },
      { label: "Magic", render: (c) => <MagicBadge magic={c.magic} /> },
      {
        label: "Parents",
        render: (c) =>
          parentsOf(rb, c.id)
            .map((id) => findClass(rb, id)?.name)
            .join(" + ") || "—",
      },
      { label: "Skills", render: (c) => rb.skills.filter((s) => s.class_id === c.id).length },
      { label: "Perks", render: (c) => choosablePerks(rb, c.id).length },
      { label: "Core", render: (c) => coreSpells(rb, c.id).length },
      { label: "Aspects", render: (c) => aspectsOf(rb, c.id).length },
    ]}
  />
);

export default ClassesTable;
