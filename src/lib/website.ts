import { z } from "zod";
import { readYAML } from "./content-utils";

const nonEmptyString = z.string().trim().min(1);

const websiteSchema = z.object({
  name: nonEmptyString,

  metadata: z.object({
    title: nonEmptyString,
    description: nonEmptyString,
  }),
});

export type WebsiteConfig = z.infer<typeof websiteSchema>;

export function getWebsiteConfig(): WebsiteConfig {
  return readYAML("website.yaml", websiteSchema);
}
