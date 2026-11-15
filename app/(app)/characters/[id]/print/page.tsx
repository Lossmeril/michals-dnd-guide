"use client";

import Link from "next/link";
import { use } from "react";
import { FaPrint } from "react-icons/fa6";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { SkeletonCard } from "@/components/ui/card";
import { useDict } from "@/lib/i18n/client";
import { useCharacterSheet } from "../useCharacterSheet";
import PrintSheet from "./printSheet";

/** The character sheet as A4 pages, ready to print */
const PrintSheetPage = ({ params }: PageProps<"/characters/[id]/print">) => {
  const { loading, sheet } = useCharacterSheet(Number(use(params).id));
  const dict = useDict();

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
      </div>
      <div className="overflow-x-auto print:overflow-visible">
        <PrintSheet {...sheet} dict={dict} />
      </div>
    </>
  );
};

export default PrintSheetPage;
