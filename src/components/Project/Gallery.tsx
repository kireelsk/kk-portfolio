"use client";

import { useState, type ReactNode } from "react";

type GalleryItem = {
  id: string;
  tags: string[];
  content: ReactNode;
};

type GalleryProps = {
  items: GalleryItem[];
  tags: { id: string; label: string }[];
};

// Filters server-rendered project cards by tag without page reloads.
export function ProjectGallery({ items, tags }: GalleryProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  // Shows all projects when no tag is selected.
  const filterItems = activeTag
    ? items.filter((item) => item.tags.includes(activeTag))
    : items;

  return (
    <>
      <div className="col-span-full mb-10 flex flex-wrap gap-6">
        <button
          type="button"
          onClick={() => setActiveTag(null)}
          aria-pressed={activeTag === null}
        >
          All
        </button>

        {tags.map((tag) => (
          <button
            key={tag.id}
            type="button"
            onClick={() => setActiveTag(activeTag === tag.id ? null : tag.id)}
            aria-pressed={activeTag === tag.id}
          >
            {tag.label}
          </button>
        ))}
      </div>

      <ul className="col-span-full grid grid-cols-subgrid gap-y-8">
        {filterItems.map((item) => (
          <li key={item.id} className="col-span-4 md:col-span-4 lg:col-span-4">
            {item.content}
          </li>
        ))}
      </ul>

      {/*<ul className="col-span-full min-w-0 grid grid-flow-col auto-cols-[100%] gap-4 overflow-x-auto snap-x snap-mandatory md:auto-cols-[calc((100%-1rem)/2)] lg:auto-cols-[calc((100%-2rem)/3)]">
        {filterItems.map((item) => (
          <li key={item.id} className="min-w-0 snap-start">
            {item.content}
          </li>
        ))}
      </ul>*/}
    </>
  );
}
