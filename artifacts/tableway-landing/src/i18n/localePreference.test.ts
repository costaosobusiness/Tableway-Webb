import { describe, expect, it } from 'vitest';

import { normalizeLocale } from '@/i18n/localePreference';

describe('normalizeLocale', () => {
  it('accepts supported locales', () => {
    expect(normalizeLocale('en-gb')).toBe('en-gb');
    expect(normalizeLocale('en-us')).toBe('en-us');
    expect(normalizeLocale('ja')).toBe('ja');
  });

  it('maps legacy en to en-gb', () => {
    expect(normalizeLocale('en')).toBe('en-gb');
  });

  it('returns null for unknown values', () => {
    expect(normalizeLocale('fr-CA')).toBeNull();
    expect(normalizeLocale(null)).toBeNull();
  });
});
