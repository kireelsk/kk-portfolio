import Link from "next/link";
import { getProjects } from "@/lib/projects";
import { ProjectPreview } from "@/components/Project/Preview";

export default function Home() {
  const projects = getProjects("featured");

  return (
    <main className="home-page min-w-0">
      <section className="content-grid mt-140 mb-40">
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

      <section className="content-grid mb-40">
        <h2 className="col-span-full mb-5">Skills</h2>

        <p className="col-span-full lg:col-span-6">Coming soon...</p>
      </section>

      <section className="content-grid mb-40">
        <h2 className="col-span-full mb-5">Selected Projects</h2>

        <ul className="col-span-full grid grid-cols-subgrid gap-y-10">
          {projects.map((project, index) => (
            <li
              key={project._meta.path}
              className="col-span-full grid grid-cols-subgrid"
            >
              <ProjectPreview
                project={project}
                loading={index === 0 ? "eager" : "lazy"}
              />
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

      <section className="content-grid mb-40">
        <h2 className="col-span-full mb-5">Contacts</h2>

        <p className="col-span-full lg:col-span-6">Coming soon...</p>
      </section>
    </main>
  );
}
