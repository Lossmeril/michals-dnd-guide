"use server";

import { cookies } from "next/headers";
import { getUser } from "@/lib/auth";
import { createClient } from "@/utils/supabase/server";

/** True when the signed-in user hasn't closed the alpha-test notice yet */
export const needsAlphaNotice = async () => {
  const user = await getUser();
  if (!user) return false;
  const { data } = await createClient(await cookies())
    .from("profiles")
    .select("alpha_notice_seen_at")
    .eq("id", user.id)
    .maybeSingle();
  return !!data && !data.alpha_notice_seen_at;
};

/** Remembers that the notice was read, on the account, so it shows once */
export async function dismissAlphaNotice() {
  const user = await getUser();
  if (!user) return;
  await createClient(await cookies())
    .from("profiles")
    .update({ alpha_notice_seen_at: new Date().toISOString() })
    .eq("id", user.id);
}
