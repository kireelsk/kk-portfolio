import Image from "next/image";
import Link from "next/link";
import { getMediaUrl } from "@/lib/media";
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
    <main className="px-10">
      <section className="mb-80">
        <h1 className="mb-6 text-5xl md:text-7xl font-semibold tracking-tight">
          {project.title}
        </h1>

        <p className="mt-4 text-xl text-neutral-300">{project.description}</p>

        <div className="mt-10 grid md:grid-cols-3 gap-8 grid-cols-1">
          <Image
            src={getMediaUrl(
              `projects/${project._meta.path}/cover-horizontal.webp`,
            )}
            alt=""
            width={1600}
            height={1200}
            className="w-full h-auto md:col-span-2"
            loading="eager"
          />

          <Image
            src={getMediaUrl(
              `projects/${project._meta.path}/cover-vertical.webp`,
            )}
            alt=""
            width={1200}
            height={1600}
            className="w-full h-auto md:col-span-1"
            loading="eager"
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
