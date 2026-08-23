import { LOCALE_STORAGE_KEY } from '@/i18n/localeLabels';
import { SUPPORTED_LOCALES, type SupportedLocale } from '@/i18n/types';

const LEGACY_LOCALE_ALIASES: Record<string, SupportedLocale> = {
  en: 'en-gb',
};

export function normalizeLocale(value: string | null | undefined): SupportedLocale | null {
  if (!value) {
    return null;
  }

  if (SUPPORTED_LOCALES.includes(value as SupportedLocale)) {
    return value as SupportedLocale;
  }

  return LEGACY_LOCALE_ALIASES[value] ?? null;
}

export function isSupportedLocale(value: string | null | undefined): value is SupportedLocale {
  return normalizeLocale(value) !== null;
}

export function readStoredLocale(): SupportedLocale | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  return normalizeLocale(stored);
}

export function readLocaleFromSearch(search: string): SupportedLocale | null {
  const params = new URLSearchParams(search);
  const lang = params.get('lang');
  return normalizeLocale(lang);
}

export function persistLocale(locale: SupportedLocale): void {
  window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
}

export function syncLocaleSearchParam(locale: SupportedLocale): void {
  const url = new URL(window.location.href);
  url.searchParams.set('lang', locale);
  window.history.replaceState(null, '', url.toString());
}
