"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";
import type { Session, SupabaseClient, User } from "@supabase/supabase-js";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { toast } from "@/components/ui/toast";

// =============================================================================
// Types
// =============================================================================

type AuthContextValue = {
  ready: boolean;
  user: User | null;
  session: Session | null;

  supabase: SupabaseClient;
  refresh: () => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

// =============================================================================
// Provider
// =============================================================================

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const supabase = useMemo(() => supabaseBrowser(), []);

  const [ready, setReady] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);

  // -------------------------------------
  // Refresh
  // -------------------------------------
  const refresh = useCallback(async () => {
    const { data, error } = await supabase.auth.getSession();

    if (error) {
      setSession(null);
      setUser(null);
      setReady(true);
      return;
    }

    const newSession = data.session ?? null;

    setSession(newSession);
    setUser(newSession?.user ?? null);
    setReady(true);
  }, [supabase]);

  // -------------------------------------
  // SignOut
  // -------------------------------------
  const signOut = useCallback(async () => {
    await supabase.auth.signOut();
    setSession(null);
    setUser(null);
    toast({
      title: "Farewell!",
      description: "You have successfully logged out.",
      mode: "info",
    });
  }, [supabase]);

  // -------------------------------------
  // Subscribe once
  // -------------------------------------
  useEffect(() => {
    refresh();

    const { data: sub } = supabase.auth.onAuthStateChange(
      (_event, newSession) => {
        setSession(newSession);
        setUser(newSession?.user ?? null);
        setReady(true);
      },
    );

    return () => {
      sub.subscription.unsubscribe();
    };
  }, [supabase, refresh]);

  // -------------------------------------
  // Context value
  // -------------------------------------
  const value = useMemo<AuthContextValue>(
    () => ({
      ready,
      user,
      session,
      supabase,
      refresh,
      signOut,
    }),
    [ready, user, session, supabase, refresh, signOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// =============================================================================
// Hook
// =============================================================================

export const useAuth = (): AuthContextValue => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within <AuthProvider />");
  }
  return ctx;
};
