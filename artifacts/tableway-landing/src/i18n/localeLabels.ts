import type { SupportedLocale } from '@/i18n/types';

export const LOCALE_STORAGE_KEY = 'tableway-locale';

export const LOCALE_LABELS: Record<SupportedLocale, string> = {
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
  fr: 'Français',
  sv: 'Svenska',
  nb: 'Norsk',
  da: 'Dansk',
  ja: '日本語',
};
