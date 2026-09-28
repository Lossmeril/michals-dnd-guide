import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

import { Profile } from "@/lib/types/profile";

const fetchProfile = async (userId: string) => {
  const supabase = createClient(await cookies());
  const { data, error } = await supabase
    .from("profiles")
    .select()
    .eq("id", userId)
    .maybeSingle();

  const profile = data as Profile | null;

  if (error) {
    console.error("Error fetching profile:", error);
  }

  return profile;
};

export default fetchProfile;

const updateProfile = async (userId: string, profileData: Partial<Profile>) => {
  const supabase = createClient(await cookies());
  const { data, error } = await supabase
    .from("profiles")
    .update(profileData)
    .eq("id", userId)
    .select()
    .maybeSingle();

  const updatedProfile = data as Profile | null;

  if (error) {
    console.error("Error updating profile:", error);
  }

  return updatedProfile;
};

export { updateProfile };
