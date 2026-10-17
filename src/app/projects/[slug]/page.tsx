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
    <main className="min-w-0">
      <section className="grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12">
        <h1 className="col-span-full mb-6 text-5xl font-semibold tracking-tight md:text-7xl">
          {project.title}
        </h1>

        <p className="col-span-full mt-2 mb-8 text-xl text-neutral-300">
          {project.description}
        </p>

        <div className="col-span-full flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 text-xl text-neutral-500">
          <Project.Tags tags={project.tags} />
          <Project.Date
            startDate={project.startDate}
            endDate={project.endDate}
            className="text-xl text-neutral-500"
          />
        </div>

        <div className="col-span-full mt-10 grid grid-cols-subgrid gap-y-8">
          <Project.Cover
            key={`${project._meta.path}-horizontal`}
            project={project}
            variant="horizontal"
            className="col-span-full md:col-span-5 lg:col-span-8"
            loading="eager"
          />

          <Project.Cover
            key={`${project._meta.path}-vertical`}
            project={project}
            variant="vertical"
            className="col-span-full md:col-span-3 lg:col-span-4"
            loading="eager"
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </div>

        <div className="col-span-full">
          <MDXContent code={project.mdx} />
        </div>

        <Link
          href="/projects"
          className="col-span-full inline-block text-xl text-neutral-500 hover:underline my-10"
        >
          All Projects
        </Link>
      </section>
    </main>
  );
}
