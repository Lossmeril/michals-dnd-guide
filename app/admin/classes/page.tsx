import MagicBadge from "@/components/game/magicBadge";
import { DataTable } from "@/components/ui/dataTable";
import { fetchRulebook } from "@/lib/endpoints/rulebook";
import {
  aspectsOf,
  choosablePerks,
  coreSpells,
  parentNames,
} from "@/lib/rules/character";
import { parseSort } from "@/lib/sort";
import { Constants } from "@/lib/types/database.types";
import { AdminHeader, Thumb } from "../_components";

const ENUMS = Constants.public.Enums;

const AdminClassesPage = async ({ searchParams }: PageProps<"/admin/classes">) => {
  const { sort, dir } = await searchParams;
  const rb = await fetchRulebook();
  return (
    <>
      <AdminHeader
        title="Classes"
        newLink={{ href: "/admin/classes/new", label: "New class" }}
      />
      <DataTable
        sort={parseSort(sort, dir)}
        rows={rb.classes}
        rowKey={(c) => c.id}
        href={(c) => `/admin/classes/${c.id}`}
        columns={[
          { label: "Class", id: "name", render: (c) => c.name, sortValue: (c) => c.name },
          { label: "", render: (c) => <Thumb src={c.image_url} />, className: "w-14" },
          { label: "Rank", render: (c) => c.rank, sortValue: (c) => ENUMS.class_rank.indexOf(c.rank) },
          { label: "Magic", render: (c) => <MagicBadge magic={c.magic} />, sortValue: (c) => ENUMS.class_magic.indexOf(c.magic) },
          { label: "Parents", render: (c) => parentNames(rb, c.id) || "—", sortValue: (c) => parentNames(rb, c.id) },
          { label: "Skills", render: (c) => rb.skills.filter((s) => s.class_id === c.id).length, sortValue: (c) => rb.skills.filter((s) => s.class_id === c.id).length },
          { label: "Perks", render: (c) => choosablePerks(rb, c.id).length, sortValue: (c) => choosablePerks(rb, c.id).length },
          { label: "Core", render: (c) => coreSpells(rb, c.id).length, sortValue: (c) => coreSpells(rb, c.id).length },
          { label: "Aspects", render: (c) => aspectsOf(rb, c.id).length, sortValue: (c) => aspectsOf(rb, c.id).length },
        ]}
      />
    </>
  );
};

export default AdminClassesPage;
