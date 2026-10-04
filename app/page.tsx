import Card from "@/components/card";
import { requireUser } from "@/lib/auth";

const HomePage = async () => {
  const user = await requireUser();

  return (
    <main className="flex-1 flex flex-col items-center justify-center max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-10">
        Welcome to Michal&apos;s D&D Guide!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card
          title="Ruleset"
          imageUrl="https://www.dndbeyond.com/attachments/12/891/laying-the-spread.jpg"
          imageClassName="object-center"
          link="/ruleset"
        >
          <p>
            Explore my custom ruleset for D&D, reference materials, and house
            rules.
          </p>
        </Card>
        <Card
          title="Characters"
          imageUrl="https://www.dndbeyond.com/attachments/12/913/international-day-of-play-dnd.jpg"
          imageClassName="object-center"
          link="/characters"
        >
          <p>
            Browse your characters, create new ones, and manage your adventures.
          </p>
        </Card>
        <Card
          title="Campaigns"
          imageUrl="https://www.dndbeyond.com/attachments/13/81/alvaro-calvo-escudero-341257.jpg"
          imageClassName="object-bottom"
          link="/campaigns"
          disabled
        >
          <p>
            Manage your campaigns, have track of your adventures, and learn
            about your companions.
          </p>
        </Card>
      </div>
    </main>
  );
};

export default HomePage;
