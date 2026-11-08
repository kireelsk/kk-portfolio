import { z } from "zod";
import { readYAML, contentIDSchema, validateUniqueIDs } from "./content-utils";

const nonEmptyString = z.string().trim().min(1);

const websiteSchema = z.object({
  name: nonEmptyString,

  metadata: z.object({
    title: nonEmptyString,
    description: nonEmptyString,
  }),

  navigation: z
    .array(
      z.object({
        id: contentIDSchema,
        label: nonEmptyString,
        href: nonEmptyString,
      }),
    )
    .min(1)
    .superRefine((items, ctx) => {
      validateUniqueIDs(items, ctx, "navigation item");
    }),
});

export type WebsiteConfig = z.infer<typeof websiteSchema>;

export function getWebsiteConfig(): WebsiteConfig {
  return readYAML("website.yaml", websiteSchema);
}
