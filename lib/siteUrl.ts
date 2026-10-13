import { headers } from "next/headers";

/** The site's own origin, for links in emails, e.g. "https://example.com" */
export const siteUrl = async () => {
  const h = await headers();
  const origin = h.get("origin");
  if (origin) return origin;
  const host = h.get("x-forwarded-host") ?? h.get("host");
  const proto = h.get("x-forwarded-proto") ?? "http";
  return `${proto}://${host}`;
};

/** Where email links land; /auth/confirm logs the user in, then goes to `next` */
export const confirmUrl = async (next = "/") =>
  `${await siteUrl()}/auth/confirm?next=${encodeURIComponent(next)}`;
