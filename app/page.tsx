import { requireUser } from "@/lib/auth";
import fetchProfile, { updateProfile } from "@/lib/endpoints/fetchProfile";
import { logout } from "./(auth)/actions";

import { Profile } from "@/lib/types/profile";

const HomePage = async () => {
  const user = await requireUser();

  const profile = (await fetchProfile(user.id)) as Profile | null;

  return (
    <div>
      <p>You are logged in as {profile?.display_name || user.email}</p>
      <form action={logout}>
        <button type="submit">Log out</button>
      </form>

      <p>Your role is: {profile?.role || "Unknown"}</p>
    </div>
  );
};

export default HomePage;
