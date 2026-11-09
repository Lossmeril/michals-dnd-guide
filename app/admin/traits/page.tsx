import { fetchProfiles } from "@/lib/endpoints/profiles";
import { fetchRulebook } from "@/lib/endpoints/rulebook";
import { AdminHeader } from "../_components";
import TraitsManager from "./traitsManager";

const AdminTraitsPage = async () => {
  const [rb, profiles] = await Promise.all([fetchRulebook(true), fetchProfiles()]);
  const names = Object.fromEntries(
    profiles.map((p) => [p.id, p.display_name ?? "Unnamed player"]),
  );
  // Ones waiting for approval first
  const traits = [...rb.traits].sort(
    (a, b) =>
      Number(b.is_custom && !b.approved_by) - Number(a.is_custom && !a.approved_by),
  );

  return (
    <>
      <AdminHeader title="Traits" />
      <TraitsManager traits={traits} authors={names} />
    </>
  );
};

export default AdminTraitsPage;
