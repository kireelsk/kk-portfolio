"use client";

import { useState } from "react";

type ProjectsFilterProps = {
  tags: { id: string; label: string }[];
};

export function ProjectsFilter({ tags }: ProjectsFilterProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  function filterProjects(tag: string | null) {
    const list = document.getElementById("project-list");
    if (!list) return;

    const cards = list.querySelectorAll<HTMLLIElement>("[data-project-tags]");

    cards.forEach((card) => {
      const tags = card.dataset.projectTags?.split(" ") ?? [];
      card.hidden = tag !== null && !tags.includes(tag);
    });
  }

  function selectTag(tag: string | null) {
    const nextTag = activeTag === tag ? null : tag;

    setActiveTag(nextTag);
    filterProjects(nextTag);
  }

  return (
    <div
      role="group"
      aria-label="Filter projects"
      className="flex flex-wrap gap-6"
    >
      <button
        type="button"
        onClick={() => selectTag(null)}
        aria-pressed={activeTag === null}
        className="link"
      >
        All
      </button>

      {tags.map((tag) => (
        <button
          key={tag.id}
          type="button"
          onClick={() => selectTag(tag.id)}
          aria-pressed={activeTag === tag.id}
          className="link"
        >
          {tag.label}
        </button>
      ))}
    </div>
  );
}
