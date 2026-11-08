import type { WebsiteConfig } from "@/lib/website";

import { Section } from "../Section";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { Navbar } from "./Navbar";

export default function Header({
  name,
  navigation,
}: Pick<WebsiteConfig, "name" | "navigation">) {
  return (
    <Section
      as="header"
      className="fixed inset-x-0 top-0 z-50 h-14 items-center bg-background lg:h-16"
    >
      <Logo name={name} className="col-span-2" />

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
