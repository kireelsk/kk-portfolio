import { allProjects } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return allProjects.map((project) => ({
    slug: project._meta.path,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = allProjects.find((project) => project._meta.path === slug);

  if (!project) notFound();

  return (
    <main className="p-8">
      <h1>{project.title}</h1>
      <MDXContent code={project.mdx} />
    </main>
  );
}
