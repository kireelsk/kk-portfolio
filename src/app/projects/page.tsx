import Link from "next/link";
import { ProjectGallery } from "@/components/Project/Gallery";
import { Project } from "@/components/Project";
import { getProjects } from "@/lib/projects";
import { projectTags } from "@/lib/project-tags";

export default function Projects() {
  const projects = getProjects("published");

  // Excludes the draft filter from production.
  const tags =
    process.env.NODE_ENV === "development"
      ? projectTags
      : projectTags.filter((tag) => tag.id !== "draft");

  // Prepares project cards on the server for client-side filtering.
  const items = projects.map((project, index) => ({
    id: project._meta.path,
    tags: project.tags,
    content: (
      <Link href={`/projects/${project._meta.path}`}>
        <Project.Cover
          slug={project._meta.path}
          variant="vertical"
          loading={index < 4 ? "eager" : "lazy"}
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
    ),
  }));

  return (
    <main className="projects-page min-w-0">
      <section className="grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12">
        <h1 className="col-span-full mb-5">All Projects</h1>

        <ProjectGallery items={items} tags={tags} />
      </section>
    </main>
  );
}
