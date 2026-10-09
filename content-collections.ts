import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { z } from "zod";
import { projectTagSchema } from "./src/lib/project-tags";

const projects = defineCollection({
  name: "projects",
  directory: "content/projects",
  include: "*.mdx",

  schema: z
    .object({
      title: z.string().trim().min(1),
      description: z.string().trim().min(1),
      client: z.string().trim().min(1).optional(),

      type: z.enum(["commercial", "personal"]),
      tags: z.array(projectTagSchema).min(1),

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
        message: "\x1b[31mendDate cannot be earlier than startDate\x1b[0m",
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
