// The frame around every rulebook page: breadcrumbs, title, the page, then
// links to the previous and next page

import Link from "next/link";
import { FaPen } from "react-icons/fa6";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Heading } from "@/components/ui/typography";
import { isAdmin } from "@/lib/auth";
import { fetchRulebookNav } from "@/lib/endpoints/rulebookPages";
import { hrefOf, INDEX_SLUG, locate } from "@/lib/rulebookNav";

export const RulePage = async ({
  slug,
  title,
  parent,
  intro,
  editHref,
  children,
}: {
  slug: string;
  /** Overrides the title from the nav, e.g. for a class page */
  title?: string;
  /** Overrides where the page sits, e.g. a class page under its rank */
  parent?: { label: string; href: string };
  intro?: React.ReactNode;
  /** Where an admin edits this page */
  editHref?: string;
  children: React.ReactNode;
}) => {
  const [nav, admin] = await Promise.all([fetchRulebookNav(), isAdmin()]);
  const { page, chapter, prev, next } = locate(nav, slug);
  const isIndex = slug === INDEX_SLUG && !parent;
  const items = isIndex
    ? [{ label: "Rulebook" }]
    : [
        { label: "Rulebook", href: "/rulebook" },
        ...(chapter && chapter.pages[0]
          ? [{ label: chapter.title, href: hrefOf(chapter.pages[0].slug) }]
          : []),
        ...(parent ? [parent] : []),
        { label: title ?? page?.title },
      ];

  return (
    <>
      <Breadcrumbs items={items} />
      <div className="flex items-start justify-between gap-4">
        <Heading level={1}>{title ?? page?.title}</Heading>
        {admin && editHref && (
          <Link
            href={editHref}
            className="button-secondary button shrink-0 inline-flex items-center gap-2 text-sm"
          >
            <FaPen className="text-xs" /> Edit
          </Link>
        )}
      </div>
      {intro && <p className="text-lg libre mb-8 -mt-4">{intro}</p>}
      {children}
      {!parent && (prev || next) && (
        <nav
          aria-label="Rulebook pages"
          className="print:hidden clear-both flex justify-between gap-4 mt-16 pt-4 border-t-2 border-dnd-gold text-sm"
        >
          {prev ? (
            <Link href={hrefOf(prev.slug)} className="button-link">
              ← {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link href={hrefOf(next.slug)} className="button-link text-right">
              {next.title} →
            </Link>
          )}
        </nav>
      )}
    </>
  );
};
