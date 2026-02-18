import { PropsWithChildren } from "react";
import clsx from "clsx";

type LayoutProps = PropsWithChildren<{
  className?: string;
}>;

export const Container = ({ children, className }: LayoutProps) => {
  return <div className={clsx("app-container", className)}>{children}</div>;
};

export const Grid = ({ children, className }: LayoutProps) => {
  return <div className={clsx("app-grid", className)}>{children}</div>;
};

export const GridContent = ({ children, className }: LayoutProps) => {
  return <div className={clsx("app-content", className)}>{children}</div>;
};

export const GridContentNarrow = ({ children, className }: LayoutProps) => {
  return (
    <div className={clsx("app-content-narrow", className)}>{children}</div>
  );
};

export const GridContentFull = ({ children, className }: LayoutProps) => {
  return <div className={clsx("app-content-full", className)}>{children}</div>;
};
