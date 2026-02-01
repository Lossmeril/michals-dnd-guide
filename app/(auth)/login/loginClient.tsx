"use client";

import { useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/components/ui/button";
import { PageLayout } from "@/components/layouts/base";

const LoginClient = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") ?? "/app";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const supabase = supabaseBrowser();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    router.replace(next);
    router.refresh();
  };

  return (
    <PageLayout>
      <div className="w-full h-full grid place-items-center book">
        <div className="mb-6">
          <h1 className="">Log in</h1>
        </div>
        <form
          onSubmit={handleLogin}
          className="max-w-2xl w-full space-y-6 text-center"
        >
          <input
            className="w-full rounded-xl border-2 border-red-900/30 bg-white/60 p-3 text-[#2b1d0e] outline-none focus:border-red-900"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className="w-full rounded-xl border-2 border-red-900/30 bg-white/60 p-3 text-[#2b1d0e] outline-none focus:border-red-900"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="flex justify-center flex-row items-center gap-4">
            <Button
              type="submit"
              disabled={loading}
              label={loading ? "Signing in…" : "Log in"}
            />
            <Button
              type="button"
              mode="transparent"
              label="Create account"
              href="/signup"
            />
          </div>

          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </PageLayout>
  );
};

export default LoginClient;
