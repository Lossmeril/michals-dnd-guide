"use client";

import { twMerge } from "tailwind-merge";

/** A button that opens the file picker; the same file can be picked twice */
const FileButton: React.FC<{
  onFile: (file: File) => void;
  accept?: string;
  disabled?: boolean;
  /** Outlined instead of filled */
  secondary?: boolean;
  className?: string;
  children: React.ReactNode;
}> = ({
  onFile,
  accept = "image/*",
  disabled,
  secondary,
  className,
  children,
}) => (
  <label
    className={twMerge(
      "button cursor-pointer",
      secondary && "button-secondary",
      disabled && "opacity-50 cursor-not-allowed",
      className,
    )}
  >
    {children}
    <input
      type="file"
      accept={accept}
      hidden
      disabled={disabled}
      onChange={(e) => {
        const file = e.target.files?.[0];
        e.target.value = "";
        if (file) onFile(file);
      }}
    />
  </label>
);

export default FileButton;
