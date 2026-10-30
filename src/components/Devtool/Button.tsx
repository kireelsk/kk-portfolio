import type { ReactNode } from "react";

type Props = {
  label: string;
  active?: boolean;
  onClick: () => void;
  children: ReactNode;
};

export function Button({ label, active = false, onClick, children }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-pressed={active}
      title={label}
      className={`flex size-10 shrink-0 items-center justify-center rounded-full text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${
        active ? "bg-zinc-600" : "bg-zinc-900 hover:bg-zinc-700"
      }`}
    >
      {children}
    </button>
  );
}
