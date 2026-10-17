import { ProjectGallery } from "@/components/Project/Gallery";
import { ProjectCard } from "@/components/Project/Card";
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
      <ProjectCard project={project} loading={index < 4 ? "eager" : "lazy"} />
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
