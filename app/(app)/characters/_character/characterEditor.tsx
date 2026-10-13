"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { SkeletonCard } from "@/components/ui/card";
import { convertToWebp } from "@/lib/convertToWebp";
import { fetchCharacterBuild } from "@/lib/endpoints/character_build";
import { fetchRulebook } from "@/lib/endpoints/rulebook";
import {
  type Build,
  characterLevel,
  emptyBuild,
  freePointsLeft,
  type Rulebook,
  STARTS,
  validateBuild,
} from "@/lib/rules/character";
import { saveCharacter, uploadCharacterPortrait } from "./actions";
import {
  BackgroundSection,
  BackstorySection,
  CharacterHeader,
  ClassesSection,
  PerksSection,
  PersonalitySection,
  RaceSection,
  Section,
  StartSection,
  TraitsSection,
} from "./sections";

const MAX_PORTRAIT_SIZE = 2 * 1024 * 1024; // the characters bucket's limit

const SECTION_LINKS = [
  ["race", "Race"],
  ["classes", "Classes"],
  ["perks", "Perks"],
  ["background", "Background"],
  ["traits", "Traits"],
  ["personality", "Personality"],
  ["backstory", "Backstory"],
] as const;

interface CharacterEditorProps {
  /** Omit to create a new character */
  characterId?: number;
}

/** The character sheet's sections, with their editing controls switched on */
const CharacterEditor: React.FC<CharacterEditorProps> = ({ characterId }) => {
  const router = useRouter();
  const [rb, setRb] = useState<Rulebook | null>(null);
  const [build, setBuild] = useState<Build>(emptyBuild);
  const [name, setName] = useState("");
  // The name as stored, for the breadcrumb; `name` changes while typing
  const [savedName, setSavedName] = useState("");
  const [backstory, setBackstory] = useState("");
  const [personality, setPersonality] = useState("");
  const [level, setLevel] = useState<number>(STARTS[1].level);
  // A new character's levels are all starting levels
  const [startLevel, setStartLevel] = useState<number | null>(null);
  const [saving, setSaving] = useState(false);
  // Uploaded after saving, since a new character has no id before that
  const [portrait, setPortrait] = useState<File | null>(null);
  const [portraitUrl, setPortraitUrl] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        const [rulebook, existing] = await Promise.all([
          fetchRulebook(),
          characterId ? fetchCharacterBuild(characterId) : null,
        ]);
        if (existing) {
          setBuild(existing.build);
          setName(existing.character.name);
          setSavedName(existing.character.name);
          setBackstory(existing.character.backstory ?? "");
          setPersonality(existing.character.personality ?? "");
          setLevel(existing.character.level);
          setStartLevel(existing.character.start_level);
          setPortraitUrl(existing.character.image_url);
        }
        setRb(rulebook);
      } catch (error) {
        console.error("Error loading the editor:", error);
        toast.error("Couldn't load the character editor.");
      }
    };
    load();
  }, [characterId]);

  if (!rb) return <SkeletonCard />;

  const start = startLevel ?? level;
  const remaining = level - characterLevel(build);
  const freePoints = freePointsLeft(build, level, start);
  const { errors, warnings } = validateBuild(rb, build, level, start);
  const problems = [...errors, ...(name.trim() ? [] : ["Name your character."])];
  const sectionProps = {
    rb,
    build,
    edit: { setBuild, remaining, freePoints },
  };

  const changePortrait = async (original: File) => {
    let file: File;
    try {
      file = await convertToWebp(original, { maxDimension: 1024 });
    } catch {
      return toast.error("Couldn't read that image.");
    }
    if (file.size > MAX_PORTRAIT_SIZE) {
      return toast.error("Image must be smaller than 2MB.");
    }
    setPortrait(file);
    setPortraitUrl(URL.createObjectURL(file));
  };

  const save = async () => {
    setSaving(true);
    const { data, error } = await saveCharacter({
      characterId,
      name,
      backstory,
      personality,
      startLevel: start,
      build,
    });
    if (error !== null) {
      setSaving(false);
      return toast.error(error);
    }

    if (portrait) {
      const fd = new FormData();
      fd.append("file", portrait);
      const upload = await uploadCharacterPortrait(data, fd);
      if (upload.error !== null) toast.error(`Portrait: ${upload.error}`);
    }
    setSaving(false);
    toast.success("Character saved");
    router.push(`/characters/${data}`);
  };

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Characters", href: "/characters" },
          ...(characterId
            ? [
                {
                  label: savedName || "Unnamed",
                  href: `/characters/${characterId}`,
                },
                { label: "Edit" },
              ]
            : [{ label: "New character" }]),
        ]}
      />
      <div className="sticky top-0 z-30 -mx-4 px-4 py-3 mb-8 bg-dnd-bg/95 backdrop-blur border-b border-dnd-gold flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
        <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
          {[...(characterId ? [] : [["start", "Start"]]), ...SECTION_LINKS].map(
            ([id, label]) => (
              <a key={id} href={`#${id}`} className="link no-underline">
                {label}
              </a>
            ),
          )}
        </nav>
        <div className="flex flex-wrap items-center gap-4">
          <p className="text-sm">
            <span
              className={
                remaining < 0 ? "text-dnd-red font-bold" : "font-bold"
              }
            >
              {remaining}
            </span>{" "}
            level-up point{remaining === 1 ? "" : "s"} left
          </p>
          {problems.length > 0 && (
            <a href="#checklist" className="link text-sm">
              {problems.length} to fix
            </a>
          )}
          {characterId && (
            <Link
              href={`/characters/${characterId}`}
              className="button bg-transparent text-dnd-red border border-dnd-red hover:bg-dnd-red/10"
            >
              Cancel
            </Link>
          )}
          <button
            type="button"
            onClick={save}
            disabled={saving || problems.length > 0}
            className="disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saving ? "Saving…" : "Save"}
          </button>
        </div>
      </div>

      {!characterId && <StartSection level={level} onChange={setLevel} />}

      <CharacterHeader
        {...sectionProps}
        name={name}
        imageUrl={portraitUrl}
        level={level}
        onNameChange={setName}
        onPortraitChange={changePortrait}
      />
      <RaceSection {...sectionProps} />
      <ClassesSection {...sectionProps} />
      <PerksSection {...sectionProps} />
      <BackgroundSection {...sectionProps} />
      <TraitsSection
        {...sectionProps}
        onTraitCreated={(trait) =>
          setRb({ ...rb, traits: [...rb.traits, trait] })
        }
      />
      <PersonalitySection
        personality={personality}
        onChange={setPersonality}
      />
      <BackstorySection backstory={backstory} onChange={setBackstory} />

      <Section id="checklist" title="Before saving">
        {problems.length === 0 ? (
          <p>All set.</p>
        ) : (
          <ul className="text-sm text-dnd-red list-disc pl-5">
            {problems.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        )}
        {warnings.length > 0 && (
          <ul className="text-sm text-dnd-ink/60 list-disc pl-5 mt-2">
            {warnings.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        )}
      </Section>
    </>
  );
};

export default CharacterEditor;
