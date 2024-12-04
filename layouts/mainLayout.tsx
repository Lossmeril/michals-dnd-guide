import DesktopNavbar from "@/components/navbars/desktopNavbar";
import Link from "next/link";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="w-4/5 mx-auto">
      <header className="w-full flex flex-col justify-center h-28 py-5 border-b border-slate-700">
        <Link href="/">
          <h1 className="text-4xl font-bold">Michal&apos;s DnD Guide</h1>
        </Link>
      </header>
      <div className="flex flex-row flex-nowrap">
        <aside className="w-1/6">
          <DesktopNavbar />
        </aside>
        <main className="w-5/6 py-20">{children}</main>
      </div>
      <footer className="w-full flex flex-col justify-center h-10 py-10 border-t border-slate-700 text-center">
        <p>Made with lots of failed rolls</p>
      </footer>
    </div>
  );
};

export default MainLayout;
