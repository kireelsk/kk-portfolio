import { allProjects } from "content-collections";
import { getProjectManifest } from "./project-manifest";

// Ensures that YAML and MDX contain the same project IDs.
function validateProjectIDs(manifestIDs: string[], mdxIDs: string[]): void {
  const registered = new Set(manifestIDs);
  const existing = new Set(mdxIDs);

  for (const id of registered) {
    if (!existing.has(id)) {
      throw new Error(
        `Project "${id}" has no matching MDX file: content/projects/${id}.mdx`,
      );
    }
  }

  for (const id of existing) {
    if (!registered.has(id)) {
      throw new Error(`Project "${id}" is missing from projects.yaml.`);
    }
  }
}

type ProjectFilter = "featured" | "published";

// Combines MDX projects with their manifest statuses in manifest order.
function getProjectData() {
  const manifest = getProjectManifest();

  validateProjectIDs(
    manifest.projects.map((entry) => entry.id),
    allProjects.map((project) => project._meta.path),
  );

  return manifest.projects.map((entry) => ({
    ...entry,
    project: allProjects.find((project) => project._meta.path === entry.id)!,
  }));
}

// Returns projects based on the visibility filter in manifest order.
export function getProjects(filter: ProjectFilter) {
  const isDev = process.env.NODE_ENV === "development";

  return getProjectData()
    .filter((entry) => {
      if (isDev && entry.status === "draft") {
        return true;
      }
      return filter === "featured"
        ? entry.status === "featured"
        : entry.status !== "draft";
    })
    .map((entry) => entry.project);
}

// Returns a project by slug if its publication status allows access.
export function getProject(slug: string) {
  const entry = getProjectData().find((entry) => entry.id === slug);

  if (!entry) return undefined;

  if (entry.status === "draft" && process.env.NODE_ENV !== "development") {
    return undefined;
  }

  return entry.project;
}
