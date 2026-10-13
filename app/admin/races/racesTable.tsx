"use client";

import type { Tables } from "@/lib/types/database.types";
import { AdminTable, Thumb } from "../_components";

type Row = {
  race: Tables<"races">;
  language: string | null;
  perks: string[];
};

const RacesTable: React.FC<{ rows: Row[] }> = ({ rows }) => (
  <AdminTable
    rows={rows}
    rowKey={(r) => r.race.id}
    href={(r) => `/admin/races/${r.race.id}`}
    columns={[
      { label: "Race", render: (r) => r.race.name },
      { label: "", render: (r) => <Thumb src={r.race.image_url} />, className: "w-14" },
      { label: "Blurb", render: (r) => r.race.blurb },
      { label: "Language", render: (r) => r.language ?? "—" },
      { label: "Racial perks", render: (r) => r.perks.join(", ") || "—" },
    ]}
  />
);

export default RacesTable;
