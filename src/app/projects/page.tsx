import Link from "next/link";

export default function ProjectPage() {
  return (
    <main className="p-8">
      <h1>Projects</h1>

      <ul>
        <li>
          <Link href="/projects/example">Example Project</Link>
        </li>
      </ul>
    </main>
  );
}
