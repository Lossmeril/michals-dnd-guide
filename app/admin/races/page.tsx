import Link from "next/link";
import { fetchRulebook } from "@/lib/endpoints/rulebook";
import { racialPerks } from "@/lib/rules/character";
import { AdminHeader } from "../_components";
import RacesTable from "./racesTable";

const AdminRacesPage = async () => {
  const rb = await fetchRulebook();
  const rows = rb.races.map((race) => ({
    race,
    language: rb.languages.find((l) => l.id === race.language_id)?.name ?? null,
    perks: racialPerks(rb, race.id).map((p) => p.name),
  }));

  return (
    <>
      <AdminHeader
        title="Races"
        actions={
          <Link href="/admin/races/new" className="button">
            New race
          </Link>
        }
      />
      <RacesTable rows={rows} />
    </>
  );
};

export default AdminRacesPage;
