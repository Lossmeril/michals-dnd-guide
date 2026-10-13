// Building blocks for rulebook pages: page frame, resource names, examples,
// tables and side notes

import Link from "next/link";
import { twMerge } from "tailwind-merge";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import StoryBox from "@/components/ui/storyBox";
import { Heading } from "@/components/ui/typography";
import { hrefOf, locate } from "./nav";

/** Breadcrumbs, title, the page, then links to the previous and next page */
export const RulePage: React.FC<{
  slug: string;
  /** Overrides the title from the nav, e.g. for a class page */
  title?: string;
  /** Overrides where the page sits, e.g. a class page under its rank */
  parent?: { label: string; href: string };
  intro?: React.ReactNode;
  children: React.ReactNode;
}> = ({ slug, title, parent, intro, children }) => {
  const { page, chapter, prev, next } = locate(slug);
  const crumbs = [
    { label: "Rulebook", href: "/rulebook" },
    ...(chapter && slug
      ? [{ label: chapter.title, href: hrefOf(chapter.pages[0].slug) }]
      : []),
    ...(parent ? [parent] : []),
    { label: title ?? page?.title },
  ];
  // The rulebook's front page is its own first crumb
  const items = slug ? crumbs : [{ label: "Rulebook" }];

  return (
    <>
      <Breadcrumbs items={items} />
      <Heading level={1}>{title ?? page?.title}</Heading>
      {intro && <p className="text-lg libre mb-8 -mt-4">{intro}</p>}
      <div className="rules">{children}</div>
      {!parent && (prev || next) && (
        <nav
          aria-label="Rulebook pages"
          className="flex justify-between gap-4 mt-16 pt-4 border-t-2 border-dnd-gold text-sm"
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

const RESOURCES = {
  body: { name: "Body", color: "text-body" },
  soul: { name: "Soul", color: "text-soul" },
  charisma: { name: "Charisma", color: "text-charisma" },
  coins: { name: "Coins", color: "text-[#9a7d1a]" },
  material: { name: "Material", color: "text-dnd-ink" },
};

/** A resource's name in its colour, e.g. <Res r="body" /> */
export const Res: React.FC<{
  r: keyof typeof RESOURCES;
  children?: React.ReactNode;
}> = ({ r, children }) => (
  <strong className={RESOURCES[r].color}>{children ?? RESOURCES[r].name}</strong>
);

/** A story example; the fiction sits apart from the rules around it */
export const Example: React.FC<{ title?: string; children: React.ReactNode }> = ({
  title = "Example",
  children,
}) => <StoryBox title={title}>{children}</StoryBox>;

/** A rule clarification or an edge case */
export const Note: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <aside className="my-6 p-4 border-l-4 border-dnd-gold bg-dnd-accent-yellow/70 rounded-r-lg">
    <p className="font-bold libre text-dnd-red-dark mb-1">{title}</p>
    <div className="text-sm [&>p+p]:mt-2">{children}</div>
  </aside>
);

/** A formula or a roll, set apart */
export const Formula: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="my-4 px-4 py-3 bg-dnd-bg border border-dnd-gold rounded-lg libre font-bold text-center text-dnd-red-dark">
    {children}
  </p>
);

export const RuleTable: React.FC<{
  head: React.ReactNode[];
  rows: React.ReactNode[][];
  className?: string;
}> = ({ head, rows, className }) => (
  <div className={twMerge("my-6 overflow-x-auto", className)}>
    <table className="w-full text-sm bg-dnd-bg border border-dnd-gold rounded-lg">
      <thead>
        <tr className="text-left border-b-2 border-dnd-gold">
          {head.map((h, i) => (
            <th key={i} className="px-3 py-2 libre font-bold text-dnd-red-dark">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-b border-dnd-gold/40 last:border-b-0 align-top">
            {row.map((cell, j) => (
              <td key={j} className="px-3 py-2">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/** A link to another rulebook page, wiki style */
export const RuleLink: React.FC<{ to: string; children: React.ReactNode }> = ({
  to,
  children,
}) => (
  <Link href={hrefOf(to)} className="link">
    {children}
  </Link>
);

/** A picture in the text column */
export const Figure: React.FC<{ src: string; alt: string; className?: string }> = ({
  src,
  alt,
  className,
}) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    src={src}
    alt={alt}
    className={twMerge(
      "w-full h-56 object-cover rounded-lg border border-dnd-gold shadow-md my-6",
      className,
    )}
  />
);
