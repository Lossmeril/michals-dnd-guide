import { notFound } from "next/navigation";
import { fetchRulebook } from "@/lib/endpoints/rulebook";
import ClassEditor from "./classEditor";

const AdminClassPage = async ({ params }: PageProps<"/admin/classes/[id]">) => {
  const { id } = await params;
  const rb = await fetchRulebook();
  const cls = rb.classes.find((c) => c.id === id);
  if (id !== "new" && !cls) notFound();

  return <ClassEditor rb={rb} cls={cls ?? null} />;
};

export default AdminClassPage;
