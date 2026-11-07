import type { ComponentProps } from "react";

type SectionProps = ComponentProps<"section"> & {
  full?: boolean;
  grid12?: boolean;
};

export function Section({
  full = false,
  grid12 = false,
  className,
  children,
  ...props
}: SectionProps) {
  const classes = [
    "site-container",
    "content-center",
    full && "min-h-svh",
    grid12 && "content-grid",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section {...props} className={classes}>
      {children}
    </section>
  );
}
