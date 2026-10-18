import Link from "next/link";

const Footer = () => (
  <footer className="w-full bg-dnd-bg border-t border-dnd-red-dark px-4 py-4 text-xs text-dnd-ink flex flex-wrap items-center justify-between gap-2">
    <p className="libre">Michal&apos;s D&D Guide</p>
    <nav className="flex gap-6">
      <Link href="/rulebook" className="link">
        Rulebook
      </Link>
      <Link href="/credits" className="link">
        Credits
      </Link>
    </nav>
  </footer>
);

export default Footer;
