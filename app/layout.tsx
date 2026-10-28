import type { Metadata } from "next";
import { Libre_Baskerville, Merriweather } from "next/font/google";

import "./globals.scss";
import Navbar from "@/components/navbar";
import MainBox from "@/components/layout/mainBox";
import Footer from "@/components/layout/footer";
import { Toaster } from "sonner";
import { LangProvider } from "@/lib/i18n/client";
import { getLang } from "@/lib/i18n/server";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const lang = await getLang();
  return (
    <html
      lang={lang}
      className={`h-full antialiased scroll-smooth ${libreBaskerville.variable} ${merriweather.variable}`}
    >
      <body className="min-h-full flex flex-col">
        {/* Toasts look like story boxes; styles: .story-toast in globals.scss */}
        <Toaster
          gap={36}
          toastOptions={{
            unstyled: true,
            classNames: {
              toast: "story-toast",
              error: "story-toast-error",
              content: "flex flex-1 flex-col gap-0.5",
              title: "libre italic",
              icon: "shrink-0",
            },
          }}
        />
        <LangProvider lang={lang}>
          <Navbar />
          <MainBox>{children}</MainBox>
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
