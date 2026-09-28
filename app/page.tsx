import { requireUser } from "@/lib/auth";

const HomePage = async () => {
  const user = await requireUser();

  return <div></div>;
};

export default HomePage;
