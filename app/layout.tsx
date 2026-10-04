import type { Metadata } from "next";
import { Libre_Baskerville, Merriweather } from "next/font/google";

import "./globals.scss";
import Navbar from "@/components/navbar";
import MainBox from "@/components/layout/mainBox";
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
        <Toaster />
        <Navbar />
        <MainBox>{children}</MainBox>
      </body>
    </html>
  );
}
