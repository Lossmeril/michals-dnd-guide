import { redirect } from "next/navigation";
import { INDEX_SLUG } from "@/lib/rulebookNav";
import DbPage from "../_dbPage";

const RulebookPage = async ({ params }: PageProps<"/rulebook/[slug]">) => {
  const { slug } = await params;
  // The front page lives at /rulebook
  if (slug === INDEX_SLUG) redirect("/rulebook");
  return <DbPage slug={slug} />;
};

export default RulebookPage;
