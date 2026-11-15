"use client";

import Link from "next/link";
import { use } from "react";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { SkeletonCard } from "@/components/ui/card";
import DeleteButton from "@/components/ui/deleteButton";
import {
  BackgroundSection,
  BackstorySection,
  CharacterHeader,
  ClassesSection,
  InventorySection,
  PerksSection,
  PersonalitySection,
  RaceSection,
  TraitsSection,
} from "../_character/sections";
import { deleteCharacter } from "../_character/actions";
import { useDict } from "@/lib/i18n/client";
import { useCharacterSheet } from "./useCharacterSheet";

/** The character sheet; the editor shows the same sections with controls */
const CharacterSheetPage = ({ params }: PageProps<"/characters/[id]">) => {
  const { loading, sheet } = useCharacterSheet(Number(use(params).id));
  const e = useDict().editor;

  if (loading) return <SkeletonCard />;
  if (!sheet) return <p>{e.errors.notFound}</p>;

  const { rb, character, build, inventory, ownerName, isOwner } = sheet;
  const sectionProps = { rb, build };

  return (
    <>
      <Breadcrumbs
        items={[
          { label: e.characters, href: "/characters" },
          { label: character.name },
        ]}
      />
      <CharacterHeader
        {...sectionProps}
        name={character.name}
        imageUrl={character.image_url}
        level={character.level}
        ownerName={ownerName}
        actions={
          <>
            {isOwner && (
              <Link
                href={`/characters/${character.id}/editor`}
                className="button"
              >
                {e.editCharacter}
              </Link>
            )}
            <Link
              href={`/characters/${character.id}/print`}
              className="button button-secondary"
            >
              {e.printSheet}
            </Link>
            {isOwner && (
              <DeleteButton
                what="character"
                name={character.name}
                consequences={e.deleteConsequences}
                onDelete={() => deleteCharacter(character.id)}
                then="/characters"
                className="button-link"
              />
            )}
          </>
        }
      />
      <RaceSection {...sectionProps} />
      <ClassesSection {...sectionProps} />
      <PerksSection {...sectionProps} />
      <BackgroundSection {...sectionProps} />
      <InventorySection items={rb.items} inventory={inventory} />
      <TraitsSection {...sectionProps} />
      <PersonalitySection personality={character.personality ?? ""} />
      <BackstorySection backstory={character.backstory ?? ""} />
    </>
  );
};

export default CharacterSheetPage;
