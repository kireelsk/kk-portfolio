"use client";

import { useState } from "react";

export function RowsHelper() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {visible && (
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
      )}

      <button
        type="button"
        aria-label={visible ? "Hide rows" : "Show rows"}
        aria-pressed={visible}
        onClick={() => setVisible((current) => !current)}
        className="fixed bottom-4 right-17 z-101 flex size-11 items-center justify-center rounded-full bg-foreground text-background shadow-lg transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 md:bottom-6 md:right-19"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="size-5"
        >
          <rect x="3" y="3" width="18" height="18" rx="1" />
          <path d="M3 9h18M3 15h18" />
        </svg>
      </button>
    </>
  );
}
