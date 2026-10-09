import { z } from "zod";
import { contentIDSchema, readYAML, validateUniqueIDs } from "./content-utils";

// Defines valid project IDs and publication statuses.
export const manifestSchema = z.object({
  projects: z
    .array(
      z.object({
        id: contentIDSchema,
        status: z.enum(["featured", "published", "draft"]),
      }),
    )
    // Rejects duplicate project IDs.
    .superRefine((projects, ctx) => {
      validateUniqueIDs(projects, ctx, "projects");
    }),
});

export type ProjectManifest = z.infer<typeof manifestSchema>;

// Reads and validates the project manifest.
export function getProjectManifest(): ProjectManifest {
  return readYAML("projects.yaml", manifestSchema);
}
