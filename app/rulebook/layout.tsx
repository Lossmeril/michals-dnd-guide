import SidebarNav, { MobileNav } from "@/components/layout/sidebarNav";
import Alert from "@/components/ui/alert";
import { getDict } from "@/lib/i18n/server";
import { fetchRulebookNav } from "@/lib/endpoints/rulebookPages";
import { hrefOf } from "@/lib/rulebookNav";

// Readable without an account: the rulebook tables are public
const RulebookLayout = async ({ children }: LayoutProps<"/rulebook">) => {
  const [nav, dict] = await Promise.all([fetchRulebookNav(), getDict()]);
  const notice = dict.site.translationNotice;
  const items = nav.map((chapter) => ({
    label: chapter.title,
    items: chapter.pages.map((p) => ({
      label: p.title,
      href: hrefOf(p.slug),
    })),
  }));
  return (
    <div className="flex gap-10">
      <div className="hidden md:block print:hidden">
        <SidebarNav items={items} />
      </div>
      <article className="flex-1 min-w-0 max-w-3xl">
        <div className="md:hidden print:hidden">
          <MobileNav items={items} label={dict.site.rulebookContents} />
        </div>
        {notice && (
          <Alert kind="warning" className="print:hidden">
            <strong>{notice.title}.</strong> {notice.text}
          </Alert>
        )}
        {children}
      </article>
    </div>
  );
};

export default RulebookLayout;
