"use client";

import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";

export function Menu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <Burger open={open} onClick={() => setOpen(!open)} />
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-controls="mobile-navigation"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex size-11 items-center justify-center"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="size-6"
        >
          {open ? (
            <path d="M5 5 19 19M19 5 5 19" />
          ) : (
            <path d="M4 8h16M4 16h16" />
          )}
        </svg>
      </button>

      <div
        id="mobile-navigation"
        aria-hidden={!open}
        inert={!open}
        className="pointer-events-none absolute inset-x-0 top-full overflow-hidden lg:hidden"
      >
        <div
          className={`site-container pointer-events-auto border-b border-foreground/10 bg-background py-8 transition-transform duration-300 ease-out motion-reduce:transition-none ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Navbar
            className="flex flex-col items-start gap-6"
            onNavigate={() => setOpen(false)}
          />
        </div>
      </div>
    </>
  );
}
