import { notFound } from "next/navigation";
import { fetchBestiary } from "@/lib/endpoints/bestiary";
import CreatureEditor from "./creatureEditor";

const AdminCreaturePage = async ({
  params,
  searchParams,
}: PageProps<"/admin/bestiary/creatures/[id]">) => {
  const { id } = await params;
  const { category } = await searchParams;
  const b = await fetchBestiary(true);
  const creature = b.creatures.find((c) => c.id === id);
  if (id !== "new" && !creature) notFound();

  return (
    <CreatureEditor
      bestiary={b}
      creature={creature ?? null}
      categoryId={typeof category === "string" ? category : null}
    />
  );
};

export default AdminCreaturePage;
