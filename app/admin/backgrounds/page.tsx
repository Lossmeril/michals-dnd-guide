import EquipmentList from "@/components/game/equipmentList";
import { DataTable } from "@/components/ui/dataTable";
import { fetchRulebook } from "@/lib/endpoints/rulebook";
import { formatCoins } from "@/lib/rules/format";
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
          { label: "Equipment", render: (b) => <EquipmentList items={rb.items} equipment={b.equipment} /> },
          { label: "Coins", render: (b) => formatCoins(b.coins_copper), sortValue: (b) => b.coins_copper },
          { label: "Material", render: (b) => b.material, sortValue: (b) => b.material },
          { label: "Languages", render: (b) => `+${b.extra_languages}`, sortValue: (b) => b.extra_languages },
          { label: "+1 in", render: (b) => b.known_settings },
        ]}
      />
    </>
  );
};

export default AdminBackgroundsPage;
