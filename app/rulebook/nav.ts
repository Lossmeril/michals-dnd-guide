// The rulebook's chapters and pages, in reading order. Drives the sidebar,
// the breadcrumbs and the previous/next links.

export type RulebookPage = { slug: string; title: string };
export type Chapter = { title: string; pages: RulebookPage[] };

export const CHAPTERS: Chapter[] = [
  {
    title: "Basics",
    pages: [
      { slug: "", title: "What this game is" },
      { slug: "dice", title: "Dice rolls" },
      { slug: "advantage", title: "Advantage and bonus dice" },
    ],
  },
  {
    title: "Resources",
    pages: [
      { slug: "resources", title: "Resources" },
      { slug: "danger-level", title: "Danger Level" },
      { slug: "exhaustion", title: "Exhaustion" },
      { slug: "scars", title: "Scars" },
      { slug: "healing", title: "Healing" },
      { slug: "item-scars", title: "Item scars" },
      { slug: "dying", title: "Dying" },
    ],
  },
  {
    title: "Combat",
    pages: [
      { slug: "combat", title: "Turns and actions" },
      { slug: "defending", title: "Defending" },
      { slug: "armour", title: "Damage and armour" },
      { slug: "manoeuvres", title: "Manoeuvres" },
      { slug: "conditions", title: "Conditions" },
    ],
  },
  {
    title: "Characters",
    pages: [
      { slug: "creating-a-character", title: "Creating a character" },
      { slug: "races", title: "Races" },
      { slug: "backgrounds", title: "Backgrounds" },
      { slug: "languages", title: "Languages" },
      { slug: "traits", title: "Traits" },
      { slug: "leveling", title: "Leveling" },
    ],
  },
  {
    title: "Classes",
    pages: [
      { slug: "classes", title: "How classes work" },
      { slug: "basic-classes", title: "Basic classes" },
      { slug: "advanced-classes", title: "Advanced classes and aspects" },
      { slug: "mighty-classes", title: "Mighty classes" },
    ],
  },
  {
    title: "World",
    pages: [
      { slug: "coins-and-material", title: "Coins and Material" },
      { slug: "travel", title: "Travel" },
    ],
  },
];

export const hrefOf = (slug: string) => (slug ? `/rulebook/${slug}` : "/rulebook");

const ALL = CHAPTERS.flatMap((chapter) =>
  chapter.pages.map((page) => ({ ...page, chapter })),
);

/** The page, its chapter, and its neighbours in reading order */
export const locate = (slug: string) => {
  const i = ALL.findIndex((p) => p.slug === slug);
  return {
    page: ALL[i],
    chapter: ALL[i]?.chapter,
    prev: ALL[i - 1] ?? null,
    next: ALL[i + 1] ?? null,
  };
};
