"use client";

// Prints only the closest element marked data-printable, e.g. one stat block.
// The element is copied into #print-root, and the print styles in
// globals.scss hide everything else while it prints.

import { FaPrint } from "react-icons/fa6";
import IconButton from "./iconButton";

const printOnly = (target: Element) => {
  const root = document.createElement("div");
  root.id = "print-root";
  root.appendChild(target.cloneNode(true));
  document.body.appendChild(root);
  document.body.classList.add("print-one");

  const done = () => {
    root.remove();
    document.body.classList.remove("print-one");
    window.removeEventListener("afterprint", done);
  };
  window.addEventListener("afterprint", done);
  window.print();
};

const PrintButton: React.FC<{ label?: string; className?: string }> = ({
  label = "Print",
  className,
}) => (
  <IconButton
    label={label}
    className={className}
    onClick={(e) => {
      const target = e.currentTarget.closest("[data-printable]");
      if (target) printOnly(target);
      else window.print();
    }}
  >
    <FaPrint />
  </IconButton>
);

export default PrintButton;
