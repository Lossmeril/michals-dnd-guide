// Stat blocks for NPCs, companions, units, networks and organizations, written
// in the rulebook as a fenced block (```npc … ```). See the Stat blocks page
// and the cheat sheet in the page editor for the format.

export const STAT_BLOCK_KINDS = [
  "npc",
  "companion",
  "unit",
  "network",
  "organization",
] as const;
export type StatBlockKind = (typeof STAT_BLOCK_KINDS)[number];

export const isStatBlockKind = (s: string | null | undefined): s is StatBlockKind =>
  (STAT_BLOCK_KINDS as readonly string[]).includes(s ?? "");

export const STAT_BLOCK_LABELS: Record<StatBlockKind, string> = {
  npc: "NPC",
  companion: "Companion",
  unit: "Unit",
  network: "Network",
  organization: "Organization",
};

export interface StatBlockData {
  kind: StatBlockKind;
  name: string;
  /** The italic line under the name: "Medium human, ordinary" */
  subtitle?: string;
  /** `key: value` lines in the order written; keys are lower case */
  fields: [string, string][];
  /** `## Title` sections, Markdown */
  sections: { title: string; text: string }[];
}

const FIELD = /^([a-z][a-z0-9 ]*?)\s*:\s*(.*)$/i;

/**
 * Reads a stat block:
 *
 *     name: Town guard
 *     subtitle: Medium human, ordinary
 *     body: 11
 *     ## Actions
 *     ***Spear.*** …
 *
 * Fields come first, one per line; sections start at the first `## `.
 */
export const parseStatBlock = (
  kind: StatBlockKind,
  source: string,
): StatBlockData => {
  const fields: [string, string][] = [];
  const sections: StatBlockData["sections"] = [];

  for (const line of source.split("\n")) {
    const heading = line.match(/^##\s+(.*)$/);
    if (heading) {
      sections.push({ title: heading[1].trim(), text: "" });
      continue;
    }
    const section = sections.at(-1);
    if (section) {
      section.text += line + "\n";
      continue;
    }
    const field = line.match(FIELD);
    if (field) fields.push([field[1].toLowerCase(), field[2].trim()]);
    // A line that doesn't fit continues the previous field
    else if (line.trim() && fields.length) fields.at(-1)![1] += " " + line.trim();
  }

  const take = (key: string) => {
    const i = fields.findIndex(([k]) => k === key);
    return i < 0 ? undefined : fields.splice(i, 1)[0][1];
  };
  const name = take("name") || "Unnamed";
  const subtitle = take("subtitle");

  return {
    kind,
    name,
    subtitle,
    fields,
    sections: sections.map((s) => ({ ...s, text: s.text.trim() })),
  };
};

/** A field's value, or undefined when it's missing or empty */
export const fieldOf = (data: StatBlockData, key: string) =>
  data.fields.find(([k]) => k === key)?.[1] || undefined;

/** The first number in a field: "59 (huge)" → 59 */
export const numberOf = (value: string | undefined) => {
  const m = value?.match(/-?\d+/);
  return m ? Number(m[0]) : undefined;
};

// -----------------------------------------------------------------------------
// Rules the blocks print alongside the numbers
// -----------------------------------------------------------------------------

/** Unit sizes: Body track multiplier, payment multiplier, who's big enough to hurt it */
export const UNIT_SIZES = {
  handful: { label: "Handful", body: 2, payment: 5, harmedBy: "more than one person" },
  band: { label: "Band", body: 4, payment: 25, harmedBy: "more than a handful" },
  horde: { label: "Horde", body: 8, payment: 125, harmedBy: "more than a band" },
} as const;
export type UnitSize = keyof typeof UNIT_SIZES;

export const unitSizeOf = (value: string | undefined): UnitSize | undefined => {
  const key = value?.trim().toLowerCase().split(/\s/)[0];
  return key && key in UNIT_SIZES ? (key as UnitSize) : undefined;
};

/** Companion kinds and when they act */
export const COMPANION_ROLES = {
  familiar: { label: "Familiar", turn: "Right after its master, on the master's initiative" },
  summon: { label: "Summon", turn: "Right after its master, on the master's initiative" },
  animal: { label: "Animal companion", turn: "Its own initiative" },
  hireling: { label: "Hireling", turn: "Its own initiative" },
} as const;
export type CompanionRole = keyof typeof COMPANION_ROLES;

export const companionRoleOf = (
  value: string | undefined,
): CompanionRole | undefined => {
  const v = value?.toLowerCase() ?? "";
  return (Object.keys(COMPANION_ROLES) as CompanionRole[]).find((r) =>
    v.startsWith(r),
  );
};

/** An organization's Reach, from DrD2's Standing table */
export const REACH_LEVELS: Record<number, string> = {
  1: "A few people and some say in one community",
  2: "Influences a small region",
  3: "Decides a small region's key questions, or advises on bigger ones",
  4: "Shapes decisions across the land, or decisive in a large region",
  5: "Decisive across the land",
};

/** Points a network splits between its tracks */
export const NETWORK_TRACK_POINTS = 12;
