"use client";

import { useActionState } from "react";
import Field from "@/components/ui/field";
import { FormMessage, SubmitButton } from "@/components/ui/form";
import Panel from "@/components/ui/panel";
import { newCampaign } from "./actions";

export const NewCampaignForm = () => {
  const [state, formAction, pending] = useActionState(newCampaign, {
    error: null,
  });

  return (
    <Panel as="form" action={formAction} className="flex flex-col gap-4 max-w-xl">
      <Field label="Name" htmlFor="name">
        <input id="name" name="name" defaultValue={state.name} required />
      </Field>
      <Field
        label="Description"
        htmlFor="description"
        hint="What the players should know going in. You can change it later."
      >
        <textarea
          id="description"
          name="description"
          rows={5}
          defaultValue={state.description}
        />
      </Field>
      <FormMessage state={state} />
      <SubmitButton pending={pending} pendingLabel="Gathering the party…">
        Create campaign
      </SubmitButton>
    </Panel>
  );
};
