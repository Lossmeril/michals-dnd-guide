import ItemIcon from "@/components/game/itemIcon";
import { DataTable } from "@/components/ui/dataTable";
import { fetchRulebook } from "@/lib/endpoints/rulebook";
import { parseSort } from "@/lib/sort";
import { Constants } from "@/lib/types/database.types";
import { AdminHeader } from "../_components";

const KINDS = Constants.public.Enums.item_kind;

const AdminItemsPage = async ({ searchParams }: PageProps<"/admin/items">) => {
  const { sort, dir } = await searchParams;
  const rb = await fetchRulebook();
  // Which backgrounds hand an item out, to see what deleting it would affect
  const givenBy = (id: string) =>
    rb.backgrounds
      .filter((b) => JSON.stringify(b.equipment).includes(`"${id}"`))
      .map((b) => b.name)
      .join(", ");

  return (
    <>
      <AdminHeader
        title="Items"
        newLink={{ href: "/admin/items/new", label: "New item" }}
      />
      <DataTable
        sort={parseSort(sort, dir)}
        rows={rb.items}
        rowKey={(i) => i.id}
        href={(i) => `/admin/items/${i.id}`}
        columns={[
          {
            label: "Item",
            id: "name",
            render: (i) => (
              <span className="flex items-center gap-2">
                <ItemIcon item={i} />
                {i.name}
              </span>
            ),
            sortValue: (i) => i.name,
          },
          {
            label: "Kind",
            render: (i) => [i.kind, i.category].filter(Boolean).join(", "),
            sortValue: (i) => KINDS.indexOf(i.kind) * 100 + (i.sort ?? 0),
          },
          {
            label: "Damage",
            render: (i) => [i.damage, i.damage_type].filter(Boolean).join(" "),
            sortValue: (i) => i.damage,
          },
          { label: "Armour", render: (i) => i.armour_rating, sortValue: (i) => i.armour_rating },
          { label: "Free manoeuvre", render: (i) => i.free_manoeuvre, sortValue: (i) => i.free_manoeuvre },
          { label: "Properties", render: (i) => i.properties },
          { label: "Given by", render: (i) => givenBy(i.id), sortValue: (i) => givenBy(i.id) },
        ]}
      />
    </>
  );
};

export default AdminItemsPage;
