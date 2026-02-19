"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/lib/functions/auth/authContext";

// =============================================================================
// Component
// =============================================================================

type Props = {
  children: React.ReactNode;
  loadingFallback?: React.ReactNode;
};

export const AuthGuard: React.FC<Props> = ({ children, loadingFallback }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { ready, user } = useAuth();

  useEffect(() => {
    if (!ready) return;
    if (user) return;

    const next = encodeURIComponent(pathname ?? "/app");
    router.replace(`/login?next=${next}`);
  }, [ready, user, router, pathname]);

  if (!ready) {
    return (
      <>
        {loadingFallback ?? (
          <div className="w-full h-full grid place-items-center">
            <div className="flex flex-col justify-center items-center gap-6">
              <p>Loading…</p>
            </div>
          </div>
        )}
      </>
    );
  }

  if (!user) return null;

  return <>{children}</>;
};
