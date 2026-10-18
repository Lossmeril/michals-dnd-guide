/**
 * Everything the credits page (/credits) lists. Add an entry whenever a
 * picture, rule or library comes from someone else; leave `by` empty while
 * the source is unknown and the page shows it as missing.
 */

export interface Credit {
  /** What is credited: "Class portraits", "Dračí Doupě 2" */
  what: string;
  /** Who made it, or where it came from */
  by?: string;
  href?: string;
  license?: string;
  licenseHref?: string;
  /** What we took from it, or anything else worth saying */
  note?: string;
  /** A picture in /public, shown as a thumbnail */
  image?: string;
}

export interface CreditSection {
  title: string;
  intro?: string;
  items: Credit[];
}

export const CREDITS: CreditSection[] = [
  {
    title: "Rules",
    intro:
      "The ruleset is Michal's own, stitched together from games we love. These are the ones it borrows from.",
    items: [
      {
        what: "Dračí Doupě 2",
        by: "Altar",
        href: "https://www.altar.cz/drd2/",
        note: "The backbone: resources instead of attributes, Danger Level, exhaustion and Scars, classes as bundles of skills.",
      },
      {
        what: "Dungeons & Dragons 5th Edition",
        by: "Wizards of the Coast",
        href: "https://dnd.wizards.com/resources/systems-reference-document",
        license: "SRD 5.1, CC BY 4.0",
        licenseHref: "https://creativecommons.org/licenses/by/4.0/legalcode",
        note: "Advantage and disadvantage, conditions, the weapon table, death saves and backgrounds. This work includes material taken from the System Reference Document 5.1 (\"SRD 5.1\") by Wizards of the Coast LLC, licensed under the Creative Commons Attribution 4.0 International License.",
      },
      {
        what: "Kingdom Come: Deliverance II",
        by: "Warhorse Studios",
        note: "The negative perks of its hardcore mode inspired traits.",
      },
      {
        what: "The Witcher",
        by: "Andrzej Sapkowski",
        note: "The Witcher class and its signs.",
      },
    ],
  },
  {
    title: "Pictures",
    intro:
      "Pictures uploaded through the admin pages (classes, perks, races, items, rulebook pages) belong here too.",
    items: [
      { what: "Class portraits", note: "public/img/classes" },
      { what: "Race portraits", note: "public/img/races" },
      { what: "Perk and spell art", note: "public/img/perks" },
      { what: "Rulebook illustrations", note: "public/img/rulebook" },
      {
        what: "City gate",
        note: "The login and sign-up pages",
        image: "/img/auth/gate.webp",
      },
      { what: "Parchment background", image: "/img/bg.webp" },
      {
        what: "Home page cards",
        by: "Wizards of the Coast, via D&D Beyond",
        href: "https://www.dndbeyond.com",
        note: "Linked straight from D&D Beyond.",
      },
      { what: "Die faces", note: "public/img/dice, from the old site" },
    ],
  },
  {
    title: "Icons and fonts",
    items: [
      {
        what: "Game Icons",
        by: "Lorc, Delapouite and contributors",
        href: "https://game-icons.net",
        license: "CC BY 3.0",
        licenseHref: "https://creativecommons.org/licenses/by/3.0/",
      },
      {
        what: "Font Awesome",
        by: "Fonticons",
        href: "https://fontawesome.com",
        license: "CC BY 4.0",
        licenseHref: "https://creativecommons.org/licenses/by/4.0/",
      },
      {
        what: "Lucide",
        by: "Lucide contributors",
        href: "https://lucide.dev",
        license: "ISC",
      },
      {
        what: "Libre Baskerville and Merriweather",
        by: "Impallari Type and Sorkin Type, via Google Fonts",
        href: "https://fonts.google.com",
        license: "SIL Open Font License",
      },
    ],
  },
  {
    title: "Code",
    intro:
      "The design, the components and the rules were set by a human. Much of the code was then written with an AI assistant.",
    items: [
      {
        what: "Design and components",
        by: "Michal Špitálský",
        note: "The visual language and the components it's built from.",
      },
      {
        what: "Code assistance",
        by: "Claude, by Anthropic",
        href: "https://www.anthropic.com/claude",
        note: "Written with Claude Code.",
      },
      {
        what: "Next.js, React, Supabase, Tailwind CSS and TipTap",
        note: "The open-source stack the app runs on.",
      },
    ],
  },
];
