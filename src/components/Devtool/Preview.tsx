import { Fragment, useEffect, useRef, useState, type ReactNode } from "react";
import { breakpoints, presets } from "./presets";
import {
  READY_MESSAGE,
  STATE_MESSAGE,
  NAVIGATE_MESSAGE,
  type PreviewState,
} from "./Bridge";

type Props = PreviewState & {
  src: string;
  selected: number;
  onSelect: (index: number) => void;
  onNavigate: () => void;
  children: ReactNode;
};

export function Preview({
  src,
  selected,
  onSelect,
  onNavigate,
  grid,
  rows,
  playground,
  children,
}: Props) {
  const stageRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [area, setArea] = useState({ width: 0, height: 0 });

  const preset = presets[selected];

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const observer = new ResizeObserver(([entry]) => {
      setArea({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      });
    });

    observer.observe(stage);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function sendState() {
      frameRef.current?.contentWindow?.postMessage(
        {
          type: STATE_MESSAGE,
          grid,
          rows,
          playground,
        },
        window.location.origin,
      );
    }

    function receive(event: MessageEvent) {
      if (event.origin !== window.location.origin) return;
      if (event.source !== frameRef.current?.contentWindow) return;

      if (event.data?.type === NAVIGATE_MESSAGE) {
        onNavigate();
        return;
      }

      if (event.data?.type === READY_MESSAGE) {
        sendState();
      }
    }

    window.addEventListener("message", receive);
    sendState();

    return () => window.removeEventListener("message", receive);
  }, [grid, rows, playground, onNavigate]);

  const scale =
    area.width && area.height
      ? Math.min(1, area.width / preset.width, area.height / preset.height)
      : 1;

  return (
    <section
      aria-label="Responsive preview"
      className="fixed inset-0 z-200 flex flex-col bg-zinc-950"
    >
      <div
        ref={stageRef}
        className="flex min-h-0 flex-1 items-start justify-center overflow-auto"
      >
        <div
          className={`relative shrink-0 overflow-hidden bg-white ${
            preset.width < 1280 ? "rounded-2xl" : ""
          }`}
          style={{
            width: preset.width * scale,
            height: preset.height * scale,
          }}
        >
          <iframe
            ref={frameRef}
            src={src}
            title="Website preview"
            className="absolute inset-0 block border-0"
            style={{
              width: preset.width,
              height: preset.height,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
          />
        </div>
      </div>

      <div className="flex h-19 shrink-0 items-center gap-6 pr-5 pl-20">
        <div className="flex min-w-0 flex-1 items-center gap-2 overflow-x-auto scrollbar-width:none &::-webkit-scrollbar:hidden">
          {presets.map((item, index) => {
            const breakpoint = breakpoints.find(
              (bp) =>
                item.width >= bp.width &&
                (index === 0 || presets[index - 1].width < bp.width),
            );

            const repeatedWidth = presets.some(
              (other, i) => i !== index && other.width === item.width,
            );

            return (
              <Fragment key={`${item.width}-${item.height}`}>
                {breakpoint && (
                  <span className="shrink-0 text-xs text-zinc-500">
                    {breakpoint.label}
                  </span>
                )}

                <button
                  type="button"
                  onClick={() => onSelect(index)}
                  aria-label={`${item.width} × ${item.height}`}
                  aria-pressed={selected === index}
                  title={`${item.width} × ${item.height}`}
                  className={`flex h-10 shrink-0 items-center justify-center rounded-full px-3 text-sm transition-colors ${
                    selected === index
                      ? "bg-white text-black"
                      : "bg-zinc-800 text-white hover:bg-zinc-700"
                  }`}
                >
                  {item.width}
                  {repeatedWidth && (
                    <span className="ml-1 text-xs opacity-60">
                      ×{item.height}
                    </span>
                  )}
                </button>
              </Fragment>
            );
          })}
        </div>

        <span className="hidden shrink-0 text-xs text-zinc-400 xl:block">
          {preset.width} × {preset.height} · {Math.round(scale * 100)}%
        </span>

        {children}
      </div>
    </section>
  );
}
