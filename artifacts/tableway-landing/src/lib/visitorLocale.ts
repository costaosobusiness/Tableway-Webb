import type { SupportedLocale } from '@/i18n/types';

/** Country ISO code → marketing site locale. Unknown countries fall back to English. */
const COUNTRY_TO_LOCALE: Record<string, SupportedLocale> = {
  ES: 'es',
  SE: 'sv',
  DE: 'de',
  FR: 'fr',
  GB: 'en',
  US: 'en',
  NO: 'nb',
  DK: 'da',
  CH: 'de',
  CA: 'en',
  AU: 'en',
  NZ: 'en',
  JP: 'en',
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
    return 'en';
  }

  return COUNTRY_TO_LOCALE[normalized] ?? 'en';
}
