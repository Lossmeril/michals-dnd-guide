"use client";

import Link from "next/link";
import { useL } from "@/lib/i18n/client";
import { DataTable } from "@/components/ui/dataTable";
import {
  NumberField,
  SelectField,
  TextField,
} from "@/components/ui/formControls";
import Panel from "@/components/ui/panel";
import PortraitCard from "@/components/ui/portraitCard";
import {
  type Bestiary,
  type BestiaryCategory,
  creaturesIn,
  rootCategories,
  subgroupsOf,
} from "@/lib/rules/bestiary";
import { saveBestiaryCategory } from "../../../actions";
import {
  AdminHeader,
  EditorWithPreview,
  formGrid,
  IdField,
  ImageField,
  SaveBar,
  SectionHeader,
  useRowEditor,
} from "../../../_components";

const CategoryEditor: React.FC<{
  bestiary: Bestiary;
  category: BestiaryCategory | null;
  /** A new subgroup's parent, from ?parent= */
  parentId: string | null;
}> = ({ bestiary: b, category, parentId }) => {
  const isNew = !category;
  const l = useL();
  const { row, id, set, save, remove, pending } = useRowEditor<BestiaryCategory>({
    initial: category ?? {
      id: "",
      parent_id: parentId,
      name: "",
      description: null,
      image_url: null,
      sort: b.categories.filter((c) => c.parent_id === parentId).length,
    },
    isNew,
    table: "bestiary_categories",
    listHref: "/admin/bestiary/categories",
    save: (r) => saveBestiaryCategory(isNew, r),
  });
  const subgroups = isNew ? [] : subgroupsOf(b, row.id);
  // Only two levels: a category with subgroups stays a root
  const parents = rootCategories(b).filter((c) => c.id !== row.id);

  return (
    <>
      <AdminHeader
        title={isNew ? "New category" : l(row.name)}
        crumbs={[{ href: "/admin/bestiary", label: "Bestiary" }]}
      />

      <EditorWithPreview
        preview={
          <PortraitCard
            title={l(row.name) || "Unnamed"}
            imageUrl={row.image_url}
            subtitle={l(row.description)}
          />
        }
      >
        <Panel as="section" className={formGrid}>
          <TextField label="Name" localized id="name" value={row.name} onChange={(name) => set({ name })} />
          <IdField id={id} isNew={isNew} />
          <SelectField
            label="Part of"
            id="parent"
            value={row.parent_id}
            onChange={(parent_id) => set({ parent_id })}
            none="Nothing: a root category"
            options={(subgroups.length ? [] : parents).map((c) => ({
              value: c.id,
              label: l(c.name),
            }))}
            hint={
              subgroups.length
                ? "It has subgroups, so it stays a root category."
                : "Pick a root category to make this one of its subgroups."
            }
          />
          <NumberField label="Sort order" id="sort" value={row.sort} onChange={(sort) => set({ sort: sort ?? 0 })} />
          <TextField
            label="Description" localized
            id="description"
            value={row.description}
            onChange={(description) => set({ description: description || null })}
            multiline
            className="md:col-span-2"
          />
          <div className="md:col-span-2">
            <ImageField target="bestiary" value={row.image_url} onChange={(image_url) => set({ image_url })} />
          </div>
        </Panel>
      </EditorWithPreview>

      {!isNew && !row.parent_id && (
        <section className="mt-12">
          <SectionHeader
            title="Subgroups"
            actions={
              <Link href={`/admin/bestiary/categories/new?parent=${row.id}`} className="button button-secondary text-sm">
                New subgroup
              </Link>
            }
          />
          <DataTable
            rows={subgroups}
            rowKey={(c) => c.id}
            href={(c) => `/admin/bestiary/categories/${c.id}`}
            empty="No subgroups yet."
            columns={[
              { label: "Subgroup", render: (c) => l(c.name) },
              { label: "Description", render: (c) => l(c.description) },
              { label: "Creatures", render: (c) => creaturesIn(b, c.id).length },
            ]}
          />
        </section>
      )}

      {!isNew && (
        <section className="mt-12">
          <SectionHeader
            title="Creatures"
            actions={
              <Link href={`/admin/bestiary/creatures/new?category=${row.id}`} className="button button-secondary text-sm">
                New creature
              </Link>
            }
          />
          <DataTable
            rows={creaturesIn(b, row.id)}
            rowKey={(c) => c.id}
            href={(c) => `/admin/bestiary/creatures/${c.id}`}
            empty="No creatures yet."
            columns={[{ label: "Creature", render: (c) => l(c.name) }]}
          />
        </section>
      )}

      <SaveBar
        onSave={save}
        pending={pending}
        disabled={!row.name.trim() || !id}
        onDelete={remove}
      />
    </>
  );
};

export default CategoryEditor;
