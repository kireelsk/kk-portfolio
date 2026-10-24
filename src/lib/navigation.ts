import { z } from "zod";

export const navigationIDSchema = z.enum([
  "about",
  "selected-works",
  "all-projects",
  "contacts",
]);

export const navigationTargets: Record<
  z.infer<typeof navigationIDSchema>,
  string
> = {
  about: "/#about",
  "selected-works": "/#selected-works",
  "all-projects": "/projects",
  contacts: "/#contacts",
};
