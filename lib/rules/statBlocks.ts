// Stat blocks for NPCs, companions, units, networks and organizations, written
// in the rulebook as a fenced block (```npc … ```). See the Stat blocks page
// and the cheat sheet in the page editor for the format. Field values and
// sections can be translated like any text: "Town guard |cs| Městský strážný".
// The blocks' own labels and rules are in the dictionaries (statBlock).

import { localize, type Lang } from "@/lib/i18n/localize";

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
  lang: Lang,
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
    name: localize(name, lang),
    subtitle: localize(subtitle, lang),
    fields: fields.map(([k, v]) => [k, localize(v, lang)]),
    sections: sections.map((s) => ({
      title: localize(s.title, lang),
      text: localize(s.text.trim(), lang),
    })),
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

/** Unit sizes: Body track multiplier and payment multiplier */
export const UNIT_SIZES = {
  handful: { body: 2, payment: 5 },
  band: { body: 4, payment: 25 },
  horde: { body: 8, payment: 125 },
} as const;
export type UnitSize = keyof typeof UNIT_SIZES;

export const unitSizeOf = (value: string | undefined): UnitSize | undefined => {
  const key = value?.trim().toLowerCase().split(/\s/)[0];
  return key && key in UNIT_SIZES ? (key as UnitSize) : undefined;
};

/** Companion kinds: does it act right after its master, or on its own initiative? */
export const COMPANION_ROLES = {
  familiar: { afterMaster: true },
  summon: { afterMaster: true },
  animal: { afterMaster: false },
  hireling: { afterMaster: false },
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

/** Points a network splits between its tracks */
export const NETWORK_TRACK_POINTS = 12;
