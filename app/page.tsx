import Card from "@/components/card";
import { Heading } from "@/components/layout/typography";
import { requireUser } from "@/lib/auth";

const HomePage = async () => {
  await requireUser();

  return (
    <>
      <Heading level={1} className="mb-10">
        Welcome to Michal&apos;s D&D Guide!
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card
          title="Ruleset"
          imageUrl="https://www.dndbeyond.com/attachments/12/891/laying-the-spread.jpg"
          imageClassName="object-center"
          link="/ruleset"
          disabled
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
        >
          <p>
            Manage your campaigns, have track of your adventures, and learn
            about your companions.
          </p>
        </Card>
      </div>
    </>
  );
};

export default HomePage;
