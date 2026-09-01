import type { SupportedLocale } from '@/i18n/types';

/** Country ISO code → marketing site locale. Unknown countries fall back to English. */
const COUNTRY_TO_LOCALE: Record<string, SupportedLocale> = {
  ES: 'es',
  SE: 'sv',
  DE: 'de',
  FR: 'fr',
  GB: 'en-gb',
  US: 'en-us',
  NO: 'nb',
  DK: 'da',
  CH: 'de',
  CA: 'en-us',
  AU: 'en-us',
  NZ: 'en-us',
  JP: 'ja',
  AE: 'ar',
};

export function normalizeCountryForLocale(country: string | null | undefined): string | null {
  if (!country) {
    return null;
  }

  const normalized = country.trim().toUpperCase();
  return normalized.length === 2 ? normalized : null;
}

export function resolveLocaleFromCountry(country: string | null | undefined): SupportedLocale {
  const normalized = normalizeCountryForLocale(country);
  if (!normalized) {
    return 'en-gb';
  }

  return COUNTRY_TO_LOCALE[normalized] ?? 'en-gb';
}
