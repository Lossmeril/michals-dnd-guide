"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

export const ADMIN_LINKS = [
  { label: "Dashboard", href: "/admin" },
  { label: "Rulebook pages", href: "/admin/rulebook" },
  { label: "Races", href: "/admin/races" },
  { label: "Classes", href: "/admin/classes" },
  { label: "Perks", href: "/admin/perks" },
  { label: "Backgrounds", href: "/admin/backgrounds" },
  { label: "Languages", href: "/admin/languages" },
  { label: "Traits", href: "/admin/traits" },
] as const;

/** The admin's sub menu under the main navbar */
const AdminBar = () => {
  const pathname = usePathname();
  const active = (href: string) =>
    href === "/admin" ? pathname === href : pathname.startsWith(href);

  return (
    <nav
      aria-label="Admin"
      className="w-full bg-dnd-ink text-dnd-bg px-4 flex items-center gap-6 overflow-x-auto text-sm"
    >
      <span className="libre caps font-bold text-dnd-gold py-2 shrink-0">
        Admin
      </span>
      {ADMIN_LINKS.map(({ label, href }) => (
        <Link
          key={href}
          href={href}
          className={twMerge(
            "py-2 border-b-2 border-transparent shrink-0 hover:text-white transition-colors",
            active(href) && "border-dnd-gold text-white font-bold",
          )}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default AdminBar;
