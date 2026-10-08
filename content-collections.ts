import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";

const projects = defineCollection({
  name: "projects",
  directory: "content/projects",
  include: "*.mdx",

  schema: z.object({
    title: z.string().trim().min(1),
    description: z.string().trim().min(1),
    client: z.string().trim().min(1).optional(),

    type: z.enum(["commercial", "personal"]),
    tags: z.array(z.string().trim().min(1)).min(1),

    startDate: z
      .string()
      .regex(/^\d{4}-(0[1-9]|1[0-2])$/)
      .optional(),
    endDate: z
      .string()
      .regex(/^\d{4}-(0[1-9]|1[0-2])$/)
      .optional(),

    links: z.array(z.url()).default([]),

    location: z.string().trim().min(1).optional(),

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
  content: [projects],
});
