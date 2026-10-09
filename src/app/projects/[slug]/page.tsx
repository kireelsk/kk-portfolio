import Link from "next/link";
import { getProject, getProjects } from "@/lib/projects";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";
import { Project } from "@/components/Project";

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
    <main className="px-10">
      <section className="mb-80">
        <h1 className="mb-6 text-5xl md:text-7xl font-semibold tracking-tight">
          {project.title}
        </h1>

        <p className="mt-2 mb-8 text-xl text-neutral-300">
          {project.description}
        </p>

        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 text-xl text-neutral-500">
          <Project.Tags tags={project.tags} />
          <Project.Date
            startDate={project.startDate}
            endDate={project.endDate}
            className="text-xl text-neutral-500"
          />
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-8 grid-cols-1">
          <Project.Cover
            key={`${project._meta.path}-horizontal`}
            project={project}
            variant="horizontal"
            className="md:col-span-2"
            loading="eager"
          />

          <Project.Cover
            key={`${project._meta.path}-vertical`}
            project={project}
            variant="vertical"
            className="md:col-span-1"
            loading="eager"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </div>

        <Link
          href="/projects"
          className="inline-block text-xl text-neutral-500 hover:underline"
        >
          All Projects
        </Link>
        <MDXContent code={project.mdx} />
      </section>
    </main>
  );
}
