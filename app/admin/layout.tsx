import { requireAdmin } from "@/lib/auth";

// Only admins edit the rulebook; everyone else is sent home
const AdminLayout = async ({ children }: LayoutProps<"/admin">) => {
  await requireAdmin();
  return children;
};

export default AdminLayout;
