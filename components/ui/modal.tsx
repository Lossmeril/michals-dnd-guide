"use client";

import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** Shown in the sticky top bar next to the close button */
  title?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

/** A native <dialog>: Escape closes it, focus stays inside, modals can stack */
const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  className,
  children,
}) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      // Only a click on the backdrop lands on the dialog element itself
      onClick={(e) => e.target === ref.current && onClose()}
      className={twMerge(
        "m-auto p-0 w-[min(64rem,calc(100vw-2rem))] max-h-[90vh] bg-dnd-bg text-dnd-ink rounded-lg border border-dnd-red-dark shadow-2xl backdrop:bg-black/60",
        className,
      )}
    >
      {isOpen && (
        <>
          <div className="sticky top-0 z-20 flex items-center justify-between gap-4 px-6 py-3 bg-dnd-bg/95 border-b border-dnd-gold">
            <div className="libre font-bold text-dnd-red-dark text-lg min-w-0 truncate">
              {title}
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="w-8 h-8 p-0 shrink-0 text-xl leading-none"
            >
              &times;
            </button>
          </div>
          <div className="p-6">{children}</div>
        </>
      )}
    </dialog>
  );
};

export default Modal;
