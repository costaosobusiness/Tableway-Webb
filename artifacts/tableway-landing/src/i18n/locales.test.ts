import { describe, expect, it } from 'vitest';

import { createTranslator, LOCALE_DICTIONARIES } from '@/i18n/LocaleProvider';
import { LANDING_TRANSLATION_KEYS, SUPPORTED_LOCALES } from '@/i18n/types';

describe('landing locale dictionaries', () => {
  it.each(SUPPORTED_LOCALES)('includes all required keys in %s', (locale) => {
    const dictionary = LOCALE_DICTIONARIES[locale];

    for (const key of LANDING_TRANSLATION_KEYS) {
      expect(dictionary[key], `${locale} missing ${key}`).toBeTruthy();
    }
  });

  it('falls back to English for missing keys in a locale dictionary', () => {
    const t = createTranslator('es');
    expect(t('nav.features')).toBe('Funciones');
  });

  it('never returns blank text for English keys', () => {
    const t = createTranslator('en-gb');

    for (const key of LANDING_TRANSLATION_KEYS) {
      expect(t(key).trim().length).toBeGreaterThan(0);
    }
  });

  it('falls back to English when a key is absent from a non-English dictionary', () => {
    const brokenLocale = {
      ...LOCALE_DICTIONARIES.es,
      'nav.features': '',
    };

    const t = (key: typeof LANDING_TRANSLATION_KEYS[number]) =>
      brokenLocale[key] || LOCALE_DICTIONARIES['en-gb'][key] || key;

    expect(t('nav.features')).toBe('Features');
  });
});

describe('createTranslator', () => {
  it('returns German copy for German locale', () => {
    const t = createTranslator('de');
    expect(t('hero.headlineLine1')).toBe('Reservierungen');
    expect(t('hero.headlineLine2')).toBe('Einfach gemacht.');
  });

  it('returns Norwegian Bokmål copy for nb locale', () => {
    const t = createTranslator('nb');
    expect(t('nav.logIn')).toBe('Logg inn');
  });

  it('returns Japanese copy for ja locale', () => {
    const t = createTranslator('ja');
    expect(t('hero.headlineLine1')).toBe('予約');
    expect(t('hero.headlineLine2')).toBe('シンプルに。');
    expect(t('nav.features')).toBe('機能');
  });

  it('returns English copy for both English locale variants', () => {
    const gb = createTranslator('en-gb');
    const us = createTranslator('en-us');
    expect(gb('nav.features')).toBe('Features');
    expect(us('nav.features')).toBe('Features');
  });
});
