import Link from "next/link";
import { getProject, getProjects } from "@/lib/projects";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";
import { ProjectCover } from "@/components/Project/Cover";
import { ProjectMeta } from "@/components/Project/Meta";

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
    <main className="project-page min-w-0">
      <section className="site-container content-grid">
        <h1 className="col-span-full mb-2">{project.title}</h1>

        <p className="col-span-full mb-8">{project.description}</p>

        <div className="col-span-full">
          <ProjectMeta project={project} />
        </div>
      </section>

      <section className="content-grid">
        <div className="col-span-full mt-10 grid grid-cols-subgrid gap-y-8">
          <ProjectCover
            key={`${project._meta.path}-horizontal`}
            slug={project._meta.path}
            variant="horizontal"
            className="col-span-full"
            loading="eager"
          />
        </div>
      </section>

      <section className="site-container content-grid">
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
