import Text from "@/components/text";
import ResourceBar from "@/components/resourceBar";
import Card from "@/components/card";
import { Ability } from "@/types/classes";

const ExhaustionAndScarsPage = () => {
  return (
    <div className="flex flex-col gap-10">
      {/* -------------------- INTRO -------------------- */}
      <div>
        <h2 className="font-bold text-3xl mb-5">Exhaustion & Scars</h2>

        <p className="mb-3">
          When your character pushes themselves beyond comfort, they become{" "}
          <strong>Exhausted</strong>. When they push even further, past their
          limits, they suffer what the game calls a <strong>Scar</strong>.
          Together, these two rules create the tension and drama behind every
          risky decision.
        </p>

        <Text>
          {
            "Whenever your character wants to avoid a bad outcome, they must spend an amount of Body-s, Soul-s, or Charisma-s equal to the current Danger Level. If they have enough points, they may Exhaust themselves. If they do not, they may choose to take a Scar instead."
          }
        </Text>
      </div>

      {/* -------------------- EXHAUSTION SECTION -------------------- */}
      <div>
        <h3 className="font-bold text-2xl mb-3">Exhaustion</h3>

        <Text>
          {
            "A character Exhausts themselves when they spend Resource points to avert failure. Exhaustion means the character pushed their limits, strained their body, mind, or pride, and now carries the weight of that effort."
          }
        </Text>

        <Text>
          {
            "To Exhaust themselves, the character spends an amount of Body-s, Soul-s, or Charisma-s equal to the current Danger Level. Exhausted points are marked by a single diagonal strike. Exhausted Resources always replenish after a full sleep."
          }
        </Text>

        {/* -------------------- EXHAUSTION EXAMPLE -------------------- */}
        <Card filled>
          <h4 className="font-bold text-xl mb-2">Example — Exhaustion</h4>

          <p className="mb-3">
            Michal attempts a Charisma check to flirt with the burgmaster’s
            daughter. He rolls badly, like the disappointment he is, but his
            group needs her affection later that day.
          </p>

          <p className="mb-3">
            The current Danger Level is <strong>3</strong>. Michal decides to
            Exhaust himself to avert the failure.
          </p>

          <p className="mb-2 font-semibold">Before:</p>
          <ResourceBar
            size={8}
            stat={Ability.charisma}
            exhaustions={0}
            scars={0}
          />

          <p className="mt-4 mb-2 font-semibold">
            After spending 3 Charisma-s:
          </p>
          <ResourceBar
            size={8}
            stat={Ability.charisma}
            exhaustions={3}
            scars={0}
          />

          <p className="mt-4 mb-3">
            Michal turns his failed flirting attempt into a self-deprecating
            joke about city bad boys. It works. He succeeds — but he feels
            emotionally drained for the rest of the afternoon.
          </p>
        </Card>
      </div>

      {/* -------------------- SCARS SECTION -------------------- */}
      <div>
        <h3 className="font-bold text-2xl mb-3">Scars</h3>

        <Text>
          {
            "A Scar is taken when a character does not have enough Resource points left to spend but still wants to avoid a bad outcome. A Scar grants the character two temporary points to spend, but at a price."
          }
        </Text>

        <Text>
          {
            "Scars represent lasting harm — physical injury, mental strain, or social damage. Scarred points are crossed out permanently until the character heals them. Sleeping does not remove Scars."
          }
        </Text>

        {/* -------------------- SCAR EXAMPLES -------------------- */}
        <h4 className="font-bold text-xl mt-4 mb-2">Examples of Scars</h4>

        <Card>
          <ul className="list-disc pl-5">
            <li>
              <strong>Body-s:</strong> bleeding wound, illness, sprained ankle,
              bruising, trembling hands, sensory loss
            </li>
            <li>
              <strong>Soul-s:</strong> insomnia, anxiety, depression, guilt,
              nightmares, shaken confidence
            </li>
            <li>
              <strong>Charisma-s:</strong> mockery, ruined reputation, distrust,
              being outlawed, social stigma
            </li>
          </ul>
        </Card>

        {/* -------------------- SCAR EXAMPLE -------------------- */}
        <Card filled>
          <h4 className="font-bold text-xl mb-2">Example — Taking a Scar</h4>

          <Text>
            Michal once again attempts to charm the burgmaster’s daughter. Once
            again, he fails, as he is really bad at his game. Once again, his
            party begs him not to screw this up.
          </Text>
          <Text>
            The Danger Level is 3, but Michal has only 1 Charisma-s left. He
            cannot Exhaust himself — so he chooses to take a Scar, gaining 2
            temporary points to spend.
          </Text>

          <p className="mb-2 font-semibold">Before:</p>
          <ResourceBar
            size={8}
            stat={Ability.charisma}
            exhaustions={7}
            scars={0}
          />

          <p className="mt-4 mb-2 font-semibold">
            After spending 1 Charisma-s and taking 1 Scar:
          </p>
          <ResourceBar
            size={8}
            stat={Ability.charisma}
            exhaustions={7}
            scars={1}
          />

          <p className="mt-4 mb-3">
            Michal succeeds — but is seen speaking intimately with the
            burgmaster’s daughter by the burgmaster’s men. Rumors spread. The
            burgmaster is furious. Michal now carries a Charisma Scar: his
            reputation is damaged, and the town guard is looking for him.
          </p>
        </Card>
      </div>

      {/* -------------------- HEALING SCARS -------------------- */}
      <div>
        <h3 className="font-bold text-2xl mb-3">Healing Scars</h3>

        <Text>
          {
            "Scars require time, effort, or help from others to heal. A character must meaningfully address the problem — treating the wound, seeking therapy, paying reparations, rebuilding trust, or resolving guilt — depending on the nature of the Scar."
          }
        </Text>

        <Card>
          <p className="mb-3">
            Michal must now buy the burgmaster a generous drink, apologise
            repeatedly, and spend some Charisma-s and money to repair his
            reputation before he can remove the Scar.
          </p>

          <p className="mb-2 font-semibold">Before healing:</p>
          <ResourceBar
            size={8}
            stat={Ability.charisma}
            exhaustions={7}
            scars={1}
          />

          <p className="mt-4 mb-2 font-semibold">After mending the Scar:</p>
          <ResourceBar
            size={8}
            stat={Ability.charisma}
            exhaustions={7}
            scars={0}
          />
        </Card>
      </div>
    </div>
  );
};

export default ExhaustionAndScarsPage;
