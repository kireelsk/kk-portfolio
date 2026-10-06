import Link from "next/link";
import { allProjects } from "content-collections";

export default function Projects() {
  return (
    <main className="p-8">
      <section className="mb-80">
        <h1 className="mt-10 mb-6 text-5xl md:text-8xl font-semibold tracking-tight">
          Projects
        </h1>

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
      </section>
    </main>
  );
}
