export function Rows() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-100 [--row-size:1.5rem] sm:[--row-size:1.75rem]"
      style={{
        backgroundImage: `repeating-linear-gradient(
          to bottom,
          rgb(249 115 22 / 50%) 0 1px,
          transparent 1px var(--row-size)
        )`,
      }}
    />
  );
}
