import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { type SortState, type SortValue, sortRows } from "@/lib/sort";
import ClickableRow from "./clickableRow";
import SortLink from "./sortLink";

// Also used by the Markdown renderer for tables written in a page
export const tableClasses = {
  wrap: "overflow-x-auto bg-dnd-bg border border-dnd-gold rounded-lg shadow-md",
  table: "w-full text-sm",
  headRow: "text-left border-b-2 border-dnd-gold",
  th: "px-3 py-2 libre font-bold text-dnd-red-dark",
  row: "border-b border-dnd-gold/40 last:border-b-0 align-top",
  td: "px-3 py-2",
};

export interface Column<T> {
  label: React.ReactNode;
  render: (row: T) => React.ReactNode;
  className?: string;
  /** Makes the column sortable by this value; a number sorts numerically */
  sortValue?: (row: T) => SortValue;
  /** Its name in the URL, e.g. ?sort=belongs-to; defaults to the label */
  id?: string;
}

/** "Belongs to" → "belongs-to" */
const columnId = <T,>(c: Column<T>) =>
  c.id ??
  (typeof c.label === "string"
    ? c.label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
    : "");

interface DataTableProps<T> {
  rows: T[];
  columns: Column<T>[];
  rowKey?: (row: T, index: number) => string | number;
  /** Makes each row open this page; the first cell becomes a real link */
  href?: (row: T) => string;
  empty?: React.ReactNode;
  /**
   * The sort from the URL: a page's searchParams through parseSort, or
   * useTableSort in a client component. Columns with sortValue get links.
   */
  sort?: SortState | null;
  className?: string;
}

/**
 * Rows and columns on parchment: admin lists and rulebook tables. Works on
 * the server, so render functions never cross to the browser.
 */
export function DataTable<T>({
  rows,
  columns,
  rowKey = (_, i) => i,
  href,
  empty = "Nothing here yet.",
  sort,
  className,
}: DataTableProps<T>) {
  if (rows.length === 0) return <p className="text-sm">{empty}</p>;

  const sortedBy = sort && columns.find((c) => c.sortValue && columnId(c) === sort.by);
  const shown = sortedBy ? sortRows(rows, sortedBy.sortValue!, sort.dir) : rows;

  return (
    <div className={twMerge(tableClasses.wrap, className)}>
      <table className={tableClasses.table}>
        <thead>
          <tr className={tableClasses.headRow}>
            {columns.map((c, i) => (
              <th key={i} className={twMerge(tableClasses.th, c.className)}>
                {c.sortValue ? (
                  <SortLink column={columnId(c)} current={sort ?? null}>
                    {c.label}
                  </SortLink>
                ) : (
                  c.label
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {shown.map((row, ri) => {
            const to = href?.(row);
            const cells = columns.map((c, i) => (
              <td key={i} className={twMerge(tableClasses.td, c.className)}>
                {/* The first cell is a real link, for keyboards and new tabs */}
                {i === 0 && to ? (
                  <Link href={to} className="font-bold text-dnd-red libre">
                    {c.render(row)}
                  </Link>
                ) : (
                  c.render(row)
                )}
              </td>
            ));
            return to ? (
              <ClickableRow key={rowKey(row, ri)} href={to} className={tableClasses.row}>
                {cells}
              </ClickableRow>
            ) : (
              <tr key={rowKey(row, ri)} className={tableClasses.row}>
                {cells}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/** Columns from a header row, for tables written as plain arrays */
export const SimpleTable: React.FC<{
  head: React.ReactNode[];
  rows: React.ReactNode[][];
  className?: string;
}> = ({ head, rows, className }) => (
  <DataTable<React.ReactNode[]>
    rows={rows}
    columns={head.map((label, i) => ({ label, render: (row) => row[i] }))}
    className={twMerge("my-6 shadow-none", className)}
  />
);
