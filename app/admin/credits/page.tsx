import { DataTable } from "@/components/ui/dataTable";
import { CREDIT_SECTIONS } from "@/lib/credits";
import { fetchCredits } from "@/lib/endpoints/credits";
import { AdminHeader } from "../_components";

const sectionTitle = (id: string) =>
  CREDIT_SECTIONS.find((s) => s.id === id)?.title.en ?? id;

const AdminCreditsPage = async () => {
  const credits = await fetchCredits();
  return (
    <>
      <AdminHeader title="Credits" newLink={{ href: "/admin/credits/new", label: "New credit" }} />
      <DataTable
        rows={credits}
        rowKey={(c) => c.id}
        href={(c) => `/admin/credits/${c.id}`}
        columns={[
          { label: "Title", render: (c) => c.title },
          { label: "Author", render: (c) => c.authors ?? <span className="italic text-dnd-red">to be added</span> },
          { label: "Section", render: (c) => sectionTitle(c.section) },
          { label: "Images", render: (c) => c.images.length || "" },
          { label: "Sort", render: (c) => c.sort },
        ]}
      />
    </>
  );
};

export default AdminCreditsPage;
