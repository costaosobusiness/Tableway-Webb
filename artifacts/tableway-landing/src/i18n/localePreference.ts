import { LOCALE_STORAGE_KEY } from '@/i18n/localeLabels';
import { SUPPORTED_LOCALES, type SupportedLocale } from '@/i18n/types';

export function isSupportedLocale(value: string | null | undefined): value is SupportedLocale {
  return SUPPORTED_LOCALES.includes(value as SupportedLocale);
}

export function readStoredLocale(): SupportedLocale | null {
  if (typeof window === 'undefined') {
    return null;
  }

  const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  return isSupportedLocale(stored) ? stored : null;
}

export function readLocaleFromSearch(search: string): SupportedLocale | null {
  const params = new URLSearchParams(search);
  const lang = params.get('lang');
  return isSupportedLocale(lang) ? lang : null;
}

export function persistLocale(locale: SupportedLocale): void {
  window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
}

export function syncLocaleSearchParam(locale: SupportedLocale): void {
  const url = new URL(window.location.href);
  url.searchParams.set('lang', locale);
  window.history.replaceState(null, '', url.toString());
}
