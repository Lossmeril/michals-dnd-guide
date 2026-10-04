import { logout } from "@/app/(auth)/actions";
import { getUser } from "@/lib/auth";
import { fetchProfile } from "@/lib/endpoints/profiles";

import { Tables } from "@/lib/types/database.types";

import Link from "next/link";
import { Heading } from "./layout/typography";
import { Avatar } from "./avatar";

const Navbar = async () => {
  const user = await getUser();
  let profile: Tables<"profiles"> | null = null;

  if (user) {
    profile = (await fetchProfile(user.id)) as Tables<"profiles"> | null;
  }

  return (
    <nav className="h-16 w-full bg-dnd-light border-b-2 border-dnd-red flex items-center justify-between px-4">
      <div>
        <Link href="/">
          <Heading level={2} className="mb-0" justStyle>
            Michal&apos;s D&D Guide
          </Heading>
        </Link>
      </div>
      <div className="flex flex-row gap-5 items-center">
        {user && profile && (
          <>
            <Avatar
              name={profile.display_name || user.email!}
              imgSrc={profile.avatar_url ? profile.avatar_url : undefined}
            />
            <Link href="/profile">
              <p>{profile.display_name || user.email}</p>
            </Link>
            <form action={logout}>
              <button type="submit">Log out</button>
            </form>
          </>
        )}
        {!user && (
          <a href="/login" className="text-dnd-red button">
            Log in
          </a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
