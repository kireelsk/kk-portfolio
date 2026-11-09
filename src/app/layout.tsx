import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import { getWebsiteConfig } from "@/lib/website";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Logo } from "@/components/Logo";

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
  title: {
    default: `${website.name} | ${website.metadata.title}`,
    template: `${website.name} | %s`,
  },
  description: website.metadata.description,
  applicationName: website.name,
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const Devtool =
    process.env.NODE_ENV === "development"
      ? (await import("@/components/Devtool")).Devtool
      : null;

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-dvh flex-col">
        <Header
          name={website.name}
          navigation={website.navigation}
          logo={<Logo />}
        />

        {Devtool ? <Devtool>{children}</Devtool> : children}

        <Footer name={website.name} />
      </body>
    </html>
  );
}
