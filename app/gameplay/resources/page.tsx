"use client";

import Card, { HorizontalCard } from "@/components/card";
import Text, { Stat, WikiLink } from "@/components/text";
import resources from "@/data/resources/resources";
import Image from "next/image";
import { Resource } from "@/types/resources";
import Balancer from "react-wrap-balancer";

import ResourceBar from "@/components/resourceBar";

const ResourcesPage = () => {
  return (
    <div className="flex flex-col lg:flex-row flex-nowrap gap-10">
      <div className="w-full">
        <h2 className="font-bold text-3xl mb-5">Resources</h2>

        <Text>
          <strong>Resources</strong> are the three core stats every character
          uses to overcome danger. You may have already heard about D&D
          characters having stats such as <strong>Strength</strong>,{" "}
          <strong>Dexterity</strong>, and <strong>Wisdom</strong>.
        </Text>

        <Text>Well, guess what?</Text>

        <Image
          src="/img/we-dont-do-that-here.gif"
          alt="We don't do that here meme"
          width={300}
          height={300}
          className="mb-5 rounded-lg shadow-lg"
        />

        <Text>
          In this game your hero relies on <Stat type={Resource.body} />,{" "}
          <Stat type={Resource.soul} />, and <Stat type={Resource.charisma} />{" "}
          as their personal reserves of effort. These are not health points or
          fixed traits — just the limits of what your character can handle right
          now. They are pools of effort that your character spends whenever they
          push themselves, avoid danger, or perform challenging tasks.
        </Text>
        <Text>We have three resources:</Text>

        {/* RESOURCE CARDS */}
        <h3 className="font-bold text-2xl mt-6 mb-3">The holy trinity</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-4">
          {/* BODY */}
          <Card imageSrc="/img/resources/body.jpg">
            <p
              className="text-4xl mb-2"
              style={{
                color: resources.find((r) => r.name === Resource.body)?.color,
              }}
            >
              {resources.find((r) => r.name === Resource.body)?.icon}
            </p>

            <h4 className="font-bold text-2xl text-left mb-2">Body</h4>

            <Text>
              <Balancer>
                Body represents your character&apos;s physical limits and
                reflexes. Anything involving strength, speed, agility, or
                precise coordination relies on <Stat type={Resource.body} />.
                Lifting heavy objects, sprinting after an enemy, dueling with
                weapons, drawing a bow, climbing, acrobatics, or sleight-of-hand
                all fall under <Stat type={Resource.body} />.
              </Balancer>
            </Text>
          </Card>

          {/* SOUL */}
          <Card imageSrc="/img/resources/soul.jpg">
            <p
              className="text-4xl mb-2"
              style={{
                color: resources.find((r) => r.name === Resource.soul)?.color,
              }}
            >
              {resources.find((r) => r.name === Resource.soul)?.icon}
            </p>

            <h4 className="font-bold text-2xl text-left mb-2">Soul</h4>

            <Text>
              Soul represents your character’s mind, focus, and technical
              ability. It includes intelligence, memory, perception,
              concentration, and specialized knowledge. Speaking foreign
              languages, reading complex texts, navigating wilderness, cheating
              at cards, practicing spells, decoding runes, picking locks, and
              performing alchemy all rely on <Stat type={Resource.soul} />.
            </Text>
          </Card>

          {/* CHARISMA */}
          <Card imageSrc="/img/resources/charisma.jpg">
            <p
              className="text-4xl mb-2"
              style={{
                color: resources.find((r) => r.name === Resource.charisma)
                  ?.color,
              }}
            >
              {resources.find((r) => r.name === Resource.charisma)?.icon}
            </p>

            <h4 className="font-bold text-2xl text-left mb-2">Charisma</h4>

            <Text>
              Charisma represents your character’s ability to communicate,
              influence, and understand others. Intimidation, negotiation,
              seduction, taming animals, social deception, leadership, and
              creative distraction all rely on <Stat type={Resource.charisma} />
              .
            </Text>
          </Card>
        </div>

        {/* AMBIGUITY EXAMPLE */}
        <HorizontalCard imageSrc="/img/resources/split.jpg" filled>
          <p className="italic font-bold text-sm mb-2">Rule nitpick</p>
          <Text>
            There may be some moments in which the resource used changes based
            on context.
          </Text>
          <Text>
            Shooting a bow during a chaotic battle relies on{" "}
            <Stat type={Resource.body} />, because balance and reflex matter
            most. During an archery contest, the same action relies on{" "}
            <Stat type={Resource.soul} />, reflecting focus and precision.
          </Text>
        </HorizontalCard>

        {/* RESOURCES ARE NOT HITPOINTS */}
        <h3 className="font-bold text-2xl mt-6 mb-3">
          Confusions with resources
        </h3>

        <h4 className="font-bold mb-4">Not hit points</h4>
        <Text>
          Resources do not represent life force. Running out of{" "}
          <Stat type={Resource.body} /> does not mean collapsing. Running out of{" "}
          <Stat type={Resource.soul} /> does not mean losing your mind. Running
          out of <Stat type={Resource.charisma} /> does not mean becoming mute.
          It simply means you have reached your current limit and cannot push
          that area further without consequences.
        </Text>

        <Text>
          If your character has 8 <Stat type={Resource.body} /> points and
          spends all of them, they do not drop dead. They have simply reached
          the edge of their physical endurance. They can still attempt tasks
          normally as long as they roll successfully, but preventing bad
          outcomes becomes more difficult and potentially dangerous.
        </Text>

        <h4 className="font-bold mt-12 mb-4">Not skill level</h4>
        <Text>
          The resources are not a measure of how skilled or talented your
          character is. They represent the limits of what they can handle right
          now.
        </Text>
        <Text>
          The number that is added to your rolls and determines the profficiency
          is their <WikiLink href="/classes">respective class</WikiLink>.
          Although it is to be expected that a combad-based character will have
          higher <Stat type={Resource.body} /> pool as to have more resources at
          their disposal when pushing their physical limits, it is not set in
          stone and unusual combinations may arrise.
        </Text>
        <Text>
          It is still possible to have a five-level Fighter who has low{" "}
          <Stat type={Resource.body} />; although this character will probably
          have to scar themselves often and will run out of their capacities
          soon into the combat start.
        </Text>

        <HorizontalCard imageSrc="/img/michal.jpg" filled>
          <p className="italic font-bold text-sm mb-2">Example</p>
          <Text>
            Michal (<strong>Fighter</strong>: 4 | <strong>Juggler</strong>: 2 |{" "}
            <strong>Warrior</strong>: 1) has following stats:
          </Text>
          <div className="flex flex-col gap-2 mb-4">
            <ResourceBar size={7} stat={resources[0]} />
            <ResourceBar size={5} stat={resources[1]} />
            <ResourceBar size={3} stat={resources[2]} />
          </div>
          <Text>
            <strong>Armed combat</strong> and <strong>intimidation</strong> are
            both skills governed by the{" "}
            <WikiLink href="/classes/basic/fighter">Fighter class</WikiLink>.
            Therefore when performing both actions Michal will add{" "}
            <strong>+4</strong> to his rolls, as that is the Fighter class level
          </Text>
          <Text>
            However after failing, <strong>armed combat</strong> will require
            spending <Stat type={Resource.body} />, while{" "}
            <strong>intimidation</strong> will require spending{" "}
            <Stat type={Resource.charisma} />. As Michal&apos;s{" "}
            <Stat type={Resource.body} /> pool is significantly higher than his{" "}
            <Stat type={Resource.charisma} />, he will be able to push himself
            further in physical confrontations than in social ones before
            needing to rest.
          </Text>
        </HorizontalCard>

        {/* SPENDING RESOURCES */}
        <h3 className="font-bold text-2xl mt-6 mb-3">
          How Resources Are Spent
        </h3>

        <Text>
          Whenever your character wants to avoid a bad outcome, they must spend
          an amount of their Resources equal to the current{" "}
          <WikiLink href="/gameplay/danger-level">Danger Level</WikiLink>. If
          the required Resource pool is empty, the character risks taking Scars
          instead. This makes Resource management a core part of the game’s
          tension and strategy.
        </Text>

        <Text>
          Some class special abilties and actions may also require spending
          <strong> Resources</strong> to activate. Pseudo-magical classes like{" "}
          <WikiLink href="/classes/advanced/shaman">Shaman</WikiLink> and{" "}
          <WikiLink href="/classes/advanced/witcher">Witcher</WikiLink> need to
          deal themselves a{" "}
          <WikiLink href="/gameplay/exhaustion">Scar</WikiLink> to fuel their
          powers, representing the toll such abilities take on their body and
          mind.
        </Text>

        {/* RECOVERY */}
        <h3 className="font-bold text-2xl mt-6 mb-3">Recovering Resources</h3>
        <div className="mb-4 font-bold text-sm text-blue-300 italic">
          Healing resources is detailed in{" "}
          <WikiLink href="/gameplay/exhaustion">Exhaustion and Scars</WikiLink>{" "}
          article.
        </div>
        <Text>
          Resources replenish naturally through rest, safety, time, support from
          allies, and certain abilities. Pushing yourself in dramatic moments is
          normal — planning how to recover afterward is part of the adventure.
        </Text>

        <h2 className="font-bold text-3xl mb-5 mt-16">Secondary resources</h2>
        <Text>
          In addition to the three main Resources, all the characters also track
          two separate resources: <strong>Gold</strong> and{" "}
          <strong>Material</strong>.
        </Text>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 my-4">
          {/* GOLD */}
          <Card imageSrc="/img/resources/coin.webp">
            <p
              className="text-4xl mb-2"
              style={{
                color: resources.find((r) => r.name === Resource.coin)?.color,
              }}
            >
              {resources.find((r) => r.name === Resource.coin)?.icon}
            </p>

            <h4 className="font-bold text-2xl text-left mb-2">Coins</h4>

            <Text>
              <Balancer>
                Coins (gold, silver, copper) represent the currency your
                character uses to trade for goods and services in the world.
                While not directly used to avoid dangers, having enough money
                can help your character bribe, buy better equipment, or pay for
                healing services.
              </Balancer>
            </Text>

            <Text>
              <Balancer>
                1 gold coin is made of 100 silver coins, and 1 silver coin is in
                turn made of 10 copper coins.
              </Balancer>
            </Text>

            <p className="text-xs italic mb-3">
              <Balancer>
                1 gold coin is considered a significant amount of money for most
                commoners, while wealthy merchants and nobles often deal in
                hundreds or thousands of gold coins.
              </Balancer>
            </p>
          </Card>

          {/* GOLD */}
          <Card imageSrc="/img/resources/material.jpg">
            <p
              className="text-4xl mb-2"
              style={{
                color: resources.find((r) => r.name === Resource.material)
                  ?.color,
              }}
            >
              {resources.find((r) => r.name === Resource.material)?.icon}
            </p>

            <h4 className="font-bold text-2xl text-left mb-2">Material</h4>

            <Text>
              <Balancer>
                Material is an abstract representation of your character&apos;s
                supplies. Whether herbs for alchemy, wood for trap crafting, or
                magical items to fuel your sigils, Material resource points are
                spent to create something from nothing.
              </Balancer>
            </Text>

            <Text>
              <Balancer>
                As many craftables devise their strength and/or the effect based
                on the amount of Material used, maintaining a healthy stock of
                it is crucial for characters who rely on crafting and alchemical
                skills.
              </Balancer>
            </Text>
            <p className="text-xs italic mb-3">
              <Balancer>
                The exact nature of a Material resource point is always assigned
                before use, allowing for flexibility based on the
                character&apos;s skills and the situation at hand.
              </Balancer>
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;
