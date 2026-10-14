// Sorting rows by a column, shared by server and client tables

export type SortState = { by: string; dir: "asc" | "desc" };
export type SortValue = string | number | null | undefined;

/** Reads ?sort=…&dir=… (as strings, or a page's searchParams values) */
export const parseSort = (sort: unknown, dir: unknown): SortState | null =>
  typeof sort === "string" && sort
    ? { by: sort, dir: dir === "desc" ? "desc" : "asc" }
    : null;

const isEmpty = (v: SortValue) => v === null || v === undefined || v === "";

const compare = (a: SortValue, b: SortValue) => {
  if (typeof a === "number" && typeof b === "number") return a - b;
  return String(a).localeCompare(String(b), undefined, { numeric: true });
};

/**
 * Rows sorted by `value`. Equal rows keep their order (e.g. by name), and
 * empty values stay at the bottom in both directions.
 */
export const sortRows = <T>(
  rows: T[],
  value: (row: T) => SortValue,
  dir: SortState["dir"],
) =>
  rows
    .map((row, i) => ({ row, i, v: value(row) }))
    .sort((a, b) => {
      if (isEmpty(a.v) || isEmpty(b.v)) {
        return Number(isEmpty(a.v)) - Number(isEmpty(b.v)) || a.i - b.i;
      }
      const order = compare(a.v, b.v);
      return (dir === "desc" ? -order : order) || a.i - b.i;
    })
    .map(({ row }) => row);
