import Link from "next/link";
import type { getProjects } from "@/lib/projects";
import { ProjectCover } from "./Cover";

type ProjectCardProps = {
  project: ReturnType<typeof getProjects>[number];
  loading: "eager" | "lazy";
};

export function ProjectCard({ project, loading }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project._meta.path}`}
      className="project-card subgrid"
    >
      <ProjectCover
        slug={project._meta.path}
        variant="horizontal"
        loading={loading}
      />

      <div className="subgrid">
        <h2 className="title-heading col-span-2 sm:col-span-1 md:col-span-2 lg:col-span-3">
          {project.name}
        </h2>

        <div className="col-span-2 sm:col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-2">
          <p className="text-small text-right">{project.about}</p>
          <p className="text-small text-right">{project.display.date}</p>
        </div>

        <p className="text-small lg:col-span-4 mb-2">{project.description}</p>
      </div>
    </Link>
  );
}
