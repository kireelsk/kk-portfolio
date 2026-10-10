import { z } from "zod";
import { contentIDSchema, readYAML, validateUniqueIDs } from "./content-utils";

const tagsSchema = z.object({
  tags: z
    .array(
      z.object({
        id: contentIDSchema,
        label: z.string().trim().min(1),
      }),
    )
    .min(1)

    // Rejects duplicate tag IDs.
    .superRefine((tags, ctx) => {
      validateUniqueIDs(tags, ctx, "tag");
    }),
});

// Loads the allowed tags and their display labels.
export const projectTags = readYAML("tags.yaml", tagsSchema).tags;

const tagsIDs = new Set(projectTags.map((tag) => tag.id));

// Validates project frontmatter tags against the registry.
export const projectTagSchema = z.string().refine((tag) => tagsIDs.has(tag), {
  error: "Unknown project tag. Check content/tags.yaml.",
});

// Validates a non-empty list of unique project tags.
export const projectTagsSchema = z
  .array(projectTagSchema)
  .min(1)
  .superRefine((tags, ctx) => {
    const seen = new Set<string>();

    tags.forEach((tag, index) => {
      if (seen.has(tag)) {
        ctx.addIssue({
          code: "custom",
          message: `Duplicate project tag: "${tag}"`,
          path: [index],
        });
      }

      seen.add(tag);
    });
  });
