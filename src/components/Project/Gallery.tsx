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
      <div className="mb-8 flex flex-wrap gap-10">
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

      <ul className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {filterItems.map((item) => (
          <li key={item.id}>{item.content}</li>
        ))}
      </ul>
    </>
  );
}
