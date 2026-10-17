import { ProjectTags } from "./Tags";
import { ProjectDate } from "./Date";
import type { getProjects } from "@/lib/projects";

type ProjectMetaProps = {
  project: ReturnType<typeof getProjects>[number];
};

export function ProjectMeta({ project }: ProjectMetaProps) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 text-base">
      <ProjectTags tags={project.tags} />
      <ProjectDate startDate={project.startDate} endDate={project.endDate} />
    </div>
  );
}
