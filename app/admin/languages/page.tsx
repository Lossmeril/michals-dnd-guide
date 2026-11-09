import { DataTable } from "@/components/ui/dataTable";
import { fetchRulebook } from "@/lib/endpoints/rulebook";
import { relatedLanguageNames } from "@/lib/rules/character";
import { parseSort } from "@/lib/sort";
import { AdminHeader } from "../_components";

const AdminLanguagesPage = async ({ searchParams }: PageProps<"/admin/languages">) => {
  const { sort, dir } = await searchParams;
  const rb = await fetchRulebook();
  const racesSpeaking = (id: string) =>
    rb.races
      .filter((r) => r.language_id === id)
      .map((r) => r.name)
      .join(", ") || "—";

  return (
    <>
      <AdminHeader
        title="Languages"
        newLink={{ href: "/admin/languages/new", label: "New language" }}
      />
      <DataTable
        sort={parseSort(sort, dir)}
        rows={rb.languages}
        rowKey={(l) => l.id}
        href={(l) => `/admin/languages/${l.id}`}
        columns={[
          { label: "Language", id: "name", render: (l) => l.name, sortValue: (l) => l.name },
          { label: "Description", render: (l) => l.description },
          {
            label: "Racial language of",
            render: (l) => racesSpeaking(l.id),
            sortValue: (l) => rb.races.find((r) => r.language_id === l.id)?.name,
          },
          {
            label: "Related to",
            render: (l) => relatedLanguageNames(rb, l.id),
            sortValue: (l) => relatedLanguageNames(rb, l.id),
          },
        ]}
      />
    </>
  );
};

export default AdminLanguagesPage;
