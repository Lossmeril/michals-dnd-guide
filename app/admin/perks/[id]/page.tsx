import { notFound } from "next/navigation";
import { fetchRulebook } from "@/lib/endpoints/rulebook";
import PerkEditor from "./perkEditor";

const one = (v: string | string[] | undefined) =>
  typeof v === "string" ? v : null;

const AdminPerkPage = async ({
  params,
  searchParams,
}: PageProps<"/admin/perks/[id]">) => {
  const { id } = await params;
  const query = await searchParams;
  const rb = await fetchRulebook(true);
  const perk = rb.perks.find((p) => p.id === id);
  if (id !== "new" && !perk) notFound();

  return (
    <PerkEditor
      rb={rb}
      perk={perk ?? null}
      // Links like "New aspect" on a class page prefill these
      preset={{
        kind: one(query.kind),
        classId: one(query.class),
        raceId: one(query.race),
        core: query.core === "1",
      }}
    />
  );
};

export default AdminPerkPage;
