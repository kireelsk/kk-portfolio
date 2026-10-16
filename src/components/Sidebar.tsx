import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="hidden w-28 self-start lg:sticky lg:top-6 lg:row-span-2 lg:block">
      <Link href="/" className="text-xl hover:underline">
        Logo
      </Link>
    </aside>
  );
}
