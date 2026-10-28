import Link from "next/link";
import { DataTable } from "@/components/ui/dataTable";
import { fetchBestiary } from "@/lib/endpoints/bestiary";
import {
  categoriesInOrder,
  categoryPath,
  creaturesIn,
} from "@/lib/rules/bestiary";
import { parseSort } from "@/lib/sort";
import { AdminHeader, SectionHeader, Thumb } from "../_components";

const AdminBestiaryPage = async ({ searchParams }: PageProps<"/admin/bestiary">) => {
  const { sort, dir } = await searchParams;
  const b = await fetchBestiary();

  return (
    <>
      <AdminHeader
        title="Bestiary"
        newLink={{ href: "/admin/bestiary/creatures/new", label: "New creature" }}
      />

      <section className="mb-12">
        <SectionHeader
          title="Creatures"
        />
        <DataTable
          sort={parseSort(sort, dir)}
          rows={b.creatures}
          rowKey={(c) => c.id}
          href={(c) => `/admin/bestiary/creatures/${c.id}`}
          empty="No creatures yet."
          columns={[
            { label: "Creature", id: "name", render: (c) => c.name, sortValue: (c) => c.name },
            { label: "", render: (c) => <Thumb src={c.image_url} />, className: "w-14" },
            {
              label: "Category",
              render: (c) => categoryPath(b, c.category_id),
              sortValue: (c) => categoryPath(b, c.category_id),
            },
            { label: "Stat block", render: (c) => (c.stat_block?.trim() ? "Yes" : "—") },
          ]}
        />
      </section>

      <section>
        <SectionHeader
          title="Categories"
          actions={
            <Link href="/admin/bestiary/categories/new" className="button button-secondary text-sm">
              New category
            </Link>
          }
        />
        <DataTable
          rows={categoriesInOrder(b)}
          rowKey={(c) => c.id}
          href={(c) => `/admin/bestiary/categories/${c.id}`}
          columns={[
            {
              label: "Category",
              render: (c) =>
                c.parent_id ? (
                  <span className="pl-6">{c.name}</span>
                ) : (
                  <strong className="libre text-dnd-red">{c.name}</strong>
                ),
            },
            { label: "Description", render: (c) => c.description },
            { label: "Creatures", render: (c) => creaturesIn(b, c.id).length },
          ]}
        />
      </section>
    </>
  );
};

export default AdminBestiaryPage;
