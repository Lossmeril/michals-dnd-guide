"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";
import Field from "@/components/ui/field";
import Panel from "@/components/ui/panel";
import { setSignupPassword } from "../actions";

/** Only the hash is stored, so the box never shows the current password */
const SignupPassword: React.FC<{ setAt: string | null }> = ({ setAt: initial }) => {
  const [setAt, setSetAt] = useState(initial);
  const [password, setPassword] = useState("");
  const [pending, startTransition] = useTransition();

  const save = (value: string) =>
    startTransition(async () => {
      const { data, error } = await setSignupPassword(value);
      if (error !== null) {
        toast.error(error);
        return;
      }
      setSetAt(data);
      setPassword("");
      toast.success(data ? "Sign-up password set" : "Sign-ups are open to anyone");
    });

  return (
    <Panel as="section" className="mb-8 max-w-xl">
      <Field
        label="Sign-up password"
        htmlFor="signup-password"
        hint={
          setAt
            ? `Set on ${new Date(setAt).toLocaleDateString("en-GB")}. New accounts need it; existing ones don't. Only a scrambled copy is kept, so it can't be shown here: type a new one to change it.`
            : "None set: anyone can sign up."
        }
      >
        <input
          id="signup-password"
          type="text"
          autoComplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Field>
      <div className="flex gap-2 mt-4">
        <button type="button" disabled={pending || !password.trim()} onClick={() => save(password)}>
          {setAt ? "Change password" : "Set password"}
        </button>
        {setAt && (
          <button
            type="button"
            className="button-secondary"
            disabled={pending}
            onClick={() => {
              if (window.confirm("Let anyone sign up without a password?")) save("");
            }}
          >
            Remove password
          </button>
        )}
      </div>
    </Panel>
  );
};

export default SignupPassword;
