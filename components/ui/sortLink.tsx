"use client";

// Sorting for DataTable lives in the URL (?sort=name&dir=desc), so a sorted
// list survives a refresh and works on server-rendered tables too.

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa6";
import { parseSort, type SortState } from "@/lib/sort";

/** The sort read from the URL, for tables built in client components */
export const useTableSort = (): SortState | null => {
  const params = useSearchParams();
  return parseSort(params.get("sort"), params.get("dir"));
};

/**
 * A column header that sorts the table. Clicking cycles ascending,
 * descending, then back to the list's own order.
 */
const SortLink: React.FC<{
  column: string;
  current: SortState | null;
  children: React.ReactNode;
}> = ({ column, current, children }) => {
  const pathname = usePathname();
  const params = new URLSearchParams(useSearchParams());
  const active = current?.by === column ? current.dir : null;

  params.delete("sort");
  params.delete("dir");
  if (active !== "desc") {
    params.set("sort", column);
    params.set("dir", active === "asc" ? "desc" : "asc");
  }
  const query = params.toString();
  const Icon = active === "asc" ? FaSortUp : active === "desc" ? FaSortDown : FaSort;

  return (
    <Link
      href={query ? `${pathname}?${query}` : pathname}
      replace
      scroll={false}
      aria-sort={active === "asc" ? "ascending" : active === "desc" ? "descending" : undefined}
      className="inline-flex items-center gap-1 hover:text-dnd-red whitespace-nowrap"
    >
      {children}
      <Icon className={active ? "text-dnd-red" : "text-dnd-ink/30"} aria-hidden />
    </Link>
  );
};

export default SortLink;
