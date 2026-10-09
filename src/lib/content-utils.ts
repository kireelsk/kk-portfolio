import { readFileSync } from "node:fs";
import { join } from "node:path";
import { parse } from "yaml";
import { z } from "zod";

// Defines the shared format for content identifiers.
export const contentIDSchema = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);

// Reads a YAML file from content/ and validates its structure.
export function readYAML<T>(filename: string, schema: z.ZodType<T>): T {
  const filePath = join(process.cwd(), "content", filename);
  const fileContent = readFileSync(filePath, "utf-8");

  return schema.parse(parse(fileContent));
}

// Validates unique IDs in a collection of content items.
export function validateUniqueIDs<T extends { id: string }>(
  items: T[],
  ctx: z.core.$RefinementCtx<T[]>,
  entity: string,
): void {
  const seen = new Set<string>();

  items.forEach((item, index) => {
    if (seen.has(item.id)) {
      ctx.addIssue({
        code: "custom",
        message: `Duplicate ${entity} ID: "${item.id}"`,
        path: [index, "id"],
      });
    }

    seen.add(item.id);
  });
}
