import { notFound } from "next/navigation";
import { fetchRulebook } from "@/lib/endpoints/rulebook";
import RaceEditor from "./raceEditor";

const AdminRacePage = async ({ params }: PageProps<"/admin/races/[id]">) => {
  const { id } = await params;
  const rb = await fetchRulebook(true);
  const race = rb.races.find((r) => r.id === id);
  if (id !== "new" && !race) notFound();

  return <RaceEditor rb={rb} race={race ?? null} />;
};

export default AdminRacePage;
