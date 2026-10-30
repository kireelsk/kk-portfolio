"use client";

import {
  useCallback,
  useEffect,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { Bridge } from "./Bridge";
import { Grid } from "./Grid";
import { Rows } from "./Rows";
import { Playground } from "./Playground";
import { Preview } from "./Preview";
import { Control } from "./Control";
import "./playground.css";

const subscribe = () => () => {};
const isEmbedded = () => window.self !== window.top;
const serverSnapshot = () => true;

export function Devtool({ children }: { children: ReactNode }) {
  const embedded = useSyncExternalStore(subscribe, isEmbedded, serverSnapshot);

  const pathname = usePathname();

  const [grid, setGrid] = useState(false);
  const [rows, setRows] = useState(false);
  const [preview, setPreview] = useState(false);
  const [selected, setSelected] = useState(10);
  const [src, setSrc] = useState("/");
  const [playgroundPath, setPlaygroundPath] = useState<string | null>(null);

  const closePlayground = useCallback(() => {
    setPlaygroundPath(null);
  }, []);

  const playground = playgroundPath === pathname;

  useEffect(() => {
    if (!preview) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setPreview(false);
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [preview]);

  useEffect(() => {
    if (!playground || embedded) return;

    function onLinkClick(event: MouseEvent) {
      if (
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        !(event.target instanceof Element)
      ) {
        return;
      }

      const link = event.target.closest<HTMLAnchorElement>("a[href]");

      if (!link || link.target === "_blank" || link.hasAttribute("download")) {
        return;
      }

      setPlaygroundPath(null);

      const url = new URL(link.href);

      if (
        url.origin === window.location.origin &&
        url.pathname === window.location.pathname &&
        url.search === window.location.search &&
        url.hash
      ) {
        requestAnimationFrame(() => {
          document
            .getElementById(decodeURIComponent(url.hash.slice(1)))
            ?.scrollIntoView();
        });
      }
    }

    document.addEventListener("click", onLinkClick, true);

    return () => document.removeEventListener("click", onLinkClick, true);
  }, [playground, embedded]);

  useEffect(() => {
    const close = () => setPlaygroundPath(null);

    window.addEventListener("popstate", close);
    window.addEventListener("hashchange", close);

    return () => {
      window.removeEventListener("popstate", close);
      window.removeEventListener("hashchange", close);
    };
  }, []);

  if (embedded) return <Bridge>{children}</Bridge>;

  function togglePreview() {
    if (!preview) {
      setSrc(
        window.location.pathname +
          window.location.search +
          window.location.hash,
      );
    }

    setPreview((value) => !value);
  }

  function togglePlayground() {
    setPlaygroundPath(playground ? null : pathname);
  }

  const control = (
    <Control
      grid={grid}
      rows={rows}
      preview={preview}
      playground={playground}
      onGrid={() => setGrid((value) => !value)}
      onRows={() => setRows((value) => !value)}
      onPreview={togglePreview}
      onPlayground={togglePlayground}
    />
  );

  return (
    <>
      {playground ? <Playground /> : children}

      {preview ? (
        <Preview
          src={src}
          selected={selected}
          onSelect={setSelected}
          onNavigate={closePlayground}
          grid={grid}
          rows={rows}
          playground={playground}
        >
          {control}
        </Preview>
      ) : (
        <>
          {grid && <Grid />}
          {rows && <Rows />}

          <div className="fixed bottom-6 right-6 z-110">{control}</div>
        </>
      )}
    </>
  );
}
