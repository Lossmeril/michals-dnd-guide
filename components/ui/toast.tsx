"use client";

import React from "react";
import { toast as sonnerToast } from "sonner";
import DecorativeBorder from "./decorativeBorder";
import { BsX, BsXOctagonFill } from "react-icons/bs";

interface ToastProps {
  id: string | number;
  title: string;
  description: string;
  button?: {
    label: string;
    onClick: () => void;
  };
  mode: "info" | "success" | "error";
  icon?: React.ReactNode;
}

export function toast(toast: Omit<ToastProps, "id">) {
  return sonnerToast.custom((id) => (
    <Toast
      id={id}
      title={toast.title}
      description={toast.description}
      button={toast.button}
      mode={toast.mode}
      icon={toast.icon}
    />
  ));
}

/** A fully custom toast that still maintains the animations and interactions. */
function Toast(props: ToastProps) {
  const { title, description, button, icon, id } = props;

  const defaultStyles =
    "flex flex-col shadow-lg md:max-w-3xl items-start p-4 pr-10 font-serif text-dnd-ink border-y-2 border-dnd-ink relative";

  const typeStyles: Record<string, string> = {
    success: "bg-dnd-accent-green",
    info: "bg-dnd-accent-yellow",
    error: "bg-dnd-accent-red text-dnd-red-dark",
  };

  return (
    <div
      className={`${defaultStyles} ${typeStyles[props.mode] || typeStyles.info}`}
    >
      <DecorativeBorder />
      <div
        className="absolute right-2 top-2 cursor-pointer"
        aria-label="Close"
        onClick={() => {
          sonnerToast.dismiss(id);
        }}
      >
        <BsX className="text-lg" />
      </div>
      <div className="flex flex-1 items-center">
        <div className="w-full">
          {/* Title with an icon */}
          <div className="w-full flex flex-row gap-2 items-center">
            {icon && <div className="text-lg">{icon}</div>}
            <p className="text-base font-bold">{title}</p>
          </div>
          <p className="mt-1 text-xs opacity-75">{description}</p>
        </div>
      </div>
      <div className="ml-5 shrink-0 rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">
        {button && (
          <button
            className="rounded bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-600 hover:bg-indigo-100"
            onClick={() => {
              button.onClick();
              sonnerToast.dismiss(id);
            }}
          >
            {button.label}
          </button>
        )}
      </div>
    </div>
  );
}

// Helper function to throw an error toast with a consistent format
export function throwErrorToast(error: unknown, title = "An error occurred") {
  const message =
    error instanceof Error
      ? error.message
      : typeof error === "string"
        ? error
        : "An unknown error occurred.";

  toast({
    title: title,
    description: message ?? "An unknown error occurred during image upload.",
    mode: "error",
    icon: <BsXOctagonFill />,
  });
}
