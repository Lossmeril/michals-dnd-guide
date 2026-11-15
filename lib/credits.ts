/**
 * The credits page (/credits) lists the `credits` table, edited at
 * /admin/credits. Each row is a Harvard reference, what it's used for, and a
 * gallery of the images it covers.
 */

import type { Tables } from "@/lib/types/database.types";

export type Credit = Tables<"credits">;

export const CREDIT_SECTIONS = [
  {
    id: "rules",
    title: { en: "Rules", cs: "Pravidla" },
    intro: {
      en: "The ruleset is Michal's own, stitched together from games we love. These are the ones it borrows from.",
      cs: "Pravidla jsou Michalova vlastní, sešitá z her, které máme rádi. Tady jsou ty, ze kterých si půjčují.",
    },
  },
  {
    id: "pictures",
    title: { en: "Pictures", cs: "Obrázky" },
    intro: {
      en: "No AI images have been used. All rights belong to their rightful authors; here they're decoration only.",
      cs: "Nebyly použity žádné obrázky z AI. Všechna práva patří jejich autorům; tady slouží jen jako výzdoba.",
    },
  },
  { id: "icons", title: { en: "Icons and fonts", cs: "Ikony a písma" } },
  {
    id: "code",
    title: { en: "Code", cs: "Kód" },
    intro: {
      en: "Built quickly with AI-assisted development, on a human-designed architecture and UI components.",
      cs: "Postaveno rychle s pomocí AI, na architektuře a komponentách rozhraní navržených člověkem.",
    },
  },
] as const;

export type CreditSectionId = (typeof CREDIT_SECTIONS)[number]["id"];

/** "15 November 2026", as Harvard's "(Accessed: …)" wants it */
export const accessedDate = (iso: string, lang: "en" | "cs" = "en") =>
  new Date(`${iso}T00:00:00`).toLocaleDateString(lang === "cs" ? "cs-CZ" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

/** "Warsaw: CD PROJEKT", "Gollancz", "Praha" or null */
export const imprint = (c: Pick<Credit, "place" | "publisher">) =>
  [c.place, c.publisher].filter(Boolean).join(": ") || null;
