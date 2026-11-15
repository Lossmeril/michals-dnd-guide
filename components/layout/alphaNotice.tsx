"use client";

import Link from "next/link";
import { useState } from "react";
import Modal from "@/components/ui/modal";
import { useDict } from "@/lib/i18n/client";
import { dismissAlphaNotice } from "@/lib/alphaNotice";

/** Shown once per account, on the first visit after logging in */
const AlphaNotice = () => {
  const [open, setOpen] = useState(true);
  const t = useDict().alpha;
  const close = () => {
    setOpen(false);
    void dismissAlphaNotice();
  };

  return (
    <Modal isOpen={open} onClose={close} title={t.title} className="w-[min(40rem,calc(100vw-2rem))]">
      <div className="flex flex-col gap-4 text-sm leading-relaxed">
        {/* Odd segments are bold */}
        {t.paragraphs.map((segments, i) => (
          <p key={i}>
            {segments.map((text, j) => (j % 2 ? <strong key={j}>{text}</strong> : text))}
          </p>
        ))}
        <p>
          <strong>{t.noAi}</strong>
          {t.images}
          <a href="mailto:hello@lossmeril.art" className="link">
            hello@lossmeril.art
          </a>
          {t.takenDown}
        </p>
        <p>
          {t.more[0]}
          <Link href="/credits" className="link" onClick={close}>
            {t.more[1]}
          </Link>
          {t.more[2]}
        </p>
        <button type="button" className="self-end" onClick={close}>
          {t.understood}
        </button>
      </div>
    </Modal>
  );
};

export default AlphaNotice;
