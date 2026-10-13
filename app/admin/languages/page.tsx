import Link from "next/link";
import { fetchRulebook } from "@/lib/endpoints/rulebook";
import { AdminHeader } from "../_components";
import LanguagesTable from "./languagesTable";

const AdminLanguagesPage = async () => {
  const rb = await fetchRulebook();
  const rows = rb.languages.map((language) => ({
    language,
    races: rb.races.filter((r) => r.language_id === language.id).map((r) => r.name),
  }));
  return (
    <>
      <AdminHeader
        title="Languages"
        actions={
          <Link href="/admin/languages/new" className="button">
            New language
          </Link>
        }
      />
      <LanguagesTable rows={rows} />
    </>
  );
};

export default AdminLanguagesPage;
