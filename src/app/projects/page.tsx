import Link from "next/link";
import { allProjects } from "content-collections";

export default function ProjectPage() {
  return (
    <main className="p-8">
      <h1>Projects</h1>

      <ul>
        {allProjects.map((project) => (
          <li key={project._meta.path}>
            <Link href={`/projects/${project._meta.path}`}>
              {project.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
