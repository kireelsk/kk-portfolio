import { SiteLogo } from "./SiteLogo";

export default function Sidebar() {
  return (
    <aside className="hidden self-start lg:sticky lg:top-6 lg:row-span-2 lg:block">
      <SiteLogo />
    </aside>
  );
}
