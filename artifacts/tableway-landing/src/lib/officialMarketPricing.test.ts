import { describe, expect, it } from 'vitest';

import type { SupportedLocale } from '@/i18n/types';
import {
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
});
