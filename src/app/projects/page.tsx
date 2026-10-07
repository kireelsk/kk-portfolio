import Image from "next/image";
import Link from "next/link";
import { getMediaUrl } from "@/lib/media";
import { allProjects } from "content-collections";

export default function Projects() {
  return (
    <main className="p-8">
      <section className="mb-80">
        <h1 className="mt-10 mb-6 text-5xl md:text-8xl font-semibold tracking-tight">
          Projects
        </h1>

        <ul className="space-y-4">
          {allProjects.map((project, index) => (
            <li key={project._meta.path}>
              <Image
                src={getMediaUrl(
                  `projects/${project._meta.path}/cover-horizontal.webp`,
                )}
                alt=""
                width={1600}
                height={1200}
                loading={index === 0 ? "eager" : "lazy"}
              />
              <Link
                href={`/projects/${project._meta.path}`}
                className="text-xl hover:underline"
              >
                {project.title} →
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
