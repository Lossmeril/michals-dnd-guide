import { logout } from "@/app/(auth)/actions";
import { getUser } from "@/lib/auth";
import { fetchProfile } from "@/lib/endpoints/profiles";

import { Tables } from "@/lib/types/database.types";

import Link from "next/link";
import { Heading } from "./ui/typography";
import { Avatar } from "./ui/avatar";

const Navbar = async () => {
  const user = await getUser();
  let profile: Tables<"profiles"> | null = null;

  if (user) {
    profile = (await fetchProfile(user.id)) as Tables<"profiles"> | null;
  }

  return (
    <nav className="h-16 w-full bg-dnd-bg border-b border-dnd-red-dark flex items-center justify-between px-4">
      <div>
        <Link href="/">
          <Heading level={2} className="mb-0" justStyle>
            Michal&apos;s D&D Guide
          </Heading>
        </Link>
      </div>
      <div className="flex flex-row gap-10 items-center">
        {user && profile && (
          <>
            {" "}
            <Link href="/profile" className="flex flex-row gap-2 items-center">
              <Avatar
                name={profile.display_name || user.email!}
                imgSrc={profile.avatar_url ? profile.avatar_url : undefined}
              />

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
