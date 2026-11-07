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
      <article>
        <header className="site-container content-grid min-h-svh content-center gap-y-12">
          <p className="md:col-span-3 lg:col-start-1 xl:col-start-2 bg-zinc-200">
            {project.name}
          </p>

          <dl className="subgrid md:col-span-4 md:col-start-5 lg:col-span-6 lg:col-start-5 xl:col-start-6 gap-y-12">
            <div className="sm:col-span-2 md:col-span-3">
              <dt>What&apos;s this?</dt>
              <dd>{project.about}</dd>
              <dd>{project.display.date}</dd>
            </div>

            <div className="sm:col-span-2 md:col-span-3">
              <dt>Services:</dt>
              {project.display.tags.map((tag) => (
                <dd
                  key={tag}
                  className="inline not-first-of-type:before:content-['/']"
                >
                  {tag}
                </dd>
              ))}
            </div>

            <div className="sm:col-span-3 md:col-span-full">
              <dt>Task</dt>
              <dd>{project.task}</dd>
            </div>
          </dl>
        </header>

        <ProjectCover
          key={`${project._meta.path}-horizontal`}
          slug={project._meta.path}
          variant="horizontal"
          loading="eager"
        />

        <MDXContent code={project.mdx} components={mdxComponents} />

        <Section grid12>
          <Link href="/projects" className="inline-block hover:underline my-10">
            All Projects
          </Link>
        </Section>
      </article>
    </main>
  );
}
