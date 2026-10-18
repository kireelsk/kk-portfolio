import Link from "next/link";

const navigation = [
  { label: "About", href: "/#about" },
  { label: "Best works", href: "/#best-works" },
  { label: "All projects", href: "/projects" },
  { label: "Contact me!", href: "/#contact" },
];

export function Navigation() {
  return (
    <nav aria-label="Main navigation">
      <ul className="flex flex-col gap-12">
        {navigation.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
