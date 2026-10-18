import Link from "next/link";
import type { getProjects } from "@/lib/projects";
import { ProjectCover } from "./Cover";
import { ProjectDate } from "./Date";
// import { ProjectMeta } from "./Meta";

type ProjectCardProps = {
  project: ReturnType<typeof getProjects>[number];
  loading: "eager" | "lazy";
};

export function ProjectCard({ project, loading }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project._meta.path}`} className="project-card">
      <ProjectCover
        slug={project._meta.path}
        variant="vertical"
        loading={loading}
      />

      <div className="mt-4">
        <div className="grid grid-cols-[minmax(0,1fr)_90px] items-start gap-4">
          <h2 className="mb-2">{project.title}</h2>
          <ProjectDate
            startDate={project.startDate}
            endDate={project.endDate}
            className="text-right whitespace-nowrap"
          />
        </div>

        <p className="mb-8">{project.description}</p>
      </div>
    </Link>
  );
}
