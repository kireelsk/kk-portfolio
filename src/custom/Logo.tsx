import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" aria-label="kk-portfolio">
      <svg
        width="98"
        height="30"
        viewBox="0 0 98 30"
        fill="none"
        aria-hidden="true"
      >
        <text
          x="48"
          y="22"
          textAnchor="middle"
          fill="currentColor"
          fontFamily="var(--font-inter-tight), sans-serif"
          fontWeight="600"
          fontSize="20"
          letterSpacing="-0.8"
        >
          kk-portfolio
        </text>
      </svg>
    </Link>
  );
}
