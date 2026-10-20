"use client";

import { useEffect, useState } from "react";
import { Burger } from "./Burger";
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
      <Burger open={open} onClick={() => setOpen((current) => !current)} />

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
