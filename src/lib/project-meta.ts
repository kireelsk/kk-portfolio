import { formatProjectDate } from "./project-date";
import { projectTags } from "./project-tags";

type ProjectMetaInput = {
  startDate?: string;
  endDate?: string;
  tags: string[];
};

export function getProjectMeta(project: ProjectMetaInput) {
  return {
    date: formatProjectDate(project.startDate, project.endDate),
    tags: project.tags.map(
      (id) => projectTags.find((tag) => tag.id === id)?.label ?? id,
    ),
  };
}
