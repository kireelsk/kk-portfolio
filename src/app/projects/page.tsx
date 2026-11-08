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
      <Section
        as="header"
        className="sticky top-14 z-40 bg-background py-4 lg:top-16"
      >
        <h1 className="title-subhead">All Projects</h1>
        <ProjectsFilter tags={tags} />
      </Section>

      <Section className="gap-y-8">
        <ul id="project-list" className="subgrid xl:col-start-3 gap-y-8">
          {projects.map((project, index) => (
            <li
              key={project._meta.path}
              data-project-tags={project.tags.join(" ")}
              className="subgrid sm:col-span-2 md:col-span-4 lg:col-span-6 xl:col-span-5"
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
