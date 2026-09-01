export const SEO_SITE_URL = 'https://tableway.app';

export const SEO_OG_IMAGE = `${SEO_SITE_URL}/images/tableway.webp`;

export const SEO_LOGO_URL = `${SEO_SITE_URL}/images/tableway.webp`;

export const SEO_ORGANIZATION_NAME = 'TableWay';

export const SEO_HREFLANG_LOCALES = ['en-gb', 'en-us', 'es', 'de', 'sv', 'ja'] as const;

export type SeoHreflangLocale = (typeof SEO_HREFLANG_LOCALES)[number];

export const SEO_DEFAULT_LOCALE: SeoHreflangLocale = 'en-gb';

export function resolveSeoLocale(locale: string): SeoHreflangLocale {
  if (SEO_HREFLANG_LOCALES.includes(locale as SeoHreflangLocale)) {
    return locale as SeoHreflangLocale;
  }

  return SEO_DEFAULT_LOCALE;
}
