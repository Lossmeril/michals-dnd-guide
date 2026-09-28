"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { createClient } from "@/utils/supabase/server";

export type SignupState = { error: string | null; message?: string };

export async function signup(
  _prev: SignupState,
  formData: FormData,
): Promise<SignupState> {
  const email = formData.get("email");
  const password = formData.get("password");
  if (typeof email !== "string" || typeof password !== "string") {
    return { error: "Email and password are required." };
  }

  const supabase = createClient(await cookies());

  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) return { error: error.message };

  // Email confirmation is on: no session until the link in the email is clicked
  if (!data.session) {
    return {
      error: null,
      message: "Check your email to confirm your account.",
    };
  }

  revalidatePath("/", "layout");
  redirect("/");
}
