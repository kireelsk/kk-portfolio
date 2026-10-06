import Link from "next/link";

export default function Header() {
  return (
    <header className="p-10">
      <Link href="/" className="text-xl hover:underline">
        Logo
      </Link>
    </header>
  );
}
