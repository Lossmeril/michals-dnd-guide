"use client";

import { useActionState } from "react";
import { login } from "./actions";

export const LoginForm = () => {
  const [state, formAction, pending] = useActionState(login, { error: null });

  return (
    <form action={formAction}>
      <input
        name="email"
        type="email"
        placeholder="Email"
        required
        className=""
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        required
        className=""
      />
      {state.error && <p role="alert">{state.error}</p>}
      <button type="submit" disabled={pending}>
        {pending ? "Logging in…" : "Log in"}
      </button>
    </form>
  );
};
