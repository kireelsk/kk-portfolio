import { projectTags } from "@/lib/project-tags";

type TagsProps = {
  tags: string[];
  className?: string;
};

// Displays project tags using their registered labels.
export function ProjectTags({ tags, className = "" }: TagsProps) {
  return (
    <ul className={`flex flex-wrap gap-x-2 ${className}`}>
      {tags.map((tagID, index) => {
        const tag = projectTags.find((item) => item.id === tagID);

        return (
          <li key={tagID} className="inline-flex items-center gap-2">
            {index > 0 && <span aria-hidden="true">/</span>}
            <span>{tag?.label ?? tagID}</span>
          </li>
        );
      })}
    </ul>
  );
}
