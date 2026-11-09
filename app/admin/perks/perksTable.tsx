"use client";

import { useState } from "react";
import { PerkImage } from "@/components/game/perkCard";
import {
  describeRequirements,
  findClass,
  type Rulebook,
} from "@/lib/rules/character";
import { costOf } from "@/lib/rules/format";
import { Constants, type Tables } from "@/lib/types/database.types";
import { type Column, DataTable } from "@/components/ui/dataTable";
import { enumOptions, Select } from "@/components/ui/formControls";
import { useTableSort } from "@/components/ui/sortLink";

/**
 * Where a perk sits in rulebook order: its first class in the class list
 * (basic, advanced, mighty), then races in race order. Perks belonging to
 * nothing get null and sort last.
 */
const ownerRank = (rb: Rulebook, p: Tables<"perks">) => {
  if (p.race_id) {
    return rb.classes.length + rb.races.findIndex((r) => r.id === p.race_id);
  }
  const ranks = rb.classPerks
    .filter((cp) => cp.perk_id === p.id)
    .map((cp) => rb.classes.findIndex((c) => c.id === cp.class_id));
  return ranks.length ? Math.min(...ranks) : null;
};

const KIND_ORDER = Constants.public.Enums.perk_kind;

/** Columns shared by every perk list (also on the race and class editors) */
export const perkColumns = (rb: Rulebook): Column<Tables<"perks">>[] => [
  { label: "Perk", id: "name", render: (p) => p.name, sortValue: (p) => p.name },
  {
    label: "",
    render: (p) => <PerkImage perk={p} className="w-10" />,
    className: "w-14",
  },
  {
    label: "Kind",
    render: (p) => p.kind,
    sortValue: (p) => KIND_ORDER.indexOf(p.kind),
  },
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
    sortValue: (p) => ownerRank(rb, p),
  },
  {
    label: "Cost",
    render: (p) => costOf(p) ?? "Passive",
    // Passive first, then by what's paid and how much
    sortValue: (p) =>
      p.cost_resource ? `${p.cost_resource} ${p.cost_amount ?? 99}` : "",
  },
  {
    label: "Requires",
    render: (p) => describeRequirements(rb, p.id) || "—",
    sortValue: (p) => describeRequirements(rb, p.id),
  },
];

const PerksTable: React.FC<{ rb: Rulebook; initialKind: string | null }> = ({
  rb,
  initialKind,
}) => {
  const [search, setSearch] = useState("");
  const [kind, setKind] = useState(initialKind ?? "");
  const [classId, setClassId] = useState("");
  const sort = useTableSort();

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
        <Select
          aria-label="Kind"
          className="w-auto"
          value={kind}
          onChange={(v) => setKind(v ?? "")}
          none="Every kind"
          options={enumOptions(Constants.public.Enums.perk_kind)}
        />
        <Select
          aria-label="Class"
          className="w-auto"
          value={classId}
          onChange={(v) => setClassId(v ?? "")}
          none="Every class"
          options={[
            { value: "none", label: "No class or race" },
            ...rb.classes.map((c) => ({ value: c.id, label: c.name })),
          ]}
        />
      </div>
      <p className="text-xs text-dnd-ink/60 mb-2">
        {rows.length} of {rb.perks.length}
      </p>
      <DataTable
        rows={rows}
        rowKey={(p) => p.id}
        href={(p) => `/admin/perks/${p.id}`}
        columns={perkColumns(rb)}
        sort={sort}
        empty="No perks match."
      />
    </>
  );
};

export default PerksTable;
