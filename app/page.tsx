import Card, { ClassCard } from "@/components/card";
import { basicClasses } from "@/data/classes/basic";

export default function Home() {
  return (
    <div className="p-20">
      Hello
      <div className="grid grid-cols-5 gap-5">
        {basicClasses.map((basicClass) => (
          <ClassCard dndClass={basicClass} />
        ))}
      </div>
    </div>
  );
}
