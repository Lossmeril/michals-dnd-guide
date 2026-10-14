"use client";

import { useActionState } from "react";
import {
  FormMessage,
  PasswordFields,
  SubmitButton,
  usePasswordPair,
} from "@/components/ui/form";
import { resetPassword } from "./actions";

export const ResetForm = () => {
  const [state, formAction, pending] = useActionState(resetPassword, {
    error: null,
  });
  const pair = usePasswordPair();

  return (
    <form action={formAction} className="flex flex-col gap-4 max-w-md">
      <PasswordFields pair={pair} />
      <FormMessage state={state} />
      <SubmitButton
        pending={pending}
        pendingLabel="Stamping new papers…"
        disabled={!!pair.mismatch}
      >
        Set new password
      </SubmitButton>
    </form>
  );
};
