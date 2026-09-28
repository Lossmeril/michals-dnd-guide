import { redirect } from "next/navigation";

import { getUser } from "@/lib/auth";

// Logged-in users have no business on /login or /signup
const AuthLayout = async ({ children }: LayoutProps<"/">) => {
  const user = await getUser();
  if (user) redirect("/");

  return children;
};

export default AuthLayout;
