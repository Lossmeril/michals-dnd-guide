import { SquareImage } from "@/components/ui/perkCard";
import TraitText from "@/components/ui/traitText";
import { fetchRulebook } from "@/lib/endpoints/rulebook";
import { Example, RulePage } from "../_components";

const TraitsPage = async () => {
  const rb = await fetchRulebook();
  const premade = rb.traits.filter((t) => !t.is_custom);

  return (
    <RulePage slug="traits">
      <p>
        A trait is a challenge you choose for your character: an{" "}
        <strong>upside</strong> and a <strong>downside</strong>, like the
        negative perks in Kingdom Come: Deliverance II&apos;s hardcore mode.
        They&apos;re optional, and you can take as many as you like.
      </p>
      <ul>
        <li>Traits are flavour and challenge; they don&apos;t count towards your level.</li>
        <li>The DM can hand out traits as a story event, and you can lose one by overcoming it in the story.</li>
      </ul>
      <Example>
        <p>
          Michal takes <em>Hothead</em>. He hits harder when angry, and the
          party has learned to stand between him and anyone who mentions his
          mother.
        </p>
      </Example>

      <h2>Traits</h2>
      {premade.length === 0 ? (
        <p>None written yet.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {premade.map((t) => (
            <li key={t.id} className="p-4 bg-dnd-bg border border-dnd-gold rounded-lg flex flex-col gap-2">
              <SquareImage src={t.image_url} className="w-16" />
              <p className="libre font-bold text-dnd-red">{t.name}</p>
              <TraitText trait={t} />
            </li>
          ))}
        </ul>
      )}
    </RulePage>
  );
};

export default TraitsPage;
