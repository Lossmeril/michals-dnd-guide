// The rulebook's chapters and pages, in reading order. Stored in the database
// (rulebook_chapters, rulebook_pages); drives the sidebar, breadcrumbs and the
// previous/next links.

/** The slug of the rulebook's front page, shown at /rulebook */
export const INDEX_SLUG = "index";

export type NavPage = { id: string; slug: string; title: string };
export type NavChapter = { id: string; title: string; pages: NavPage[] };

export const hrefOf = (slug: string) =>
  slug === INDEX_SLUG ? "/rulebook" : `/rulebook/${slug}`;

/** The page, its chapter, and its neighbours in reading order */
export const locate = (nav: NavChapter[], slug: string) => {
  const all = nav.flatMap((chapter) =>
    chapter.pages.map((page) => ({ ...page, chapter })),
  );
  const i = all.findIndex((p) => p.slug === slug);
  return {
    page: all[i],
    chapter: all[i]?.chapter,
    prev: i > 0 ? all[i - 1] : null,
    next: i >= 0 ? (all[i + 1] ?? null) : null,
  };
};

export { slugify } from "./slugify";
