"use client";

import { useEffect, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/browser";
import { EditorShell } from "@/components/editors/editorShell";
import Button from "@/components/ui/button";
import EditorSection from "@/components/layout/editors/editorSections";
import Field from "@/components/layout/editors/editorField";
import { FaSpinner } from "react-icons/fa";
import { toast } from "@/components/ui/toast";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const [canSubmit, setCanSubmit] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const supabase = supabaseBrowser();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: displayName,
        },
      },
    });

    setLoading(false);

    if (error) {
      toast({
        title: "Signup failed",
        description: error.message,
        mode: "error",
      });
      return;
    }

    // optional: redirect or show "check your email"
    toast({
      title: "Signup successful",
      description: "Please check your email to verify your account.",
      mode: "success",
    });
  };

  useEffect(() => {
    const isValidEmail = email.trim() !== "" && email.includes("@");
    const doPasswordsMatch = password === confirmPassword;
    const isValidDisplayName = displayName.trim() !== "";

    setCanSubmit(isValidEmail && doPasswordsMatch && isValidDisplayName);
  }, [email, password, confirmPassword, displayName]);

  return (
    <EditorShell>
      <EditorShell.Grid>
        <EditorShell.Sidebar>
          <h1 className="text-2xl font-bold mb-4">
            A guard is standing in your way!
          </h1>
          <p className="text-sm text-gray-600 mb-6">
            You have reached a restricted area. Please log in to continue to
            your adventure.
          </p>
          <p className="text-sm text-gray-600 mb-6">Already have an account?</p>
          <Button
            type="button"
            mode="transparent"
            label="Log in instead"
            href="/login"
          />
        </EditorShell.Sidebar>
        <EditorShell.Main>
          <form onSubmit={handleSignup}>
            <EditorSection title="Let's start with creating your account">
              <Field label="Display name" htmlFor="display-name" span="full">
                <input
                  id="display-name"
                  type="text"
                  placeholder="Display name"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  required
                />
              </Field>
              <Field label="Email" htmlFor="email" span="full">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Field>

              <Field
                label="Password"
                htmlFor="password"
                span="half"
                error={
                  password && confirmPassword && password !== confirmPassword
                    ? "Passwords do not yet match"
                    : undefined
                }
              >
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Field>

              <Field
                label="Confirm Password"
                htmlFor="confirm-password"
                span="half"
              >
                <input
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </Field>

              <Field>
                <Button
                  type="submit"
                  disabled={!canSubmit}
                  label={
                    loading ? (
                      <span className="inline-flex items-center gap-2">
                        <FaSpinner className="animate-spin" />
                        Creating account...
                      </span>
                    ) : (
                      "Sign up"
                    )
                  }
                ></Button>
              </Field>
            </EditorSection>
          </form>
        </EditorShell.Main>
      </EditorShell.Grid>
    </EditorShell>
  );
};

export default SignupPage;
