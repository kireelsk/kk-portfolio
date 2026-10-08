import { allProjects } from "content-collections";
import { getProjectManifest } from "./project-manifest";
import { en } from "zod/v4/locales";

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

type ProjectFilter = "featured" | "published";

// Returns featured projects from Content Collections in the order defined by the YAML manifest.
export function getProjects(filter: ProjectFilter) {
  const manifest = getProjectManifest();

  validateProjectIDs(
    manifest.projects.map((entry) => entry.id),
    allProjects.map((project) => project._meta.path),
  );

  return manifest.projects
    .filter((entry) =>
      filter === "featured"
        ? entry.status === "featured"
        : entry.status !== "draft",
    )
    .map((entry) =>
      allProjects.find((project) => project._meta.path === entry.id),
    )
    .filter((project) => project !== undefined);
}

// Returns a project by slug if its publication status allows access.
export function getProject(slug: string) {
  const manifest = getProjectManifest();

  const entry = manifest.projects.find((entry) => entry.id === slug);

  if (!entry) return undefined;

  if (entry.status === "draft" && process.env.NODE_ENV !== "development") {
    return undefined;
  }

  return allProjects.find((project) => project._meta.path === slug);
}
