import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { Navbar } from "./Navbar";

export default function Header({ name }: { name: string }) {
  return (
    <header className="site-container fixed inset-x-0 top-0 z-50 bg-background">
      <div className="content-grid h-14 items-center lg:h-16">
        <div className="col-span-2">
          <Logo name={name} />
        </div>

        <div className="col-span-1 col-start-4 md:col-start-8 flex justify-end lg:hidden">
          <Menu />
        </div>

        <div className="hidden lg:block col-span-6 col-start-3 xl:col-span-6 xl:col-start-4">
          <Navbar className="grid grid-flow-col justify-between" />
        </div>
      </div>
    </header>
  );
}
