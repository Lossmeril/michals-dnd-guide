import { AdvancedClass, BasicClass, MightyClass } from "@/types/classes";
import Image from "next/image";
import Divider from "./divider";
import Link from "next/link";
import { Perk } from "@/types/perks";
import { Race } from "@/types/races";

interface CardProps {
  children: React.ReactNode;
  imageSrc?: string;
  link?: string;
}

const Card: React.FC<CardProps> = ({ children, imageSrc }) => {
  return (
    <div className="w-full border border-slate-600 rounded-lg overflow-hidden shadow-sm bg-transparent">
      {imageSrc ? (
        <div className="w-full h-80 relative">
          <Image src={imageSrc} alt="" fill className="object-cover" />
        </div>
      ) : (
        <></>
      )}
      <div className="p-4">{children}</div>
    </div>
  );
};

export default Card;

interface ClassCardProps {
  dndClass: BasicClass | AdvancedClass | MightyClass;
}

export const ClassCard: React.FC<ClassCardProps> = ({ dndClass }) => {
  return (
    <Card
      imageSrc={
        "/img/classes/" +
        dndClass.classRank +
        "/" +
        dndClass.name.toLocaleLowerCase() +
        ".jpg"
      }
    >
      <div>
        <h3 className="font-bold text-2xl text-left mb-2">{dndClass.name}</h3>
        <p className="text-slate-300 text-xs text-left">{dndClass.desc}</p>{" "}
        <Divider />
        {"classes" in dndClass ? (
          <>
            <h4 className="text-sm font-bold mb-1">Required classes:</h4>
            <div className="flex flex-row flex-wrap gap-2 w-full">
              {dndClass.classes.map((reqClass) => (
                <div
                  className="text-xs text-slate-300 bg-slate-600 rounded-sm px-2 "
                  key={reqClass.name}
                >
                  {reqClass.name}
                </div>
              ))}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <Link
        href={
          "/classes/" +
          dndClass.classRank +
          "/" +
          dndClass.name.toLocaleLowerCase()
        }
        className="w-full block px-4 py-2 rounded-md mt-5 bg-gray-700 font-bold text-center transition-all hover:bg-gray-600 active:bg-gray-900"
      >
        Read more
      </Link>
    </Card>
  );
};

interface RaceCardProps {
  race: Race;
}

export const RaceCard: React.FC<RaceCardProps> = ({ race }) => {
  return (
    <Card imageSrc={"/img/races/" + race.name.toLocaleLowerCase() + ".jpg"}>
      <div>
        <h3 className="font-bold text-2xl text-left mb-2">{race.plural}</h3>
        <p className="text-slate-300 text-xs text-left">{race.desc}</p>{" "}
        <Divider />
      </div>
      <Link
        href={"/races/" + race.name.toLocaleLowerCase()}
        className="w-full block px-4 py-2 rounded-md mt-5 bg-gray-700 font-bold text-center transition-all hover:bg-gray-600 active:bg-gray-900"
      >
        Read more
      </Link>
    </Card>
  );
};

interface PerkCardProps {
  perk: Perk;
}

export const PerkCard: React.FC<PerkCardProps> = ({ perk }) => {
  return (
    <Card>
      <h4 className="font-bold text-xl text-left mb-2">{perk.name}</h4>
    </Card>
  );
};
