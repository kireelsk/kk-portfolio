import type { ReactNode } from "react";
import Link from "next/link";

import type { WebsiteConfig } from "@/lib/website";

import { Section } from "../Section";
import { Menu } from "./Menu";
import { Navbar } from "./Navbar";

export default function Header({
  name,
  navigation,
  logo,
}: Pick<WebsiteConfig, "name" | "navigation"> & {
  logo?: ReactNode;
}) {
  return (
    <Section
      as="header"
      className="fixed inset-x-0 top-0 z-50 h-14 items-center bg-background lg:h-16"
    >
      <div className="col-span-2">
        {logo ?? (
          <Link href="/" className="link font-heading font-semibold">
            {name}
          </Link>
        )}
      </div>

      <Menu
        navigation={navigation}
        className="col-span-1 col-start-4 justify-self-end md:col-start-8 lg:hidden"
      />

      <Navbar
        navigation={navigation}
        className="hidden lg:col-span-8 lg:col-start-4 lg:block xl:col-span-7 xl:col-start-5"
      />
    </Section>
  );
}
