import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Designer portfolio",
  description: "Visual identities, motion and digital experiences",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="grid min-h-screen grid-cols-1 grid-rows-[auto_1fr_auto] gap-x-6 p-6 lg:grid-cols-[7rem_minmax(0,1fr)] lg:grid-rows-[1fr_auto]">
        <Header />
        <Sidebar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
