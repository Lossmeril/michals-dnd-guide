import { advancedClass, basicClass, mightyClass } from "@/types/classes";
import Image from "next/image";

interface CardProps {
  children: React.ReactNode;
  imageSrc?: string;
}

const Card: React.FC<CardProps> = ({ children, imageSrc }) => {
  return (
    <div className="w-full border border-slate-600 rounded-lg overflow-hidden shadow-sm bg-slate-800">
      {imageSrc ? (
        <div className="w-full h-80 relative">
          <Image src={imageSrc} alt="" fill className="object-cover" />
        </div>
      ) : (
        <></>
      )}
      <div className="p-8">{children}</div>
    </div>
  );
};

export default Card;

interface ClassCardProps {
  dndClass: basicClass | advancedClass | mightyClass;
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
      <h2>{dndClass.name}</h2>
    </Card>
  );
};
