import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

import { useVisitorMarket } from '@/hooks/useVisitorMarket';
import { LOCALE_LOADERS } from '@/i18n/localeLoaders';
import {
  persistLocale,
  readLocaleFromSearch,
  readStoredLocale,
  syncLocaleSearchParam,
} from '@/i18n/localePreference';
import type { LandingTranslationKey, LocaleDictionary, SupportedLocale } from '@/i18n/types';
import { isRtlLocale } from '@/i18n/types';
import { resolveLocaleFromCountry } from '@/lib/visitorLocale';

function htmlLangFromLocale(locale: SupportedLocale): string {
  if (locale === 'en-gb') {
    return 'en-GB';
  }

  if (locale === 'en-us') {
    return 'en-US';
  }

  if (locale === 'ar') {
    return 'ar-AE';
  }

  return locale;
}

type LocaleContextValue = {
  locale: SupportedLocale;
  detectedCountry: string | null;
  setLocale: (locale: SupportedLocale) => void;
  t: (key: LandingTranslationKey) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function createTranslator(locale: SupportedLocale): (key: LandingTranslationKey) => string {
  const dictionary = LOCALE_LOADERS[locale];

  return (key: LandingTranslationKey) => {
    const value = dictionary[key]?.trim();
    if (value) {
      return value;
    }

    return `[missing:${locale}:${key}]`;
  };
}

function resolveInitialLocaleOverride(): SupportedLocale | null {
  if (typeof window === 'undefined') {
    return null;
  }

  return readLocaleFromSearch(window.location.search) ?? readStoredLocale();
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const { detectedCountry } = useVisitorMarket();
  const detectedLocale = resolveLocaleFromCountry(detectedCountry);
  const [localeOverride, setLocaleOverride] = useState<SupportedLocale | null>(resolveInitialLocaleOverride);
  const locale = localeOverride ?? detectedLocale;

  const t = useMemo(() => createTranslator(locale), [locale]);

  useEffect(() => {
    document.documentElement.lang = htmlLangFromLocale(locale);
    document.documentElement.dir = isRtlLocale(locale) ? 'rtl' : 'ltr';
  }, [locale]);

  const setLocale = (nextLocale: SupportedLocale) => {
    setLocaleOverride(nextLocale);
    persistLocale(nextLocale);
    syncLocaleSearchParam(nextLocale);
  };

  const value = useMemo(
    () => ({
      locale,
      detectedCountry,
      setLocale,
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

export { LOCALE_LOADERS as LOCALE_DICTIONARIES };

export function auditLocaleDictionary(locale: SupportedLocale, keys: LandingTranslationKey[]): LandingTranslationKey[] {
  const dictionary = LOCALE_LOADERS[locale] as LocaleDictionary;
  return keys.filter((key) => !dictionary[key]?.trim());
}
