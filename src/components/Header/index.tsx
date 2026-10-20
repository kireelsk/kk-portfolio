import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { Navbar } from "./Navbar";

export default function Header() {
  return (
    <header className="site-container sticky top-0 z-50 bg-background">
      <div className="content-grid h-14 items-center lg:h-16">
        <div className="col-span-3 md:col-span-7">
          <Logo />
        </div>

        <div className="col-span-1 flex justify-end lg:hidden">
          <Menu />
        </div>

        <div className="col-span-5 col-start-8 hidden lg:block">
          <Navbar className="flex items-center justify-between gap-3" />
        </div>
      </div>
    </header>
  );
}
