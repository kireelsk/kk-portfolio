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
        className="pointer-events-none fixed inset-x-0 top-14 bottom-0 overflow-hidden lg:hidden"
      >
        <div
          className={`site-container content-grid pointer-events-auto h-full overflow-y-auto bg-background py-20 transition-transform duration-400 ease-out motion-reduce:transition-none ${
            open ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="col-span-2 col-start-2 md:col-start-4">
            <Navbar
              className="flex flex-col items-center gap-10"
              onNavigate={() => setOpen(false)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
