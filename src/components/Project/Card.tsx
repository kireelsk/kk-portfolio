import Link from "next/link";
import type { getProjects } from "@/lib/projects";
import { ProjectCover } from "./Cover";

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
        <h2 className="mb-2">{project.name}</h2>
        <p className="mb-2">{project.description}</p>
        <div className="flex justify-between">
          <span className="whitespace-nowrap">{project.about}</span>
          <span className="whitespace-nowrap">{project.display.date}</span>
        </div>
      </div>
    </Link>
  );
}
