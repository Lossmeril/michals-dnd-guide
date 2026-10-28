// Background starting equipment and the player's picks from it.
// Pure functions only, shared by the editor, the sheet and the server.
//
// A background's equipment is a list of groups. The player takes one option
// of each group (a group with one option is simply given). An option is a
// list of entries, and each entry is one item, or a choice list of items the
// player picks one from:
//
//   Soldier: [ two weapons | a weapon and a shield ], [ chain shirt ], …
//   [{ options: [
//     { entries: [{ items: [<weapons>], quantity: 1 }, { items: [<weapons>], quantity: 1 }] },
//     { entries: [{ items: [<weapons>], quantity: 1 }, { items: ["shield"], quantity: 1 }] },
//   ] }, { options: [{ entries: [{ items: ["chain-shirt"], quantity: 1 }] }] }, …]

import type { Json, Tables } from "@/lib/types/database.types";

export type Item = Tables<"items">;

export type EquipmentEntry = { items: string[]; quantity: number };
export type EquipmentOption = { entries: EquipmentEntry[] };
export type EquipmentGroup = { options: EquipmentOption[] };

/** The option taken in one group (-1: not chosen yet), and the item picked for each of its entries */
export type EquipmentPick = { option: number; items: (string | null)[] };

/** Groups of item kinds an entry can offer as "any …" */
export const ITEM_SETS = [
  { label: "Any weapon", kind: "weapon", category: null },
  { label: "Any simple weapon", kind: "weapon", category: "simple" },
  { label: "Any martial weapon", kind: "weapon", category: "martial" },
  { label: "Any armour", kind: "armour", category: null },
  { label: "Any light armour", kind: "armour", category: "light" },
  { label: "Any medium armour", kind: "armour", category: "medium" },
  { label: "Any heavy armour", kind: "armour", category: "heavy" },
  { label: "Any shield", kind: "shield", category: null },
  { label: "Any tool", kind: "tool", category: null },
  { label: "Any musical instrument", kind: "tool", category: "instrument" },
] as const;

/** Manoeuvres a weapon or shield can grant for free */
export const WEAPON_MANOEUVRES = ["precise", "mighty", "cunning", "defense"] as const;

/**
 * The free manoeuvre a proper weapon grants by default: shields Defense,
 * crossbows Mighty, bows Precise, otherwise by damage type (piercing Cunning,
 * slashing Precise, bludgeoning Mighty). The admin can pick another per item.
 */
export const defaultManoeuvre = (
  item: Pick<Item, "kind" | "damage_type" | "properties">,
): Item["free_manoeuvre"] => {
  const properties = item.properties?.toLowerCase() ?? "";
  if (item.kind === "shield") return "defense";
  if (item.kind !== "weapon") return null;
  if (properties.includes("loading")) return "mighty";
  if (properties.includes("ammunition")) return "precise";
  switch (item.damage_type?.toLowerCase()) {
    case "piercing":
      return "cunning";
    case "slashing":
      return "precise";
    case "bludgeoning":
      return "mighty";
    default:
      return null;
  }
};

export const itemsInSet = (items: Item[], set: (typeof ITEM_SETS)[number]) =>
  items
    .filter(
      (i) =>
        i.kind === set.kind && (set.category === null || i.category === set.category),
    )
    .map((i) => i.id);

const isObject = (v: unknown): v is Record<string, unknown> =>
  typeof v === "object" && v !== null && !Array.isArray(v);

/** The objects in a JSON array; anything else is skipped */
const objects = (v: unknown): Record<string, unknown>[] =>
  Array.isArray(v) ? (v as unknown[]).filter(isObject) : [];

/**
 * A background's equipment, with unknown items (e.g. deleted ones) and the
 * groups they leave empty dropped
 */
export const equipmentOf = (
  items: Item[],
  equipment: Json | undefined,
): EquipmentGroup[] => {
  const known = new Set(items.map((i) => i.id));
  return objects(equipment)
    .map((g) => ({
      options: objects(g.options)
        .map((o) => ({
          entries: objects(o.entries)
            .map((e) => ({
              items: (Array.isArray(e.items) ? (e.items as unknown[]) : []).filter(
                (id): id is string => typeof id === "string" && known.has(id),
              ),
              quantity: Math.max(1, Math.floor(Number(e.quantity) || 1)),
            }))
            .filter((e) => e.items.length > 0),
        }))
        .filter((o) => o.entries.length > 0),
    }))
    .filter((g) => g.options.length > 0);
};

/** Stored picks, read back from the database */
export const parsePicks = (json: Json): EquipmentPick[] =>
  objects(json).map((p) => ({
    option: typeof p.option === "number" ? p.option : -1,
    items: (Array.isArray(p.items) ? (p.items as unknown[]) : []).map((i) =>
      typeof i === "string" ? i : null,
    ),
  }));

// ----- Describing -----

export const itemName = (items: Item[], id: string) =>
  items.find((i) => i.id === id)?.name ?? id;

const sameSet = (a: string[], b: string[]) =>
  a.length === b.length && a.every((id) => b.includes(id));

/** "Shield", "2× Torch", "Any martial weapon", "Spear or Longsword" */
export const describeEntry = (items: Item[], entry: EquipmentEntry) => {
  const set = ITEM_SETS.find((s) => sameSet(itemsInSet(items, s), entry.items));
  const what =
    entry.items.length > 1 && set
      ? set.label
      : entry.items.map((id) => itemName(items, id)).join(" or ");
  return entry.quantity > 1 ? `${entry.quantity}× ${what}` : what;
};

export const describeOption = (items: Item[], option: EquipmentOption) =>
  option.entries
    .map((e, i) => describeEntry(items, e).replace(/^Any /, i ? "any " : "Any "))
    .join(" and ");

/** One line per group: "Any weapon and any weapon, or any weapon and Shield" */
export const describeEquipment = (items: Item[], groups: EquipmentGroup[]) =>
  groups.map((g) => g.options.map((o) => describeOption(items, o)).join(", or "));

// ----- Picking -----

const entryDefault = (entry: EquipmentEntry) =>
  entry.items.length === 1 ? entry.items[0] : null;

/** Fresh picks: groups without a choice are taken, everything else waits for the player */
export const defaultPicks = (groups: EquipmentGroup[]): EquipmentPick[] =>
  groups.map((g) =>
    g.options.length === 1
      ? { option: 0, items: g.options[0].entries.map(entryDefault) }
      : { option: -1, items: [] },
  );

/** The pick for a group, fitted to the group's current shape */
export const pickFor = (
  groups: EquipmentGroup[],
  picks: EquipmentPick[],
  groupIndex: number,
): EquipmentPick => {
  const group = groups[groupIndex];
  const pick = picks[groupIndex];
  const option =
    group.options.length === 1
      ? 0
      : pick && pick.option >= 0 && pick.option < group.options.length
        ? pick.option
        : -1;
  if (option < 0) return { option, items: [] };
  return {
    option,
    items: group.options[option].entries.map((e, i) =>
      pick?.option === option && pick.items[i] && e.items.includes(pick.items[i]!)
        ? pick.items[i]
        : entryDefault(e),
    ),
  };
};

export const withOption = (
  groups: EquipmentGroup[],
  picks: EquipmentPick[],
  groupIndex: number,
  option: number,
): EquipmentPick[] =>
  groups.map((g, i) =>
    i === groupIndex
      ? { option, items: g.options[option].entries.map(entryDefault) }
      : pickFor(groups, picks, i),
  );

export const withItem = (
  groups: EquipmentGroup[],
  picks: EquipmentPick[],
  groupIndex: number,
  entryIndex: number,
  itemId: string | null,
): EquipmentPick[] =>
  groups.map((_, i) => {
    const pick = pickFor(groups, picks, i);
    if (i !== groupIndex) return pick;
    const items = [...pick.items];
    items[entryIndex] = itemId;
    return { ...pick, items };
  });

/** What still needs choosing, as messages for the checklist */
export const equipmentErrors = (
  groups: EquipmentGroup[],
  picks: EquipmentPick[],
) => {
  const errors: string[] = [];
  groups.forEach((g, i) => {
    const pick = picks[i];
    if (!pick || pick.option < 0 || pick.option >= g.options.length) {
      errors.push("Choose your starting gear.");
      return;
    }
    g.options[pick.option].entries.forEach((e, j) => {
      const id = pick.items[j];
      if (!id || !e.items.includes(id)) {
        errors.push("Pick an item for each choice in your starting gear.");
      }
    });
  });
  return [...new Set(errors)];
};

/** The items the picks give, with repeats merged: two longswords are 2× Longsword */
export const startingItems = (
  groups: EquipmentGroup[],
  picks: EquipmentPick[],
) => {
  const quantities = new Map<string, number>();
  groups.forEach((g, i) => {
    const pick = picks[i];
    const option = pick && g.options[pick.option];
    option?.entries.forEach((e, j) => {
      const id = pick.items[j];
      if (id && e.items.includes(id)) {
        quantities.set(id, (quantities.get(id) ?? 0) + e.quantity);
      }
    });
  });
  return [...quantities].map(([item_id, quantity]) => ({ item_id, quantity }));
};
