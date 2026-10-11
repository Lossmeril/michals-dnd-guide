"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { SkeletonCard } from "@/components/ui/card";
import { Heading } from "@/components/ui/typography";
import { fetchCharacterBuild } from "@/lib/endpoints/character_build";
import { fetchRulebook } from "@/lib/endpoints/rulebook";
import { convertToWebp } from "@/lib/convertToWebp";
import {
  type Build,
  characterLevel,
  emptyBuild,
  type Rulebook,
  STARTS,
  validateBuild,
} from "@/lib/rules/character";
import { saveCharacter, uploadCharacterPortrait } from "./actions";
import {
  BackgroundStep,
  ClassesStep,
  PerksStep,
  RaceStep,
  ResourcesStep,
  StartStep,
  TraitsStep,
} from "./steps";

const MAX_PORTRAIT_SIZE = 2 * 1024 * 1024; // the characters bucket's limit

interface CharacterEditorProps {
  /** Omit to create a new character */
  characterId?: number;
}

const CharacterEditor: React.FC<CharacterEditorProps> = ({ characterId }) => {
  const router = useRouter();
  const [rb, setRb] = useState<Rulebook | null>(null);
  const [build, setBuild] = useState<Build>(emptyBuild);
  const [name, setName] = useState("");
  const [backstory, setBackstory] = useState("");
  const [level, setLevel] = useState<number>(STARTS[1].level);
  const [step, setStep] = useState(0);
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
          setBackstory(existing.character.backstory ?? "");
          setLevel(existing.character.level);
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

  const remaining = level - characterLevel(build);
  const { errors, warnings } = validateBuild(rb, build, level);
  const stepProps = { rb, build, setBuild, remaining };

  // An existing character keeps its level; only new ones pick a start
  const steps = [
    ...(characterId
      ? []
      : [
          {
            title: "Start",
            body: <StartStep level={level} onChange={setLevel} />,
          },
        ]),
    { title: "Race", body: <RaceStep {...stepProps} /> },
    { title: "Background", body: <BackgroundStep {...stepProps} /> },
    { title: "Classes", body: <ClassesStep {...stepProps} /> },
    { title: "Perks", body: <PerksStep {...stepProps} /> },
    { title: "Resources", body: <ResourcesStep {...stepProps} /> },
    {
      title: "Traits",
      body: (
        <TraitsStep
          {...stepProps}
          onTraitCreated={(trait) =>
            setRb({ ...rb, traits: [...rb.traits, trait] })
          }
        />
      ),
    },
    { title: "Details", body: null },
  ];
  const isLast = step === steps.length - 1;

  const save = async () => {
    setSaving(true);
    const { data, error } = await saveCharacter({
      characterId,
      name,
      backstory,
      startLevel: level,
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
      <Heading level={1}>
        {characterId ? name || "Edit character" : "New character"}
      </Heading>

      <div className="sticky top-0 z-10 bg-dnd-bg/95 border-b border-dnd-gold py-3 mb-8 flex flex-wrap items-center justify-between gap-4">
        <nav className="flex flex-wrap gap-2">
          {steps.map((s, i) => (
            <button
              key={s.title}
              type="button"
              onClick={() => setStep(i)}
              className={
                i === step
                  ? ""
                  : "bg-transparent text-dnd-red hover:bg-dnd-gold/20"
              }
            >
              {i + 1}. {s.title}
            </button>
          ))}
        </nav>
        <p className="text-sm">
          Level <span className="font-bold">{characterLevel(build)}</span> of{" "}
          {level} ·{" "}
          <span
            className={remaining < 0 ? "text-dnd-red font-bold" : "font-bold"}
          >
            {remaining}
          </span>{" "}
          point{remaining === 1 ? "" : "s"} left
        </p>
      </div>

      <Heading level={2}>{steps[step].title}</Heading>

      {isLast ? (
        <div className="flex flex-col gap-4 max-w-xl">
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="flex items-center gap-4">
            {portraitUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={portraitUrl}
                alt="Portrait"
                className="w-24 h-24 rounded-lg object-cover border border-dnd-gold"
              />
            ) : (
              <div className="w-24 h-24 rounded-lg bg-gray-200 flex items-center justify-center text-xs text-gray-500">
                No portrait
              </div>
            )}
            <label className="button cursor-pointer">
              {portraitUrl ? "Change portrait" : "Add portrait"}
              <input
                type="file"
                accept="image/*"
                hidden
                onChange={async (e) => {
                  const original = e.target.files?.[0];
                  if (!original) return;
                  let file: File;
                  try {
                    file = await convertToWebp(original, {
                      maxDimension: 1024,
                    });
                  } catch {
                    return toast.error("Couldn't read that image.");
                  }
                  if (file.size > MAX_PORTRAIT_SIZE) {
                    return toast.error("Image must be smaller than 2MB.");
                  }
                  setPortrait(file);
                  setPortraitUrl(URL.createObjectURL(file));
                }}
              />
            </label>
          </div>
          <textarea
            rows={6}
            placeholder="Backstory"
            value={backstory}
            onChange={(e) => setBackstory(e.target.value)}
          />

          {errors.length > 0 && (
            <ul className="text-sm text-dnd-red list-disc pl-5">
              {errors.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          )}
          {warnings.length > 0 && (
            <ul className="text-sm text-dnd-ink/60 list-disc pl-5">
              {warnings.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>
          )}

          <button
            type="button"
            onClick={save}
            disabled={saving || errors.length > 0 || !name.trim()}
            className="self-start disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saving ? "Saving…" : "Save character"}
          </button>
        </div>
      ) : (
        steps[step].body
      )}

      <div className="flex justify-between mt-12">
        <button
          type="button"
          onClick={() => setStep(step - 1)}
          disabled={step === 0}
          className="disabled:invisible"
        >
          Back
        </button>
        {!isLast && (
          <button type="button" onClick={() => setStep(step + 1)}>
            Next
          </button>
        )}
      </div>
    </>
  );
};

export default CharacterEditor;
