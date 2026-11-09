"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { checkPassword } from "@/lib/accountRules";
import { createClient } from "@/utils/supabase/server";

export type ResetState = { error: string | null };

/** Sets a new password for the user the reset link logged in */
export async function resetPassword(
  _prev: ResetState,
  formData: FormData,
): Promise<ResetState> {
  const password = String(formData.get("password") ?? "");
  const invalid = checkPassword(
    password,
    String(formData.get("confirmPassword") ?? ""),
  );
  if (invalid) return { error: invalid };

  const supabase = createClient(await cookies());
  const { error } = await supabase.auth.updateUser({ password });
  if (error?.code === "same_password") {
    return { error: "That's your current password. Pick a new one." };
  }
  if (error?.code === "weak_password") return { error: error.message };
  if (error) return { error: error.message };

  revalidatePath("/", "layout");
  redirect("/");
}
