import { notFound } from "next/navigation";
import { fetchCredits } from "@/lib/endpoints/credits";
import CreditEditor from "./creditEditor";

const AdminCreditPage = async ({ params }: PageProps<"/admin/credits/[id]">) => {
  const { id } = await params;
  const credits = await fetchCredits();
  if (id === "new") {
    const nextSort = Math.max(0, ...credits.map((c) => c.sort)) + 1;
    return <CreditEditor credit={null} nextSort={nextSort} />;
  }
  const credit = credits.find((c) => c.id === Number(id));
  if (!credit) notFound();
  return <CreditEditor credit={credit} nextSort={credit.sort} />;
};

export default AdminCreditPage;
