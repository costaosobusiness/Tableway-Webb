export const SEO_LANDING_SLUGS = [
  'restaurant-booking-system',
  'restaurant-reservation-system',
  'restaurant-booking-software',
  'restaurant-reservation-software',
  'online-restaurant-reservations',
  'restaurant-booking-system-zero-commission',
] as const;

export type SeoLandingSlug = (typeof SEO_LANDING_SLUGS)[number];

export const SEO_PAGE_IDS = [
  'home',
  'about',
  'contact',
  'faq',
  'privacy',
  'terms',
  'compare',
  'howLinksWork',
  'download',
  'notFound',
  ...SEO_LANDING_SLUGS,
] as const;

export type SeoPageId = (typeof SEO_PAGE_IDS)[number];

export const SEO_PAGE_PATHS: Record<SeoPageId, string> = {
  home: '/',
  about: '/about',
  contact: '/contact',
  faq: '/faq',
  privacy: '/privacy-policy',
  terms: '/terms-of-service',
  compare: '/compare',
  howLinksWork: '/how-links-work',
  download: '/download',
  notFound: '/404',
  'restaurant-booking-system': '/restaurant-booking-system',
  'restaurant-reservation-system': '/restaurant-reservation-system',
  'restaurant-booking-software': '/restaurant-booking-software',
  'restaurant-reservation-software': '/restaurant-reservation-software',
  'online-restaurant-reservations': '/online-restaurant-reservations',
  'restaurant-booking-system-zero-commission': '/restaurant-booking-system-zero-commission',
};

export function isSeoLandingSlug(value: string): value is SeoLandingSlug {
  return SEO_LANDING_SLUGS.includes(value as SeoLandingSlug);
}
