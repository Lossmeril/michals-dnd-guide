import { PerkCard } from "@/components/card";
import Divider from "@/components/divider";
import Text, { H3 } from "@/components/text";
import { advancedClasses } from "@/data/classes/advanced";
import { basicClasses } from "@/data/classes/basic";
import { mightyClasses } from "@/data/classes/mighty";
import resources from "@/data/resources/resources";
import { Magic } from "@/types/classes";

import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export default async function ClassDetailPage({
  params,
}: {
  params: Promise<{ rank: string; dndclass: string }>;
}) {
  const rank = (await params).rank;
  const slugClass = (await params).dndclass;

  let classPool;

  switch (rank) {
    case "basic":
      classPool = basicClasses;
      break;
    case "advanced":
      classPool = advancedClasses;
      break;
    case "mighty":
      classPool = mightyClasses;
      break;
    default:
      classPool = basicClasses;
      break;
  }

  const displayClass = classPool.find(
    (x) => x.name.toLocaleLowerCase() === slugClass
  );

  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row flex-nowrap gap-10">
        <div className="w-full md:w-1/2 lg:w-3/4">
          <Link href={"/classes/" + displayClass?.classRank}>
            <p className="hidden lg:block mb-5 text-blue-300">
              &laquo; Go back
            </p>
          </Link>
          <p className="capitalize">{displayClass?.classRank + " class"}</p>
          <h2 className="font-bold text-3xl mb-5">{displayClass?.name}</h2>
          {displayClass?.isMagic === Magic.true && (
            <div className="border border-slate-700 rounded-md p-3 mb-5 bg-blue-300/20">
              <p className="text-sm text-blue-300 font-semibold mb-1">
                Magic class
              </p>
              <p className="text-xs">
                This is a magic class. Every magic class has{" "}
                <strong>core spells</strong> that are available to it from the
                get-go. On top of that, more spells are unlocked as perks.
              </p>
            </div>
          )}
          {displayClass?.isMagic === Magic.semi && (
            <div className="border border-slate-700 rounded-md p-3 mb-5 bg-purple-300/20">
              <p className="text-sm text-purple-300 font-semibold mb-1">
                Pseudo-magic class
              </p>
              <p className="text-xs">
                This is a pseudo-magic class. Unlike magic classes, pseudo-magic
                classes need to deal themselves a Scar to practice their magic.
                They have <strong>core spells</strong> that are available to it
                from the get-go. On top of that, more spells are unlocked as
                perks.
              </p>
            </div>
          )}
          <Text>{displayClass?.desc}</Text>
          <Divider />

          <H3>Class skills</H3>
          <p className="mb-5 text-xs">
            Below are the skills you can add the class level to when rolling
            dice. If the skill is marked as <strong>unique</strong>, only
            characters with this class can attempt it.
          </p>

          {displayClass?.skills.map((skill) => (
            <div
              key={skill.name}
              className="border-b last-of-type:border-b-0 border-slate-600/50 py-3 flex flex-row gap-5 items-center w-4/5"
            >
              <div>
                <p
                  className="text-4xl mb-2"
                  style={{
                    color: resources.find((r) => r.name === skill.ability)
                      ?.color,
                  }}
                >
                  {resources.find((r) => r.name === skill.ability)?.icon}
                </p>
              </div>
              <div>
                <h4 className="font-bold text-sm mb-1 text-slate-300">
                  {skill.name}{" "}
                  {skill.unique && (
                    <strong
                      className="text-sm"
                      title="Unique skill means only characters of this class may attempt this action."
                    >
                      unique skill
                    </strong>
                  )}
                </h4>
                <p className="text-sm text-slate-400">
                  <Balancer>{skill.desc}</Balancer>
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4">
          <Link href={"/classes/" + displayClass?.classRank}>
            <p className="block lg:hidden mb-5 text-blue-300">
              &laquo; Go back
            </p>
          </Link>
          <div className="relative w-full h-[60vh] overflow-hidden rounded-lg border border-slate-600">
            <Image
              src={
                "/img/classes/" +
                displayClass?.classRank +
                "/" +
                displayClass?.name.toLocaleLowerCase() +
                ".jpg"
              }
              alt={displayClass?.name ? displayClass.name : ""}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <Divider />

      {displayClass?.isMagic !== Magic.false && displayClass?.coreSpells && (
        <>
          <H3>{displayClass?.name + "'s core spells:"}</H3>
          <p className="mb-2">
            These are basic ways to manipulate your class&apos;s magic. They
            offer a basic way to interact with the schools of magic available to
            your class. More advanced magic spalls and perks can be unlocked as
            perks.
          </p>
          <p className="mb-5 text-xs">
            An exception is a character that hit the maximum level 5, but still
            decided to spend their level-up to get another class perk.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {displayClass?.coreSpells
              ?.sort((a, b) => a.name.localeCompare(b.name))
              .map((perk) => (
                <PerkCard key={perk.name} perk={perk} />
              ))}
          </div>
        </>
      )}

      <H3>
        {displayClass?.name +
          "'s perks" +
          (displayClass?.isMagic !== Magic.false ? " and spells" : "") +
          ":"}
      </H3>
      <p className="mb-2">
        Character can have a number of class perks corresponding to the level of
        said class.
      </p>
      <p className="mb-5 text-xs">
        An exception is a character that hit the maximum level 5, but still
        decided to spend their level-up to get another class perk.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {displayClass?.perks
          ?.sort((a, b) => a.name.localeCompare(b.name))
          .map((perk) => (
            <PerkCard key={perk.name} perk={perk} />
          ))}
      </div>
    </>
  );
}
