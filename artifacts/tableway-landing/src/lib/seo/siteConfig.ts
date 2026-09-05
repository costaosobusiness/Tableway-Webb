import { SUPPORTED_LOCALES, type SupportedLocale } from '@/i18n/types';

export const SEO_SITE_URL = 'https://tableway.app';

export const SEO_OG_IMAGE = `${SEO_SITE_URL}/images/tableway.webp`;

export const SEO_OG_IMAGE_WIDTH = 1200;

export const SEO_OG_IMAGE_HEIGHT = 630;

export const SEO_OG_IMAGE_ALT = 'TableWay restaurant reservation and booking software';

export const SEO_LOGO_URL = `${SEO_SITE_URL}/images/tableway.webp`;

export const SEO_ORGANIZATION_NAME = 'TableWay';

export const SEO_HREFLANG_LOCALES = SUPPORTED_LOCALES;

export type SeoHreflangLocale = SupportedLocale;

export const SEO_DEFAULT_LOCALE: SeoHreflangLocale = 'en-gb';

export const SEO_OG_LOCALE_MAP: Record<SeoHreflangLocale, string> = {
  'en-gb': 'en_GB',
  'en-us': 'en_US',
  es: 'es_ES',
  de: 'de_DE',
  fr: 'fr_FR',
  sv: 'sv_SE',
  nb: 'nb_NO',
  da: 'da_DK',
  ja: 'ja_JP',
  ar: 'ar_AE',
};

export function resolveSeoLocale(locale: string): SeoHreflangLocale {
  if (SEO_HREFLANG_LOCALES.includes(locale as SeoHreflangLocale)) {
    return locale as SeoHreflangLocale;
  }

  return SEO_DEFAULT_LOCALE;
}
