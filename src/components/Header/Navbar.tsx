import Link from "next/link";

const navigation = [
  { label: "About", href: "/#about" },
  { label: "Best works", href: "/#best-works" },
  { label: "All projects", href: "/projects" },
  { label: "Contact me!", href: "/#contact" },
];

type NavigationProps = {
  className?: string;
  onNavigate?: () => void;
};

export function Navbar({ className, onNavigate }: NavigationProps) {
  return (
    <nav aria-label="Main navigation">
      <ul className={className}>
        {navigation.map((item) => (
          <li key={item.href}>
            <Link href={item.href} onClick={onNavigate}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
