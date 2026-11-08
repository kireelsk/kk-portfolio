import type { WebsiteConfig } from "@/lib/website";

import Link from "next/link";

type NavigationProps = {
  navigation: WebsiteConfig["navigation"];
  className?: string;
  listClassName?: string;
  onNavigate?: () => void;
};

export function Navbar({ navigation, className, onNavigate }: NavigationProps) {
  return (
    <nav aria-label="Main navigation" className={className}>
      <ul className="grid justify-items-center gap-10 lg:grid-flow-col lg:justify-between lg:gap-0">
        {navigation.map((item) => (
          <li key={item.id}>
            <Link href={item.href} onClick={onNavigate} className="link">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
