import { DataTable } from "@/components/ui/dataTable";
import { fetchRulebook } from "@/lib/endpoints/rulebook";
import { formatCoins } from "@/lib/rules/format";
import { FORTUNES, variantsOf } from "@/lib/rules/fortune";
import { parseSort } from "@/lib/sort";
import { AdminHeader } from "../_components";

const AdminBackgroundsPage = async ({ searchParams }: PageProps<"/admin/backgrounds">) => {
  const { sort, dir } = await searchParams;
  const rb = await fetchRulebook();
  return (
    <>
      <AdminHeader
        title="Backgrounds"
        newLink={{ href: "/admin/backgrounds/new", label: "New background" }}
      />
      <DataTable
        sort={parseSort(sort, dir)}
        rows={rb.backgrounds}
        rowKey={(b) => b.id}
        href={(b) => `/admin/backgrounds/${b.id}`}
        columns={[
          { label: "Background", id: "name", render: (b) => b.name, sortValue: (b) => b.name },
          {
            label: "Purse (poor / commoner / fortunate)",
            render: (b) => {
              const v = variantsOf(b);
              return FORTUNES.map((f) => `${formatCoins(v[f].coins_copper)}, ${v[f].material} M`).join(" / ");
            },
          },
          { label: "Languages", render: (b) => `+${b.extra_languages}`, sortValue: (b) => b.extra_languages },
          { label: "Known setting", render: (b) => b.known_settings },
        ]}
      />
    </>
  );
};

export default AdminBackgroundsPage;
