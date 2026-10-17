import Link from "next/link";
import { Project } from "@/components/Project";
import type { getProjects } from "@/lib/projects";

type ProjectCardProps = {
  project: ReturnType<typeof getProjects>[number];
  loading?: "eager" | "lazy";
};

export function ProjectCard({ project, loading = "lazy" }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project._meta.path}`}>
      <Project.Cover
        slug={project._meta.path}
        variant="vertical"
        loading={loading}
      />

      <div className="mt-4">
        <h2 className="mb-2">{project.title}</h2>
        <p className="mb-8">{project.description}</p>

        <div className="col-span-full flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 text-base">
          <Project.Tags tags={project.tags} />
          <Project.Date
            startDate={project.startDate}
            endDate={project.endDate}
          />
        </div>
      </div>
    </Link>
  );
}
