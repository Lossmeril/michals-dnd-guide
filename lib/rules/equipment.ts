// Background starting equipment and the player's picks from it.
// Pure functions only, shared by the editor, the sheet and the server.
//
// A background's equipment is a list of groups. The player takes one option
// of each group (a group with one option is simply given). An option is a
// list of entries, and each entry is one item, or a choice list of items the
// player picks one from:
//
//   Soldier: [ two weapons | a weapon and a shield ], [ gambeson, kettle hat, … ], …
//   [{ options: [
//     { entries: [{ items: [<weapons>], quantity: 1 }, { items: [<weapons>], quantity: 1 }] },
//     { entries: [{ items: [<weapons>], quantity: 1 }, { items: ["shield"], quantity: 1 }] },
//   ] }, { options: [{ entries: [{ items: ["gambeson"], quantity: 1 }] }] }, …]

import { DICTS } from "@/lib/i18n/dictionaries";
import type { Lang } from "@/lib/i18n/localize";
import type { Json, Tables } from "@/lib/types/database.types";

export type Item = Tables<"items">;

/** `note` marks the item as given, e.g. "Silvered"; it goes on the inventory row */
export type EquipmentEntry = { items: string[]; quantity: number; note?: string };
export type EquipmentOption = { entries: EquipmentEntry[] };
export type EquipmentGroup = { options: EquipmentOption[] };

/** The option taken in one group (-1: not chosen yet), and the item picked for each of its entries */
export type EquipmentPick = { option: number; items: (string | null)[] };

/** Groups of item kinds an entry can offer as "any …" */
export const ITEM_SETS = [
  { label: "Any weapon", cs: "Jakákoli zbraň", kind: "weapon", category: null },
  { label: "Any simple weapon", cs: "Jakákoli jednoduchá zbraň", kind: "weapon", category: "simple" },
  { label: "Any martial weapon", cs: "Jakákoli válečná zbraň", kind: "weapon", category: "martial" },
  { label: "Any armour piece", cs: "Jakýkoli kus zbroje", kind: "armour", category: null },
  { label: "Any shield", cs: "Jakýkoli štít", kind: "shield", category: null },
  { label: "Any tool", cs: "Jakýkoli nástroj", kind: "tool", category: null },
  { label: "Any musical instrument", cs: "Jakýkoli hudební nástroj", kind: "tool", category: "instrument" },
] as const;

const JOINS: Record<Lang, { or: string; and: string; orGroup: string }> = {
  en: { or: " or ", and: " and ", orGroup: ", or " },
  cs: { or: " nebo ", and: " a ", orGroup: ", nebo " },
};

/** Manoeuvres a weapon or shield can grant for free */
export const WEAPON_MANOEUVRES = ["precise", "mighty", "cunning", "defense"] as const;

/**
 * The free manoeuvre an item grants by default: only shields, a free Defense
 * once per round. Weapons grant none (dropped 2026-11-11); free manoeuvres
 * come from perks.
 */
export const defaultManoeuvre = (
  item: Pick<Item, "kind" | "damage_type" | "properties">,
): Item["free_manoeuvre"] => (item.kind === "shield" ? "defense" : null);

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
              ...(typeof e.note === "string" && e.note.trim()
                ? { note: e.note.trim() }
                : {}),
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
export const describeEntry = (items: Item[], entry: EquipmentEntry, lang: Lang = "en") => {
  const set = ITEM_SETS.find((s) => sameSet(itemsInSet(items, s), entry.items));
  const what =
    entry.items.length > 1 && set
      ? lang === "cs" ? set.cs : set.label
      : entry.items.map((id) => itemName(items, id)).join(JOINS[lang].or);
  const noted = entry.note ? `${what} (${entry.note.toLowerCase()})` : what;
  return entry.quantity > 1 ? `${entry.quantity}× ${noted}` : noted;
};

export const describeOption = (items: Item[], option: EquipmentOption, lang: Lang = "en") =>
  option.entries
    .map((e, i) =>
      describeEntry(items, e, lang).replace(/^(Any|Jaká|Jaký)/, (w) => (i ? w.toLowerCase() : w)),
    )
    .join(JOINS[lang].and);

/** One line per group: "Any weapon and any weapon, or any weapon and Shield" */
export const describeEquipment = (items: Item[], groups: EquipmentGroup[], lang: Lang = "en") =>
  groups.map((g) => g.options.map((o) => describeOption(items, o, lang)).join(JOINS[lang].orGroup));

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
  lang: Lang = "en",
) => {
  const msg = DICTS[lang].build.errors;
  const errors: string[] = [];
  groups.forEach((g, i) => {
    const pick = picks[i];
    if (!pick || pick.option < 0 || pick.option >= g.options.length) {
      errors.push(msg.gear);
      return;
    }
    g.options[pick.option].entries.forEach((e, j) => {
      const id = pick.items[j];
      if (!id || !e.items.includes(id)) {
        errors.push(msg.gearChoice);
      }
    });
  });
  return [...new Set(errors)];
};

// ----- Bundles -----
//
// A bundle (thieves' tools, a healer's kit) is an item with contents. A
// background offers it as one line; the inventory gets its pieces, each
// tagged with the bundle, so one broken lockpick can be marked on its own.

export type BundlePiece = { item: string; quantity: number };

/** A bundle's pieces; empty for an ordinary item */
export const bundleContents = (item: Pick<Item, "contents"> | undefined): BundlePiece[] =>
  objects(item?.contents)
    .map((p) => ({
      item: typeof p.item === "string" ? p.item : "",
      quantity: Math.max(1, Math.floor(Number(p.quantity) || 1)),
    }))
    .filter((p) => p.item);

export const isBundle = (item: Pick<Item, "contents"> | undefined) =>
  bundleContents(item).length > 0;

/** "File, Lockpicks, 3× Glass jar" */
export const describeContents = (items: Item[], pieces: BundlePiece[]) =>
  pieces
    .map((p) => (p.quantity > 1 ? `${p.quantity}× ` : "") + itemName(items, p.item))
    .join(", ");

/**
 * Inventory rows in order, with a bundle's pieces gathered where its first
 * piece is: [{ bundle: null, rows: [sword] }, { bundle: "thieves-tools", rows: [file, …] }]
 */
export const groupByBundle = <R extends { bundle_id: string | null }>(rows: R[]) => {
  const groups: { bundle: string | null; rows: R[] }[] = [];
  rows.forEach((row) => {
    const group = row.bundle_id && groups.find((g) => g.bundle === row.bundle_id);
    if (group) group.rows.push(row);
    else groups.push({ bundle: row.bundle_id, rows: [row] });
  });
  return groups;
};

/**
 * The inventory rows the picks give, with repeats merged: two longswords are
 * 2× Longsword. A noted item (a silvered sword) stays its own row, and a
 * bundle is unpacked into its pieces.
 */
export const startingItems = (
  items: Item[],
  groups: EquipmentGroup[],
  picks: EquipmentPick[],
) => {
  type Row = { item_id: string; quantity: number; note: string | null; bundle_id: string | null };
  const rows = new Map<string, Row>();
  const add = (item_id: string, quantity: number, note: string | null, bundle_id: string | null) => {
    const key = [item_id, note ?? "", bundle_id ?? ""].join("\u0000");
    const row = rows.get(key) ?? { item_id, quantity: 0, note, bundle_id };
    rows.set(key, { ...row, quantity: row.quantity + quantity });
  };
  groups.forEach((g, i) => {
    const pick = picks[i];
    const option = pick && g.options[pick.option];
    option?.entries.forEach((e, j) => {
      const id = pick.items[j];
      if (!id || !e.items.includes(id)) return;
      const pieces = bundleContents(items.find((it) => it.id === id));
      if (pieces.length === 0) add(id, e.quantity, e.note ?? null, null);
      else pieces.forEach((p) => add(p.item, p.quantity * e.quantity, null, id));
    });
  });
  return [...rows.values()];
};
