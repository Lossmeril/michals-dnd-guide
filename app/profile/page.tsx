import { Heading } from "@/components/ui/typography";
import { requireUser } from "@/lib/auth";
import { fetchProfile } from "@/lib/endpoints/profiles";
import { Tables } from "@/lib/types/database.types";
import { AvatarUpload } from "./avatarUpload";

const ProfilePage = async () => {
  const user = await requireUser();
  let profile: Tables<"profiles"> | null = null;

  if (user) {
    profile = (await fetchProfile(user.id)) as Tables<"profiles"> | null;
  }

  return (
    <>
      <Heading level={1}>Profile information</Heading>
      {user && profile ? (
        <div className="flex flex-col items-start gap-4">
          <p>
            <span className="font-bold">Email:</span> {user.email}
          </p>
          <p>
            <span className="font-bold">Display Name:</span>{" "}
            {profile.display_name}
          </p>

          <div className="relative w-40 h-40 aspect-square bg-gray-200 rounded-full overflow-hidden border-2 border-dnd-red group">
            {profile.avatar_url && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={profile.avatar_url}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <AvatarUpload />
            </div>
          </div>
        </div>
      ) : (
        <p>No user logged in.</p>
      )}
    </>
  );
};

export default ProfilePage;
