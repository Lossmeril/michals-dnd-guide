import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { Database } from "./database.types";

// =============================================================================
// Shared Supabase browser client (singleton)
// =============================================================================

const globalForSupabase = globalThis as unknown as {
  __supabaseBrowserClient__?: SupabaseClient<Database>;
};

function createBrowserClient(): SupabaseClient<Database> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error("Missing Supabase env vars.");
  }

  return createClient<Database>(url, key);
}

/**
 * Returns the shared Supabase browser client singleton, creating it on first use.
 */
export const supabaseBrowser = (): SupabaseClient<Database> => {
  if (!globalForSupabase.__supabaseBrowserClient__) {
    globalForSupabase.__supabaseBrowserClient__ = createBrowserClient();
  }
  return globalForSupabase.__supabaseBrowserClient__;
};
