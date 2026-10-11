"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

export interface SidebarNavItem {
  label: string;
  href: string;
  /** Nested links, e.g. sections of a rulebook chapter */
  items?: SidebarNavItem[];
}

const NavList: React.FC<{ items: SidebarNavItem[] }> = ({ items }) => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-1">
      {items.map((item) => (
        <li key={item.href}>
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
