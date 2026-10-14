import SidebarNav from "@/components/layout/sidebarNav";
import { fetchRulebookNav } from "@/lib/endpoints/rulebookPages";
import { hrefOf } from "@/lib/rulebookNav";

// Readable without an account: the rulebook tables are public
const RulebookLayout = async ({ children }: LayoutProps<"/rulebook">) => {
  const nav = await fetchRulebookNav();
  return (
    <div className="flex gap-10">
      <div className="hidden md:block">
        <SidebarNav
          items={nav.map((chapter) => ({
            label: chapter.title,
            items: chapter.pages.map((p) => ({
              label: p.title,
              href: hrefOf(p.slug),
            })),
          }))}
        />
      </div>
      <article className="flex-1 min-w-0 max-w-3xl">{children}</article>
    </div>
  );
};

export default RulebookLayout;
