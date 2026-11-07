import { useEffect, useRef, useState } from "react";

export function Grid() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [columns, setColumns] = useState(0);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    function update() {
      const template = getComputedStyle(grid!).gridTemplateColumns.trim();
      const count = template ? template.split(/\s+/).length : 0;

      setColumns(count);
    }

    const observer = new ResizeObserver(update);

    observer.observe(grid);
    window.addEventListener("resize", update);
    update();

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  });

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-100">
      <div className="site-container h-full">
        <div ref={gridRef} className="content-grid h-full">
          {Array.from({ length: columns }, (_, index) => (
            <div
              key={index}
              className="col-span-1 border-x border-fuchsia-500/40 bg-fuchsia-500/10"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
