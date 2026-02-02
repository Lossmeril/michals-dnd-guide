interface AppPageLayoutProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}

// --------------------------------------------------------------
// LAYOUT FOR PAGES WITH APPLICATION TYPE BEHAVIOR AND NAVIGATION
// --------------------------------------------------------------

export const AppPageLayout: React.FC<AppPageLayoutProps> = ({
  title,
  className = "",
  children,
}) => {
  return (
    <main className={`w-full min-h-screen px-20 py-32 ${className}`}>
      <div className="book mb-8">
        <h1>{title}</h1>
      </div>
      {children}
    </main>
  );
};

export const AdminAppPageLayout: React.FC<AppPageLayoutProps> = ({
  title,
  className = "",
  children,
}) => {
  return (
    <main
      className={`w-full min-h-screen px-20 py-32 bg-charisma/30 relative ${className}`}
    >
      <div className="book">
        <h1>{title}</h1>
      </div>
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
  return (
    <main className={`max-w-5xl mx-auto py-32 ${className}`}>{children}</main>
  );
};
