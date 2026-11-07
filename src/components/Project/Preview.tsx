import Link from "next/link";
import { ProjectCover } from "./Cover";
import type { getProjects } from "@/lib/projects";

type ProjectPreviewProps = {
  project: ReturnType<typeof getProjects>[number];
  loading: "eager" | "lazy";
};

export function ProjectPreview({ project, loading }: ProjectPreviewProps) {
  return (
    <Link
      href={`/projects/${project._meta.path}`}
      className="project-preview subgrid md:col-start-2 md:col-span-6 lg:col-start-1 lg:col-span-12"
    >
      <div className="subgrid lg:col-span-6 xl:col-span-4">
        <div className="subgrid self-start items-baseline">
          <span className="col-span-2 md:col-span-4">{project.name}</span>
          <span className="text-right col-span-2">{project.display.date}</span>
        </div>

        <div className="subgrid self-end">
          <h3>{project.title}</h3>
          <p className="">{project.description}</p>
        </div>
      </div>

      <ProjectCover
        slug={project._meta.path}
        loading={loading}
        variant="horizontal"
        className="order-first lg:order-0 lg:col-span-6 xl:col-span-8"
      />
    </Link>
  );
}
