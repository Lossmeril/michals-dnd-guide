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
      <h1 className="text-3xl mb-10 font-serif text-red-900">{title}</h1>
      {children}
    </main>
  );
};
