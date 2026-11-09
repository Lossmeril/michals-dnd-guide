import { DataTable } from "@/components/ui/dataTable";
import { fetchRulebook } from "@/lib/endpoints/rulebook";
import { racialPerks } from "@/lib/rules/character";
import { parseSort } from "@/lib/sort";
import { AdminHeader, Thumb } from "../_components";

const AdminRacesPage = async ({ searchParams }: PageProps<"/admin/races">) => {
  const { sort, dir } = await searchParams;
  const rb = await fetchRulebook();
  const languageOf = (id: string | null) =>
    rb.languages.find((l) => l.id === id)?.name ?? "—";

  return (
    <>
      <AdminHeader
        title="Races"
        newLink={{ href: "/admin/races/new", label: "New race" }}
      />
      <DataTable
        sort={parseSort(sort, dir)}
        rows={rb.races}
        rowKey={(r) => r.id}
        href={(r) => `/admin/races/${r.id}`}
        columns={[
          { label: "Race", id: "name", render: (r) => r.name, sortValue: (r) => r.name },
          { label: "", render: (r) => <Thumb src={r.image_url} />, className: "w-14" },
          { label: "Blurb", render: (r) => r.blurb },
          { label: "Language", render: (r) => languageOf(r.language_id), sortValue: (r) => r.language_id && languageOf(r.language_id) },
          {
            label: "Racial perks",
            render: (r) =>
              racialPerks(rb, r.id)
                .map((p) => p.name)
                .join(", ") || "—",
          },
        ]}
      />
    </>
  );
};

export default AdminRacesPage;
