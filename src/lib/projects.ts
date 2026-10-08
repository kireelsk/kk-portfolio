import { allProjects } from "content-collections";
import { getProjectManifest } from "./project-manifest";

// Ensures that YAML and MDX contain the same project IDs.
function validateProjectIDs(manifestIDs: string[], mdxIDs: string[]): void {
  const registered = new Set(manifestIDs);
  const existing = new Set(mdxIDs);

  for (const id of registered) {
    if (!existing.has(id)) {
      throw new Error(`Project "${id}" has no matching MDX file.`);
    }
  }

  for (const id of existing) {
    if (!registered.has(id)) {
      throw new Error(`Project "${id}" is missing from projects.yaml.`);
    }
  }
}

// Returns featured projects from Content Collections in the order defined by the YAML manifest.
export function getFeaturedProjects() {
  const manifest = getProjectManifest();

  validateProjectIDs(
    manifest.projects.map((entry) => entry.id),
    allProjects.map((project) => project._meta.path),
  );

  return manifest.projects
    .filter((entry) => entry.status === "featured")
    .map((entry) =>
      allProjects.find((project) => project._meta.path === entry.id),
    )
    .filter((project) => project !== undefined);
}
