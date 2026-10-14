"use client";

import { useActionState } from "react";
import Field from "@/components/ui/field";
import { newCampaign } from "./actions";

export const NewCampaignForm = () => {
  const [state, formAction, pending] = useActionState(newCampaign, {
    error: null,
  });

  return (
    <form
      action={formAction}
      className="flex flex-col gap-4 max-w-xl bg-dnd-bg border border-dnd-gold rounded-lg shadow-md p-6"
    >
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
      {state.error && (
        <p role="alert" className="text-sm text-dnd-red">
          {state.error}
        </p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="self-start disabled:opacity-50"
      >
        {pending ? "Gathering the party…" : "Create campaign"}
      </button>
    </form>
  );
};
