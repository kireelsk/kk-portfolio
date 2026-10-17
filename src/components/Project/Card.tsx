import Link from "next/link";
import type { getProjects } from "@/lib/projects";
import { ProjectCover } from "./Cover";
import { ProjectMeta } from "./Meta";

type ProjectCardProps = {
  project: ReturnType<typeof getProjects>[number];
  loading?: "eager" | "lazy";
};

export function ProjectCard({ project, loading = "lazy" }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project._meta.path}`}>
      <ProjectCover
        slug={project._meta.path}
        variant="vertical"
        loading={loading}
      />

      <div className="mt-4">
        <h2 className="mb-2">{project.title}</h2>
        <p className="mb-8">{project.description}</p>

        <ProjectMeta project={project} />
      </div>
    </Link>
  );
}
