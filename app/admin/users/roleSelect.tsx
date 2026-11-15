"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";
import { Select } from "@/components/ui/formControls";
import type { Enums } from "@/lib/types/database.types";
import { setUserRole } from "../actions";

type Role = Enums<"user_role">;

const ROLES: { value: Role; label: string }[] = [
  { value: "player", label: "Player" },
  { value: "dm", label: "DM" },
  { value: "admin", label: "Admin" },
];

/** Changes the role as soon as it's picked; a refused change snaps back */
const RoleSelect: React.FC<{ userId: string; role: Role }> = ({ userId, role }) => {
  const [value, setValue] = useState(role);
  const [pending, startTransition] = useTransition();

  return (
    <Select
      aria-label="Role"
      value={value}
      options={ROLES}
      className="w-32"
      onChange={(next) => {
        if (!next || next === value || pending) return;
        const previous = value;
        setValue(next as Role);
        startTransition(async () => {
          const { error } = await setUserRole(userId, next as Role);
          if (error !== null) {
            toast.error(error);
            setValue(previous);
          } else toast.success("Role changed");
        });
      }}
    />
  );
};

export default RoleSelect;
