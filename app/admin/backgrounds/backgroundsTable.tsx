"use client";

import { formatCoins } from "@/lib/rules/format";
import type { Tables } from "@/lib/types/database.types";
import { AdminTable } from "../_components";

const BackgroundsTable: React.FC<{ rows: Tables<"backgrounds">[] }> = ({ rows }) => (
  <AdminTable
    rows={rows}
    rowKey={(b) => b.id}
    href={(b) => `/admin/backgrounds/${b.id}`}
    columns={[
      { label: "Background", render: (b) => b.name },
      { label: "Equipment", render: (b) => b.equipment },
      { label: "Coins", render: (b) => formatCoins(b.coins_copper) },
      { label: "Material", render: (b) => b.material },
      { label: "Languages", render: (b) => `+${b.extra_languages}` },
      { label: "+1 in", render: (b) => b.known_settings },
    ]}
  />
);

export default BackgroundsTable;
