import type { Metadata } from "next";
import { Libre_Baskerville, Merriweather } from "next/font/google";

import "./globals.scss";
import Navbar from "@/components/navbar";
import MainBox from "@/components/layout/mainBox";
import Footer from "@/components/layout/footer";
import { Toaster } from "sonner";

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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
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
        <Navbar />
        <MainBox>{children}</MainBox>
        <Footer />
      </body>
    </html>
  );
}
