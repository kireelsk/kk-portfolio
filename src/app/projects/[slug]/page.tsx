import type { Metadata } from "next";
import Link from "next/link";
import { getProject, getProjects } from "@/lib/projects";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";
import { ProjectCover } from "@/components/Project/Cover";
import { Section } from "@/components/Section";

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return {
    title: project.name,
    description: project.description,
  };
}

export function generateStaticParams() {
  return getProjects("published").map((project) => ({
    slug: project._meta.path,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = getProject(slug);

  if (!project) notFound();

  return (
    <main className="project-page">
      <Section grid12>
        <h2 className="mb-2">{project.name}</h2>

        <p className="mb-8">{project.description}</p>

        <div>
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
      </Section>

      <ProjectCover
        key={`${project._meta.path}-horizontal`}
        slug={project._meta.path}
        variant="horizontal"
        loading="eager"
      />

      <Section grid12>
        <MDXContent code={project.mdx} />

        <Link href="/projects" className="inline-block hover:underline my-10">
          All Projects
        </Link>
      </Section>
    </main>
  );
}
