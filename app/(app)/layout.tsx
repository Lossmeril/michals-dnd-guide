import { redirect } from "next/navigation";

import { requireUser } from "@/lib/auth";

// Logged-in users have no business on /login or /signup
const AppLayout = async ({ children }: LayoutProps<"/">) => {
  const user = await requireUser();
  if (!user) redirect("/login");

  return children;
};

export default AppLayout;
