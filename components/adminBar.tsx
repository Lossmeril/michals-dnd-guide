"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { twMerge } from "tailwind-merge";

// The same pages as the dashboard's cards, in the same order
export const ADMIN_LINKS = [
  { label: "Dashboard", href: "/admin" },
  { label: "Rulebook pages", href: "/admin/rulebook" },
  { label: "Races", href: "/admin/races" },
  { label: "Classes", href: "/admin/classes" },
  { label: "Perks and spells", href: "/admin/perks" },
  { label: "Aspects", href: "/admin/perks?kind=aspect" },
  { label: "Backgrounds", href: "/admin/backgrounds" },
  { label: "Items", href: "/admin/items" },
  { label: "Languages", href: "/admin/languages" },
  { label: "Bestiary", href: "/admin/bestiary" },
  { label: "Traits", href: "/admin/traits" },
  { label: "Credits", href: "/admin/credits" },
  { label: "Users", href: "/admin/users" },
] as const;

const Links = ({ kind }: { kind: string | null }) => {
  const pathname = usePathname();
  const active = (href: string) => {
    const [path, query] = href.split("?");
    if (path === "/admin") return pathname === path;
    if (!pathname.startsWith(path)) return false;
    // Perks and Aspects share a page; the kind filter tells them apart
    const wanted = new URLSearchParams(query).get("kind");
    return path === "/admin/perks" ? (wanted ?? null) === (kind === "aspect" ? "aspect" : null) : true;
  };

  return ADMIN_LINKS.map(({ label, href }) => (
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
  ));
};

// useSearchParams needs a Suspense boundary, or static pages stop prerendering
const LinksWithQuery = () => <Links kind={useSearchParams().get("kind")} />;

/** The admin's sub menu under the main navbar */
const AdminBar = () => (
  <nav
    aria-label="Admin"
    className="print:hidden w-full bg-dnd-ink text-dnd-bg px-4 flex items-center gap-6 overflow-x-auto text-sm"
  >
    <span className="libre caps font-bold text-dnd-gold py-2 shrink-0">
      Admin
    </span>
    <Suspense fallback={<Links kind={null} />}>
      <LinksWithQuery />
    </Suspense>
  </nav>
);

export default AdminBar;
