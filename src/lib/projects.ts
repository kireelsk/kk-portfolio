import { allProjects } from "content-collections";
import { getProjectManifest } from "./project-manifest";

export function getFeaturedProjects() {
  const manifest = getProjectManifest();

  return manifest.projects
    .filter((entry) => entry.status === "featured")
    .map((entry) =>
      allProjects.find((project) => project._meta.path === entry.id),
    )
    .filter((project) => project !== undefined);
}
