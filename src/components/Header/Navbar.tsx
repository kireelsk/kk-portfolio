import type { WebsiteConfig } from "@/lib/website";

import Link from "next/link";

type NavigationProps = {
  navigation: WebsiteConfig["navigation"];
  className?: string;
  onNavigate?: () => void;
};

export function Navbar({ navigation, className, onNavigate }: NavigationProps) {
  return (
    <nav aria-label="Main navigation">
      <ul className={className}>
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
