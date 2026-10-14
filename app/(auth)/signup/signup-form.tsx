"use client";

import { useActionState } from "react";
import {
  DisplayNameField,
  EmailField,
  FormMessage,
  PasswordFields,
  SubmitButton,
  usePasswordPair,
} from "@/components/ui/form";
import StoryBox from "@/components/ui/storyBox";
import { signup } from "./actions";
import { ResendConfirmation } from "./resendConfirmation";

export const SignupForm = () => {
  const [state, formAction, pending] = useActionState(signup, { error: null });
  const pair = usePasswordPair();

  if (state.sentTo) {
    return (
      <>
        <StoryBox className="mt-2">
          <p>
            The guard writes it all down, slowly, tongue between teeth.
            &ldquo;Right. A runner will bring a letter to{" "}
            <span className="not-italic font-bold">{state.sentTo}</span>.
            Bring me the seal inside and the gate is yours.&rdquo;
          </p>
        </StoryBox>
        <p className="mb-4">
          Open the link in the email to confirm your account. It logs you in
          straight away.
        </p>
        <ResendConfirmation email={state.sentTo} />
      </>
    );
  }

  return (
    <form action={formAction} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <DisplayNameField
        hint="What other players and your DM see. You can change it later."
        error={state.fieldErrors?.displayName}
        defaultValue={state.values?.displayName}
        className="md:col-span-2"
      />
      <EmailField
        hint="We send a confirmation link here."
        error={state.fieldErrors?.email}
        defaultValue={state.values?.email}
        className="md:col-span-2"
      />
      <PasswordFields
        pair={pair}
        labels={["Password", "Confirm password"]}
        errors={{
          password: state.fieldErrors?.password,
          confirm: state.fieldErrors?.confirmPassword,
        }}
      />

      <FormMessage state={state} className="md:col-span-2" />

      <SubmitButton
        pending={pending}
        pendingLabel="Signing the ledger…"
        disabled={!!pair.mismatch}
      >
        Create account
      </SubmitButton>
    </form>
  );
};
