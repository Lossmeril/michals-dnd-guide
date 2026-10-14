import { fetchRulebookNav } from "@/lib/endpoints/rulebookPages";
import RulebookManager from "./rulebookManager";

const AdminRulebookPage = async () => (
  <RulebookManager nav={await fetchRulebookNav()} />
);

export default AdminRulebookPage;
