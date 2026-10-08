"use client";

import Image from "next/image";
import { useState } from "react";
import { getMediaUrl } from "@/lib/media";

type CoverProps = {
  project: {
    _meta: {
      path: string;
    };
  };
  loading?: "eager" | "lazy";
  variant: "horizontal" | "vertical";
  sizes?: string;
  className?: string;
};

const dimensions = {
  horizontal: { width: 1600, height: 900 },
  vertical: { width: 800, height: 1200 },
};

const defaultSizes = {
  horizontal: "(min-width: 768px) 67vw, 100vw",
  vertical: "(min-width: 768px) 25vw, 100vw",
};

/**
 * Displays a project cover with a gray fallback.
 */
export function ProjectCover({
  project,
  variant,
  loading = "lazy",
  sizes,
  className = "",
}: CoverProps) {
  const [hasError, setHasError] = useState(false);
  const { width, height } = dimensions[variant];

  const src = getMediaUrl(
    `projects/${project._meta.path}/cover-${variant}.webp`,
  );

  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative w-full overflow-hidden ${
        hasError ? "bg-neutral-700" : ""
      } ${className}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {!hasError && (
        <Image
          src={src}
          alt=""
          fill
          sizes={sizes ?? defaultSizes[variant]}
          className={`object-cover transition-opacity duration-200 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading={loading}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}
