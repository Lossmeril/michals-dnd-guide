import { notFound } from "next/navigation";
import { fetchRulebook } from "@/lib/endpoints/rulebook";
import LanguageEditor from "./languageEditor";

const AdminLanguagePage = async ({
  params,
}: PageProps<"/admin/languages/[id]">) => {
  const { id } = await params;
  const rb = await fetchRulebook();
  const language = rb.languages.find((l) => l.id === id);
  if (id !== "new" && !language) notFound();

  return (
    <LanguageEditor language={language ?? null} nextSort={rb.languages.length} />
  );
};

export default AdminLanguagePage;
