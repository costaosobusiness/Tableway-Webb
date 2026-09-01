import { ar } from '@/i18n/locales/ar';
import { da } from '@/i18n/locales/da';
import { de } from '@/i18n/locales/de';
import { en } from '@/i18n/locales/en';
import { es } from '@/i18n/locales/es';
import { fr } from '@/i18n/locales/fr';
import { ja } from '@/i18n/locales/ja';
import { nb } from '@/i18n/locales/nb';
import { sv } from '@/i18n/locales/sv';
import type { LocaleDictionary, SupportedLocale } from '@/i18n/types';

/** Each supported locale maps to its own complete dictionary module. */
export const LOCALE_LOADERS: Record<SupportedLocale, LocaleDictionary> = {
  'en-gb': en,
  'en-us': en,
  es,
  de,
  fr,
  sv,
  nb,
  da,
  ja,
  ar,
};
