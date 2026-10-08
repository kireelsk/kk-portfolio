import Image from "next/image";
import Link from "next/link";
import { getMediaUrl } from "@/lib/media";
import { allProjects } from "content-collections";
import { Project } from "@/components/Project";

export default function Home() {
  return (
    <main className="p-8">
      <section className="mb-80">
        <h1 className="mt-10 mb-6 text-5xl md:text-7xl font-semibold tracking-tight">
          Designer portfolio
        </h1>

        <p className="max-w-150 text-xl text-neutral-300">
          Visual identities, motion and digital experiences.
          <br />
          Exploring the intersection of design, technology and storytelling.
        </p>
      </section>

      <section className="mb-50">
        <h2 className="mb-8 text-5xl font-semibold">Skills</h2>

        <p className="max-w-150 text-xl text-neutral-500">Coming soon...</p>
      </section>

      <section className="mb-50">
        <h2 className="mb-8 text-5xl font-semibold">My clients</h2>

        <p className="max-w-150 text-xl text-neutral-500">Coming soon...</p>
      </section>

      <section className="mb-50">
        <h2 className="mb-8 text-5xl font-semibold">Selected Projects</h2>

        <ul className="space-y-20">
          {allProjects.map((project, index) => (
            <li key={project._meta.path}>
              <Link
                className="grid grid-cols-1 gap-8 md:grid-cols-3"
                href={`/projects/${project._meta.path}`}
              >
                <div className="md:col-span-1 self-end">
                  <h3 className="text-3xl font-semibold">{project.title}</h3>

                  <p className="mt-2 mb-8 text-xl text-neutral-300">
                    {project.description}
                  </p>

                  <Project.Date
                    startDate={project.startDate}
                    endDate={project.endDate}
                    className="text-xl text-neutral-500"
                  />
                </div>

                <Image
                  className="w-full h-auto md:col-span-2"
                  src={getMediaUrl(
                    `projects/${project._meta.path}/cover-horizontal.webp`,
                  )}
                  alt=""
                  width={1600}
                  height={1200}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/projects"
          className="mt-20 inline-block text-xl text-neutral-500 hover:underline"
        >
          All Projects
        </Link>
      </section>

      <section className="mb-50">
        <h2 className="mb-8 text-5xl font-semibold">Contacts</h2>

        <p className="max-w-150 text-xl text-neutral-500">Coming soon...</p>
      </section>
    </main>
  );
}
