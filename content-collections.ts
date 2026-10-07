import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";

const projects = defineCollection({
  name: "projects",
  directory: "content/projects",
  include: "*.mdx",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    year: z.number(),
    type: z.string(),
    tags: z.array(z.string()),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);

    return {
      ...document,
      mdx,
    };
  },
});

export default defineConfig({
  collections: [projects],
});
