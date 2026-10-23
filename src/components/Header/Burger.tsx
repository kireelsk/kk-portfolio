type BurgerProps = {
  open: boolean;
  onClick: () => void;
};

export function Burger({ open, onClick }: BurgerProps) {
  const lineStyle = {
    transformBox: "fill-box" as const,
    transformOrigin: "center",
  };

  // const outerLine = `transition-transform duration-160 ease-[cubic-bezier(0.42,0,0.58,1)] motion-reduce:transition-none ${
  //   open ? "delay-0" : "delay-260"
  // }`;

  // const centerLine = `transition-transform duration-200 ease-[cubic-bezier(0.42,0,0.58,1.2)] motion-reduce:transition-none ${
  //   open ? "delay-0" : "delay-220"
  // }`;

  // const allLines = `size-6.5 transition-transform duration-360 ease-[cubic-bezier(0.42,0,0.58,1.12)] motion-reduce:transition-none ${
  //   open ? "rotate-135 delay-180" : "rotate-0 delay-0"
  // }`;

  const outerLine = `transition-transform duration-180 ease-[cubic-bezier(0.42,0,0.58,1)] motion-reduce:transition-none ${
    open ? "delay-0" : "delay-300"
  }`;

  const centerLine = `transition-transform duration-200 ease-[cubic-bezier(0.42,0,0.58,1.2)] motion-reduce:transition-none ${
    open ? "delay-0" : "delay-300"
  }`;

  const allLines = `size-6.5 transition-transform duration-300 ease-[cubic-bezier(0.42,0,0.58,1.12)] motion-reduce:transition-none ${
    open ? "rotate-135 delay-200" : "rotate-0 delay-0"
  }`;

  return (
    <button
      type="button"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-controls="mobile-navigation"
      aria-expanded={open}
      onClick={onClick}
      className="relative flex size-6.5 cursor-pointer items-center justify-center before:absolute before:-inset-4 before:content-['']"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 26 26"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="butt"
        className={allLines}
      >
        <path
          d="M1 4H26"
          style={{
            ...lineStyle,
            transform: open ? "translateY(8px)" : "none",
          }}
          className={outerLine}
        />

        <path
          d="M1 12H26"
          style={{
            ...lineStyle,
            transform: open ? "rotate(90deg)" : "none",
          }}
          className={centerLine}
        />

        <path
          d="M1 20H26"
          style={{
            ...lineStyle,
            transform: open ? "translateY(-8px)" : "none",
          }}
          className={outerLine}
        />
      </svg>
    </button>
  );
}
