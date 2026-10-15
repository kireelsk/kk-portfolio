import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-background px-6 py-4 lg:hidden">
      <Link href="/" className="text-xl">
        Logo
      </Link>

      <details className="relative">
        <summary className="cursor-pointer list-none">Menu</summary>

        <nav className="absolute right-0 top-full mt-4 bg-background p-4">
          <Link href="/">Home</Link>
        </nav>
      </details>
    </header>
  );
}
