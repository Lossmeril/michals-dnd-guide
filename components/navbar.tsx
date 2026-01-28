import Link from "next/link";
import NavbarUser from "./navbar/navbarUser";

const Navbar = () => {
  return (
    <nav className="w-full border-b-2 border-red-900 bg-[#f4efe6] text-[#2b1d0e]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="font-serif text-xl tracking-wide">
          <Link href="/">
            <span className="uppercase tracking-widest text-red-900">
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
