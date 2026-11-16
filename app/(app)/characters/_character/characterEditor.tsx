"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { SkeletonCard } from "@/components/ui/card";
import IssueList from "@/components/ui/issueList";
import StickyBar from "@/components/ui/stickyBar";
import Stepper from "@/components/ui/stepper";
import { useDict } from "@/lib/i18n/client";
import { prepareImage } from "@/lib/hooks/useImageUpload";
import { fetchCharacterBuild } from "@/lib/endpoints/character_build";
import { fetchRulebook } from "@/lib/endpoints/rulebook";
import {
  type Build,
  type BuildStep,
  characterLevel,
  emptyBuild,
  freePointsLeft,
  type Rulebook,
  STARTS,
  validateBuild,
} from "@/lib/rules/character";
import { jumpstartText } from "@/lib/rules/fortune";
import { saveCharacter, uploadCharacterPortrait } from "./actions";
import {
  BackgroundSection,
  CharacterHeader,
  ClassesSection,
  GearSection,
  PerksSection,
  RaceSection,
  Section,
  StartSection,
  StepIntro,
  StorySection,
  TraitsSection,
} from "./sections";

/** The editor's pages, in order, and the build problems each one owns */
const PAGES = [
  { id: "start", owns: ["start", "resources"] },
  { id: "race", owns: ["race"] },
  { id: "classes", owns: ["classes"] },
  { id: "perks", owns: ["perks"] },
  { id: "background", owns: ["background"] },
  { id: "gear", owns: ["gear"] },
  { id: "traits", owns: ["traits"] },
  { id: "story", owns: [] },
] as const satisfies readonly { id: string; owns: readonly BuildStep[] }[];
type PageId = (typeof PAGES)[number]["id"];

interface CharacterEditorProps {
  /** Omit to create a new character */
  characterId?: number;
}

/** The character sheet's sections, with their editing controls switched on */
const CharacterEditor: React.FC<CharacterEditorProps> = ({ characterId }) => {
  const router = useRouter();
  const t = useDict();
  const e = t.editor;
  const [rb, setRb] = useState<Rulebook | null>(null);
  const [build, setBuild] = useState<Build>(emptyBuild);
  const [name, setName] = useState("");
  // The name as stored, for the breadcrumb; `name` changes while typing
  const [savedName, setSavedName] = useState("");
  const [backstory, setBackstory] = useState("");
  const [personality, setPersonality] = useState("");
  const [clothes, setClothes] = useState("");
  const [level, setLevel] = useState<number>(STARTS[1].level);
  // A new character's levels are all starting levels
  const [startLevel, setStartLevel] = useState<number | null>(null);
  const [saving, setSaving] = useState(false);
  const [page, setPage] = useState<PageId>("start");
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
          setClothes(existing.character.clothes ?? "");
          setLevel(existing.character.level);
          setStartLevel(existing.character.start_level);
          setPortraitUrl(existing.character.image_url);
        }
        setRb(rulebook);
      } catch (error) {
        console.error("Error loading the editor:", error);
        toast.error(e.loadFailed);
      }
    };
    load();
    // Messages follow the language; loading doesn't depend on it
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [characterId]);

  if (!rb) return <SkeletonCard />;

  const start = startLevel ?? level;
  const remaining = level - characterLevel(build);
  const freePoints = freePointsLeft(build, level, start);
  const { errors, warnings, issues, softIssues } = validateBuild(rb, build, level, start, t.lang);
  const problems = [...errors, ...(name.trim() ? [] : [e.nameIt])];
  const pageIndex = PAGES.findIndex((p) => p.id === page);
  const owned = (id: PageId, list: typeof issues) => {
    const owns: readonly BuildStep[] = PAGES.find((p) => p.id === id)!.owns;
    return [
      ...(id === "start" && list === issues && !name.trim() ? [e.nameIt] : []),
      ...list.filter((i) => owns.includes(i.step)).map((i) => i.message),
    ];
  };
  const stepLabel = (id: PageId) =>
    id === "gear" || id === "story" ? e.steps[id].title : e.sections[id];
  const goTo = (id: PageId) => {
    setPage(id);
    window.scrollTo({ top: 0 });
  };
  const sectionProps = {
    rb,
    build,
    edit: { setBuild, remaining, freePoints },
  };

  const changePortrait = async (original: File) => {
    const file = await prepareImage(original, { maxDimension: 1024 });
    if (!file) return;
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
      clothes,
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
      if (upload.error !== null) toast.error(e.portraitError(upload.error));
    }
    setSaving(false);
    toast.success(e.saved);
    router.push(`/characters/${data}`);
  };

  return (
    <>
      <Breadcrumbs
        items={[
          { label: e.characters, href: "/characters" },
          ...(characterId
            ? [
                {
                  label: savedName || e.unnamed,
                  href: `/characters/${characterId}`,
                },
                { label: e.edit },
              ]
            : [{ label: e.newCharacter }]),
        ]}
      />
      <StickyBar position="top">
        <Stepper
          steps={PAGES.map((p) => ({
            id: p.id,
            label: stepLabel(p.id),
            flagged: owned(p.id, issues).length > 0,
          }))}
          current={page}
          onSelect={(id) => goTo(id as PageId)}
        />
        <div className="flex flex-wrap items-center gap-4">
          <p className="text-sm">
            <span
              className={
                remaining < 0 ? "text-dnd-red font-bold" : "font-bold"
              }
            >
              {remaining}
            </span>{" "}
            {e.pointsLeft(remaining)}
          </p>
          {problems.length > 0 && (
            <button type="button" onClick={() => goTo("story")} className="button-link text-sm">
              {e.toFix(problems.length)}
            </button>
          )}
          {characterId && (
            <Link
              href={`/characters/${characterId}`}
              className="button button-secondary"
            >
              {e.cancel}
            </Link>
          )}
          <button
            type="button"
            onClick={save}
            disabled={saving || problems.length > 0}
          >
            {saving ? e.saving : e.save}
          </button>
        </div>
      </StickyBar>

      <p className="text-xs uppercase tracking-wider text-dnd-ink/60 mb-2">
        {e.stepOf(pageIndex + 1, PAGES.length)}
      </p>
      <StepIntro.Provider value={e.steps[page].intro}>
        {page === "start" && (
          <Section id="start" title={e.steps.start.title}>
            {!characterId && <StartSection level={level} onChange={setLevel} />}
            <CharacterHeader
              {...sectionProps}
              name={name}
              imageUrl={portraitUrl}
              level={level}
              onNameChange={setName}
              onPortraitChange={changePortrait}
            />
          </Section>
        )}
        {page === "race" && <RaceSection {...sectionProps} />}
        {page === "classes" && <ClassesSection {...sectionProps} />}
        {page === "perks" && <PerksSection {...sectionProps} />}
        {page === "background" && <BackgroundSection {...sectionProps} startLevel={start} />}
        {page === "gear" && (
          <GearSection {...sectionProps} clothes={clothes} onClothesChange={setClothes} />
        )}
        {page === "traits" && (
          <TraitsSection
            {...sectionProps}
            onTraitCreated={(trait) =>
              setRb({ ...rb, traits: [...rb.traits, trait] })
            }
          />
        )}
        {page === "story" && (
          <StorySection
            rb={rb}
            build={build}
            personality={personality}
            backstory={backstory}
            onPersonalityChange={setPersonality}
            onBackstoryChange={setBackstory}
            onJumpstart={(table, line) => {
              // Archetypes are who they were; the rest is how they are
              const text = jumpstartText(line);
              const add = (old: string) => (old.trim() ? `${old.trimEnd()}\n${text}` : text);
              if (table === "archetypes") setBackstory(add);
              else setPersonality(add);
              toast.success(t.fortune.jumpstart.added);
            }}
          />
        )}
      </StepIntro.Provider>

      {page === "story" ? (
        <Section id="checklist" title={e.beforeSaving}>
          {problems.length === 0 && <p>{e.allSet}</p>}
          <IssueList errors={problems} warnings={warnings} />
        </Section>
      ) : (
        (owned(page, issues).length > 0 || owned(page, softIssues).length > 0) && (
          <div className="mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-dnd-red mb-2">{e.stepIssues}</p>
            <IssueList errors={owned(page, issues)} warnings={owned(page, softIssues)} />
          </div>
        )
      )}

      <div className="flex justify-between gap-4 border-t border-dnd-gold pt-6 mb-8">
        {pageIndex > 0 ? (
          <button type="button" className="button-secondary" onClick={() => goTo(PAGES[pageIndex - 1].id)}>
            {e.back}
          </button>
        ) : (
          <span />
        )}
        {pageIndex < PAGES.length - 1 ? (
          <button type="button" onClick={() => goTo(PAGES[pageIndex + 1].id)}>
            {e.next}
          </button>
        ) : (
          <button type="button" onClick={save} disabled={saving || problems.length > 0}>
            {saving ? e.saving : e.save}
          </button>
        )}
      </div>
    </>
  );
};

export default CharacterEditor;
