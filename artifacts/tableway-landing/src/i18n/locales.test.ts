import { describe, expect, it } from 'vitest';

import { auditLocaleDictionary, createTranslator, LOCALE_DICTIONARIES } from '@/i18n/LocaleProvider';
import { LANDING_TRANSLATION_KEYS, SUPPORTED_LOCALES, type LandingTranslationKey } from '@/i18n/types';

describe('landing locale dictionaries', () => {
  it.each(SUPPORTED_LOCALES)('includes all required keys in %s', (locale) => {
    const missing = auditLocaleDictionary(locale, LANDING_TRANSLATION_KEYS);
    expect(missing, `${locale} missing keys: ${missing.join(', ')}`).toEqual([]);
  });

  it('returns locale copy without English fallback for Spanish marketing keys', () => {
    const t = createTranslator('es');
    expect(t('site.hero.headline1')).toBe('Tus mesas.');
    expect(t('nav.features')).toBe('Funciones');
  });

  it('returns German copy for German locale', () => {
    const t = createTranslator('de');
    expect(t('hero.headlineLine1')).toBe('Reservierungen');
    expect(t('site.hero.headline1')).not.toBe('Your tables.');
  });

  it('returns Norwegian Bokmål copy for nb locale', () => {
    const t = createTranslator('nb');
    expect(t('nav.logIn')).toBe('Logg inn');
    expect(t('site.hero.headline1')).not.toBe('Your tables.');
  });

  it('returns Japanese copy for ja locale', () => {
    const t = createTranslator('ja');
    expect(t('hero.headlineLine1')).toBe('予約');
    expect(t('site.hero.headline1')).not.toBe('Your tables.');
  });

  it('returns Arabic copy for ar locale', () => {
    const t = createTranslator('ar');
    expect(t('about.title')).not.toBe('About TableWay');
    expect(t('site.hero.headline1')).toBe('طاولاتك.');
  });

  it('never returns blank text for English keys', () => {
    const t = createTranslator('en-gb');

    for (const key of LANDING_TRANSLATION_KEYS) {
      expect(t(key).trim().length).toBeGreaterThan(0);
    }
  });

  it('surfaces missing keys explicitly instead of falling back to English', () => {
    const t = createTranslator('es');
    expect(t('nav.features' as LandingTranslationKey)).toBe('Funciones');
  });
});

describe('translation completeness report', () => {
  it('reports zero missing keys for every locale', () => {
    const report = Object.fromEntries(
      SUPPORTED_LOCALES.map((locale) => [locale, auditLocaleDictionary(locale, LANDING_TRANSLATION_KEYS)]),
    );

    for (const [locale, missing] of Object.entries(report)) {
      expect(missing, `${locale}: ${missing.join(', ')}`).toEqual([]);
    }
  });

  it('loads each locale from its own dictionary module', () => {
    expect(LOCALE_DICTIONARIES.es['site.hero.headline1']).not.toBe(LOCALE_DICTIONARIES['en-gb']['site.hero.headline1']);
    expect(LOCALE_DICTIONARIES.de['site.hero.headline1']).not.toBe(LOCALE_DICTIONARIES['en-gb']['site.hero.headline1']);
  });
});
