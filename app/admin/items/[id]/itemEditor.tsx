"use client";

import { useL } from "@/lib/i18n/client";
import {
  Checkbox,
  CheckboxGroup,
  enumOptions,
  NumberField,
  SelectField,
  TextField,
} from "@/components/ui/formControls";
import Panel from "@/components/ui/panel";
import { ARMOUR_SLOTS, type ArmourSlot } from "@/lib/rules/armour";
import {
  bundleContents,
  type BundlePiece,
  defaultManoeuvre,
  WEAPON_MANOEUVRES,
} from "@/lib/rules/equipment";
import { formatCoins } from "@/lib/rules/format";
import { Constants, type Tables } from "@/lib/types/database.types";
import { saveItem } from "../../actions";
import {
  AdminHeader,
  formGrid,
  IdField,
  ImageField,
  SaveBar,
  useRowEditor,
} from "../../_components";

const CATEGORIES: Partial<Record<Tables<"items">["kind"], string[]>> = {
  weapon: ["simple", "martial"],
  tool: ["instrument", "kit"],
};

/**
 * A bundle's pieces (thieves' tools: file, lockpicks, …). Backgrounds offer
 * the bundle as one line; the inventory gets the pieces.
 */
const ContentsEditor: React.FC<{
  items: Tables<"items">[];
  selfId: string;
  value: BundlePiece[];
  onChange: (pieces: BundlePiece[]) => void;
}> = ({ items, selfId, value, onChange }) => {
  const l = useL();
  // A bundle holds ordinary items only, never another bundle or itself
  const options = items
    .filter((i) => i.id !== selfId && bundleContents(i).length === 0)
    .map((i) => ({ value: i.id, label: l(i.name) }));
  const update = (index: number, piece: Partial<BundlePiece>) =>
    onChange(value.map((p, i) => (i === index ? { ...p, ...piece } : p)));

  return (
    <div className="md:col-span-2 flex flex-col gap-2">
      <p className="text-sm font-bold">Contents</p>
      <p className="text-xs text-dnd-ink/60">
        Makes this item a bundle, like 5E&apos;s kits. Backgrounds offer it as one line; the
        character&apos;s inventory gets the pieces, grouped under its name.
      </p>
      {value.map((piece, i) => (
        <div key={i} className="flex items-center gap-2">
          <NumberField
            label="Quantity"
            id={`piece-${i}-quantity`}
            min={1}
            value={piece.quantity}
            onChange={(q) => update(i, { quantity: q ?? 1 })}
            className="w-24"
          />
          <SelectField
            label="Item"
            id={`piece-${i}-item`}
            value={piece.item}
            options={options}
            onChange={(item) => item && update(i, { item })}
            className="flex-1"
          />
          <button
            type="button"
            className="button-secondary self-end"
            onClick={() => onChange(value.filter((_, j) => j !== i))}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        className="button-link self-start"
        disabled={options.length === 0}
        onClick={() => onChange([...value, { item: options[0].value, quantity: 1 }])}
      >
        Add a piece →
      </button>
    </div>
  );
};

const ItemEditor: React.FC<{
  item: Tables<"items"> | null;
  items: Tables<"items">[];
  nextSort: number;
}> = ({ item, items, nextSort }) => {
  const isNew = !item;
  const l = useL();
  const { row, id, set, save, remove, pending } = useRowEditor<Tables<"items">>({
    initial: item ?? {
      id: "",
      name: "",
      kind: "gear",
      category: null,
      description: null,
      damage: null,
      damage_type: null,
      properties: null,
      protection: null,
      burden: null,
      slots: null,
      harness: false,
      price_copper: 0,
      free_manoeuvre: null,
      image_url: null,
      contents: [],
      sort: nextSort,
    },
    isNew,
    table: "items",
    listHref: "/admin/items",
    save: (r) => saveItem(isNew, r),
  });
  const categories = CATEGORIES[row.kind];
  const suggested = defaultManoeuvre(row);

  return (
    <>
      <AdminHeader
        title={isNew ? "New item" : l(row.name)}
        crumbs={[{ href: "/admin/items", label: "Items" }]}
      />
      <Panel as="section" className={formGrid}>
        <TextField label="Name" localized id="name" value={row.name} onChange={(name) => set({ name })} />
        <IdField id={id} isNew={isNew} />
        <SelectField
          label="Kind"
          id="kind"
          value={row.kind}
          options={enumOptions(Constants.public.Enums.item_kind)}
          onChange={(v) =>
            set({ kind: v as Tables<"items">["kind"], category: null })
          }
        />
        {categories ? (
          <SelectField
            label="Category"
            id="category"
            value={row.category}
            none="—"
            options={enumOptions(categories)}
            onChange={(category) => set({ category })}
            hint={'Backgrounds can offer "any martial weapon" and the like by category.'}
          />
        ) : (
          <div />
        )}
        {row.kind === "weapon" && (
          <>
            <TextField
              label="Damage"
              id="damage"
              value={row.damage}
              placeholder="1d8"
              onChange={(v) => set({ damage: v || null })}
            />
            <TextField
              label="Damage type"
              id="damage-type"
              value={row.damage_type}
              placeholder="slashing"
              onChange={(v) => set({ damage_type: v || null })}
            />
          </>
        )}
        {row.kind === "armour" && (
          <>
            <NumberField
              label="Protection"
              id="protection"
              min={0}
              value={row.protection}
              onChange={(protection) => set({ protection })}
              hint="Added up over the worn pieces: 1–3 light, 4–6 medium, 7+ heavy armour rating."
            />
            <NumberField
              label="Burden"
              id="burden"
              min={0}
              value={row.burden}
              onChange={(burden) => set({ burden })}
              hint="Added up the same way; its tier sets the encumbrance in Body."
            />
            <CheckboxGroup
              label="Slots"
              options={enumOptions(ARMOUR_SLOTS)}
              selected={row.slots ?? []}
              onChange={(slots) =>
                set({ slots: slots.length ? (slots as ArmourSlot[]) : null })
              }
              hint="One piece per slot. A long hauberk takes body and arms."
            />
            <Checkbox
              label="Part of a plate harness (a full fitted harness: −3 Burden)"
              checked={row.harness}
              onChange={(harness) => set({ harness })}
              className="self-center"
            />
          </>
        )}
        {(row.kind === "weapon" || row.kind === "shield") && (
          <SelectField
            label="Free manoeuvre"
            id="free-manoeuvre"
            value={row.free_manoeuvre}
            none="None (improvised)"
            options={enumOptions(WEAPON_MANOEUVRES)}
            onChange={(v) =>
              set({ free_manoeuvre: v as Tables<"items">["free_manoeuvre"] })
            }
            hint={
              suggested && row.free_manoeuvre !== suggested
                ? `The default for this weapon is ${suggested}.`
                : "Granted free in combat. Shields grant Defense once per round."
            }
          />
        )}
        <TextField
          label="Properties"
          id="properties"
          value={row.properties}
          placeholder="Finesse, Light, Thrown (4/12 m)"
          onChange={(v) => set({ properties: v || null })}
          className="md:col-span-2"
        />
        {(row.kind === "tool" || row.kind === "gear") && (
          <ContentsEditor
            items={items}
            selfId={id}
            value={bundleContents(row)}
            onChange={(pieces) => set({ contents: pieces })}
          />
        )}
        <TextField
          label="Description" localized
          id="description"
          value={row.description}
          onChange={(v) => set({ description: v || null })}
          multiline
          className="md:col-span-2"
        />
        <div className="md:col-span-2">
          <ImageField
            target="items"
            square
            value={row.image_url}
            onChange={(image_url) => set({ image_url })}
          />
          <p className="text-xs text-dnd-ink/60 mt-1">
            Square, shown small. Without one, the item gets an icon of its kind.
          </p>
        </div>
        <NumberField
          label="Price (copper)"
          id="price"
          min={0}
          value={row.price_copper}
          onChange={(v) => set({ price_copper: v ?? 0 })}
          hint={`${formatCoins(row.price_copper)}. Kept for the DM's price tables; not shown to players.`}
        />
        <NumberField label="Sort order" id="sort" value={row.sort} onChange={(v) => set({ sort: v ?? 0 })} />
      </Panel>
      <SaveBar
        onSave={save}
        pending={pending}
        disabled={!row.name.trim() || !id}
        onDelete={remove}
      />
    </>
  );
};

export default ItemEditor;
