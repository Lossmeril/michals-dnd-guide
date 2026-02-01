"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { AdminAppPageLayout } from "../layouts/base";
import Spinner from "../ui/spinner";

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

  if (loading)
    return (
      <AdminAppPageLayout title={""}>
        <div className="w-full h-full grid place-items-center">
          <div className="flex flex-col justify-center items-center gap-6">
            <p>Checking access…</p>
            <Spinner />
          </div>
        </div>
      </AdminAppPageLayout>
    );

  return <>{children}</>;
};

export default AdminGuard;
