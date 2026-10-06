import Link from "next/link";
import { allProjects } from "content-collections";

export default function Home() {
  return (
    <main className="p-8">
      <section className="mb-80">
        <h1 className="mt-10 mb-6 text-5xl md:text-8xl font-semibold tracking-tight">
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

        <ul className="space-y-4">
          {allProjects.map((project) => (
            <li key={project._meta.path}>
              <Link
                href={`/projects/${project._meta.path}`}
                className="text-xl hover:underline"
              >
                {project.title} →
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/projects"
          className="mt-8 inline-block text-neutral-500 hover:underline"
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
