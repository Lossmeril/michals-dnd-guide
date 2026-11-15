interface MainBoxProps {
  children: React.ReactNode;
}

const MainBox: React.FC<MainBoxProps> = ({ children }) => {
  return (
    <div className="w-full max-w-7xl mx-auto min-h-screen px-4 py-6 sm:p-8 lg:p-10 print:p-0 print:min-h-0">
      <main className="w-full flex-1 lg:p-10 xl:p-20 print:p-0 text-left rounded-4xl">
        {children}
      </main>
    </div>
  );
};

export default MainBox;
