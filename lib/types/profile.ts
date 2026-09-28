import { UserRole } from "../enums/enums";

export type Profile = {
  id: string;
  display_name: string;
  role: UserRole;
};
