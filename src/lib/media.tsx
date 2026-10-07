// Builds public media URLs from the configured asset host.

export function getMediaUrl(path: string) {
  const mediaUrl = process.env.NEXT_PUBLIC_MEDIA_URL;

  if (mediaUrl) {
    return `${mediaUrl}/${path}`;
  }

  return `/media/${path}`;
}
