import { logout } from "@/app/(auth)/actions";
import { getUser } from "@/lib/auth";
import { fetchProfile } from "@/lib/endpoints/profiles";

import { Tables } from "@/lib/types/database.types";

import Image from "next/image";
import { FaBookOpen, FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";
import { Heading } from "./ui/typography";
import { Avatar } from "./ui/avatar";
import AdminBar from "./adminBar";
import { CZECH_PUBLISHED } from "@/lib/i18n/localize";
import LangSwitch from "./langSwitch";
import { getDict } from "@/lib/i18n/server";

const Navbar = async () => {
  const [user, dict] = await Promise.all([getUser(), getDict()]);
  let profile: Tables<"profiles"> | null = null;

  if (user) {
    profile = (await fetchProfile(user.id)) as Tables<"profiles"> | null;
  }

  return (
    <>
      <nav className="print:hidden h-16 w-full bg-dnd-bg border-b border-dnd-red-dark flex items-center justify-between gap-3 px-4">
        <div className="shrink-0">
          <Link href="/" className="flex flex-row gap-2 items-center" aria-label={dict.site.name}>
            <Image
              src="/img/neidhart.webp"
              alt=""
              width={48}
              height={48}
              loading="eager"
            />
            {/* On phones the logo stands in for the name */}
            <Heading level={2} className="mb-0 hidden md:block" justStyle>
              {dict.site.name}
            </Heading>
          </Link>
        </div>
        <div className="flex flex-row gap-3 sm:gap-6 lg:gap-10 items-center min-w-0">
          <Link
            href="/rulebook"
            title={dict.site.rulebook}
            className="libre font-bold text-dnd-red hover:text-dnd-red-dark"
          >
            {/* Icons on phones, words from tablets up */}
            <FaBookOpen className="sm:hidden text-xl" aria-hidden />
            <span className="sr-only sm:not-sr-only">{dict.site.rulebook}</span>
          </Link>
          {CZECH_PUBLISHED && <LangSwitch />}
          {user && profile && (
            <>
              {" "}
              <Link
                href="/profile"
                className="flex flex-row gap-2 items-center"
              >
                <Avatar
                  name={profile.display_name || user.email!}
                  imgSrc={profile.avatar_url ? profile.avatar_url : undefined}
                />

                <p className="hidden lg:block">{profile.display_name || user.email}</p>
              </Link>
              <form action={logout}>
                <button
                  type="submit"
                  title={dict.site.logOut}
                  className="whitespace-nowrap max-sm:px-3"
                >
                  <FaSignOutAlt className="sm:hidden" aria-hidden />
                  <span className="sr-only sm:not-sr-only">{dict.site.logOut}</span>
                </button>
              </form>
            </>
          )}
          {!user && (
            <a href="/login" className="button whitespace-nowrap">
              {dict.site.logIn}
            </a>
          )}
        </div>
      </nav>
      {profile?.role === "admin" && <AdminBar />}
    </>
  );
};

export default Navbar;
