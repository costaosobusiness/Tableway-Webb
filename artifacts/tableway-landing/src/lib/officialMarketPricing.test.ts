import { describe, expect, it } from 'vitest';

import type { SupportedLocale } from '@/i18n/types';
import {
  formatLocaleZeroCommission,
  getAnnualSavingsDisplay,
  getAnnualSavingsForCountry,
  getCompareCountryPricing,
  getDashboardPricingDisplay,
  getOfficialMarketPricing,
  getOfficialMarketPricingForLocale,
  resolvePricingCountryFromLocale,
} from '@/lib/officialMarketPricing';

describe('official TableWay V1.0 pricing', () => {
  it.each([
    ['en-gb', 'GB', 'GBP', '£25', '£69', '£129', '£239'],
    ['en-us', 'US', 'USD', '$34', '$94', '$174', '$329'],
    ['sv', 'SE', 'SEK', '299 kr', '799 kr', '1,499 kr', '2,799 kr'],
    ['es', 'ES', 'EUR', '€29', '€79', '€149', '€279'],
    ['de', 'DE', 'EUR', '€29', '€79', '€149', '€279'],
    ['fr', 'FR', 'EUR', '€29', '€79', '€149', '€279'],
    ['nb', 'NO', 'NOK', '299 kr', '799 kr', '1,499 kr', '2,799 kr'],
    ['da', 'DK', 'DKK', '219 kr', '599 kr', '1,129 kr', '2,099 kr'],
    ['ja', 'JP', 'JPY', '¥4,980', '¥13,980', '¥26,980', '¥49,800'],
    ['ar', 'AE', 'AED', 'د.إ 129', 'د.إ 349', 'د.إ 649', 'د.إ 1,149'],
  ] as const)(
    'locale %s maps to %s (%s) with official price labels',
    (locale, country, currency, monthly, threeMonths, sixMonths, twelveMonths) => {
      expect(resolvePricingCountryFromLocale(locale)).toBe(country);

      const pricing = getOfficialMarketPricingForLocale(locale as SupportedLocale);
      expect(pricing.currency).toBe(currency);
      expect(pricing.country).toBe(country);
      expect(pricing.plans.map((plan) => plan.priceLabel)).toEqual([
        monthly,
        threeMonths,
        sixMonths,
        twelveMonths,
      ]);
    },
  );

  it('falls back to EUR for unknown countries', () => {
    const pricing = getOfficialMarketPricing('BR');
    expect(pricing.currency).toBe('EUR');
    expect(pricing.plans[0]?.priceLabel).toBe('€29');
  });

  it('falls back to EUR when country is null', () => {
    const pricing = getOfficialMarketPricing(null);
    expect(pricing.currency).toBe('EUR');
    expect(pricing.country).toBeNull();
  });

  it('preserves monthly / 3m / 6m / 12m plan slugs', () => {
    const pricing = getOfficialMarketPricingForLocale('en-gb');
    expect(pricing.plans.map((plan) => plan.interval)).toEqual(['monthly', '3m', '6m', '12m']);
  });

  it('builds locale-aware dashboard teaser stats from official pricing', () => {
    const t = (key: string) =>
      ({
        'site.dashboard.traditionalPrefix': 'Traditional systems:',
        'site.dashboard.tablewayPrefix': 'TableWay:',
        'site.dashboard.perMonth': '/month',
        'site.dashboard.savePrefix': 'Save up to',
        'site.dashboard.saveSuffix': ' per year.',
        'cmp.yearly.statPrefix': 'Save up to',
        'cmp.yearly.statSuffix': ' every year.',
      })[key] ?? key;

    expect(getDashboardPricingDisplay('en-gb', t)).toEqual({
      traditional: 'Traditional systems: £149–299/month',
      tableway: 'TableWay: £25/month',
    });

    expect(getDashboardPricingDisplay('sv', t)).toEqual({
      traditional: 'Traditional systems: 149–299 kr/month',
      tableway: 'TableWay: 299 kr/month',
    });

    expect(getDashboardPricingDisplay('ar', t)).toEqual({
      traditional: 'Traditional systems: د.إ 300–900/month',
      tableway: 'TableWay: د.إ 129/month',
    });

    expect(getAnnualSavingsDisplay('en-gb', t, 'compare')).toBe(
      'Save up to £2,949 every year.',
    );
    expect(getAnnualSavingsDisplay('sv', t, 'compare')).toBe('Save up to 31,000 kr every year.');
    expect(getAnnualSavingsDisplay('ar', t, 'compare')).toBe('Save up to د.إ 9,651 every year.');
    expect(getAnnualSavingsForCountry('GB', 'en-gb', t, 'compare')).toBe(
      'Save up to £2,949 every year.',
    );
    expect(getAnnualSavingsForCountry('SE', 'sv', t, 'compare')).toBe(
      'Save up to 31,000 kr every year.',
    );
    expect(getCompareCountryPricing('GB', 'en-gb').plans[0]?.priceLabel).toBe('£25');
    expect(getCompareCountryPricing('DE', 'en-gb').plans[0]?.priceLabel).toBe('€29');

    const tSuffixWithoutLeadingSpace = (key: string) =>
      ({
        'cmp.yearly.statPrefix': 'Save up to',
        'cmp.yearly.statSuffix': 'every year.',
      })[key] ?? key;
    expect(getAnnualSavingsDisplay('en-gb', tSuffixWithoutLeadingSpace, 'compare')).toBe(
      'Save up to £2,949 every year.',
    );

    expect(formatLocaleZeroCommission('en-gb')).toBe('£0');
    expect(formatLocaleZeroCommission('ar')).toBe('د.إ 0');
  });
});
