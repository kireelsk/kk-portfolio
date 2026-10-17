import Link from "next/link";
import { getProjects } from "@/lib/projects";
import { Project } from "@/components/Project";

export default function Home() {
  const projects = getProjects("featured");

  return (
    <main className="home-page min-w-0">
      <section className="grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 mt-140 mb-40">
        <h1 className="col-span-full mb-10">
          I make things
          <br />
          better – by <i>design</i>
        </h1>

        <p className="col-span-full lg:col-span-6">
          I work across disciplines because each brings a different way to
          approach an idea. I learn by making, exploring new possibilities and
          using what I discover to make things better.
        </p>
      </section>

      <section className="grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 mb-40">
        <h2 className="col-span-full mb-5">Skills</h2>

        <p className="col-span-full lg:col-span-6">Coming soon...</p>
      </section>

      <section className="grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 mb-40">
        <h2 className="col-span-full mb-5">Selected Projects</h2>

        <ul className="col-span-full grid grid-cols-subgrid gap-y-10">
          {projects.map((project, index) => (
            <li
              key={project._meta.path}
              className="col-span-full grid grid-cols-subgrid"
            >
              <Link
                href={`/projects/${project._meta.path}`}
                className="col-span-full grid grid-cols-subgrid gap-y-10"
              >
                <div className="col-span-full self-end md:col-span-3 lg:col-span-4">
                  <h3 className="mb-2">{project.title}</h3>

                  <p className="mb-8">{project.description}</p>

                  <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 text-base">
                    <Project.Tags tags={project.tags} />
                    <Project.Date
                      startDate={project.startDate}
                      endDate={project.endDate}
                    />
                  </div>
                </div>

                <Project.Cover
                  project={project}
                  variant="horizontal"
                  loading={index === 0 ? "eager" : "lazy"}
                  className="col-span-full md:col-span-5 lg:col-span-8"
                />
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/projects"
          className="col-span-full mt-20 inline-block text-xl text-neutral-500 hover:underline"
        >
          All Projects
        </Link>
      </section>

      <section className="grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 mb-40">
        <h2 className="col-span-full mb-5">Contacts</h2>

        <p className="col-span-full lg:col-span-6">Coming soon...</p>
      </section>
    </main>
  );
}
