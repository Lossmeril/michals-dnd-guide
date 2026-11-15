"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { createClient } from "@/utils/supabase/server";
import { getDict } from "@/lib/i18n/server";

export type LoginState = {
  error: string | null;
  email?: string;
  /** Set when the account exists but its email isn't confirmed yet */
  unconfirmed?: boolean;
};

export async function login(
  _prev: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const t = (await getDict()).account.login;
  if (!email || !password) {
    return { error: t.required, email };
  }

  const supabase = createClient(await cookies());
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error?.code === "email_not_confirmed") {
    return {
      error: t.unconfirmed,
      email,
      unconfirmed: true,
    };
  }
  if (error?.code === "invalid_credentials") {
    return { error: t.wrong, email };
  }
  if (error) return { error: error.message, email };

  revalidatePath("/", "layout");
  redirect("/");
}
