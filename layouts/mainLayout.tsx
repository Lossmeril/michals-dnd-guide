import Divider from "@/components/divider";
import DesktopNavbar from "@/components/navbars/desktopNavbar";
import MobileNavbar from "@/components/navbars/mobileNavbar";
import Link from "next/link";
import Image from "next/image";
import { Provider } from "react-wrap-balancer";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="w-4/5 mx-auto">
      <header className="w-full flex flex-row justify-between items-center h-28 mt-5 border-b border-slate-700">
        <Link href="/">
          <h1 className="text-4xl font-bold">
            Michal&apos;s
            <br className="inline lg:hidden" /> D&D Guide
          </h1>
        </Link>
        <div className="relative h-full aspect-square">
          <Image
            src="/img/neidhart.png"
            alt="Neidhart"
            fill
            className="object-contain"
          />
        </div>
      </header>
      <div className="flex flex-col lg:flex-row flex-nowrap">
        <div className="w-full flex lg:hidden mt-5 justify-center">
          <MobileNavbar />
          <Divider />
        </div>
        <aside className="hidden lg:block w-1/6">
          <DesktopNavbar />
        </aside>
        <main className="w-full lg:w-5/6 py-10">
          <Provider>{children}</Provider>
        </main>
      </div>
      <footer className="w-full flex flex-col justify-center py-4 border-t border-slate-700 text-center">
        <p>
          Made with <strong>React</strong>, <strong>Next.js</strong>,{" "}
          <strong>Tailwind</strong> and lots of failed rolls
        </p>
        <p className="text-xs mt-2 w-1/2 mx-auto opacity-50">
          All the images that surpass my vastly inferior artistic skills have
          been stolen from the Internet and the rights belong to their rightful
          artists. Majority of them are from{" "}
          <strong>Gwent the Card Game</strong>,{" "}
          <strong>Dungeons & Dragons</strong>, and{" "}
          <strong>ArtStation fantasy artists</strong>.
        </p>
      </footer>
    </div>
  );
};

export default MainLayout;
