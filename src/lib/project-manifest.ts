import { z } from "zod";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { parse } from "yaml";

// Defines valid project IDs and publication statuses.
export const manifestSchema = z.object({
  projects: z
    .array(
      z.object({
        id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
        status: z.enum(["featured", "published", "draft"]),
      }),
    )
    // Rejects duplicate project IDs.
    .superRefine((projects, ctx) => {
      const seen = new Set<string>();

      projects.forEach((project, index) => {
        if (seen.has(project.id)) {
          ctx.addIssue({
            code: "custom",
            message: `Duplicate project ID: "${project.id}"`,
            path: [index, "id"],
          });
        }

        seen.add(project.id);
      });
    }),
});

export type ProjectManifest = z.infer<typeof manifestSchema>;

// Reads and validates the project manifest from YAML.
export function getProjectManifest(): ProjectManifest {
  const filePath = join(process.cwd(), "content", "projects.yaml");
  const fileContent = readFileSync(filePath, "utf8");

  return manifestSchema.parse(parse(fileContent));
}
