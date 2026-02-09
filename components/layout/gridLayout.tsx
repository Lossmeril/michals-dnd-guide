import { PropsWithChildren } from "react";
import clsx from "clsx";

export const Container = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return <div className={clsx("mx-auto w-full", className)}>{children}</div>;
};

const globalGridSettings =
  "px-16 md:px-32 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-4 items-center";

export const Grid = ({
  gridSettings = globalGridSettings,
  children,
  className,
}: PropsWithChildren<{ className?: string; gridSettings?: string }>) => {
  return <div className={clsx("", gridSettings, className)}>{children}</div>;
};

export const PreviewGrid = ({ gridSettings = globalGridSettings }) => {
  const twelve = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <Grid
      gridSettings={gridSettings}
      className="fixed top-0 left-0 pointer-events-none z-10 w-screen h-screen"
    >
      {twelve.map((num) => (
        <div
          key={num}
          className="bg-red-500/50 h-screen w-full opacity-5"
        ></div>
      ))}
    </Grid>
  );
};
