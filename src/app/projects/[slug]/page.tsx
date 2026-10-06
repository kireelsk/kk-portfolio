import Link from "next/link";
import { allProjects } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project._meta.path,
  }));
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = allProjects.find((project) => project._meta.path === slug);

  if (!project) notFound();

  return (
    <main className="p-8">
      <section className="mb-80">
        <Link
          href="/projects"
          className="mt-8 inline-block text-neutral-500 hover:underline"
        >
          ← All Projects
        </Link>
        <h1 className="mt-10 mb-6 text-5xl md:text-8xl font-semibold tracking-tight">
          {project.title}
        </h1>
        <MDXContent code={project.mdx} />
      </section>
    </main>
  );
}
