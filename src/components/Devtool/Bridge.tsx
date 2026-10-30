import { useEffect, useState, type ReactNode } from "react";
import { Grid } from "./Grid";
import { Rows } from "./Rows";
import { Playground } from "./Playground";

export const STATE_MESSAGE = "devtool:state";
export const READY_MESSAGE = "devtool:ready";
export const NAVIGATE_MESSAGE = "devtool:navigate";

export type PreviewState = {
  grid: boolean;
  rows: boolean;
  playground: boolean;
};

export function Bridge({ children }: { children: ReactNode }) {
  const [state, setState] = useState<PreviewState>({
    grid: false,
    rows: false,
    playground: false,
  });

  useEffect(() => {
    if (window.parent === window) return;

    function receive(event: MessageEvent) {
      if (event.origin !== window.location.origin) return;
      if (event.source !== window.parent) return;

      const data = event.data;

      if (data?.type !== STATE_MESSAGE) return;

      if (
        typeof data.grid !== "boolean" ||
        typeof data.rows !== "boolean" ||
        typeof data.playground !== "boolean"
      ) {
        return;
      }

      setState({
        grid: data.grid,
        rows: data.rows,
        playground: data.playground,
      });
    }

    window.addEventListener("message", receive);

    window.parent.postMessage({ type: READY_MESSAGE }, window.location.origin);

    return () => window.removeEventListener("message", receive);
  }, []);

  useEffect(() => {
    if (!state.playground) return;

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

      setState((current) => ({ ...current, playground: false }));

      window.parent.postMessage(
        { type: NAVIGATE_MESSAGE },
        window.location.origin,
      );

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
  }, [state.playground]);

  return (
    <>
      {state.playground ? <Playground /> : children}
      {state.grid && <Grid />}
      {state.rows && <Rows />}
    </>
  );
}
