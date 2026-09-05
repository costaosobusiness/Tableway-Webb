/** Homepage image paths. */
export const HOME_IMAGES = {
  hero: "/images/new.webp",
  desktop: "/images/new1.webp",
  mobile: "/images/new2.webp",
  channels: "/images/new6.png",
  logo: "/images/tableway.webp",
} as const;

/** Intrinsic dimensions used for layout stability (width/height attributes). */
export const HOME_IMAGE_DIMENSIONS = {
  hero: { width: 1920, height: 1080 },
  desktop: { width: 1440, height: 900 },
  mobile: { width: 960, height: 1200 },
  channels: { width: 1400, height: 900 },
  logo: { width: 512, height: 512 },
  about: { width: 1200, height: 800 },
} as const;
