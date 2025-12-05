import { AdvancedClass, BasicClass, MightyClass } from "@/types/classes";
import Image from "next/image";
import Divider from "./divider";
import Link from "next/link";
import { Perk } from "@/types/perks";
import { Race } from "@/types/races";
import { highlightText } from "@/utils/highlightText";
import Balancer from "react-wrap-balancer";

interface CardProps {
  children: React.ReactNode;
  imageSrc?: string;
  link?: string;
  filled?: boolean;
  imgPosStyle?: string;
  containImage?: boolean;
  anchorLink?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  imageSrc,
  filled,
  containImage,
  anchorLink,
}) => {
  return (
    <div
      className="w-full border border-slate-600 rounded-lg overflow-hidden shadow-sm bg-transparent relative"
      style={{ backgroundColor: filled ? "#47556980" : "" }}
      id={anchorLink}
    >
      {imageSrc ? (
        containImage ? (
          <div className="w-full relative">
            <Image
              src={imageSrc}
              alt=""
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto object-top object-contain"
            />
          </div>
        ) : (
          <div className="w-full h-80 relative">
            <Image
              src={imageSrc}
              alt=""
              fill
              className="object-top object-cover"
            />
          </div>
        )
      ) : (
        <></>
      )}
      <div className="p-4">{children}</div>
    </div>
  );
};

export const HorizontalCard: React.FC<CardProps> = ({
  children,
  imageSrc,
  filled,
  imgPosStyle,
}) => {
  return (
    <div
      className="w-full flex flex-col lg:flex-row border border-slate-600 rounded-lg overflow-hidden shadow-sm bg-transparent"
      style={{ backgroundColor: filled ? "#47556980" : "" }}
    >
      {imageSrc ? (
        <div className="h-80 w-auto lg:w-80 lg:h-auto relative flex-shrink-0">
          <Image
            src={imageSrc}
            alt=""
            fill
            className={`object-cover object-center ${imgPosStyle}`}
          />
        </div>
      ) : (
        <></>
      )}
      <div className="p-6 pl-8 flex-grow">{children}</div>
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
        <p className="text-slate-300 text-xs text-left">
          <Balancer>{dndClass.desc}</Balancer>
        </p>
        <Divider />
        {"classes" in dndClass ? (
          <>
            <h4 className="text-sm font-bold mb-1">Required classes:</h4>
            <div className="flex flex-row flex-wrap gap-2 w-full">
              {dndClass.classes.map((reqClass) => (
                <div
                  className={`text-xs text-slate-300 rounded-sm px-2 `}
                  style={{
                    backgroundColor: "var(--" + reqClass.colorScheme + ")",
                  }}
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
      {perk.components && (
        <div className="absolute top-0 right-0 bg-blue-400 w-28 text-center font-bold uppercase text-xs py-1 rotate-45 translate-y-3 translate-x-8">
          Spell
        </div>
      )}
      <div className="relative w-28 aspect-square mb-4">
        <Image
          src={"/img/perks/--border--.svg"}
          fill
          alt=""
          className="object-cover z-10"
        />
        <Image
          src={"/img/perks/" + perk.name + ".png"}
          alt={perk.name + " perk"}
          fill
          className="object-cover"
          style={{ borderColor: "var(--charisma)" }}
        />
      </div>
      <h4 className="font-bold text-xl text-left leading-none mb-1">
        {perk.name}
      </h4>
      <h5 className="font-bold text-sm italic text-gray-400 mb-2">
        {perk.activationPrice ? "Activation price: " : "Passive skill"}
        {perk.activationPrice ? (
          <span
            style={{
              color:
                "var(--" + perk.activationPrice.ability.toLowerCase() + ")",
            }}
          >
            {perk.activationPrice.cost +
              " " +
              perk.activationPrice.ability.toLowerCase() +
              " " +
              (perk.activationPrice.priceUnit
                ? " / " + perk.activationPrice.priceUnit
                : "")}
          </span>
        ) : (
          <></>
        )}
      </h5>
      <p className="text-sm">
        <Balancer>{highlightText(perk.desc)}</Balancer>
      </p>

      <div className="flex flex-row flex-wrap text-xs gap-x-3 gap-y-1 mt-3">
        {perk.damage && (
          <p className="">
            <strong>Damage:</strong> {perk.damage}
          </p>
        )}
        {perk.range && (
          <p className="">
            <strong>Range:</strong> {perk.range}
          </p>
        )}
        {perk.areaOfEffect && (
          <p className="">
            <strong>Area of Effect:</strong> {perk.areaOfEffect}
          </p>
        )}
        {perk.duration && (
          <p className="">
            <strong>Duration:</strong> {perk.duration}
          </p>
        )}
        {perk.damageType && (
          <p className="">
            <strong>Damage Type:</strong> {perk.damageType}
          </p>
        )}
      </div>
    </Card>
  );
};
