import Link from "next/link";
import { Fragment } from "react";
import { twMerge } from "tailwind-merge";

export interface Crumb {
  /** A node, so a name still loading can show a skeleton */
  label: React.ReactNode;
  /** Omit for the current page */
  href?: string;
}

export const HOME_CRUMB: Crumb = { label: "Home", href: "/" };

interface BreadcrumbsProps {
  /** From the top down; the last one is the current page */
  items: Crumb[];
  /** Start the trail with Home */
  home?: boolean;
  className?: string;
}

/** "Home › Characters › Zara" above a page's title */
const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  home = true,
  className,
}) => {
  const crumbs = home ? [HOME_CRUMB, ...items] : items;

  return (
    <nav aria-label="Breadcrumb" className={twMerge("mb-4 text-sm", className)}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {crumbs.map((crumb, i) => {
          const current = i === crumbs.length - 1;
          return (
            <Fragment key={i}>
              {i > 0 && (
                <li aria-hidden className="text-dnd-gold select-none">
                  ›
                </li>
              )}
              <li className="min-w-0">
                {crumb.href && !current ? (
                  <Link
                    href={crumb.href}
                    className="text-dnd-red hover:text-dnd-red-dark hover:underline decoration-dotted underline-offset-2"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span
                    aria-current={current ? "page" : undefined}
                    className="font-bold text-dnd-ink truncate"
                  >
                    {crumb.label}
                  </span>
                )}
              </li>
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
