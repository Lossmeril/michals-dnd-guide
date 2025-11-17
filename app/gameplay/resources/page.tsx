import Text from "@/components/text";

const ResourcesPage = () => {
  return (
    <div className="flex flex-col lg:flex-row flex-nowrap gap-10">
      <div className="w-full">
        <h2 className="font-bold text-3xl mb-5">Resources</h2>

        <p className="mb-3">
          <strong>Resources</strong> are the three core stats every character
          uses to overcome danger. Instead of juggling Strength, Dexterity,
          Intelligence and ten other numbers, this system keeps things simple:
          your hero relies on <strong>Body</strong>, <strong>Soul</strong>, and{" "}
          <strong>Charisma</strong> as their personal reserves of effort. These
          are not health points or fixed traits — just the limits of what your
          character can handle right now.
        </p>

        <Text>
          {
            "Body-s, Soul-s, and Charisma-s describe the limits of what your character can endure. They are not health points or permanent traits. They are pools of effort that your character spends whenever they push themselves, avoid danger, or perform challenging tasks."
          }
        </Text>

        <h3 className="font-bold text-2xl mt-6 mb-3">Body</h3>
        <Text>
          {
            "Body-s represents your character’s physical limits and reflexes. Anything involving strength, speed, agility, or precise coordination relies on Body-s. Lifting heavy objects, sprinting after an enemy, dueling with weapons, drawing a bow, climbing, acrobatics, or sleight-of-hand all fall under Body-s."
          }
        </Text>

        <h3 className="font-bold text-2xl mt-6 mb-3">Soul</h3>
        <Text>
          {
            "Soul-s represents your character’s mind, focus, and technical ability. It includes intelligence, memory, perception, concentration, and specialized knowledge. Speaking foreign languages, reading complex texts, navigating wilderness, cheating at cards, practicing spells, decoding runes, picking locks, and performing alchemy all rely on Soul-s."
          }
        </Text>

        <h3 className="font-bold text-2xl mt-6 mb-3">Charisma</h3>
        <Text>
          {
            "Charisma-s represents your character’s ability to communicate, influence, and understand others. Intimidation, negotiation, seduction, taming animals, social deception, leadership, and creative distraction all rely on Charisma-s."
          }
        </Text>

        <h3 className="font-bold text-2xl mt-6 mb-3">
          Resources Are Not Hit Points
        </h3>
        <Text>
          {
            "Resources do not represent life force. Running out of Body-s does not mean collapsing. Running out of Soul-s does not mean losing your mind. Running out of Charisma-s does not mean becoming mute. It simply means you have reached your current limit and cannot push that area further without consequences."
          }
        </Text>

        <Text>
          {
            "If your character has 8 Body-s and spends all of them, they do not drop dead. They have simply reached the edge of their physical endurance. They can still attempt tasks normally as long as they roll successfully, but preventing bad outcomes becomes more difficult and potentially dangerous."
          }
        </Text>

        <h3 className="font-bold text-2xl mt-6 mb-3">
          How Resources Are Spent
        </h3>
        <Text>
          {
            "Whenever your character wants to avoid a bad outcome, they must spend an amount of their Resources equal to the current Danger Level. If the required Resource pool is empty, the character risks taking Scars instead. This makes Resource management a core part of the game’s tension and strategy."
          }
        </Text>

        <h3 className="font-bold text-2xl mt-6 mb-3">Recovering Resources</h3>
        <Text>
          {
            "Resources replenish naturally through rest, safety, time, support from allies, and certain abilities. Pushing yourself in dramatic moments is normal — planning how to recover afterward is part of the adventure."
          }
        </Text>

        <h3 className="font-bold text-2xl mt-6 mb-3">Summary</h3>
        <Text>
          {
            "Body-s, Soul-s, and Charisma-s are flexible pools of effort, not rigid character traits. You spend them to stay safe, perform extraordinary feats, and succeed in dangerous situations. Managing them well keeps your character alive and effective."
          }
        </Text>
      </div>
    </div>
  );
};

export default ResourcesPage;
