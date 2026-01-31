import Link from "next/link";
import NavbarUser from "./navbar/navbarUser";

const Navbar = () => {
  return (
    <nav className="w-full border-b-2 border-dnd-red-dark bg-dnd-accent-yellow text-dnd-ink">
      <div className="mx-auto flex max-w-full items-center justify-between px-6 py-4 h-16 overflow-hidden">
        <div className="font-serif text-xl tracking-wide">
          <Link href="/">
            <span className="uppercase tracking-widest text-dnd-red-dark">
              Michal&apos;s D&amp;D Guide
            </span>
          </Link>
        </div>

        <NavbarUser />
      </div>
    </nav>
  );
};

export default Navbar;
