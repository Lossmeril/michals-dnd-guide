import { notFound } from "next/navigation";
import { fetchRulebook } from "@/lib/endpoints/rulebook";
import ItemEditor from "./itemEditor";

const AdminItemPage = async ({ params }: PageProps<"/admin/items/[id]">) => {
  const { id } = await params;
  const rb = await fetchRulebook();
  const item = rb.items.find((i) => i.id === id);
  if (id !== "new" && !item) notFound();

  return (
    <ItemEditor
      item={item ?? null}
      nextSort={Math.max(0, ...rb.items.map((i) => i.sort)) + 1}
    />
  );
};

export default AdminItemPage;
