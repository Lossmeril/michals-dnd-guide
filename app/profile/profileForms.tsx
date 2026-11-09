"use client";

import { useActionState, useState } from "react";
import {
  DisplayNameField,
  EmailField,
  FormMessage,
  type FormState,
  PasswordFields,
  SubmitButton,
  usePasswordPair,
} from "@/components/ui/form";
import { changeEmail, changePassword, updateDisplayName } from "./actions";

const initial: FormState = { error: null };
const formClass = "flex flex-col gap-3 max-w-md";

export const DisplayNameForm: React.FC<{ current: string }> = ({ current }) => {
  const [state, action, pending] = useActionState(updateDisplayName, initial);

  return (
    <form action={action} className={formClass}>
      <DisplayNameField defaultValue={current} />
      <FormMessage state={state} />
      <SubmitButton pending={pending} pendingLabel="Saving…">
        Save name
      </SubmitButton>
    </form>
  );
};

export const EmailForm: React.FC<{
  current: string;
  /** An address waiting for confirmation, if a change is under way */
  pending: string | null;
}> = ({ current, pending: pendingEmail }) => {
  const [state, action, pending] = useActionState(changeEmail, initial);

  return (
    <form action={action} className={formClass}>
      <p className="text-sm">
        Current email: <span className="font-bold">{current}</span>
      </p>
      {pendingEmail && !state.message && (
        <p className="text-sm text-dnd-ink/80">
          Waiting for you to confirm{" "}
          <span className="font-bold">{pendingEmail}</span>. Check that inbox
          for the link.
        </p>
      )}
      <EmailField
        label="New email"
        hint="Your email stays the same until you click the link we send."
      />
      <FormMessage state={state} />
      <SubmitButton pending={pending} pendingLabel="Sending…">
        Change email
      </SubmitButton>
    </form>
  );
};

export const PasswordForm = () => {
  const [state, action, pending] = useActionState(changePassword, initial);
  const pair = usePasswordPair();
  // Empty the fields once a change goes through (adjusting state during render)
  const [seen, setSeen] = useState(state);
  if (state !== seen) {
    setSeen(state);
    if (state.message) pair.clear();
  }

  return (
    <form action={action} className={formClass}>
      <PasswordFields pair={pair} />
      <FormMessage state={state} />
      <SubmitButton
        pending={pending}
        pendingLabel="Changing…"
        disabled={!!pair.mismatch}
      >
        Change password
      </SubmitButton>
    </form>
  );
};
