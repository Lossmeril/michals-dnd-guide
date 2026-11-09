"use client";

import { useActionState } from "react";
import { EmailField, FormMessage, SubmitButton } from "@/components/ui/form";
import { requestPasswordReset } from "./actions";

export const ForgotForm = () => {
  const [state, formAction, pending] = useActionState(requestPasswordReset, {
    error: null,
  });

  if (state.sentTo) {
    return (
      <div role="status" className="flex flex-col gap-2 max-w-md text-sm">
        <p>
          If an account uses <strong>{state.sentTo}</strong>, a link to set a
          new password is on its way. Open it in this browser.
        </p>
        <p className="text-dnd-ink/70">
          Nothing after a few minutes? Check the spam folder, or try again.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-4 max-w-md">
      <EmailField defaultValue={state.email} />
      <FormMessage state={state} />
      <SubmitButton pending={pending} pendingLabel="Sending a rider…">
        Send me a link
      </SubmitButton>
    </form>
  );
};
