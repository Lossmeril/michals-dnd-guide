import { cookies } from "next/headers";
import { DataTable } from "@/components/ui/dataTable";
import { requireAdmin } from "@/lib/auth";
import { createClient } from "@/utils/supabase/server";
import { AdminHeader } from "../_components";
import RoleSelect from "./roleSelect";
import SignupPassword from "./signupPassword";

const AdminUsersPage = async () => {
  const me = await requireAdmin();
  const supabase = createClient(await cookies());
  const [{ data: users, error }, { data: setAt }] = await Promise.all([
    supabase.rpc("list_users"),
    supabase.rpc("signup_password_set_at"),
  ]);

  return (
    <>
      <AdminHeader title="Users" />
      <SignupPassword setAt={setAt ?? null} />
      <p className="text-sm mb-6">
        Players make characters. <strong>DMs</strong> can also start campaigns
        and run them. <strong>Admins</strong> can also edit the rulebook and
        give roles. There has to be at least one admin.
      </p>
      {error ? (
        <p className="text-sm">Couldn&apos;t load users: {error.message}</p>
      ) : (
        <DataTable
          rows={users ?? []}
          rowKey={(u) => u.id}
          empty="Nobody has signed up yet."
          columns={[
            {
              label: "Name",
              render: (u) => (
                <span className="font-bold">
                  {u.display_name || "Unnamed player"}
                  {u.id === me.id && " (you)"}
                </span>
              ),
            },
            { label: "Email", render: (u) => u.email },
            {
              label: "Joined",
              render: (u) => new Date(u.created_at).toLocaleDateString("en-GB"),
            },
            {
              label: "Role",
              render: (u) => <RoleSelect userId={u.id} role={u.role ?? "player"} />,
            },
          ]}
        />
      )}
    </>
  );
};

export default AdminUsersPage;
