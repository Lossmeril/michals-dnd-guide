"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

export interface SidebarNavItem {
  label: string;
  /** Omit for a heading that only groups its items */
  href?: string;
  /** Nested links, e.g. sections of a rulebook chapter */
  items?: SidebarNavItem[];
}

const NavList: React.FC<{ items: SidebarNavItem[] }> = ({ items }) => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-1">
      {items.map((item) => (
        <li key={item.href ?? item.label}>
          {!item.href ? (
            <p className="px-3 pt-3 pb-1 text-xs font-bold uppercase tracking-wider text-dnd-ink/50">
              {item.label}
            </p>
          ) : (
            <Link
              href={item.href}
              className={twMerge(
                "block border-l-2 border-transparent px-3 py-1 text-dnd-ink/75 hover:text-dnd-red hover:border-dnd-gold transition-colors",
                pathname === item.href &&
                  "border-dnd-red text-dnd-red font-bold hover:border-dnd-red",
              )}
            >
              {item.label}
            </Link>
          )}
          {item.items && (
            <div className="ml-3">
              <NavList items={item.items} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

const SidebarNav: React.FC<{ items: SidebarNavItem[] }> = ({ items }) => (
  <nav className="sticky top-8 self-start w-48 shrink-0">
    <NavList items={items} />
  </nav>
);

export default SidebarNav;

/** The same list folded into a dropdown, for phones where the sidebar doesn't fit */
export const MobileNav: React.FC<{ items: SidebarNavItem[]; label: string }> = ({
  items,
  label,
}) => {
  // A new key on every page closes the dropdown after a link is followed
  const pathname = usePathname();
  return (
    <details
      key={pathname}
      className="group mb-6 bg-dnd-bg border border-dnd-gold rounded-lg shadow-sm"
    >
      <summary className="flex items-center justify-between cursor-pointer list-none px-4 py-2 libre font-bold text-dnd-red-dark">
        {label}
        <span aria-hidden className="transition-transform group-open:rotate-180">
          ▾
        </span>
      </summary>
      <div className="max-h-[60vh] overflow-y-auto px-1 pb-3 border-t border-dnd-gold/40">
        <NavList items={items} />
      </div>
    </details>
  );
};

/** A short list as a row of tabs, for phones */
export const TabsNav: React.FC<{ items: SidebarNavItem[] }> = ({ items }) => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-4 mb-6 border-b border-dnd-gold overflow-x-auto text-sm">
      {items.map((item) =>
        item.href ? (
          <Link
            key={item.href}
            href={item.href}
            className={twMerge(
              "py-2 border-b-2 border-transparent shrink-0 text-dnd-ink/75 hover:text-dnd-red",
              pathname === item.href && "border-dnd-red text-dnd-red font-bold",
            )}
          >
            {item.label}
          </Link>
        ) : null,
      )}
    </nav>
  );
};
