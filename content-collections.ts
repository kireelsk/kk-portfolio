import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";
import { projectTagsSchema } from "./src/lib/project-tags";

const color = z.string().regex(/^#[0-9a-fA-F]{6}$/);

const projects = defineCollection({
  name: "projects",
  directory: "content/projects",
  include: "*.mdx",

  schema: z
    .object({
      name: z.string().trim().min(1),
      title: z.string().trim().min(1),
      description: z.string().trim().min(1),

      about: z.string().trim().min(1),
      startDate: z
        .string()
        .regex(/^\d{4}-(0[1-9]|1[0-2])$/)
        .optional(),
      endDate: z
        .string()
        .regex(/^\d{4}-(0[1-9]|1[0-2])$/)
        .optional(),

      tags: projectTagsSchema,

      task: z.string().trim().min(1),

      links: z.array(z.url()).default([]),

      location: z.string().trim().min(1).optional(),

      theme: z
        .object({
          background: color,
          foreground: color,
          accent: color,
        })
        .optional(),

      content: z.string(),
    })
    // Prevents the end date from preceding the start date.
    .refine(
      (data) => {
        if (!data.startDate || !data.endDate) {
          return true;
        }

        return data.endDate >= data.startDate;
      },
      {
        error: "\x1b[31mendDate cannot be earlier than startDate\x1b[0m",
        path: ["endDate"],
      },
    ),

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
