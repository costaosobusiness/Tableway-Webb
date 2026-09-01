import { describe, expect, it } from 'vitest';

import { createTranslator } from '@/i18n/LocaleProvider';
import {
  buildHomePricingCards,
  HOME_PRICING_FEATURES,
  HOME_PRICING_PLAN_LAYOUT,
} from '@/lib/homePricingPlans';
import { getOfficialMarketPricingForLocale } from '@/lib/officialMarketPricing';

describe('home pricing plans', () => {
  const tEn = createTranslator('en-gb');
  const tAr = createTranslator('ar');

  it('renders four official billing intervals in order', () => {
    expect(HOME_PRICING_PLAN_LAYOUT.map((plan) => plan.slug)).toEqual(['monthly', '3m', '6m', '12m']);
    expect(HOME_PRICING_PLAN_LAYOUT.map((plan) => plan.name)).toEqual([
      '1 Month',
      '3 Months',
      '6 Months',
      '12 Months',
    ]);
  });

  it('uses locale pricing labels without hardcoded amounts', () => {
    const pricing = getOfficialMarketPricingForLocale('en-gb');
    const cards = buildHomePricingCards(pricing, tEn);

    expect(cards).toHaveLength(4);
    expect(cards[0]?.plan?.priceLabel).toBe('£25');
    expect(cards[1]?.plan?.priceLabel).toBe('£69');
    expect(cards[2]?.plan?.priceLabel).toBe('£129');
    expect(cards[3]?.plan?.priceLabel).toBe('£239');
    expect(cards.every((card) => card.currency === 'GBP')).toBe(true);
  });

  it('uses AED pricing and Arabic plan labels for ar locale', () => {
    const pricing = getOfficialMarketPricingForLocale('ar');
    const cards = buildHomePricingCards(pricing, tAr);

    expect(pricing.currency).toBe('AED');
    expect(cards[0]?.plan?.priceLabel).toBe('د.إ 129');
    expect(cards.map((card) => card.name)).toEqual(['شهر واحد', '٣ أشهر', '٦ أشهر', '١٢ شهرًا']);
  });

  it('uses identical features on every card and marks only 6 Months as Most Popular', () => {
    const pricing = getOfficialMarketPricingForLocale('en-us');
    const cards = buildHomePricingCards(pricing, tEn);

    expect(cards.every((card) => card.features.length === HOME_PRICING_FEATURES.length)).toBe(true);
    expect(HOME_PRICING_FEATURES).toHaveLength(12);
    expect(HOME_PRICING_FEATURES.at(-1)).toBe('30-day free trial');
    expect(cards.filter((card) => card.badge).map((card) => card.name)).toEqual(['6 Months']);
  });
});
