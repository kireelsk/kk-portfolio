import { readFileSync } from "node:fs";
import { join } from "node:path";
import { parse } from "yaml";
import { z } from "zod";

// Defines the shared format for content identifiers.
export const contentIDSchema = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);

// Reads a YAML file from content/ and validates its structure.
// Reports validation errors with the filename and field paths.
export function readYAML<T>(filename: string, schema: z.ZodType<T>): T {
  const filePath = join(process.cwd(), "content", filename);
  const fileContent = readFileSync(filePath, "utf-8");

  const result = schema.safeParse(parse(fileContent));

  if (!result.success) {
    const errors = result.error.issues.map((issue) => {
      const path = issue.path.reduce<string>(
        (acc, segment) =>
          typeof segment === "number"
            ? `${acc}[${segment}]`
            : acc
              ? `${acc}.${String(segment)}`
              : String(segment),
        "",
      );

      return `${path || "(root)"}: ${issue.message}`;
    });

    const message = `Content validation failed: content/${filename}\n\n${errors.join("\n")}`;

    throw new Error(message);
  }

  return result.data;
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
