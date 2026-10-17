import { SiteLogo } from "./SiteLogo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-background py-4 lg:hidden">
      <SiteLogo />

      <details className="relative">
        <summary className="cursor-pointer list-none">Menu</summary>

        <nav className="absolute right-0 top-full mt-4 bg-background p-4"></nav>
      </details>
    </header>
  );
}
