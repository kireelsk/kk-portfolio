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
      className="project-preview col-span-full grid grid-cols-subgrid"
    >
      <div className="col-span-full self-end md:col-span-3 lg:col-span-4">
        <h3 className="mb-2">{project.name}</h3>

        <p className="mb-8">{project.description}</p>

        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
          <ul className="flex flex-wrap gap-x-2">
            {project.display.tags.map((tag, index) => (
              <li key={index} className="inline-flex items-center gap-2">
                {index > 0 && <span aria-hidden="true">/</span>}
                <span>{tag}</span>
              </li>
            ))}
          </ul>

          <span>{project.display.date}</span>
        </div>
      </div>

      <ProjectCover
        slug={project._meta.path}
        variant="horizontal"
        loading={loading}
        className="col-span-full md:col-span-5 lg:col-span-8"
      />
    </Link>
  );
}
