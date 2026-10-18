import { SiteLogo } from "./SiteLogo";
import { Navigation } from "./Navigation";

export default function Sidebar() {
  return (
    <div className="hidden self-start lg:sticky lg:top-6 lg:row-span-2 lg:block">
      <SiteLogo />

      <div className="mt-28">
        <Navigation />
      </div>
    </div>
  );
}
