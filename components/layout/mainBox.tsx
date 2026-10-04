interface MainBoxProps {
  children: React.ReactNode;
}

const MainBox: React.FC<MainBoxProps> = ({ children }) => {
  return (
    <div className="w-full max-w-7xl mx-auto min-h-screen p-10">
      <main className="w-full flex-1 p-20 text-left rounded-4xl">
        {children}
      </main>
    </div>
  );
};

export default MainBox;
