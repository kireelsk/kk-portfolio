import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import { withContentCollections } from "@content-collections/next";

const mediaUrl = process.env.NEXT_PUBLIC_MEDIA_URL;

const nextConfig: NextConfig = {
  allowedDevOrigins: process.env.DEV_ALLOWED_ORIGIN?.split(",") ?? [],

  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],

  images: mediaUrl
    ? {
        remotePatterns: [
          {
            protocol: "https",
            hostname: new URL(mediaUrl).hostname,
          },
        ],
      }
    : undefined,
};

const widthMDX = createMDX({});

export default withContentCollections(widthMDX(nextConfig));
