import type { MetadataRoute } from "next";
import { getWebsiteConfig } from "@/lib/website";

export default function manifest(): MetadataRoute.Manifest {
  const website = getWebsiteConfig();

  return {
    name: website.name,
    short_name: website.name,
    description: website.metadata.description,
    start_url: "/",
    display: "browser",
    background_color: "#fafaf9",
    theme_color: "#fafaf9",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
