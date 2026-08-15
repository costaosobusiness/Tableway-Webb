import { createContext, useContext, useEffect, useMemo, type ReactNode } from 'react';

import { useVisitorMarket } from '@/hooks/useVisitorMarket';
import { da } from '@/i18n/locales/da';
import { de } from '@/i18n/locales/de';
import { en } from '@/i18n/locales/en';
import { es } from '@/i18n/locales/es';
import { fr } from '@/i18n/locales/fr';
import { nb } from '@/i18n/locales/nb';
import { sv } from '@/i18n/locales/sv';
import type { LandingTranslationKey, LocaleDictionary, SupportedLocale } from '@/i18n/types';
import { resolveLocaleFromCountry } from '@/lib/visitorLocale';

const LOCALE_DICTIONARIES: Record<SupportedLocale, LocaleDictionary> = {
  en,
  es,
  de,
  fr,
  sv,
  nb,
  da,
};

type LocaleContextValue = {
  locale: SupportedLocale;
  detectedCountry: string | null;
  t: (key: LandingTranslationKey) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function createTranslator(locale: SupportedLocale): (key: LandingTranslationKey) => string {
  const dictionary = LOCALE_DICTIONARIES[locale];
  const fallback = LOCALE_DICTIONARIES.en;

  return (key: LandingTranslationKey) => {
    const value = dictionary[key]?.trim();
    if (value) {
      return value;
    }

    return fallback[key] ?? key;
  };
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const { detectedCountry } = useVisitorMarket();
  const locale = resolveLocaleFromCountry(detectedCountry);

  const t = useMemo(() => createTranslator(locale), [locale]);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      detectedCountry,
      t,
    }),
    [locale, detectedCountry, t],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useTranslation(): LocaleContextValue {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useTranslation must be used within LocaleProvider');
  }

  return context;
}

export { LOCALE_DICTIONARIES };
