import Link from "next/link";

export function Logo({ name }: { name: string }) {
  return (
    <Link href="/" className="font-semibold font-heading">
      {name}
    </Link>
  );
}
