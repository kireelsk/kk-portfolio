export function Rows() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-100 [--row-small:14px] [--row-large:56px] sm:[--row-small:16px] sm:[--row-large:64px]"
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            to bottom,
            rgb(249 115 22 / 30%) 0 1px,
            transparent 1px var(--row-large)
          ),
          repeating-linear-gradient(
            to bottom,
            rgb(249 115 22 / 12%) 0 1px,
            transparent 1px var(--row-small)
          )
        `,
      }}
    />
  );
}
