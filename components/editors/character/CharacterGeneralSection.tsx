import { UploadImageButton } from "@/components/uploadImageButton";
import { IMAGE_PLACEHOLDER } from "@/lib/webGlobals";
import { Character } from "@/types/character";
import { useState } from "react";

interface CharacterGeneralSectionProps {
  character: Character;
  setCharacter: React.Dispatch<React.SetStateAction<Character | undefined>>;
}

const CharacterGeneralSection: React.FC<CharacterGeneralSectionProps> = ({
  character,
  setCharacter,
}) => {
  const [hasImageError, setImageError] = useState<boolean>(false);

  return (
    <>
      <div className="col-span-7 col-start-1 border-1 border-dnd-ink/20 rounded-lg p-5 w-full grid grid-cols-7 gap-4">
        <div className="col-span-3">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={character.name}
            onChange={(event) =>
              setCharacter((prev) => ({
                ...prev!,
                name: event.target.value,
              }))
            }
          />
        </div>

        <div className="col-span-2">
          <label htmlFor="level">Level:</label>
          <input
            id="level"
            type="number"
            min={1}
            value={character.level}
            onChange={(event) => {
              const next = Number.parseInt(event.target.value || "1", 10) || 1;
              setCharacter((prev) => ({
                ...prev!,
                level: next,
              }));
            }}
          />
        </div>

        <div className="col-span-2">
          <label htmlFor="personality">Personality trait:</label>
          <input
            id="personality"
            type="text"
            value={character.personality ?? ""}
            onChange={(event) =>
              setCharacter((prev) => ({
                ...prev!,
                personality: event.target.value,
              }))
            }
          />
        </div>

        <div className="col-span-7">
          <label htmlFor="backstory">Backstory:</label>
          <textarea
            id="backstory"
            value={character.backstory ?? ""}
            rows={6}
            onChange={(event) =>
              setCharacter((prev) => ({
                ...prev!,
                backstory: event.target.value,
              }))
            }
          />
        </div>
      </div>

      <div className="col-span-2 col-start-8 border-1 border-dnd-ink/20 rounded-lg p-5 w-full">
        <div
          className={`border-1 border-dnd-ink/20 rounded-lg aspect-square overflow-hidden mb-2 ${hasImageError ? "border-dnd-red border-2" : ""}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}{" "}
          <img
            src={character.image ?? IMAGE_PLACEHOLDER}
            alt={`${character.name} portrait`}
            className="w-full h-full object-cover"
          />
        </div>
        <UploadImageButton
          id={character.id.toString()}
          image={character.image}
          onChange={(patch) =>
            setCharacter((prev) => ({
              ...prev!,
              ...patch,
            }))
          }
          setIsError={setImageError}
        />
      </div>
    </>
  );
};

export default CharacterGeneralSection;
