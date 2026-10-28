import { notFound } from "next/navigation";
import { fetchBestiary } from "@/lib/endpoints/bestiary";
import CategoryEditor from "./categoryEditor";

const AdminBestiaryCategoryPage = async ({
  params,
  searchParams,
}: PageProps<"/admin/bestiary/categories/[id]">) => {
  const { id } = await params;
  const { parent } = await searchParams;
  const b = await fetchBestiary(true);
  const category = b.categories.find((c) => c.id === id);
  if (id !== "new" && !category) notFound();

  return (
    <CategoryEditor
      bestiary={b}
      category={category ?? null}
      parentId={typeof parent === "string" ? parent : null}
    />
  );
};

export default AdminBestiaryCategoryPage;
