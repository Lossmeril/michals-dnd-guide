import { fetchRulebook } from "@/lib/endpoints/rulebook";
import { racialPerks } from "@/lib/rules/character";
import { PerkTile } from "@/app/(app)/characters/_character/perkTree";
import { RuleLink, RulePage } from "../_components";

const RacesPage = async () => {
  const rb = await fetchRulebook();

  return (
    <RulePage slug="races">
      <p>
        Race matters little at the table (one racial perk) and a lot in the
        story: where you grew up, how NPCs look at you, which jokes land. No
        fairies, vampires or ghosts. No, Gareth.
      </p>
      <p>
        Every character speaks the Common tongue. Races with their own{" "}
        <RuleLink to="languages">language</RuleLink> speak it too; the others
        pick one extra language instead.
      </p>

      {rb.races.map((race) => {
        const language = rb.languages.find((l) => l.id === race.language_id);
        const perks = racialPerks(rb, race.id);
        return (
          <section key={race.id} id={race.id} className="mt-12 scroll-mt-8">
            <div className="flex flex-col sm:flex-row gap-6">
              {race.image_url && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={race.image_url}
                  alt=""
                  className="w-full sm:w-44 aspect-[3/4] object-cover object-top rounded-lg border border-dnd-gold shadow-md shrink-0"
                />
              )}
              <div className="min-w-0">
                <h2 className="libre text-xl font-bold text-dnd-red uppercase mb-1">
                  {race.plural ?? race.name}
                </h2>
                {race.blurb && <p className="libre font-bold mb-2">{race.blurb}</p>}
                {race.description && (
                  <p className="whitespace-pre-line text-sm mb-2">{race.description}</p>
                )}
                <p className="text-sm">
                  <strong>Language:</strong>{" "}
                  {language ? `Common tongue and ${language.name}` : "Common tongue, plus one of your choice"}
                </p>
              </div>
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-dnd-ink/60 mt-6 mb-3">
              Racial perks (pick one)
            </p>
            {perks.length === 0 ? (
              <p className="text-sm text-dnd-ink/70">None written yet.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                {perks.map((p) => (
                  <PerkTile key={p.id} perk={p} />
                ))}
              </div>
            )}
          </section>
        );
      })}
    </RulePage>
  );
};

export default RacesPage;
