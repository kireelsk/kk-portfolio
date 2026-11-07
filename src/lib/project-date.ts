function formatMonth(date: string): string {
  const month = Number(date.slice(5, 7)) - 1;

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(2000, month, 1)));
}

export function formatProjectDate(
  startDate?: string,
  endDate?: string,
): string {
  if (!endDate) return "WIP";

  if (!startDate || startDate === endDate) {
    return `${formatMonth(endDate)}, ${endDate.slice(0, 4)}`;
  }

  const startYear = startDate.slice(0, 4);
  const endYear = endDate.slice(0, 4);

  if (startYear !== endYear) {
    return `${startYear}–${endYear}`;
  }

  return `${formatMonth(startDate)}–${formatMonth(endDate)}, ${endYear}`;
}
