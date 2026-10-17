import Link from "next/link";
import { ProjectCover } from "./Cover";
import { ProjectMeta } from "./Meta";
import type { getProjects } from "@/lib/projects";

type ProjectPreviewProps = {
  project: ReturnType<typeof getProjects>[number];
  loading?: "eager" | "lazy";
  className?: string;
};

export function ProjectPreview({
  project,
  loading = "lazy",
  className,
}: ProjectPreviewProps) {
  return (
    <li className={className}>
      <Link
        href={`/projects/${project._meta.path}`}
        className="col-span-full grid grid-cols-subgrid"
      >
        <div className="col-span-full self-end md:col-span-3 lg:col-span-4">
          <h3 className="mb-2">{project.title}</h3>

          <p className="mb-8">{project.description}</p>

          <ProjectMeta project={project} />
        </div>

        <ProjectCover
          slug={project._meta.path}
          variant="horizontal"
          loading={loading}
          className="col-span-full md:col-span-5 lg:col-span-8"
        />
      </Link>
    </li>
  );
}
