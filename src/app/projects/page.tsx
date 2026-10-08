import Image from "next/image";
import Link from "next/link";
import { getMediaUrl } from "@/lib/media";
import { getProjects } from "@/lib/projects";
import { Project } from "@/components/Project";

export default function Projects() {
  const projects = getProjects("published");

  return (
    <main className="px-10">
      <section className="mb-80">
        <h1 className="mb-6 text-5xl md:text-7xl font-semibold tracking-tight">
          All Projects
        </h1>

        <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <li key={project._meta.path}>
              <Link href={`/projects/${project._meta.path}`}>
                <Image
                  className="w-full h-auto"
                  src={getMediaUrl(
                    `projects/${project._meta.path}/cover-vertical.webp`,
                  )}
                  alt=""
                  width={1200}
                  height={1600}
                  loading={index < 3 ? "eager" : "lazy"}
                />
                <div className="mt-4">
                  <h2 className="text-4xl font-semibold">{project.title}</h2>

                  <p className="mt-2 mb-8 text-xl text-neutral-300">
                    {project.description}
                  </p>

                  <Project.Date
                    startDate={project.startDate}
                    endDate={project.endDate}
                    className="text-xl text-neutral-500"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
