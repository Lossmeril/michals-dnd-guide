// Starting gear by fortune (docs/ruleset-overview.md, Backgrounds › The redesign).
// In three sections (arms and armour, the background, a mount) the player says
// how fortunate the character has been: poor, commoner or fortunate. The
// starting level sets which fortunes they get. Pure functions only, shared by
// the editor, the sheet and the server.

import { DICTS } from "@/lib/i18n/dictionaries";
import type { Lang } from "@/lib/i18n/localize";
import type { Json, Tables } from "@/lib/types/database.types";
import { armourTotals } from "./armour";

export const FORTUNES = ["poor", "commoner", "fortunate"] as const;
export type Fortune = (typeof FORTUNES)[number];

export const FORTUNE_SECTIONS = ["arms", "background", "mount"] as const;
export type FortuneSection = (typeof FORTUNE_SECTIONS)[number];
export type Fortunes = Partial<Record<FortuneSection, Fortune>>;

type Item = Tables<"items">;

const rank = (f: Fortune) => FORTUNES.indexOf(f);

/** The fortunes a starting level hands out, to spread over the three sections */
export const FORTUNES_BY_START: Record<number, Fortune[]> = {
  3: ["commoner", "commoner", "poor"],
  7: ["fortunate", "commoner", "poor"],
  9: ["fortunate", "commoner", "commoner"],
};

/** The fortunes still free, once the ones already given to sections are taken out */
export const fortunesLeft = (startLevel: number, fortunes: Fortunes) => {
  const left = [...(FORTUNES_BY_START[startLevel] ?? [])];
  for (const s of FORTUNE_SECTIONS) {
    const i = fortunes[s] ? left.indexOf(fortunes[s]) : -1;
    if (i >= 0) left.splice(i, 1);
  }
  return left;
};

export const parseFortunes = (json: Json): Fortunes => {
  const obj = typeof json === "object" && json && !Array.isArray(json) ? json : {};
  return Object.fromEntries(
    FORTUNE_SECTIONS.flatMap((s) => {
      const v = (obj as Record<string, unknown>)[s];
      return (FORTUNES as readonly unknown[]).includes(v) ? [[s, v]] : [];
    }),
  );
};

export const parseArms = (json: Json): string[] =>
  Array.isArray(json) ? json.filter((v): v is string => typeof v === "string") : [];

// ----- Arms and armour: the same for every background -----

/**
 * What each fortune allows: weapons and shields in hand (at most one shield),
 * and the armour's total Protection. Swords and other dear items carry their
 * own least fortune (`items.min_fortune`).
 */
export const ARMS: Record<Fortune, { hands: number; protection: number }> = {
  poor: { hands: 1, protection: 1 },
  commoner: { hands: 2, protection: 3 },
  fortunate: { hands: 2, protection: 6 },
};

/** Items that can be taken with arms and armour at all */
export const isArmsItem = (item: Pick<Item, "kind">) =>
  item.kind === "weapon" || item.kind === "shield" || item.kind === "armour";

/** Whether the fortune is enough for the item (a sword needs fortunate) */
export const affordable = (item: Pick<Item, "min_fortune">, fortune: Fortune | undefined) =>
  !!fortune && rank(item.min_fortune) <= rank(fortune);

/** A ranged weapon comes with its quiver and 20 pieces of ammunition */
const AMMUNITION: Record<string, string[]> = {
  shortbow: ["quiver", "arrows"],
  longbow: ["quiver", "arrows"],
  "light-crossbow": ["quiver", "bolts"],
  "heavy-crossbow": ["quiver", "bolts"],
  sling: ["sling-bullets"],
};

export const armsErrors = (
  items: Item[],
  picks: string[],
  fortune: Fortune | undefined,
  lang: Lang = "en",
) => {
  const e = DICTS[lang].fortune.errors;
  if (!fortune) return [e.unset];
  const errors: string[] = [];
  const taken = picks.map((id) => items.find((i) => i.id === id)).filter((i): i is Item => !!i);
  if (taken.length < picks.length || taken.some((i) => !isArmsItem(i))) errors.push(e.notArms);
  const inHand = taken.filter((i) => i.kind === "weapon" || i.kind === "shield");
  const limit = ARMS[fortune];
  if (inHand.length > limit.hands) errors.push(e.hands(limit.hands));
  if (taken.filter((i) => i.kind === "shield").length > 1) errors.push(e.shields);
  for (const i of taken.filter((i) => !affordable(i, fortune))) errors.push(e.tooDear(i.name));
  const armour = armourTotals(taken);
  if (armour.doubled.length) errors.push(e.slots);
  if (armour.protection > limit.protection) errors.push(e.protection(limit.protection));
  return [...new Set(errors)];
};

// ----- Mounts -----

export const MOUNTS: Record<Fortune, string | null> = {
  poor: null,
  commoner: "riding-horse",
  fortunate: "warhorse",
};

// ----- The background's three variants -----

export type Variant = {
  /** "A veteran of a few campaigns" */
  label: string;
  /** Equipment groups, as in lib/rules/equipment.ts */
  equipment: Json;
  coins_copper: number;
  material: number;
};

export const variantsOf = (background: Pick<Tables<"backgrounds">, "variants"> | undefined) => {
  const raw = background?.variants;
  const obj = typeof raw === "object" && raw && !Array.isArray(raw) ? raw : {};
  return Object.fromEntries(
    FORTUNES.map((f) => {
      const v = (obj as Record<string, unknown>)[f];
      const o = typeof v === "object" && v && !Array.isArray(v) ? (v as Record<string, Json>) : {};
      return [
        f,
        {
          label: typeof o.label === "string" ? o.label : "",
          equipment: Array.isArray(o.equipment) ? o.equipment : [],
          coins_copper: Math.max(0, Number(o.coins_copper) || 0),
          material: Math.max(0, Number(o.material) || 0),
        },
      ];
    }),
  ) as Record<Fortune, Variant>;
};

// ----- Jumpstart tables -----
//
// One entry per line; archetypes are "Name | text | recommended", ideals
// "Name | text". The ninth line, "make up your own", is added when shown.

export const JUMPSTART_TABLES = ["archetypes", "quirks", "ideals", "bonds", "flaws"] as const;
export type JumpstartTable = (typeof JUMPSTART_TABLES)[number];

export type JumpstartLine = { name?: string; text: string; recommended?: string };

export const jumpstartLines = (text: string | null | undefined, table: JumpstartTable): JumpstartLine[] =>
  (text ?? "")
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .map((line) => {
      const parts = line.split("|").map((p) => p.trim());
      if (table === "archetypes") return { name: parts[0], text: parts[1] ?? "", recommended: parts[2] };
      if (table === "ideals" && parts.length > 1) return { name: parts[0], text: parts[1] };
      return { text: line };
    });

/** The text a picked line adds to personality or backstory */
export const jumpstartText = (line: JumpstartLine) =>
  line.name ? `${line.name}. ${line.text}` : line.text;

// ----- Inventory rows -----

type Row = { item_id: string; quantity: number; note: string | null; bundle_id: string | null };

/** The arms and armour taken, with ammunition for ranged weapons, and the mount */
export const armsAndMountItems = (
  items: Item[],
  picks: string[],
  mountFortune: Fortune | undefined,
): Row[] => {
  const known = new Set(items.map((i) => i.id));
  const rows = new Map<string, Row>();
  const add = (id: string) => {
    if (!known.has(id)) return;
    const row = rows.get(id) ?? { item_id: id, quantity: 0, note: null, bundle_id: null };
    rows.set(id, { ...row, quantity: row.quantity + 1 });
  };
  picks.forEach(add);
  // One quiver, however many bows
  new Set(picks.flatMap((id) => AMMUNITION[id] ?? [])).forEach(add);
  const mount = mountFortune && MOUNTS[mountFortune];
  if (mount) add(mount);
  return [...rows.values()];
};
