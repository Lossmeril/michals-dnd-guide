import Link from "next/link";
import { fetchRulebook } from "@/lib/endpoints/rulebook";
import { AdminHeader } from "../_components";
import PerksTable from "./perksTable";

const AdminPerksPage = async ({ searchParams }: PageProps<"/admin/perks">) => {
  const { kind } = await searchParams;
  const rb = await fetchRulebook();

  return (
    <>
      <AdminHeader
        title="Perks and spells"
        actions={
          <Link href="/admin/perks/new" className="button">
            New perk
          </Link>
        }
      />
      <PerksTable rb={rb} initialKind={typeof kind === "string" ? kind : null} />
    </>
  );
};

export default AdminPerksPage;
