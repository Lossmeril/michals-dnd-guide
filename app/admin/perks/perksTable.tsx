"use client";

import { useState } from "react";
import { PerkImage } from "@/components/ui/perkCard";
import {
  describeRequirements,
  findClass,
  type Rulebook,
} from "@/lib/rules/character";
import { costOf } from "@/lib/rules/format";
import { Constants, type Tables } from "@/lib/types/database.types";
import { AdminTable, type Column, enumOptions } from "../_components";

/** Columns shared by every perk list (also on the race and class editors) */
export const perkColumns = (rb: Rulebook): Column<Tables<"perks">>[] => [
  { label: "Perk", render: (p) => p.name },
  {
    label: "",
    render: (p) => <PerkImage perk={p} className="w-10" />,
    className: "w-14",
  },
  { label: "Kind", render: (p) => p.kind },
  {
    label: "Belongs to",
    render: (p) =>
      p.race_id
        ? rb.races.find((r) => r.id === p.race_id)?.name
        : rb.classPerks
            .filter((cp) => cp.perk_id === p.id)
            .map(
              (cp) =>
                `${findClass(rb, cp.class_id)?.name}${cp.is_core ? " (core)" : ""}`,
            )
            .join(", ") || <span className="text-dnd-red">Nothing</span>,
  },
  { label: "Cost", render: (p) => costOf(p) ?? "Passive" },
  { label: "Requires", render: (p) => describeRequirements(rb, p.id) || "—" },
];

const PerksTable: React.FC<{ rb: Rulebook; initialKind: string | null }> = ({
  rb,
  initialKind,
}) => {
  const [search, setSearch] = useState("");
  const [kind, setKind] = useState(initialKind ?? "");
  const [classId, setClassId] = useState("");

  const rows = rb.perks.filter(
    (p) =>
      (!kind || p.kind === kind) &&
      (!classId ||
        (classId === "none"
          ? !p.race_id && !rb.classPerks.some((cp) => cp.perk_id === p.id)
          : rb.classPerks.some(
              (cp) => cp.perk_id === p.id && cp.class_id === classId,
            ))) &&
      `${p.name} ${p.flavour} ${p.description}`.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <div className="flex flex-wrap gap-3 mb-4">
        <input
          type="search"
          placeholder="Search names and descriptions"
          aria-label="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 min-w-48"
        />
        <select
          aria-label="Kind"
          value={kind}
          onChange={(e) => setKind(e.target.value)}
        >
          <option value="">Every kind</option>
          {enumOptions(Constants.public.Enums.perk_kind).map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <select
          aria-label="Class"
          value={classId}
          onChange={(e) => setClassId(e.target.value)}
        >
          <option value="">Every class</option>
          <option value="none">No class or race</option>
          {rb.classes.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>
      <p className="text-xs text-dnd-ink/60 mb-2">
        {rows.length} of {rb.perks.length}
      </p>
      <AdminTable
        rows={rows}
        rowKey={(p) => p.id}
        href={(p) => `/admin/perks/${p.id}`}
        columns={perkColumns(rb)}
        empty="No perks match."
      />
    </>
  );
};

export default PerksTable;
