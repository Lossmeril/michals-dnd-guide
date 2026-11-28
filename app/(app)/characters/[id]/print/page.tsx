"use client";

import Link from "next/link";
import { use, useEffect, useState } from "react";
import { FaPrint } from "react-icons/fa6";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import FileButton from "@/components/ui/fileButton";
import { SkeletonCard } from "@/components/ui/card";
import { useDict } from "@/lib/i18n/client";
import { useCharacterSheet } from "../useCharacterSheet";
import PrintSheet from "./printSheet";

/** The character sheet as A4 pages, ready to print */
const PrintSheetPage = ({ params }: PageProps<"/characters/[id]/print">) => {
  const { loading, sheet } = useCharacterSheet(Number(use(params).id));
  const dict = useDict();
  // A picture and a coat of arms for this printout only: kept in the browser, never uploaded
  const picture = useLocalImage();
  const emblem = useLocalImage();

  if (loading) return <SkeletonCard />;
  if (!sheet) return <p>{dict.editor.errors.notFound}</p>;
  const { character } = sheet;

  return (
    <>
      <div className="print:hidden">
        <Breadcrumbs
          items={[
            { label: dict.editor.characters, href: "/characters" },
            { label: character.name, href: `/characters/${character.id}` },
            { label: dict.print.print },
          ]}
        />
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <button type="button" onClick={() => window.print()} className="flex items-center gap-2">
            <FaPrint /> {dict.print.print}
          </button>
          <Link href={`/characters/${character.id}`} className="button-link">
            {dict.print.back}
          </Link>
          <p className="text-xs text-dnd-ink/70">
            {dict.print.hint}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {[
            { label: dict.print.tempPicture, image: picture },
            { label: dict.print.tempEmblem, image: emblem },
          ].map(({ label, image }) => (
            <span key={label} className="flex items-center gap-2">
              <FileButton secondary onFile={image.set}>
                {label}
              </FileButton>
              {image.url && (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={image.url} alt="" className="h-10 w-10 object-contain border border-dnd-gold" />
                  <button type="button" className="button-link" onClick={image.clear}>
                    {dict.print.tempClear}
                  </button>
                </>
              )}
            </span>
          ))}
          <p className="text-xs text-dnd-ink/70 basis-full">{dict.print.tempHint}</p>
        </div>
      </div>
      <div className="overflow-x-auto print:overflow-visible">
        <PrintSheet {...sheet} dict={dict} picture={picture.url} emblem={emblem.url} />
      </div>
    </>
  );
};

/** An image picked from disk, shown through an object URL that's freed when replaced or left */
const useLocalImage = () => {
  const [url, setUrl] = useState<string | null>(null);
  useEffect(() => () => {
    if (url) URL.revokeObjectURL(url);
  }, [url]);
  return {
    url,
    set: (file: File) => setUrl(URL.createObjectURL(file)),
    clear: () => setUrl(null),
  };
};

export default PrintSheetPage;
