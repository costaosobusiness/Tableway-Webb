import { describe, expect, it } from 'vitest';

import { normalizeCountryForLocale, resolveLocaleFromCountry } from '@/lib/visitorLocale';

describe('resolveLocaleFromCountry', () => {
  it.each([
    ['ES', 'es'],
    ['SE', 'sv'],
    ['DE', 'de'],
    ['FR', 'fr'],
    ['GB', 'en-gb'],
    ['US', 'en-us'],
    ['NO', 'nb'],
    ['DK', 'da'],
    ['CH', 'de'],
    ['CA', 'en-us'],
    ['AU', 'en-us'],
    ['NZ', 'en-us'],
    ['JP', 'ja'],
    ['BR', 'en-gb'],
  ] as const)('maps %s to %s', (country, locale) => {
    expect(resolveLocaleFromCountry(country)).toBe(locale);
  });

  it('returns English (GB) for null country', () => {
    expect(resolveLocaleFromCountry(null)).toBe('en-gb');
  });

  it('returns English (GB) for undefined country', () => {
    expect(resolveLocaleFromCountry(undefined)).toBe('en-gb');
  });

  it('normalizes lowercase country codes', () => {
    expect(resolveLocaleFromCountry('es')).toBe('es');
    expect(resolveLocaleFromCountry('  se ')).toBe('sv');
  });

  it('returns English (GB) for invalid country codes', () => {
    expect(resolveLocaleFromCountry('')).toBe('en-gb');
    expect(resolveLocaleFromCountry('ESP')).toBe('en-gb');
  });

  it('maps Switzerland to German', () => {
    expect(resolveLocaleFromCountry('CH')).toBe('de');
  });
});

describe('normalizeCountryForLocale', () => {
  it('normalizes lowercase codes to uppercase', () => {
    expect(normalizeCountryForLocale('de')).toBe('DE');
  });

  it('returns null for empty input', () => {
    expect(normalizeCountryForLocale(null)).toBeNull();
    expect(normalizeCountryForLocale('')).toBeNull();
  });
});
