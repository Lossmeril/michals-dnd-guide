import { logout } from "@/app/(auth)/actions";
import { getUser } from "@/lib/auth";
import fetchProfile from "@/lib/endpoints/fetchProfile";
import { Profile } from "@/lib/types/profile";

interface AvatarProps {
  imgSrc?: string;
  name: string;
}

const Avatar: React.FC<AvatarProps> = ({ imgSrc, name }) => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-dnd-red text-white font-bold">
      {imgSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={imgSrc} alt={name} className="w-full h-full rounded-full" />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
};

const Navbar = async () => {
  const user = await getUser();
  let profile: Profile | null = null;

  if (user) {
    profile = (await fetchProfile(user.id)) as Profile | null;
  }

  console.log("Navbar user:", user);
  console.log("Navbar profile:", profile);

  return (
    <nav className="h-16 w-full border-b-2 border-dnd-red flex items-center justify-between px-4">
      <div></div>{" "}
      <div className="flex flex-row gap-5 items-center">
        {user && profile && (
          <>
            <Avatar name={profile.display_name || user.email!} />
            <p>{profile.display_name || user.email}</p>
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
