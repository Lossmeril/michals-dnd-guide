import type { EmailOtpType } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

// Only same-site paths, so the link can't bounce users to another site
const safeNext = (next: string | null) =>
  next?.startsWith("/") && !next.startsWith("//") ? next : "/";

/**
 * Where links in auth emails land: sign-up confirmation, email change and
 * password reset.
 * Handles both link styles Supabase can send:
 * - `?code=` from the default templates (PKCE); works in the browser that
 *   started the flow, since the code verifier lives in its cookies
 * - `?token_hash=&type=` from custom templates; works on any device
 */
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const next = safeNext(searchParams.get("next"));
  const code = searchParams.get("code");
  const tokenHash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;

  const supabase = createClient(await cookies());
  let ok = false;
  if (code) {
    ok = !(await supabase.auth.exchangeCodeForSession(code)).error;
  } else if (tokenHash && type) {
    ok = !(await supabase.auth.verifyOtp({ type, token_hash: tokenHash }))
      .error;
  }

  if (ok) return NextResponse.redirect(new URL(next, request.url));

  // A dead reset link goes back to asking for a new one
  if (next === "/reset-password") {
    return NextResponse.redirect(
      new URL("/forgot-password?error=expired", request.url),
    );
  }

  // A logged-in user (e.g. changing their email) goes back with a notice;
  // anyone else to the login page, which explains the bad link
  const { data } = await supabase.auth.getUser();
  const target = new URL(data.user ? next : "/login", request.url);
  target.searchParams.set("error", "confirm");
  return NextResponse.redirect(target);
}
