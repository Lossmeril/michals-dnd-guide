import Text, { Stat, WikiLink } from "@/components/text";
import ResourceBar from "@/components/resourceBar";
import Card, { HorizontalCard } from "@/components/card";

import resources from "@/data/resources/resources";

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
          Together, these two rules represent represent the toll of your
          actions. Mananing them and finding time to recover is an important
          part of gameplay.
        </p>

        <Text>
          Whenever your character wants to avoid a bad outcome, they must spend
          an amount of <Stat type={resources[0].name} />,{" "}
          <Stat type={resources[1].name} />, or{" "}
          <Stat type={resources[2].name} /> equal to the current{" "}
          <WikiLink href="/rules/danger-level">Danger Level</WikiLink>. If they
          have enough points, they may Exhaust themselves. If they do not, they
          may choose to take a Scar instead.
        </Text>
      </div>

      {/* -------------------- EXHAUSTION SECTION -------------------- */}
      <div>
        <h3 className="font-bold text-2xl mb-3">Exhaustion</h3>

        <Text>
          A character Exhausts themselves when they spend Resource points to
          avert failure. Exhaustion means the character pushed their limits,
          strained their body, mind, or pride, and now carries the weight of
          that effort.
        </Text>

        <Text>
          To Exhaust themselves, the character spends an amount of Body-s,
          Soul-s, or Charisma-s equal to the current Danger Level. Exhausted
          points are marked by a single diagonal strike. Exhausted Resources
          always replenish after a full sleep.
        </Text>

        {/* -------------------- EXHAUSTION EXAMPLE -------------------- */}
        <HorizontalCard imageSrc="/img/michal.jpg" filled>
          <p className="italic font-bold text-sm mb-2">Example</p>
          <h4 className="text-lg font-bold leading-tight mb-2">
            Exhausting oneself
          </h4>

          <p className="mb-3">
            Michal attempts a <Stat type={resources[2].name} /> check to flirt
            with the burgmaster’s daughter. He fails, like the disappointment he
            is, but his group needs her affection later that day.
          </p>

          <p className="mb-3">
            The current Danger Level is <strong>3</strong>. Michal decides to
            <strong> exhaust himself</strong> to avert the failure.
          </p>

          <p className="mb-2 font-semibold">Before:</p>
          <ResourceBar size={8} stat={resources[2]} exhaustions={0} scars={0} />

          <p className="mt-4 mb-2 font-semibold">
            After spending 3 <Stat type={resources[2].name} /> to exhaust:
          </p>
          <ResourceBar size={8} stat={resources[2]} exhaustions={3} scars={0} />

          <p className="mt-4 mb-3">
            Michal turns his failed flirting attempt into a self-deprecating
            joke about city bad boys. It works. He succeeds — but he feels
            emotionally drained for the rest of the afternoon.
          </p>
        </HorizontalCard>
      </div>

      {/* -------------------- SCARS SECTION -------------------- */}
      <div>
        <h3 className="font-bold text-2xl mb-3">Scars</h3>

        <Text>
          A scar is taken when a character does not have enough Resource points
          left to spend but still wants to avoid a bad outcome. A scar grants
          the character <strong>two temporary points to spend</strong>, but at a
          price.
        </Text>

        <Text>
          Scars represent lasting harm: physical injury, mental strain, or
          social damage. Scarred points are crossed out permanently until the
          character heals them. Sleeping does not remove scars.
        </Text>

        <Text>
          Points gained from taking a scar are to be spent immediately and the
          leftover points are lost.
        </Text>

        {/* -------------------- SCAR EXAMPLES -------------------- */}
        <h4 className="font-bold text-xl mt-4 mb-2">Examples of Scars</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          <Card>
            <p className="text-3xl" style={{ color: resources[0].color }}>
              {resources[0].icon}
            </p>
            <h5 className="font-bold mb-2">
              <Stat type={resources[0].name}>Body</Stat> scars examples
            </h5>
            bleeding wound, illness, sprained ankle, bruising, trembling hands,
            sensory loss
          </Card>
          <Card>
            <p className="text-3xl" style={{ color: resources[1].color }}>
              {resources[1].icon}
            </p>
            <h5 className="font-bold mb-2">
              <Stat type={resources[1].name}>Soul</Stat> scars examples
            </h5>
            insomnia, anxiety, depression, guilt, nightmares, shaken confidence
          </Card>
          <Card>
            <p className="text-3xl" style={{ color: resources[2].color }}>
              {resources[2].icon}
            </p>
            <h5 className="font-bold mb-2">
              <Stat type={resources[2].name}>Charisma</Stat> scars examples
            </h5>
            mockery, ruined reputation, distrust, being outlawed, social stigma
          </Card>
        </div>

        {/* -------------------- SCAR EXAMPLE -------------------- */}
        <HorizontalCard
          imageSrc="/img/exhaustion/scar.gif"
          filled
          imgPosStyle="object-[60%]"
        >
          <p className="italic font-bold text-sm mb-2">Example</p>
          <h4 className="text-lg font-bold leading-tight mb-2">
            Gaining scars
          </h4>
          <Text>
            Michal once again attempts to charm the burgmaster’s daughter. Once
            again, he fails, as he is really bad at his game. Once again, his
            party begs him not to screw this up.
          </Text>
          <Text>
            The{" "}
            <strong>
              <WikiLink href={"/gameplay/danger-level"}>Danger Level</WikiLink>
            </strong>{" "}
            is 3, but Michal has only 1 <Stat type={resources[2].name} /> left.
            He cannot exhaust himself — so he chooses to take a{" "}
            <strong>scar</strong>, gaining 2 temporary points to spend.
          </Text>

          <p className="mb-2 font-semibold">Before:</p>
          <ResourceBar size={8} stat={resources[2]} exhaustions={7} scars={0} />

          <p className="mt-4 mb-2 font-semibold">
            After spending 1 Charisma-s and taking 1 Scar:
          </p>
          <ResourceBar size={8} stat={resources[2]} exhaustions={7} scars={1} />

          <p className="mt-4 mb-3">
            Michal succeeds — but is seen speaking intimately with the
            burgmaster’s daughter by the burgmaster’s men. Rumors spread. The
            burgmaster is furious. Michal now carries a Charisma Scar: his
            reputation is damaged, and the town guard is looking for him.
          </p>
        </HorizontalCard>
      </div>

      {/* -------------------- HEALING SCARS -------------------- */}
      <div>
        <h3 className="font-bold text-2xl mb-3">Healing</h3>

        <h4 className="font-bold text-xl mt-4 mb-2">Healing exhaustion</h4>
        <Text>
          Exhausted resources regenerate after a period of rest; usually after a
          night of sleep. The amount of resources regained depends on the
          quality of rest.
        </Text>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Card>
            <h5 className="font-bold mb-2">Poor rest</h5>
            <Text>
              Whenever the characters rest under less than ideal conditions, the
              rest is considered poor.{" "}
              <strong>
                Poor rest recoveres three exhausted resource points
              </strong>
              ; the choice of which points to recover is up to the player.
            </Text>
          </Card>
          <Card>
            <h5 className="font-bold mb-2">Quality rest</h5>
            <Text>
              A rest in a comfortable, safe and stress-free environment is
              considered quality.{" "}
              <strong>
                Quality rest recovers all the exhausted resource points.
              </strong>
            </Text>
          </Card>
        </div>

        <h4 className="font-bold text-xl mt-4 mb-2">Healing scars</h4>
        <Text>
          Unlike exhaustion, scars require time, effort, or help from others to
          heal. Scar is not healed after a rest. A character must meaningfully
          address the problem — treating the wound, seeking therapy, paying
          reparations, rebuilding trust, or resolving guilt — depending on the
          nature of the scar.
        </Text>
        <Text>
          Each scar takes five resource points to be healed. These points must
          either be spent by the character who bears the scar, or in some
          instances may be provided by other characters with special abilities
          allowing them to do so.
        </Text>

        <HorizontalCard
          filled
          imageSrc="/img/exhaustion/healing.jpg"
          imgPosStyle="object-[45%]"
        >
          <p className="italic font-bold text-sm mb-2">Example</p>
          <h4 className="text-lg font-bold leading-tight mb-2">
            Healing a scar
          </h4>

          <p className="mb-3">
            Michal must now buy the burgmaster a generous drink, apologise
            repeatedly, and spend some <Stat type={resources[2].name} /> and
            money to repair his reputation before he can remove the Scar.
          </p>

          <Text>
            In this instance, the DM allowed Michal to spread the cost of 5
            resource points among 3 <Stat type={resources[2].name} /> points and{" "}
            <strong>2 gold</strong>.
          </Text>

          <p className="mb-2 font-semibold">Before healing:</p>
          <ResourceBar size={8} stat={resources[2]} exhaustions={0} scars={1} />

          <div className="flex flex-row mt-2">
            <div
              className="px-2 rounded-full bg-yellow-100/20 text-xs font-bold flex flex-row items-center gap-1"
              style={{ color: "var(--coin)" }}
            >
              {resources[3].icon} 6 silver coins
            </div>
          </div>

          <p className="mt-4 mb-2 font-semibold">After mending the scar:</p>
          <ResourceBar size={8} stat={resources[2]} exhaustions={3} scars={0} />

          <div className="flex flex-row mt-2">
            <div
              className="px-2 rounded-full bg-yellow-100/20 text-xs font-bold flex flex-row items-center gap-1"
              style={{ color: "var(--coin)" }}
            >
              {resources[3].icon} 4 silver coins
            </div>
          </div>
        </HorizontalCard>
      </div>
    </div>
  );
};

export default ExhaustionAndScarsPage;
