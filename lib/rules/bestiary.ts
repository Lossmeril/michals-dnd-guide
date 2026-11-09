// The bestiary: five root categories, their subgroups, and the creatures in
// them. See "Bestiary" in docs/ruleset-overview.md.

import type { Tables } from "@/lib/types/database.types";

export type BestiaryCategory = Tables<"bestiary_categories">;
export type Creature = Tables<"creatures">;
export type Bestiary = { categories: BestiaryCategory[]; creatures: Creature[] };

const bySort = <T extends { sort: number }>(a: T, b: T) => a.sort - b.sort;

export const rootCategories = (b: Bestiary) =>
  b.categories.filter((c) => !c.parent_id).sort(bySort);

export const subgroupsOf = (b: Bestiary, parentId: string) =>
  b.categories.filter((c) => c.parent_id === parentId).sort(bySort);

/** Roots, each followed by its subgroups: the order of the bestiary */
export const categoriesInOrder = (b: Bestiary) =>
  rootCategories(b).flatMap((root) => [root, ...subgroupsOf(b, root.id)]);

/** "Monsters › Draconids" */
export const categoryPath = (b: Bestiary, id: string) => {
  const c = b.categories.find((x) => x.id === id);
  if (!c) return "—";
  const parent = b.categories.find((x) => x.id === c.parent_id);
  return parent ? `${parent.name} › ${c.name}` : c.name;
};

/** Creatures in a category, including those in its subgroups */
export const creaturesIn = (b: Bestiary, categoryId: string) => {
  const ids = new Set([categoryId, ...subgroupsOf(b, categoryId).map((c) => c.id)]);
  return b.creatures.filter((c) => ids.has(c.category_id)).sort(bySort);
};

/**
 * The creature's stat block as a rulebook ```npc block: its name and picture
 * come from the creature, and its category stands in for a missing subtitle.
 */
export const creatureStatBlock = (b: Bestiary, c: Creature) => {
  const lines = [`name: ${c.name}`];
  if (c.image_url) lines.push(`image: ${c.image_url}`);
  const category = b.categories.find((x) => x.id === c.category_id);
  if (category && !/^subtitle\s*:/im.test(c.stat_block ?? "")) {
    lines.push(`subtitle: ${category.name}`);
  }
  if (c.stat_block?.trim()) lines.push(c.stat_block.trim());
  return "```npc\n" + lines.join("\n") + "\n```";
};
