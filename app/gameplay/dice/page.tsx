"use client";

import { HorizontalCard } from "@/components/card";
import { D20, D6 } from "@/components/dice";
import Text from "@/components/text";

const DiceRollsPage = () => {
  return (
    <div className="flex flex-col gap-10">
      {/* INTRO */}
      <div className="w-full">
        <h2 className="font-bold text-3xl mb-5">Dice rolls</h2>
        <div className="flex flex-col gap-5">
          <HorizontalCard imageSrc="/img/dice/skill check.webp">
            <h3 className="font-bold text-2xl mb-3">Skill check</h3>
            <div className="flex flex-row items-center justify-start w-fit gap-3 rounded-md bg-slate-700 border border-slate-600 pb-3 px-5 mb-3">
              <D6 display={6} noLabel />
              <p className="text-xl font-bold mt-2">+</p>{" "}
              <D6 display={6} noLabel />{" "}
              <p className="text-xl font-bold mt-2">
                {" "}
                + <strong>class level</strong> &#8805; 9
              </p>
            </div>
            <Text>
              Skill check is a roll in which it is your character trying to
              overcome an obstacle or achieve a goal without direct opposition
              from another entity.
            </Text>
            <Text>
              In skill check you roll <strong>two D6 dice</strong> and{" "}
              <strong>add the class level</strong> of a class the skill you are
              performing belongs under. If the result is higher the skill you
              are performing belongs under.{" "}
              <strong>
                If the result is higher than or equal to 9, you succeed.
              </strong>
            </Text>
          </HorizontalCard>
          <HorizontalCard imageSrc="/img/dice/challenge.webp">
            <h3 className="font-bold text-2xl mb-3">Challenge</h3>
            <div className="flex flex-row items-center justify-start w-fit gap-3 rounded-md bg-slate-700 border border-slate-600 pb-3 px-5 mb-3">
              <D20 display={20} noLabel />
              <p className="text-xl font-bold mt-2">
                {" "}
                + <strong>class level</strong>
              </p>
              <p className="text-xl font-bold mt-2"> vs.</p>{" "}
              <D20 display={20} noLabel />{" "}
              <p className="text-xl font-bold mt-2">
                {" "}
                + <strong>class level</strong>
              </p>
            </div>
            <Text>
              Challenge is a roll in which your character faces a direct
              opposition from another character or entity. For example, all
              fights are challenges, but card match or a debate can be as well.
            </Text>
            <Text>
              In challenge both sides roll a <strong>D20 die</strong> and{" "}
              <strong>add the class level</strong> of a class the skill they are
              performing belongs under. <strong>The higher result wins.</strong>{" "}
              If the results are equal, the defender wins.
            </Text>
          </HorizontalCard>
          <HorizontalCard imageSrc="/img/dice/initiative.jpg">
            <h3 className="font-bold text-2xl mb-3">Initiative</h3>
            <div className="flex flex-row items-center justify-start w-fit gap-3 rounded-md bg-slate-700 border border-slate-600 pb-3 px-5 mb-3">
              <D20 display={20} noLabel />
              <p className="text-xl font-bold mt-2"></p>
            </div>
            <Text>
              Initiative is a roll that determines the order of actions in
              combat. At the start of combat, all participants roll initiative
              to see who acts first, second, and so on.
            </Text>
            <Text>
              Initiative roll features one <strong>D20 die</strong>. The higher
              the result, the earlier the character acts in the combat round.
            </Text>
          </HorizontalCard>
        </div>
      </div>
    </div>
  );
};

export default DiceRollsPage;
