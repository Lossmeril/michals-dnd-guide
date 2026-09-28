"use client";

import { useActionState } from "react";
import { signup } from "./actions";

export const SignupForm = () => {
  const [state, formAction, pending] = useActionState(signup, { error: null });

  return (
    <form action={formAction}>
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className="border border-gray-300 rounded-md p-2"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        required
        className="border border-gray-300 rounded-md p-2"
      />
      {state.error && <p role="alert">{state.error}</p>}
      {state.message && <p>{state.message}</p>}
      <button type="submit" disabled={pending}>
        {pending ? "Signing up…" : "Sign up"}
      </button>
    </form>
  );
};
