import { readFileSync } from "node:fs";
import { join } from "node:path";
import { parse } from "yaml";
import { z } from "zod";

//Loads and validates the YAML tag registry. Provides allowed tag IDs and display labels for projects.

const tagSchema = z.object({
  id: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  label: z.string().trim().min(1),
});

const tagsSchema = z.object({
  tags: z.array(tagSchema).min(1),
});

const filePath = join(process.cwd(), "content/tags.yaml");
const fileContent = readFileSync(filePath, "utf8");

export const projectTags = tagsSchema.parse(parse(fileContent)).tags;

const tagsIDs = projectTags.map((tag) => tag.id);

if (new Set(tagsIDs).size !== tagsIDs.length) {
  throw new Error("Duplicate tag IDs in content/tags.yaml");
}

export const projectTagSchema = z
  .string()
  .refine((tag) => tagsIDs.includes(tag), {
    message: "Unknown project tag. Check content/tags.yaml",
  });
