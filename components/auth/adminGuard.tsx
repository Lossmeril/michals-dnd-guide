"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase/browser";

type Props = {
  children: React.ReactNode;
};

const AdminGuard = ({ children }: Props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const check = async () => {
      const supabase = supabaseBrowser();

      const { data: auth } = await supabase.auth.getUser();
      const user = auth.user;

      if (!user) {
        router.replace("/login?next=/app/admin");
        return;
      }

      // fetch role from profiles
      const { data: profile, error } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single<{ role: string }>();

      if (error || profile?.role !== "admin") {
        router.replace("/app");
        return;
      }

      setLoading(false);
    };

    check();
  }, [router]);

  if (loading) return <p className="text-sm opacity-70">Checking access…</p>;

  return <>{children}</>;
};

export default AdminGuard;
