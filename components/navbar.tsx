import { logout } from "@/app/(auth)/actions";
import { getUser } from "@/lib/auth";
import { fetchProfile } from "@/lib/endpoints/profiles";

import { Tables } from "@/lib/types/database.types";

import Link from "next/link";
import { Heading } from "./ui/typography";
import { Avatar } from "./ui/avatar";
import AdminBar from "./adminBar";
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
      <nav className="print:hidden h-16 w-full bg-dnd-bg border-b border-dnd-red-dark flex items-center justify-between px-4">
        <div>
          <Link href="/">
            <Heading level={2} className="mb-0" justStyle>
              {dict.site.name}
            </Heading>
          </Link>
        </div>
        <div className="flex flex-row gap-10 items-center">
          <Link
            href="/rulebook"
            className="libre font-bold text-dnd-red hover:text-dnd-red-dark"
          >
            {dict.site.rulebook}
          </Link>
          <LangSwitch />
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

                <p>{profile.display_name || user.email}</p>
              </Link>
              <form action={logout}>
                <button type="submit">{dict.site.logOut}</button>
              </form>
            </>
          )}
          {!user && (
            <a href="/login" className="text-dnd-red button">
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
