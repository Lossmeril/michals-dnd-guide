import Link from "next/link";
import { fetchRulebook } from "@/lib/endpoints/rulebook";
import { AdminHeader } from "../_components";
import ClassesTable from "./classesTable";

const AdminClassesPage = async () => {
  const rb = await fetchRulebook();
  return (
    <>
      <AdminHeader
        title="Classes"
        actions={
          <Link href="/admin/classes/new" className="button">
            New class
          </Link>
        }
      />
      <ClassesTable rb={rb} />
    </>
  );
};

export default AdminClassesPage;
