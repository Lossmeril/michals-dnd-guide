import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { Database } from "./database.types";

// =============================================================================
// Shared Supabase browser client (singleton)
// -----------------------------------------------------------------------------
// `createClient` is not free: each call starts its own GoTrueClient with an
// auth-state listener, a token-refresh timer and a storage lock. Running more
// than one against the same storage key makes them fight over the session and
// logs "Multiple GoTrueClient instances detected in the same browser context".
//
// Every repo method and a few components used to call `supabaseBrowser()`
// afresh, so a single page could spin up dozens of clients. We now create
// exactly one and hand the same instance to every caller.
//
// The instance is cached on `globalThis` so it also survives dev Fast Refresh
// (each module re-eval would otherwise leak a new client).
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
 * Returns the shared Supabase browser client, creating it on first use.
 *
 * Safe to call from anywhere in client-side code — every call returns the same
 * instance, so there is no cost to calling it per repo method.
 */
export const supabaseBrowser = (): SupabaseClient<Database> => {
  if (!globalForSupabase.__supabaseBrowserClient__) {
    globalForSupabase.__supabaseBrowserClient__ = createBrowserClient();
  }
  return globalForSupabase.__supabaseBrowserClient__;
};
