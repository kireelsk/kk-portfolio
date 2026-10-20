type BurgerProps = {
  open: boolean;
  onClick: () => void;
};

export function Burger({ open, onClick }: BurgerProps) {
  const lineStyle = {
    transformBox: "fill-box" as const,
    transformOrigin: "center",
  };

  return (
    <button
      type="button"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-controls="mobile-navigation"
      aria-expanded={open}
      onClick={onClick}
      className="relative flex size-6 cursor-pointer items-center justify-center before:absolute before:-inset-4 before:content-['']"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="size-6"
      >
        <path
          d="M1 5H23"
          style={{
            ...lineStyle,
            transform: open ? "translateY(7px) rotate(-45deg)" : "none",
          }}
          className="transition-transform duration-250 ease-in-out motion-reduce:transition-none"
        />

        <path
          d="M1 12H23"
          style={{
            ...lineStyle,
            transform: open ? "scaleX(0)" : "scaleX(1)",
          }}
          className="transition-transform duration-250 ease-in-out motion-reduce:transition-none"
        />

        <path
          d="M1 19H23"
          style={{
            ...lineStyle,
            transform: open ? "translateY(-7px) rotate(45deg)" : "none",
          }}
          className="transition-transform duration-250 ease-in-out motion-reduce:transition-none"
        />
      </svg>
    </button>
  );
}
