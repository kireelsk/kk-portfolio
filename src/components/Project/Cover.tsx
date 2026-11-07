"use client";

import Image from "next/image";
import { useState } from "react";
import { getMediaUrl } from "@/lib/media";

type CoverProps = {
  slug: string;
  loading?: "eager" | "lazy";
  variant: "horizontal" | "vertical";
  sizes?: string;
  className?: string;
};

const defaultSizes = {
  horizontal: "(min-width: 768px) 67vw, 100vw",
  vertical: "(min-width: 768px) 25vw, 100vw",
};

/**
 * Displays a project cover with a gray fallback.
 */
export function ProjectCover({
  slug,
  loading = "lazy",
  variant,
  sizes,
  className = "",
}: CoverProps) {
  const [hasError, setHasError] = useState(false);

  const src = getMediaUrl(`projects/${slug}/cover-${variant}.webp`);

  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative w-full overflow-hidden ${
        variant === "horizontal" ? "aspect-4/3" : "aspect-4/5"
      } ${hasError ? "bg-neutral-700" : ""} ${className}`}
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
