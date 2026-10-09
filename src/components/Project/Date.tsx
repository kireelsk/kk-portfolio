import { formatProjectDate } from "@/lib/project-date";

type ProjectDateProps = {
  startDate?: string;
  endDate?: string;
  className?: string;
};

// Displays a formatted project date or date range.
export function ProjectDate({
  startDate,
  endDate,
  className,
}: ProjectDateProps) {
  return (
    <span className={className}>{formatProjectDate(startDate, endDate)}</span>
  );
}
