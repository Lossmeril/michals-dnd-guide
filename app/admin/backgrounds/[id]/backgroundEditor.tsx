"use client";

import { useL } from "@/lib/i18n/client";
import Link from "next/link";
import { useState } from "react";
import { Overline } from "@/components/ui/typography";
import { NumberField, TextField } from "@/components/ui/formControls";
import Panel from "@/components/ui/panel";
import { equipmentOf, type Item } from "@/lib/rules/equipment";
import { formatCoins } from "@/lib/rules/format";
import type { Json, Tables } from "@/lib/types/database.types";
import { saveBackground } from "../../actions";
import {
  AdminHeader,
  formGrid,
  IdField,
  SaveBar,
  useRowEditor,
} from "../../_components";
import EquipmentBuilder from "./equipmentBuilder";

const BackgroundEditor: React.FC<{
  background: Tables<"backgrounds"> | null;
  items: Item[];
  nextSort: number;
}> = ({ background, items, nextSort }) => {
  const isNew = !background;
  const l = useL();
  const { row, id, set, save, remove, pending } = useRowEditor<
    Tables<"backgrounds">
  >({
    initial: background ?? {
      id: "",
      name: "",
      description: null,
      equipment: [],
      coins_copper: 0,
      material: 0,
      extra_languages: 0,
      known_settings: null,
      sort: nextSort,
    },
    isNew,
    table: "backgrounds",
    listHref: "/admin/backgrounds",
    save: (r) => saveBackground(isNew, r),
  });

  // Kept apart from the row so lines without items yet stay on screen
  const [groups, setGroups] = useState(() => equipmentOf(items, row.equipment));

  return (
    <>
      <AdminHeader
        title={isNew ? "New background" : l(row.name)}
        crumbs={[{ href: "/admin/backgrounds", label: "Backgrounds" }]}
      />
      <Panel as="section" className={formGrid}>
        <TextField label="Name" localized id="name" value={row.name} onChange={(name) => set({ name })} />
        <IdField id={id} isNew={isNew} />
        <TextField
          label="Description" localized
          id="description"
          value={row.description}
          onChange={(v) => set({ description: v || null })}
          multiline
          className="md:col-span-2"
        />
        <NumberField
          label="Coins (in copper)"
          id="coins"
          min={0}
          value={row.coins_copper}
          onChange={(v) => set({ coins_copper: v ?? 0 })}
          hint={`${formatCoins(row.coins_copper)}. 1 gold = 100 silver = 1000 copper.`}
        />
        <NumberField label="Material" id="material" min={0} value={row.material} onChange={(v) => set({ material: v ?? 0 })} />
        <NumberField
          label="Extra languages"
          id="languages"
          min={0}
          value={row.extra_languages}
          onChange={(v) => set({ extra_languages: v ?? 0 })}
        />
        <NumberField label="Sort order" id="sort" value={row.sort} onChange={(v) => set({ sort: v ?? 0 })} />
        <TextField
          label="Known settings" localized
          id="known"
          value={row.known_settings}
          onChange={(v) => set({ known_settings: v || null })}
          hint="Rolls inside these get +1, e.g. the criminal underbelly, fences and hideouts."
          className="md:col-span-2"
        />
      </Panel>
      <section className="mt-10">
        <Overline>Starting gear</Overline>
        <p className="text-sm mb-4">
          Lines are given as they are; a line with several items lets the player pick one.
          Add a choice for things like &ldquo;two weapons, or a weapon and a shield&rdquo;.
          Items themselves are in <Link href="/admin/items" className="link">Items</Link>.
        </p>
        <EquipmentBuilder
          items={items}
          groups={groups}
          onChange={(next) => {
            setGroups(next);
            set({ equipment: next as unknown as Json });
          }}
        />
      </section>
      <SaveBar
        onSave={save}
        pending={pending}
        disabled={!row.name.trim() || !id}
        onDelete={remove}
      />
    </>
  );
};

export default BackgroundEditor;
