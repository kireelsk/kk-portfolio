import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import { getWebsiteConfig } from "@/lib/website";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { GridHelper } from "@/components/GridHelper";
import { RowsHelper } from "@/components/RowsHelper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin", "cyrillic"],
});

const website = getWebsiteConfig();

export const metadata: Metadata = {
  title: website.metadata.title,
  description: website.metadata.description,
  applicationName: website.name,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-dvh flex-col">
        <Header />
        {children}
        <Footer />
        {process.env.NODE_ENV === "development" && (
          <>
            <GridHelper />
            <RowsHelper />
          </>
        )}
      </body>
    </html>
  );
}
