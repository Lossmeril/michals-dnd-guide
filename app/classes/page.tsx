import Card from "@/components/card";

const ClassesPage = () => {
  return (
    <div>
      <h2 className="font-bold text-3xl mb-5">Classes</h2>
      <p className="mb-3">
        Next in order is to select a class for your character. This is where we
        deviate a lot from 5E. In 5E you pick a class and that is it. You play
        selected class until you hit level 20, or decide you are brave enought
        to learn the rules for multiclassing.
      </p>
      <p className="mb-3">
        In this version we focus more on natural multiclassing and combining
        different ascpects to create a best character for you.{" "}
        <strong>5 basic</strong> classes which then branch into{" "}
        <strong>10 advanced</strong>.
      </p>

      <h3 className="font-bold text-xl mt-8 mb-2">
        Understanding basic classes
      </h3>
      <p className="mb-3">In this version we have 5 basic classes:</p>
      <ul className="list-disc list-inside mb-3">
        <li>Fighter</li>
        <li>Hunter</li>
        <li>Juggler</li>
        <li>Medic</li>
        <li>Incantor</li>
      </ul>
      <p className="mb-3">
        It is advised that you don&apos;t treat classes, and especially basic
        classes as something permanent or whole about your character.{" "}
        <strong>
          All of these classes represent rather a set of skills your character
          possesses.
        </strong>
      </p>
      <p className="mb-3">
        This is what I like about this system - the versatility and modularity.
        If you want to make your character skilled in &quot;typical martial
        traits&quot;, you no longer need to carefully invest in{" "}
        <strong>Strength</strong> and <strong>Endurance</strong>, while not
        forgetting to select traits that give you bonuses in{" "}
        <strong>Intimidation</strong> and whatnot.
      </p>
      <p className="mb-3">
        In this version, the aforementioned fighting traits all come in bundled
        with the <strong>Fighter</strong> basic class. It gives you bonus on
        close combat with weapons, but also on doing tricks with weapons,
        fighting knowledge, estimating prices of weaponry, raw strength,
        intimidation and getting renown through telling war tales.
      </p>
      <h3 className="font-bold text-xl mt-8 mb-2">
        Understanding advanced classes
      </h3>
      <p className="mb-3">
        Advanced classes are where the real fun beigns as they are more
        comparable to ye traditional classes. Whenever{" "}
        <strong>six levels</strong> in basic classes meet in any combination,
        you can level up in an advanced class.
      </p>
      <Card filled>
        <h4 className="font-bold text-xl mt-2 mb-3">Unique blends</h4>
        <p className="mb-3">
          The basic classes&apos; levels can combine into six in any combination
          which allows for interesting and unique character combintions. For
          example, <strong>Warrior</strong> advanced class stems from{" "}
          <strong>Fighter</strong> (go figure) and <strong>Juggler</strong> (all
          the horse riding, and people leading). However, the ratio in which
          these mix is up to you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
          <Card imageSrc="/img/classes/basic/fighter.jpg">
            <p className="italic font-bold text-sm mb-2">Example one</p>
            <h4 className="text-lg font-bold leading-tight mb-2">
              Hakon, the bear-clan berserk
            </h4>
            <p className="text-sm mb-3">
              <strong>Fighter</strong>: 5 | <strong>Juggler</strong>: 1 |{" "}
              <strong>Warrior</strong>: 1
            </p>

            <p className="text-xs italic mb-3">
              Hakon blends raw power with subtle skill. A towering warrior, he
              crushes foes with brutal strength while using surprising agility
              and precision to throw axes or disarm enemies, embodying primal
              fury and cunning.
            </p>
            <p>
              By combining fighter and juggler in a way that gives emphasis on
              fighter, we get more typical barbarian experience with focus on
              martial skill and raw strength.
            </p>
          </Card>
          <Card imageSrc="/img/classes/advanced/warrior.jpg">
            <p className="italic font-bold text-sm mb-2">Example two</p>
            <h4 className="text-lg font-bold leading-tight mb-2">
              Sir Ulrich of Velgraad
            </h4>
            <p className="text-sm mb-3">
              <strong>Fighter</strong>: 3 | <strong>Juggler</strong>: 3 |{" "}
              <strong>Warrior</strong>: 1
            </p>

            <p className="text-xs italic mb-3">
              Ulrich is a charismatic knight who blends martial discipline with
              flair. A master of swordplay and mounted combat, he dazzles foes
              with precise strikes, acrobatics, and unmatched skill in jousts,
              embodying grace and prowess.
            </p>
            <p>
              By evenly-spreading the levels, we get a more-rounded character
              that blends the martial aspect of Fighter and acrobatic and
              charisma aspect of Juggler.
            </p>
          </Card>
          <Card imageSrc="/img/classes/advanced/warrior-monk.webp">
            <p className="italic font-bold text-sm mb-2 text-gray-">
              Example three
            </p>
            <h4 className="text-lg font-bold leading-tight mb-2">
              Zara the Recluse
            </h4>
            <p className="text-sm mb-3">
              <strong>Fighter</strong>: 1 | <strong>Juggler</strong>: 5 |{" "}
              <strong>Warrior</strong>: 1
            </p>

            <p className="text-xs italic mb-3">
              Zara is a war monk who fuses martial focus with agility. Master of
              stealth, acrobatics, and precise strikes, she moves like a shadow,
              her throwing blades and swift combat style honed in meditative
              solitude.
            </p>
            <p>
              By emphasising Juggler in a Warior creation, we get closer to a
              traditional DnD 5E depiction of Monk.
            </p>
          </Card>
        </div>
      </Card>
    </div>
  );
};

export default ClassesPage;
