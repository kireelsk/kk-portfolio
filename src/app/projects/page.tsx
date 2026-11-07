import type { Metadata } from "next";
import { ProjectsFilter } from "@/components/Project/Filter";
import { ProjectCard } from "@/components/Project/Card";
import { getProjects } from "@/lib/projects";
import { projectTags } from "@/lib/project-tags";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "All Projects",
};

export default function Projects() {
  const projects = getProjects("published");

  const tags =
    process.env.NODE_ENV === "development"
      ? projectTags
      : projectTags.filter((tag) => tag.id !== "draft");

  return (
    <main className="projects-page">
      <Section grid12 full className="gap-y-8">
        <header className="sticky top-14 z-40 self-start bg-background lg:top-16">
          <h1>All Projects</h1>
          <ProjectsFilter tags={tags} />
        </header>

        <ul id="project-list" className="subgrid gap-y-8">
          {projects.map((project, index) => (
            <li
              key={project._meta.path}
              data-project-tags={project.tags.join(" ")}
              className="sm:col-span-2 md:col-span-4 lg:col-span-4"
            >
              <ProjectCard
                project={project}
                loading={index < 4 ? "eager" : "lazy"}
              />
            </li>
          ))}
        </ul>
      </Section>
    </main>
  );
}
