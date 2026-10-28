"use client";

import { useL } from "@/lib/i18n/client";
import {
  enumOptions,
  NumberField,
  SelectField,
  TextField,
} from "@/components/ui/formControls";
import Panel from "@/components/ui/panel";
import { defaultManoeuvre, WEAPON_MANOEUVRES } from "@/lib/rules/equipment";
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
  armour: ["light", "medium", "heavy"],
  tool: ["instrument"],
};

const ItemEditor: React.FC<{
  item: Tables<"items"> | null;
  nextSort: number;
}> = ({ item, nextSort }) => {
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
      armour_rating: null,
      free_manoeuvre: null,
      image_url: null,
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
        {(row.kind === "armour" || row.kind === "shield") && (
          <NumberField
            label="Armour rating"
            id="rating"
            min={0}
            value={row.armour_rating}
            onChange={(armour_rating) => set({ armour_rating })}
          />
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
