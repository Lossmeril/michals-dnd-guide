"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDeferredValue, useEffect, useRef, useState } from "react";
import RuleMarkdown from "@/components/rulebook/ruleMarkdown";
import FileButton from "@/components/ui/fileButton";
import { Select, SelectField, TextField } from "@/components/ui/formControls";
import Panel from "@/components/ui/panel";
import { Overline } from "@/components/ui/typography";
import { useImageUpload } from "@/lib/hooks/useImageUpload";
import { hrefOf, INDEX_SLUG } from "@/lib/rulebookNav";
import { slugify } from "@/lib/slugify";
import type { Tables } from "@/lib/types/database.types";
import { uploadRulebookImage } from "../../actions";
import {
  AdminHeader,
  formGrid,
  SaveBar,
  useAdminAction,
} from "../../_components";
import { deleteRulebookPage, saveRulebookPage } from "../actions";
import ShortcodeHelp from "./shortcodeHelp";

type Page = Tables<"rulebook_pages">;

// Snippets for the toolbar; "|" marks where the cursor lands
const SNIPPETS: { label: string; text: string; block?: boolean }[] = [
  { label: "Example", block: true, text: ':::example[|Title]{image="/img/rulebook/michal.webp"}\nWhat happens in the story.\n:::' },
  { label: "Note", block: true, text: ":::note[|Title]\nA clarification or an edge case.\n:::" },
  { label: "Formula", block: true, text: "::formula[|2d6 + class level ≥ 9]" },
  { label: "Rolled dice", text: ":roll[d6 |4 2]" },
  { label: "Body", text: ":body|" },
  { label: "Soul", text: ":soul|" },
  { label: "Charisma", text: ":charisma|" },
  { label: "Material", text: ":material|" },
  { label: "Coins", text: ":coins|" },
  { label: "Resource bars", block: true, text: ':::stats[|Michal\'s Charisma, before and after]\n::stat{r="charisma" base="5"}\n::stat{r="charisma" base="5" exhausted="3"}\n:::' },
  { label: "Table", block: true, text: "| Column | Column |\n|---|---|\n| | |" },
  { label: "Cards", block: true, text: "::::cards\n:::card[|Title]{subtitle=\"\"}\nText.\n:::\n::::" },
  { label: "Cards, 3 in a row", block: true, text: "::::cards{cols=\"3\"}\n:::card[|Title]{image=\"\"}\nText.\n:::\n:::card[Title]\nText.\n:::\n:::card[Title]\nText.\n:::\n::::" },
];

const DATA_BLOCKS = [
  { value: "::races", label: "Races and their perks" },
  { value: "::backgrounds", label: "Backgrounds table" },
  { value: "::languages", label: "Languages table" },
  { value: "::traits", label: "Premade traits" },
  { value: "::weapons", label: "Weapons table" },
  { value: '::classes{rank="basic"}', label: "Basic class cards" },
  { value: '::classes{rank="advanced"}', label: "Advanced class cards" },
  { value: '::classes{rank="mighty"}', label: "Mighty class cards" },
  { value: "::chapters", label: "List of chapters" },
  { value: "::travel-calculator", label: "Travel calculator" },
];

const IMAGE_LAYOUTS = [
  { value: "header", label: "Header (wide banner)" },
  { value: "side", label: "Side image (right)" },
  { value: "left", label: "Side image (left)" },
  { value: "inline", label: "Plain image" },
  { value: "url", label: "Just the URL" },
];

const PageEditor: React.FC<{
  page: Page | null;
  chapters: { id: string; title: string }[];
  defaultChapter?: string;
}> = ({ page, chapters, defaultChapter }) => {
  const router = useRouter();
  const isNew = !page;
  const isIndex = page?.slug === INDEX_SLUG;
  const [row, setRow] = useState({
    title: page?.title ?? "",
    slug: page?.slug ?? "",
    chapter_id: page?.chapter_id ?? defaultChapter ?? chapters[0]?.id ?? "",
    intro: page?.intro ?? null,
    content: page?.content ?? "",
  });
  const [slugTouched, setSlugTouched] = useState(!isNew);
  const [dirty, setDirty] = useState(false);
  const [layout, setLayout] = useState("side");
  const { uploading, upload: uploadImage } = useImageUpload((fd) =>
    uploadRulebookImage("rulebook", fd),
  );
  const preview = useDeferredValue(row.content);
  const textarea = useRef<HTMLTextAreaElement>(null);
  const { pending, runAction } = useAdminAction();

  const set = (patch: Partial<typeof row>) => {
    setRow((r) => ({ ...r, ...patch }));
    setDirty(true);
  };
  const slug = slugTouched ? row.slug : slugify(row.title);

  // Leaving with unsaved text asks first
  useEffect(() => {
    if (!dirty) return;
    const warn = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);

  /** Puts text at the cursor; blocks get blank lines around them */
  const insert = (snippet: string, block = false) => {
    const el = textarea.current;
    const start = el?.selectionStart ?? row.content.length;
    const end = el?.selectionEnd ?? start;
    const before = row.content.slice(0, start);
    const after = row.content.slice(end);
    // Newlines missing to make a blank line between the block and its neighbour
    const pad = (s: string, side: "before" | "after") => {
      if (!block || !s) return "";
      const have = (side === "before" ? /\n*$/ : /^\n*/).exec(s)![0].length;
      return "\n".repeat(Math.max(0, 2 - have));
    };
    const cursor = snippet.indexOf("|");
    const text = snippet.replace("|", "");
    const lead = pad(before, "before");
    const next = before + lead + text + pad(after, "after") + after;
    set({ content: next });
    const at = before.length + lead.length + (cursor < 0 ? text.length : cursor);
    requestAnimationFrame(() => {
      el?.focus();
      el?.setSelectionRange(at, at);
    });
  };

  const upload = async (file: File) => {
    const url = await uploadImage(file);
    if (!url) return;
    if (layout === "url") insert(url);
    else insert(`::image{src="${url}" alt="|" layout="${layout}"}`, true);
  };

  const save = () =>
    runAction(() => saveRulebookPage(page?.id ?? null, { ...row, slug }), {
      then: (id) => {
        setDirty(false);
        if (isNew) router.push(`/admin/rulebook/${id}`);
        else router.refresh();
      },
    });

  const remove = () => {
    if (!page || !window.confirm("Delete this page for good?")) return;
    runAction(() => deleteRulebookPage(page.id), {
      success: "Deleted",
      then: () => {
        setDirty(false);
        router.push("/admin/rulebook");
      },
    });
  };

  return (
    <>
      <AdminHeader
        title={isNew ? "New page" : row.title || "Untitled"}
        crumbs={[{ href: "/admin/rulebook", label: "Rulebook pages" }]}
        actions={
          page && (
            <Link href={hrefOf(page.slug)} className="button-link">
              View page →
            </Link>
          )
        }
      />

      <Panel as="section" className={formGrid}>
        <TextField label="Title" id="title" value={row.title} onChange={(title) => set({ title })} />
        <TextField
          label="Slug"
          id="slug"
          value={slug}
          disabled={isIndex}
          onChange={(v) => {
            setSlugTouched(true);
            set({ slug: slugify(v) });
          }}
          hint={
            isIndex
              ? "The front page, shown at /rulebook."
              : `The page's address: ${hrefOf(slug || "…")}. Links in other pages use it.`
          }
        />
        <SelectField
          label="Chapter"
          id="chapter"
          value={row.chapter_id}
          onChange={(v) => v && set({ chapter_id: v })}
          options={chapters.map((c) => ({ value: c.id, label: c.title }))}
        />
        <TextField
          label="Intro"
          id="intro"
          value={row.intro}
          onChange={(v) => set({ intro: v || null })}
          hint="Optional line under the title."
        />
      </Panel>

      <section className="mt-6 grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
        <Panel className="flex flex-col gap-3 xl:sticky xl:top-4">
          <div className="flex flex-wrap gap-1.5">
            {SNIPPETS.map((s) => (
              <button
                key={s.label}
                type="button"
                className="button-secondary text-xs px-2.5 py-1"
                onClick={() => insert(s.text, s.block)}
              >
                {s.label}
              </button>
            ))}
            <Select
              aria-label="Insert data from the database"
              className="w-auto text-xs py-1"
              value=""
              onChange={(v) => v && insert(v, true)}
              none="Insert data…"
              options={DATA_BLOCKS}
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Select
              aria-label="Image layout"
              className="w-auto text-xs py-1"
              value={layout}
              onChange={(v) => v && setLayout(v)}
              options={IMAGE_LAYOUTS}
            />
            <FileButton
              secondary
              disabled={uploading}
              className="text-xs px-2.5 py-1"
              onFile={upload}
            >
              {uploading ? "Uploading…" : "Upload image"}
            </FileButton>
          </div>
          <textarea
            ref={textarea}
            aria-label="Page content"
            value={row.content}
            onChange={(e) => set({ content: e.target.value })}
            spellCheck
            className="w-full min-h-[60vh] font-mono text-xs leading-relaxed"
          />
          <ShortcodeHelp />
        </Panel>

        <Panel>
          <Overline className="mb-4">Preview</Overline>
          <RuleMarkdown content={preview} />
        </Panel>
      </section>

      <SaveBar
        onSave={save}
        pending={pending}
        disabled={!row.title.trim() || !slug || !row.chapter_id}
        onDelete={isNew || isIndex ? undefined : remove}
      />
    </>
  );
};

export default PageEditor;
