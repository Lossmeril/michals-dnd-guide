import Link from "next/link";
import { getDict } from "@/lib/i18n/server";

const Footer = async () => {
  const dict = await getDict();
  return (
    <footer className="print:hidden w-full bg-dnd-bg border-t border-dnd-red-dark px-4 py-4 text-xs text-dnd-ink flex flex-wrap items-center justify-between gap-2">
      <p className="libre">{dict.site.name}</p>
      <nav className="flex gap-6">
        <Link href="/rulebook" className="link">
          {dict.site.rulebook}
        </Link>
        <Link href="/credits" className="link">
          {dict.site.credits}
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
