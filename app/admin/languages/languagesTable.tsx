"use client";

import type { Tables } from "@/lib/types/database.types";
import { AdminTable } from "../_components";

type Row = { language: Tables<"languages">; races: string[] };

const LanguagesTable: React.FC<{ rows: Row[] }> = ({ rows }) => (
  <AdminTable
    rows={rows}
    rowKey={(r) => r.language.id}
    href={(r) => `/admin/languages/${r.language.id}`}
    columns={[
      { label: "Language", render: (r) => r.language.name },
      { label: "Description", render: (r) => r.language.description },
      { label: "Racial language of", render: (r) => r.races.join(", ") || "—" },
    ]}
  />
);

export default LanguagesTable;
