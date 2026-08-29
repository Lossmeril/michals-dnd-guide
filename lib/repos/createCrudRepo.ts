// =============================================================================
// Shared CRUD repo factory
// -----------------------------------------------------------------------------
// Every table with a plain `id` primary key needs the exact same five methods
// (list / getById / insert / update / delete), each of which is the same
// Supabase call with the table name and row type swapped in. This factory
// writes them once. An entity file then becomes:
//
//   export const racesRepo = createCrudRepo<Race, RaceInsert, RaceUpdate>("races");
//
// Tables that don't have an `id` column (join tables keyed by two FKs, or
// detail tables keyed by `perk_id`) can't use this and keep hand-written files.
// =============================================================================

import type { Database } from "@/lib/supabase/database.types";
import { supabaseBrowser } from "@/lib/supabase/browser";

// Union of the real table names in the generated schema. Passing anything else
// to `createCrudRepo` is a compile error rather than a runtime failure.
type TableName = keyof Database["public"]["Tables"];

// The primary-key type of a given row. `characters.id` is `number`,
// `classes.id` is `string`; this keeps each repo's `id` params accurate
// instead of forcing a lowest-common-denominator `string | number`.
type IdOf<Row> = Row extends { id: infer Id } ? Id : never;

// Options for `list()`. Generic over `Row` so `orderBy` only accepts a column
// name that actually exists on this table (typo-safe, autocompletes).
export type ListOptions<Row> = {
  limit?: number;
  orderBy?: keyof Row & string;
  ascending?: boolean;
};

// The object `createCrudRepo` returns. Named so entity files that add extra
// methods can annotate the base, e.g. `: CrudRepo<Perk, PerkInsert, PerkUpdate>`.
export type CrudRepo<Row, Insert, Update> = {
  list(opts?: ListOptions<Row>): Promise<Row[]>;
  getById(id: IdOf<Row>): Promise<Row | null>;
  insert(payload: Insert): Promise<Row>;
  update(id: IdOf<Row>, patch: Update): Promise<Row>;
  delete(id: IdOf<Row>): Promise<void>;
};

export function createCrudRepo<
  Row extends { id: string | number },
  Insert extends object,
  Update extends object,
>(table: TableName): CrudRepo<Row, Insert, Update> {
  return {
    async list(opts = {}) {
      const { limit = 100, orderBy = "id", ascending = true } = opts;

      const { data, error } = await supabaseBrowser()
        .from(table)
        .select("*")
        // `orderBy` is a keyof Row, but because `table` is a generic name the
        // client widens the column arg to a broad union; `String()` satisfies
        // it (same trick the hand-written repos used).
        .order(String(orderBy), { ascending })
        .limit(limit);

      if (error) throw error;
      // The client can't infer a row type from a generic table name, so assert
      // it (via `unknown`, since `Row` is an open type param). Sound because
      // `select("*")` returns whole rows of `table`.
      return (data ?? []) as unknown as Row[];
    },

    async getById(id) {
      const { data, error } = await supabaseBrowser()
        .from(table)
        .select("*")
        .eq("id", id)
        // `maybeSingle` returns the row or `null`; `single` would instead throw
        // a PostgREST error when nothing matches.
        .maybeSingle();

      if (error) throw error;
      return (data as unknown as Row | null) ?? null;
    },

    async insert(payload) {
      const { data, error } = await supabaseBrowser()
        .from(table)
        // `as never`: the generic table name widens `.insert`'s parameter to a
        // union of every table's Insert type. The real check lives on this
        // method's public `payload: Insert` signature above.
        .insert(payload as never)
        .select("*")
        .single();

      if (error) throw error;
      return data as unknown as Row;
    },

    async update(id, patch) {
      const { data, error } = await supabaseBrowser()
        .from(table)
        .update(patch as never)
        .eq("id", id)
        .select("*")
        .single();

      if (error) throw error;
      return data as unknown as Row;
    },

    async delete(id) {
      const { error } = await supabaseBrowser()
        .from(table)
        .delete()
        .eq("id", id);

      if (error) throw error;
    },
  };
}
