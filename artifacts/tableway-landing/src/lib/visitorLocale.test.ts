import { describe, expect, it } from 'vitest';

import { normalizeCountryForLocale, resolveLocaleFromCountry } from '@/lib/visitorLocale';

describe('resolveLocaleFromCountry', () => {
  it.each([
    ['ES', 'es'],
    ['SE', 'sv'],
    ['DE', 'de'],
    ['FR', 'fr'],
    ['GB', 'en'],
    ['US', 'en'],
    ['NO', 'nb'],
    ['DK', 'da'],
    ['CH', 'de'],
    ['CA', 'en'],
    ['AU', 'en'],
    ['NZ', 'en'],
    ['JP', 'en'],
    ['BR', 'en'],
  ] as const)('maps %s to %s', (country, locale) => {
    expect(resolveLocaleFromCountry(country)).toBe(locale);
  });

  it('returns English for null country', () => {
    expect(resolveLocaleFromCountry(null)).toBe('en');
  });

  it('returns English for undefined country', () => {
    expect(resolveLocaleFromCountry(undefined)).toBe('en');
  });

  it('normalizes lowercase country codes', () => {
    expect(resolveLocaleFromCountry('es')).toBe('es');
    expect(resolveLocaleFromCountry('  se ')).toBe('sv');
  });

  it('returns English for invalid country codes', () => {
    expect(resolveLocaleFromCountry('')).toBe('en');
    expect(resolveLocaleFromCountry('ESP')).toBe('en');
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
