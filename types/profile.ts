export const APP_ROLES = ["player", "admin"] as const;
export type AppRole = (typeof APP_ROLES)[number];

export type Profile = {
  display_name: string | null;
  role: AppRole;
  avatar_url: string | null;
};

export type DB_Profile = Profile & {
  id: string;
  created_at: string;
  updated_at: string;
};

export type ProfileUpdate = Partial<Profile> & { updated_at?: string };
