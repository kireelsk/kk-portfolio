import { Button } from "./Button";

type Props = {
  grid: boolean;
  rows: boolean;
  preview: boolean;
  onGrid: () => void;
  onRows: () => void;
  onPreview: () => void;
  playground: boolean;
  onPlayground: () => void;
};

export function Control({
  grid,
  rows,
  preview,
  onGrid,
  onRows,
  onPreview,
  playground,
  onPlayground,
}: Props) {
  return (
    <div className="flex shrink-0 items-center gap-2">
      <Button label="Playground" active={playground} onClick={onPlayground}>
        <span className="text-lg font-light">Aa</span>
      </Button>

      <Button label="Rows" active={rows} onClick={onRows}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="size-5"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="1" />
          <path d="M3 9h18M3 15h18" />
        </svg>
      </Button>

      <Button label="Grid" active={grid} onClick={onGrid}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="size-5"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="1" />
          <path d="M9 3v18M15 3v18M3" />
        </svg>
      </Button>

      <Button
        label={preview ? "Close preview" : "Responsive preview"}
        active={preview}
        onClick={onPreview}
      >
        {preview ? (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="size-5"
            aria-hidden="true"
          >
            <path d="M5 5l14 14M19 5L5 19" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="size-5"
            aria-hidden="true"
          >
            <rect x="2" y="4" width="15" height="12" rx="1" />
            <path d="M5 20h9M9.5 16v4" />
            <rect x="17" y="8" width="5" height="12" rx="1" />
          </svg>
        )}
      </Button>
    </div>
  );
}
