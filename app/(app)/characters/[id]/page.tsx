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
import Alert from "@/components/ui/alert";
import { Heading } from "@/components/ui/typography";
import { GrantLevelButton, LevelHistory } from "@/components/game/levelGrant";
import { fetchLevelInfo } from "@/lib/endpoints/level_grants";
import { useLoad } from "@/lib/hooks/useLoad";
import { characterLevel } from "@/lib/rules/character";
import { useCharacterSheet } from "./useCharacterSheet";

/** The character sheet; the editor shows the same sections with controls */
const CharacterSheetPage = ({ params }: PageProps<"/characters/[id]">) => {
  const characterId = Number(use(params).id);
  const { loading, sheet, reload } = useCharacterSheet(characterId);
  const { data: levels, reload: reloadLevels } = useLoad(
    async () => (await fetchLevelInfo([characterId]))[characterId],
    [characterId],
  );
  const dict = useDict();
  const e = dict.editor;
  const lv = dict.levels;

  if (loading) return <SkeletonCard />;
  if (!sheet) return <p>{e.errors.notFound}</p>;

  const { rb, character, build, inventory, ownerName, isOwner } = sheet;
  const sectionProps = { rb, build };
  // Granted levels not spent yet (> 0), or picks over after an undo (< 0)
  const balance = character.level - characterLevel(build);
  const onLevelChange = () => {
    reload();
    reloadLevels();
  };

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
            {levels && (
              <GrantLevelButton
                characterId={character.id}
                characterName={character.name}
                level={character.level}
                info={levels}
                onChange={onLevelChange}
                className="button"
              />
            )}
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
      {balance !== 0 && (
        <Alert kind={balance > 0 ? "info" : "warning"}>
          {balance > 0 ? lv.unspent(balance) : lv.over(-balance)}{" "}
          {isOwner && (
            <Link href={`/characters/${character.id}/editor`} className="link">
              {balance > 0 ? lv.spendThem : lv.fixIt}
            </Link>
          )}
        </Alert>
      )}
      <RaceSection {...sectionProps} />
      <ClassesSection {...sectionProps} />
      <PerksSection {...sectionProps} />
      <BackgroundSection {...sectionProps} clothes={character.clothes ?? ""} />
      <InventorySection items={rb.items} inventory={inventory} />
      <TraitsSection {...sectionProps} />
      <PersonalitySection personality={character.personality ?? ""} />
      <BackstorySection backstory={character.backstory ?? ""} />
      {levels && levels.grants.length > 0 && (
        <section className="mb-16">
          <Heading level={2}>{lv.history}</Heading>
          <LevelHistory
            level={character.level}
            startLevel={character.start_level}
            grants={levels.grants}
          />
        </section>
      )}
    </>
  );
};

export default CharacterSheetPage;
