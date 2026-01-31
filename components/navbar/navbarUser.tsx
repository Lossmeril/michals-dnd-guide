"use client";

import { useEffect, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { useRouter } from "next/navigation";

type Profile = {
  id: string;
  display_name: string | null;
  avatar_url: string | null;
};

const NavbarUser = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const supabase = supabaseBrowser();

    const load = async () => {
      const { data: authData } = await supabase.auth.getUser();
      const user = authData.user;

      if (!user) {
        setProfile(null);
        setLoading(false);
        return;
      }

      const { data } = await supabase
        .from("profiles")
        .select("id, display_name, avatar_url")
        .eq("id", user.id)
        .single();

      setProfile(data ?? null);
      setLoading(false);
    };

    load();

    const { data: sub } = supabase.auth.onAuthStateChange(() => {
      load();
    });

    return () => {
      sub.subscription.unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    const supabase = supabaseBrowser();
    await supabase.auth.signOut();

    // Refresh UI + redirect if you want
    router.refresh();
    router.push("/login");
  };

  if (loading || !profile) return null;

  if (!profile) {
    return (
      <div>
        <a href="/login" className="text-sm text-dnd-red hover:underline">
          Sign in
        </a>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      {profile.avatar_url ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={profile.avatar_url}
          alt={profile.display_name ?? "User avatar"}
          className="h-8 w-8 rounded-full border border-dnd-red object-cover"
        />
      ) : (
        <div className="h-8 w-8 rounded-full border border-dnd-red-dark bg-dnd-red-dark/10 flex items-center justify-center text-xs font-serif text-dnd-red-dark font-bold">
          {profile.display_name?.slice(0, 2).toUpperCase() ?? "??"}
        </div>
      )}

      <button
        onClick={handleSignOut}
        className="text-sm text-dnd-red-dark hover:cursor-pointer hover:underline"
      >
        Sign out
      </button>
    </div>
  );
};

export default NavbarUser;
