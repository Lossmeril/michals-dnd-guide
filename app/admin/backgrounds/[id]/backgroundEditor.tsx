"use client";

import { useL } from "@/lib/i18n/client";
import Link from "next/link";
import { useState } from "react";
import { Overline } from "@/components/ui/typography";
import { NumberField, TextField } from "@/components/ui/formControls";
import Panel from "@/components/ui/panel";
import { type EquipmentGroup, equipmentOf, type Item } from "@/lib/rules/equipment";
import { type Fortune, FORTUNES, JUMPSTART_TABLES, type Variant, variantsOf } from "@/lib/rules/fortune";
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

const FORTUNE_LABELS: Record<Fortune, string> = {
  poor: "Poor",
  commoner: "Commoner",
  fortunate: "Fortunate",
};

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
      variants: {},
      archetypes: null,
      quirks: null,
      ideals: null,
      bonds: null,
      flaws: null,
      extra_languages: 0,
      known_settings: null,
      sort: nextSort,
    },
    isNew,
    table: "backgrounds",
    listHref: "/admin/backgrounds",
    save: (r) => saveBackground(isNew, r),
  });

  const variants = variantsOf(row);
  const setVariant = (fortune: Fortune, patch: Partial<Variant>) =>
    set({ variants: { ...variants, [fortune]: { ...variants[fortune], ...patch } } as unknown as Json });
  // Kept apart from the row so lines without items yet stay on screen
  const [groups, setGroups] = useState(
    () => Object.fromEntries(FORTUNES.map((f) => [f, equipmentOf(items, variants[f].equipment)])) as Record<Fortune, EquipmentGroup[]>,
  );

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
      {FORTUNES.map((fortune) => (
        <section key={fortune} className="mt-10">
          <Overline>{FORTUNE_LABELS[fortune]}</Overline>
          <Panel className={`${formGrid} mb-4`}>
            <TextField
              label="Who they were" localized
              id={`${fortune}-label`}
              value={variants[fortune].label}
              onChange={(label) => setVariant(fortune, { label })}
              hint="One line, e.g. a veteran of a few campaigns."
              className="md:col-span-2"
            />
            <NumberField
              label="Coins (in copper)"
              id={`${fortune}-coins`}
              min={0}
              value={variants[fortune].coins_copper}
              onChange={(v) => setVariant(fortune, { coins_copper: v ?? 0 })}
              hint={`${formatCoins(variants[fortune].coins_copper)}. 1 gold = 100 silver = 1000 copper.`}
            />
            <NumberField
              label="Material"
              id={`${fortune}-material`}
              min={0}
              value={variants[fortune].material}
              onChange={(v) => setVariant(fortune, { material: v ?? 0 })}
            />
          </Panel>
          <EquipmentBuilder
            items={items}
            groups={groups[fortune]}
            onChange={(next) => {
              setGroups({ ...groups, [fortune]: next });
              setVariant(fortune, { equipment: next as unknown as Json });
            }}
          />
        </section>
      ))}
      <section className="mt-10">
        <Overline>Jumpstart tables</Overline>
        <p className="text-sm mb-4">
          Eight lines each, one per d8 result; the ninth, &ldquo;make up your own&rdquo;, is
          added on its own. Archetypes are <code>Name | text | recommended</code>, ideals{" "}
          <code>Name | text</code>. Gear lines are given as they are; a line with several
          items lets the player pick one. Items are in{" "}
          <Link href="/admin/items" className="link">Items</Link>.
        </p>
        <Panel className={formGrid}>
          {JUMPSTART_TABLES.map((table) => (
            <TextField
              key={table}
              label={table[0].toUpperCase() + table.slice(1)}
              localized
              multiline
              id={table}
              value={row[table]}
              onChange={(v) => set({ [table]: v || null })}
              className="md:col-span-2"
            />
          ))}
        </Panel>
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
