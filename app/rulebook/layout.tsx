import SidebarNav from "@/components/layout/sidebarNav";
import { CHAPTERS, hrefOf } from "./nav";

// Readable without an account: the rulebook tables are public
const RulebookLayout = ({ children }: LayoutProps<"/rulebook">) => (
  <div className="flex gap-10">
    <div className="hidden md:block">
      <SidebarNav
        items={CHAPTERS.map((chapter) => ({
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

export default RulebookLayout;
