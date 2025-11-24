"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { Resource } from "@/types/resources";

import Image from "next/image";
import Balancer from "react-wrap-balancer";

/* -----------------------------------------
 *  TEXT COMPONENT
 * ----------------------------------------*/

interface TextProps {
  children: ReactNode;
}

const Text: React.FC<TextProps> = ({ children }) => {
  return (
    <div className="mb-3">
      <Balancer>{children}</Balancer>
    </div>
  );
};

export default Text;

/* -----------------------------------------
 *  HEADINGS COMPONENTS
 * ----------------------------------------*/

interface HeadingProps {
  children: ReactNode;
  id?: string;
}

export const H2: React.FC<HeadingProps> = ({ children, id }) => {
  return (
    <h2 className="font-bold text-3xl mb-5" id={id}>
      {children}
    </h2>
  );
};

export const H3: React.FC<HeadingProps> = ({ children, id }) => {
  return (
    <h3 className="font-bold text-2xl mb-2 mt-8" id={id}>
      {children}
    </h3>
  );
};

export const H4: React.FC<HeadingProps> = ({ children, id }) => {
  return (
    <h4 className="text-lg font-bold leading-tight mb-2" id={id}>
      {children}
    </h4>
  );
};

export const H5: React.FC<HeadingProps> = ({ children, id }) => {
  return (
    <h5 className="font-bold mb-2" id={id}>
      {children}
    </h5>
  );
};

/* -----------------------------------------
 *  STAT COMPONENT
 * ----------------------------------------*/

interface StatProps {
  type: Resource; // "Body" | "Soul" | "Charisma"
  children?: ReactNode; // optional override label
}

export const Stat: React.FC<StatProps> = ({ type, children }) => {
  const label = children ?? type;

  return (
    <strong style={{ color: `var(--${type.toLowerCase()})` }}>{label}</strong>
  );
};

/* -----------------------------------------
 *  RULE LINK (WIKI-STYLE INTERNAL LINK)
 * ----------------------------------------*/

interface RuleLinkProps {
  href: string;
  children: ReactNode;
}

export const RuleLink: React.FC<RuleLinkProps> = ({ href, children }) => {
  return (
    <Link href={href} className="inline-block">
      <span className="text-blue-200 hover:text-blue-100 bg-slate-400/20 px-1 pb-1 rounded underline decoration-dotted">
        {children}
      </span>
    </Link>
  );
};

/* -----------------------------------------
 *  WIKI-LINK WITH LIVE PREVIEW
 * ----------------------------------------*/

interface WikiLinkProps {
  href: string; // example: "/rules/danger-level"
  children: ReactNode;
}

export const WikiLink: React.FC<WikiLinkProps> = ({ href, children }) => {
  const [preview, setPreview] = useState<{
    title: string;
    excerpt: string;
    imageSrc?: string;
  } | null>(null);

  const [loading, setLoading] = useState(false);

  const slug = href.replace(/^\/+/, "").split("/").pop() ?? "";

  const handleEnter = async () => {
    setLoading(true);

    try {
      const res = await fetch(`/api/preview?slug=${slug}`);

      if (!res.ok) {
        setPreview(null);
        return;
      }

      const data: { title: string; excerpt: string; imageSrc?: string } =
        await res.json();
      setPreview(data);
    } finally {
      setLoading(false);
    }
  };

  const handleLeave = () => {
    setPreview(null);
  };

  return (
    <span className="relative inline-block">
      <Link
        href={href}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="inline-block"
      >
        <span className="text-blue-200 hover:text-blue-100 bg-slate-400/20 px-1 pb-1 rounded underline decoration-dotted">
          {children}
        </span>
      </Link>

      {preview && (
        <div
          className="absolute flex flex-col left-0 top-8 w-80  z-20 bg-slate-700
                     border border-slate-700 rounded-lg shadow-lg text-xs overflow-hidden not-italic font-normal"
        >
          {preview.imageSrc && (
            <div className="h-32 w-full relative">
              <Image
                src={preview.imageSrc}
                alt={preview.title}
                fill
                className="object-cover object-center"
              />
            </div>
          )}
          <div className="relative px-3 pb-4 pt-2">
            <p className="block mb-1 text-blue-200 text-lg font-bold">
              {preview.title}
            </p>
            <p className="text-slate-300 leading-snug">{preview.excerpt}</p>
          </div>
        </div>
      )}

      {loading && !preview && (
        <div
          className="absolute left-0 top-6 w-80 p-3 z-20 bg-slate-900
                     border border-slate-700 rounded shadow-xl text-xs opacity-70 hidden"
        >
          Loading preview…
        </div>
      )}
    </span>
  );
};
