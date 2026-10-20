"use client";

import { useState } from "react";

export function GridOverlay() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {visible && (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-100"
        >
          <div className="site-container h-full">
            <div className="content-grid h-full">
              {Array.from({ length: 12 }, (_, index) => (
                <div
                  key={index}
                  className={[
                    "border-x border-fuchsia-600/40 bg-fuchsia-500/10",
                    index >= 8
                      ? "hidden lg:block"
                      : index >= 4
                        ? "hidden md:block"
                        : "",
                  ].join(" ")}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        aria-label={visible ? "Hide grid" : "Show grid"}
        aria-pressed={visible}
        onClick={() => setVisible((current) => !current)}
        className="fixed bottom-4 right-4 z-101 flex size-11 items-center justify-center rounded-full bg-foreground text-background shadow-lg transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 md:bottom-6 md:right-6"
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
          <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
        </svg>
      </button>
    </>
  );
}
