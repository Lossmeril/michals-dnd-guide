"use client";

import Link from "next/link";
import { use } from "react";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { SkeletonCard } from "@/components/ui/card";
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
import { useCharacterSheet } from "./useCharacterSheet";

/** The character sheet; the editor shows the same sections with controls */
const CharacterSheetPage = ({ params }: PageProps<"/characters/[id]">) => {
  const { loading, sheet } = useCharacterSheet(Number(use(params).id));

  if (loading) return <SkeletonCard />;
  if (!sheet) return <p>Character not found.</p>;

  const { rb, character, build, inventory, ownerName, isOwner } = sheet;
  const sectionProps = { rb, build };

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Characters", href: "/characters" },
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
          isOwner && (
            <Link
              href={`/characters/${character.id}/editor`}
              className="button"
            >
              Edit character
            </Link>
          )
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
