import type { ComponentProps } from "react";

type SectionProps = ComponentProps<"section"> & {
  as?: "section" | "header" | "footer";
  full?: boolean;
};

export function Section({
  as: Tag = "section",
  full = false,
  className,
  children,
  ...props
}: SectionProps) {
  const classes = [
    "site-container",
    "content-grid",
    "content-center",
    full && "min-h-svh",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag {...props} className={classes}>
      {children}
    </Tag>
  );
}
