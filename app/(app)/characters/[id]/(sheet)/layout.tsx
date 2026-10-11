import SidebarNav from "@/components/layout/sidebarNav";
import { fetchCharacterBuild } from "@/lib/endpoints/character_build";
import { fetchRulebook } from "@/lib/endpoints/rulebook";

const CharacterSheetLayout = async ({
  children,
  params,
}: LayoutProps<"/characters/[id]">) => {
  const { id } = await params;
  const [rb, found] = await Promise.all([
    fetchRulebook(),
    fetchCharacterBuild(Number(id)),
  ]);
  const base = `/characters/${id}`;
  const classes = rb.classes.filter((c) => found?.build.classes[c.id]);

  return (
    <div className="flex gap-10">
      <SidebarNav
        items={[
          { label: "Overview", href: base },
          { label: "Race", href: `${base}/race` },
          {
            label: "Classes",
            href: `${base}/classes`,
            items: classes.map((c) => ({
              label: `${c.name} ${found!.build.classes[c.id]}`,
              href: `${base}/classes/${c.id}`,
            })),
          },
        ]}
      />
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  );
};

export default CharacterSheetLayout;
