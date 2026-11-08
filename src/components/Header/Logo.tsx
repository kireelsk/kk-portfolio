import Link from "next/link";

export function Logo({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={`link font-semibold font-heading ${className ?? ""}`}
    >
      {name}
    </Link>
  );
}
