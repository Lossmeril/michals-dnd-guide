"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase/browser";

type Props = {
  children: React.ReactNode;
};

const AuthGuard = ({ children }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const supabase = supabaseBrowser();

    const check = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) {
        const next = encodeURIComponent(pathname ?? "/app");
        router.replace(`/login?next=${next}`);
        return;
      }
      setReady(true);
    };

    check();

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        const next = encodeURIComponent(pathname ?? "/app");
        router.replace(`/login?next=${next}`);
      }
    });

    return () => {
      sub.subscription.unsubscribe();
    };
  }, [router, pathname]);

  if (!ready) {
    return <div className="p-6 text-sm text-red-900">Loading…</div>;
  }

  return <>{children}</>;
};

export default AuthGuard;
