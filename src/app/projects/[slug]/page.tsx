import type { Metadata } from "next";
import Link from "next/link";
import { getProject, getProjects } from "@/lib/projects";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";
import { ProjectCover } from "@/components/Project/Cover";
import { Section } from "@/components/Section";
import { mdxComponents } from "@/components/mdx";

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  return {
    title: `${project.name} – ${project.title}`,
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

  const theme = project.theme;

  return (
    <>
      {theme && (
        <style>
          {`
            html:has(.project-page) {
              --page-background: ${theme.background};
              --page-foreground: ${theme.foreground};
              --page-accent: ${theme.accent};
            }
          `}
        </style>
      )}

      <main className="project-page">
        <article>
          <Section full as="header" className="gap-y-12">
            <p className="sm:col-span-2 sm:col-start-2 md:col-span-4 md:col-start-3 lg:col-start-1 xl:col-start-2 bg-zinc-200 aspect-4/3">
              {project.name}
            </p>

            <dl className="subgrid md:col-span-6 md:col-start-2 lg:col-start-5 lg:col-span-8 xl:col-start-7 xl:col-span-5 gap-y-12">
              {/*<dl className="subgrid md:col-span-4 md:col-start-5 lg:col-span-6 lg:col-start-6 gap-y-12">*/}
              <div className="sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-2">
                {/*<div className="sm:col-span-2 md:col-span-3">*/}
                <dt className="text-accent">What&apos;s this?</dt>
                <dd>{project.about}</dd>
                <dd>{project.display.date}</dd>
              </div>

              <div className="sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-3">
                {/*<div className="sm:col-span-2 md:col-span-3">*/}
                <dt className="text-accent">Services:</dt>
                {project.display.tags.map((tag) => (
                  <dd
                    key={tag}
                    className="inline not-first-of-type:before:content-['/']"
                  >
                    {tag}
                  </dd>
                ))}
              </div>

              <div className="md:col-span-5 lg:col-span-7 xl:col-span-5">
                {/*<div className="sm:col-span-3 md:col-span-full">*/}
                <dt className="text-accent">Task</dt>
                <dd>{project.task}</dd>
              </div>
            </dl>
          </Section>

          <ProjectCover
            key={`${project._meta.path}-horizontal`}
            slug={project._meta.path}
            variant="horizontal"
            loading="eager"
          />

          <Section>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
          </Section>

          <MDXContent code={project.mdx} components={mdxComponents} />

          <Section>
            <Link
              href="/projects"
              className="inline-block hover:underline my-10"
            >
              All Projects
            </Link>
          </Section>
        </article>
      </main>
    </>
  );
}
