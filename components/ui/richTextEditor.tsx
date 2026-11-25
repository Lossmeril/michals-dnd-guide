"use client";

// A small WYSIWYG editor that reads and writes Markdown. Render the result
// with MarkdownText.

import Image from "@tiptap/extension-image";
import Placeholder from "@tiptap/extension-placeholder";
import { Markdown } from "@tiptap/markdown";
import { type Editor, EditorContent, useEditor, useEditorState } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";
import {
  FaBold,
  FaImage,
  FaItalic,
  FaLink,
  FaListOl,
  FaListUl,
  FaPaperclip,
  FaQuoteLeft,
  FaStrikethrough,
} from "react-icons/fa6";
import { LuHeading } from "react-icons/lu";
import { twMerge } from "tailwind-merge";
import FileButton from "./fileButton";
import { useDict } from "@/lib/i18n/client";

interface RichTextEditorProps {
  /** Markdown to start with; remount (change `key`) to load other text */
  initial?: string;
  onChange: (markdown: string) => void;
  placeholder?: string;
  disabled?: boolean;
  /** Uploads a picked image and returns its URL; omit to hide the button */
  onUploadImage?: (file: File) => Promise<string | null>;
  /** Uploads any picked file and returns its URL; the post gets a link to it */
  onUploadFile?: (file: File) => Promise<string | null>;
  className?: string;
}

const ToolButton: React.FC<{
  label: string;
  active?: boolean;
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}> = ({ label, active, disabled, onClick, children }) => (
  <button
    type="button"
    title={label}
    aria-label={label}
    aria-pressed={active}
    disabled={disabled}
    // Keep the editor's selection when clicking a button
    onMouseDown={(e) => e.preventDefault()}
    onClick={onClick}
    className={twMerge(
      "w-8 h-8 p-0 inline-flex items-center justify-center rounded text-xs",
      active
        ? "bg-dnd-red text-white"
        : "bg-transparent text-dnd-ink hover:bg-dnd-gold/30",
    )}
  >
    {children}
  </button>
);

const Toolbar: React.FC<{
  editor: Editor;
  disabled?: boolean;
  onUploadImage?: RichTextEditorProps["onUploadImage"];
  onUploadFile?: RichTextEditorProps["onUploadFile"];
}> = ({ editor, disabled, onUploadImage, onUploadFile }) => {
  const [uploading, setUploading] = useState(false);
  const [uploadingFile, setUploadingFile] = useState(false);
  // Re-render the buttons when the selection's marks change
  const active = useEditorState({
    editor,
    selector: ({ editor: e }) => ({
      bold: e.isActive("bold"),
      italic: e.isActive("italic"),
      strike: e.isActive("strike"),
      heading: e.isActive("heading"),
      bullet: e.isActive("bulletList"),
      ordered: e.isActive("orderedList"),
      quote: e.isActive("blockquote"),
      link: e.isActive("link"),
    }),
  });
  const t = useDict().ui;
  const chain = () => editor.chain().focus();

  const setLink = () => {
    if (active.link) {
      chain().unsetLink().run();
      return;
    }
    const url = window.prompt(t.linkAddress, "https://")?.trim();
    if (url) chain().extendMarkRange("link").setLink({ href: url }).run();
  };

  const tools = [
    { label: t.tools.bold, icon: <FaBold />, on: active.bold, run: () => chain().toggleBold().run() },
    { label: t.tools.italic, icon: <FaItalic />, on: active.italic, run: () => chain().toggleItalic().run() },
    { label: t.tools.strike, icon: <FaStrikethrough />, on: active.strike, run: () => chain().toggleStrike().run() },
    { label: t.tools.heading, icon: <LuHeading />, on: active.heading, run: () => chain().toggleHeading({ level: 3 }).run() },
    { label: t.tools.bullets, icon: <FaListUl />, on: active.bullet, run: () => chain().toggleBulletList().run() },
    { label: t.tools.numbers, icon: <FaListOl />, on: active.ordered, run: () => chain().toggleOrderedList().run() },
    { label: t.tools.quote, icon: <FaQuoteLeft />, on: active.quote, run: () => chain().toggleBlockquote().run() },
    { label: active.link ? t.tools.unlink : t.tools.link, icon: <FaLink />, on: active.link, run: setLink },
  ];

  return (
    <div className="flex flex-wrap items-center gap-1 px-2 py-1 border-b border-dnd-gold/60">
      {tools.map((tool) => (
        <ToolButton
          key={tool.label}
          label={tool.label}
          active={tool.on}
          disabled={disabled}
          onClick={tool.run}
        >
          {tool.icon}
        </ToolButton>
      ))}
      {onUploadImage && (
        <FileButton
          secondary
          disabled={disabled || uploading}
          className="ml-auto inline-flex items-center gap-1.5 text-xs px-2.5 py-1"
          onFile={async (file) => {
            setUploading(true);
            const url = await onUploadImage(file);
            setUploading(false);
            if (url) chain().setImage({ src: url, alt: "" }).run();
          }}
        >
          <FaImage /> {uploading ? t.uploading : t.picture}
        </FileButton>
      )}
      {onUploadFile && (
        <FileButton
          secondary
          accept="*/*"
          disabled={disabled || uploadingFile}
          className={twMerge(
            "inline-flex items-center gap-1.5 text-xs px-2.5 py-1",
            !onUploadImage && "ml-auto",
          )}
          onFile={async (file) => {
            setUploadingFile(true);
            const url = await onUploadFile(file);
            setUploadingFile(false);
            // Its own paragraph: a link named after the file
            if (url)
              chain()
                .insertContent([
                  {
                    type: "paragraph",
                    content: [
                      { type: "text", text: file.name, marks: [{ type: "link", attrs: { href: url } }] },
                    ],
                  },
                ])
                .run();
          }}
        >
          <FaPaperclip /> {uploadingFile ? t.uploading : t.file}
        </FileButton>
      )}
    </div>
  );
};

const RichTextEditor: React.FC<RichTextEditorProps> = ({
  initial = "",
  onChange,
  placeholder,
  disabled,
  onUploadImage,
  onUploadFile,
  className,
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        // Markdown has no underline; keep the editor to what it can save
        underline: false,
        heading: { levels: [3] },
        link: { openOnClick: false, autolink: true },
      }),
      Image.configure({ allowBase64: false }),
      Placeholder.configure({ placeholder }),
      Markdown,
    ],
    content: initial,
    contentType: "markdown",
    editable: !disabled,
    // Rendered in the browser only; avoids a hydration mismatch in Next
    immediatelyRender: false,
    editorProps: {
      attributes: { class: "rich-text min-h-24 px-3 py-2 outline-none" },
    },
    onUpdate: ({ editor: e }) => onChange(e.getMarkdown()),
  });

  return (
    <div
      className={twMerge(
        "bg-white/80 border border-gray-300 focus-within:ring-2 focus-within:ring-dnd-red focus-within:border-dnd-red",
        disabled && "opacity-60",
        className,
      )}
    >
      {editor ? (
        <>
          <Toolbar
            editor={editor}
            disabled={disabled}
            onUploadImage={onUploadImage}
            onUploadFile={onUploadFile}
          />
          <EditorContent editor={editor} />
        </>
      ) : (
        <div className="skeleton h-32" />
      )}
    </div>
  );
};

export default RichTextEditor;
