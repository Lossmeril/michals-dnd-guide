"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaArrowDown, FaArrowUp, FaPen, FaTrash } from "react-icons/fa6";
import { hrefOf, INDEX_SLUG, type NavChapter } from "@/lib/rulebookNav";
import { AdminHeader, panel, useAdminAction } from "../_components";
import {
  deleteRulebookChapter,
  deleteRulebookPage,
  moveRulebookChapter,
  moveRulebookPage,
  saveRulebookChapter,
} from "./actions";

const iconButton =
  "w-8 h-8 p-0 inline-flex items-center justify-center text-xs bg-transparent text-dnd-red border border-dnd-gold hover:bg-dnd-red/10 disabled:opacity-30 disabled:cursor-not-allowed";

/** Chapters and their pages: order, names, and links to each page's editor */
const RulebookManager: React.FC<{ nav: NavChapter[] }> = ({ nav }) => {
  const router = useRouter();
  const { pending, runAction } = useAdminAction();
  const [newChapter, setNewChapter] = useState("");

  const renameChapter = (chapter: NavChapter) => {
    const title = window.prompt("Chapter name", chapter.title)?.trim();
    if (title && title !== chapter.title) {
      runAction(() => saveRulebookChapter(chapter.id, title));
    }
  };

  return (
    <>
      <AdminHeader
        title="Rulebook pages"
        actions={
          <Link href="/rulebook" className="button-link">
            Open the rulebook →
          </Link>
        }
      />

      <div className="flex flex-col gap-6">
        {nav.map((chapter, ci) => (
          <section key={chapter.id} className={panel}>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <h2 className="libre font-bold text-xl text-dnd-red-dark mr-auto">
                {chapter.title}
              </h2>
              <button
                type="button"
                className={iconButton}
                title="Move chapter up"
                disabled={pending || ci === 0}
                onClick={() => runAction(() => moveRulebookChapter(chapter.id, -1))}
              >
                <FaArrowUp />
              </button>
              <button
                type="button"
                className={iconButton}
                title="Move chapter down"
                disabled={pending || ci === nav.length - 1}
                onClick={() => runAction(() => moveRulebookChapter(chapter.id, 1))}
              >
                <FaArrowDown />
              </button>
              <button
                type="button"
                className={iconButton}
                title="Rename chapter"
                disabled={pending}
                onClick={() => renameChapter(chapter)}
              >
                <FaPen />
              </button>
              <button
                type="button"
                className={iconButton}
                title="Delete chapter"
                disabled={pending || chapter.pages.length > 0}
                onClick={() =>
                  window.confirm(`Delete the chapter “${chapter.title}”?`) &&
                  runAction(() => deleteRulebookChapter(chapter.id), {
                    success: "Deleted",
                  })
                }
              >
                <FaTrash />
              </button>
            </div>

            <ul className="flex flex-col divide-y divide-dnd-gold/40">
              {chapter.pages.map((page, pi) => (
                <li key={page.id} className="flex flex-wrap items-center gap-2 py-2">
                  <Link
                    href={`/admin/rulebook/${page.id}`}
                    className="font-bold text-dnd-red hover:text-dnd-red-dark mr-auto"
                  >
                    {page.title}
                  </Link>
                  <Link
                    href={hrefOf(page.slug)}
                    className="text-xs text-dnd-ink/60 hover:text-dnd-red"
                  >
                    {hrefOf(page.slug)}
                  </Link>
                  <button
                    type="button"
                    className={iconButton}
                    title="Move page up"
                    disabled={pending || pi === 0}
                    onClick={() => runAction(() => moveRulebookPage(page.id, -1))}
                  >
                    <FaArrowUp />
                  </button>
                  <button
                    type="button"
                    className={iconButton}
                    title="Move page down"
                    disabled={pending || pi === chapter.pages.length - 1}
                    onClick={() => runAction(() => moveRulebookPage(page.id, 1))}
                  >
                    <FaArrowDown />
                  </button>
                  <button
                    type="button"
                    className={iconButton}
                    title="Delete page"
                    disabled={pending || page.slug === INDEX_SLUG}
                    onClick={() =>
                      window.confirm(`Delete the page “${page.title}” for good?`) &&
                      runAction(() => deleteRulebookPage(page.id), {
                        success: "Deleted",
                      })
                    }
                  >
                    <FaTrash />
                  </button>
                </li>
              ))}
            </ul>
            <Link
              href={`/admin/rulebook/new?chapter=${chapter.id}`}
              className="button-link text-sm mt-3"
            >
              Add a page →
            </Link>
          </section>
        ))}

        <form
          className={`${panel} flex flex-wrap items-end gap-3`}
          onSubmit={(e) => {
            e.preventDefault();
            const title = newChapter.trim();
            if (!title) return;
            runAction(() => saveRulebookChapter(null, title), {
              success: "Chapter added",
              then: () => {
                setNewChapter("");
                router.refresh();
              },
            });
          }}
        >
          <label className="flex-1 min-w-48">
            <span className="block text-sm font-bold mb-1">New chapter</span>
            <input
              value={newChapter}
              onChange={(e) => setNewChapter(e.target.value)}
              placeholder="e.g. Magic"
            />
          </label>
          <button type="submit" disabled={pending || !newChapter.trim()}>
            Add chapter
          </button>
        </form>
      </div>
    </>
  );
};

export default RulebookManager;
