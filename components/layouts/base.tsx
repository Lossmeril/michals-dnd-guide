import { H1 } from "../ui/text";

interface AppPageLayoutProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}

export const AppPageLayout: React.FC<AppPageLayoutProps> = ({
  title,
  className = "",
  children,
}) => {
  return (
    <main className={`w-full min-h-screen px-20 py-10 ${className}`}>
      <H1>{title}</H1>
      {children}
    </main>
  );
};

interface PageLayoutProps {
  className?: string;
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  className = "",
  children,
}) => {
  return <main className={`max-w-5xl mx-auto ${className}`}>{children}</main>;
};
