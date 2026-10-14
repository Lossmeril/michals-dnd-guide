import { notFound } from "next/navigation";
import {
  fetchRulebookNav,
  fetchRulebookPageById,
} from "@/lib/endpoints/rulebookPages";
import PageEditor from "./pageEditor";

const AdminRulebookPageEditor = async ({
  params,
  searchParams,
}: PageProps<"/admin/rulebook/[id]">) => {
  const { id } = await params;
  const { chapter } = await searchParams;
  const nav = await fetchRulebookNav();
  const page = id === "new" ? null : await fetchRulebookPageById(id);
  if (id !== "new" && !page) notFound();

  return (
    <PageEditor
      page={page}
      chapters={nav.map(({ id, title }) => ({ id, title }))}
      defaultChapter={typeof chapter === "string" ? chapter : nav[0]?.id}
    />
  );
};

export default AdminRulebookPageEditor;
