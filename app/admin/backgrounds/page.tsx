import Link from "next/link";
import { fetchRulebook } from "@/lib/endpoints/rulebook";
import { AdminHeader } from "../_components";
import BackgroundsTable from "./backgroundsTable";

const AdminBackgroundsPage = async () => {
  const rb = await fetchRulebook();
  return (
    <>
      <AdminHeader
        title="Backgrounds"
        actions={
          <Link href="/admin/backgrounds/new" className="button">
            New background
          </Link>
        }
      />
      <BackgroundsTable rows={rb.backgrounds} />
    </>
  );
};

export default AdminBackgroundsPage;
