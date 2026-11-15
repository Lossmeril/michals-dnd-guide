"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Citation from "@/components/ui/citation";
import FileButton from "@/components/ui/fileButton";
import { NumberField, SelectField, TextField } from "@/components/ui/formControls";
import Panel from "@/components/ui/panel";
import { DICTS } from "@/lib/i18n/dictionaries";
import { localizeDeep } from "@/lib/i18n/localize";
import { CREDIT_SECTIONS, type Credit } from "@/lib/credits";
import { useImageUpload } from "@/lib/hooks/useImageUpload";
import { deleteCredit, saveCredit, uploadRulebookImage } from "../../actions";
import { AdminHeader, formGrid, ImageField, SaveBar, useAdminAction } from "../../_components";

type Draft = Omit<Credit, "id"> & { id?: number };

const blank = (sort: number): Draft => ({
  section: "pictures",
  authors: null,
  year: null,
  title: "",
  medium: null,
  place: null,
  publisher: null,
  url: null,
  accessed: null,
  license: null,
  license_url: null,
  used_for: null,
  cover_url: null,
  images: [],
  sort,
});

const CreditEditor: React.FC<{ credit: Credit | null; nextSort: number }> = ({
  credit,
  nextSort,
}) => {
  const router = useRouter();
  const [row, setRow] = useState<Draft>(credit ?? blank(nextSort));
  const set = (patch: Partial<Draft>) => setRow((r) => ({ ...r, ...patch }));
  const text = (key: keyof Draft) => (v: string) => set({ [key]: v.trim() ? v : null });
  const { pending, runAction } = useAdminAction();
  const { uploading, upload } = useImageUpload((fd) => uploadRulebookImage("rulebook", fd));

  const save = () =>
    runAction(() => saveCredit(row), {
      then: (id) => (credit ? router.refresh() : router.push(`/admin/credits/${id}`)),
    });
  const remove = () => {
    if (!credit || !window.confirm(`Delete the credit for ${row.title}?`)) return;
    runAction(() => deleteCredit(credit.id), {
      success: "Deleted",
      then: () => router.push("/admin/credits"),
    });
  };

  return (
    <>
      <AdminHeader
        title={credit ? row.title || "Untitled" : "New credit"}
        crumbs={[{ href: "/admin/credits", label: "Credits" }]}
      />

      <Panel as="section" className="mb-6 text-sm">
        <p className="text-xs font-bold text-dnd-ink/60 mb-2">Preview</p>
        <Citation credit={localizeDeep({ id: 0, ...row }, "en")} dict={DICTS.en} />
      </Panel>

      <Panel as="section" className={formGrid}>
        <SelectField
          label="Section"
          id="section"
          value={row.section}
          options={CREDIT_SECTIONS.map((s) => ({ value: s.id, label: s.title.en }))}
          onChange={(v) => set({ section: v ?? "pictures" })}
        />
        <NumberField label="Sort order" id="sort" value={row.sort} onChange={(v) => set({ sort: v ?? 0 })} />
        <TextField
          label="Author(s)"
          id="authors"
          value={row.authors}
          onChange={text("authors")}
          hint='Surname, initials ("Sapkowski, A.") or an organisation ("CD PROJEKT RED").'
        />
        <TextField label="Year" id="year" value={row.year} onChange={text("year")} hint='Empty shows "n.d."' />
        <TextField label="Title" id="title" value={row.title} onChange={(v) => set({ title: v })} className="md:col-span-2" />
        <TextField
          label="Medium"
          id="medium"
          value={row.medium}
          onChange={text("medium")}
          localized
          hint='Shown in brackets: "Video game", "Board game", "Software". Leave empty for books.'
        />
        <TextField label="Place of publication" id="place" value={row.place} onChange={text("place")} />
        <TextField label="Publisher" id="publisher" value={row.publisher} onChange={text("publisher")} />
        <TextField label="URL" id="url" value={row.url} onChange={text("url")} />
        <TextField
          label="Accessed"
          id="accessed"
          value={row.accessed}
          onChange={text("accessed")}
          hint="For web sources, as YYYY-MM-DD."
        />
        <TextField label="Licence" id="license" value={row.license} onChange={text("license")} />
        <TextField label="Licence URL" id="license_url" value={row.license_url} onChange={text("license_url")} />
        <TextField
          label="Used for"
          id="used_for"
          value={row.used_for}
          onChange={text("used_for")}
          multiline
          localized
          className="md:col-span-2"
          hint="Which pictures or rules come from it, as plain text."
        />
        <div className="md:col-span-2">
          <p className="font-bold text-sm mb-2">Cover</p>
          <ImageField
            target="rulebook"
            id="cover"
            value={row.cover_url}
            onChange={(cover_url) => set({ cover_url })}
          />
        </div>
        <div className="md:col-span-2 flex flex-col gap-2">
          <TextField
            label="Gallery"
            id="images"
            value={row.images.join("\n")}
            onChange={(v) => set({ images: v.split("\n").map((s) => s.trim()).filter(Boolean) })}
            multiline
            hint="The images from this source, one path or URL per line."
          />
          <FileButton
            secondary
            disabled={uploading}
            className="self-start text-xs py-1"
            onFile={async (file) => {
              const url = await upload(file);
              if (url) set({ images: [...row.images, url] });
            }}
          >
            {uploading ? "Uploading…" : "Upload an image to the gallery"}
          </FileButton>
          {row.images.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {row.images.map((src) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={src} src={src} alt="" className="size-12 rounded object-cover object-top border border-dnd-gold" />
              ))}
            </div>
          )}
        </div>
      </Panel>
      <SaveBar onSave={save} pending={pending} disabled={!row.title.trim()} onDelete={credit ? remove : undefined} />
    </>
  );
};

export default CreditEditor;
