import Card, { CardGrid } from "@/components/ui/card";
import { Heading } from "@/components/ui/typography";
import { requireUser } from "@/lib/auth";
import { getDict } from "@/lib/i18n/server";

const HomePage = async () => {
  await requireUser();
  const t = (await getDict()).home;

  return (
    <>
      <Heading level={1} className="mb-10">
        {t.welcome}
      </Heading>
      <CardGrid>
        <Card
          title={t.rulebook}
          imageUrl="https://www.dndbeyond.com/attachments/12/891/laying-the-spread.jpg"
          imageClassName="object-center"
          link="/rulebook"
        >
          <p>{t.rulebookText}</p>
        </Card>
        <Card
          title={t.characters}
          imageUrl="https://www.dndbeyond.com/attachments/12/913/international-day-of-play-dnd.jpg"
          imageClassName="object-center"
          link="/characters"
        >
          <p>{t.charactersText}</p>
        </Card>
        <Card
          title={t.campaigns}
          imageUrl="https://www.dndbeyond.com/attachments/13/81/alvaro-calvo-escudero-341257.jpg"
          imageClassName="object-bottom"
          link="/campaigns"
        >
          <p>{t.campaignsText}</p>
        </Card>
      </CardGrid>
    </>
  );
};

export default HomePage;
