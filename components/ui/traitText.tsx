import type { Tables } from "@/lib/types/database.types";
import { Flavour } from "./typography";

/** A trait's flavour, what it does, and its upside and downside */
const TraitText: React.FC<{
  trait: Pick<
    Tables<"traits">,
    "flavour" | "description" | "upside" | "downside"
  >;
}> = ({ trait }) => (
  <div className="flex flex-col gap-1 text-sm">
    <Flavour text={trait.flavour} />
    {trait.description && <p>{trait.description}</p>}
    <p>
      <span className="font-bold text-accent-green">+</span> {trait.upside}
    </p>
    <p>
      <span className="font-bold text-dnd-red">−</span> {trait.downside}
    </p>
  </div>
);

export default TraitText;
