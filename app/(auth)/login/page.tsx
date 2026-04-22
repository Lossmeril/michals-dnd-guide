"use client";

import { useEffect, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { useRouter, useSearchParams } from "next/navigation";
import Button from "@/components/ui/button";
import { EditorShell } from "@/components/editors/editorShell";
import Field from "@/components/layout/editors/editorField";
import EditorSection from "@/components/layout/editors/editorSections";
import { toast } from "@/components/ui/toast";
import { useAuth } from "@/lib/functions/auth/authContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  const next = searchParams.get("next") ?? "/app";
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      router.push(next);
    }
  }, [user, router, next]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const supabase = supabaseBrowser();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      toast({
        title: error.message,
        description:
          error.message === "Invalid login credentials"
            ? "Please check your email and password and try again."
            : error.message === "Email not confirmed"
              ? "Please check your email for a confirmation link."
              : "An error occurred while trying to log in. Please try again.",
        mode: "error",
      });
      return;
    }

    router.replace(next);
    toast({
      title: "You are in!",
      description: "You have successfully logged in.",
      mode: "success",
    });
    router.refresh();
  };

  return (
    <EditorShell>
      <EditorShell.Grid>
        <EditorShell.Sidebar imageUrl="/img/auth/gate.jpg">
          <h1 className="text-2xl font-bold mb-4">
            A guard is standing in your way!
          </h1>
          <p className="text-sm text-gray-600 mb-6">
            You have reached a restricted area. Please log in to continue to
            your adventure.
          </p>
          <p className="text-sm text-gray-600 mb-6">
            Don&apos;t have an account?
          </p>
          <Button
            type="button"
            mode="transparent"
            label="Create account instead"
            href="/sign-up"
          />
        </EditorShell.Sidebar>
        <EditorShell.Main>
          <form onSubmit={handleLogin} className="">
            <EditorSection title="Log in to your account">
              <Field label="Email" htmlFor="email" span="full">
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Field>
              <Field label="Password" htmlFor="password">
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Field>
              <Field>
                <Button
                  type="submit"
                  disabled={loading}
                  label={loading ? "Signing in…" : "Log in"}
                />
              </Field>
            </EditorSection>
          </form>
        </EditorShell.Main>
      </EditorShell.Grid>
    </EditorShell>
  );
};

export default LoginPage;
