import type { BillingPlanSlug, PublicMarketPricing } from '@/lib/visitorMarket.types';
import type { SupportedLocale } from '@/i18n/types';

const PLAN_SLUGS: BillingPlanSlug[] = ['monthly', '3m', '6m', '12m'];
const PLAN_LABELS = ['Monthly', '3 Months', '6 Months', '12 Months'] as const;

type MarketTemplate = {
  marketId: string;
  currency: string;
  priceLabels: [string, string, string, string];
  amounts: [number, number, number, number];
};

const MARKET_TEMPLATES: Record<string, MarketTemplate> = {
  EUR: {
    marketId: 'eur',
    currency: 'EUR',
    priceLabels: ['€29', '€79', '€149', '€279'],
    amounts: [29, 79, 149, 279],
  },
  SEK: {
    marketId: 'sek',
    currency: 'SEK',
    priceLabels: ['299 kr', '799 kr', '1,499 kr', '2,799 kr'],
    amounts: [299, 799, 1499, 2799],
  },
  NOK: {
    marketId: 'nok',
    currency: 'NOK',
    priceLabels: ['299 kr', '799 kr', '1,499 kr', '2,799 kr'],
    amounts: [299, 799, 1499, 2799],
  },
  DKK: {
    marketId: 'dkk',
    currency: 'DKK',
    priceLabels: ['219 kr', '599 kr', '1,129 kr', '2,099 kr'],
    amounts: [219, 599, 1129, 2099],
  },
  GBP: {
    marketId: 'gbp',
    currency: 'GBP',
    priceLabels: ['£25', '£69', '£129', '£239'],
    amounts: [25, 69, 129, 239],
  },
  JPY: {
    marketId: 'jpy',
    currency: 'JPY',
    priceLabels: ['¥4,980', '¥13,980', '¥26,980', '¥49,800'],
    amounts: [4980, 13980, 26980, 49800],
  },
};

const COUNTRY_TO_TEMPLATE: Record<string, keyof typeof MARKET_TEMPLATES> = {
  ES: 'EUR',
  DE: 'EUR',
  FR: 'EUR',
  SE: 'SEK',
  NO: 'NOK',
  DK: 'DKK',
  GB: 'GBP',
  JP: 'JPY',
};

/** Marketing locale → pricing country (V1.0 market mapping). */
export const LOCALE_TO_PRICING_COUNTRY: Record<SupportedLocale, string> = {
  en: 'GB',
  sv: 'SE',
  es: 'ES',
  de: 'DE',
  fr: 'FR',
  nb: 'NO',
  da: 'DK',
  ja: 'JP',
};

export function resolvePricingCountryFromLocale(locale: SupportedLocale): string {
  return LOCALE_TO_PRICING_COUNTRY[locale];
}

function buildMarketPricing(templateKey: keyof typeof MARKET_TEMPLATES, country: string | null): PublicMarketPricing {
  const template = MARKET_TEMPLATES[templateKey];

  return {
    marketId: template.marketId,
    currency: template.currency,
    country,
    plans: PLAN_SLUGS.map((interval, index) => ({
      interval,
      label: PLAN_LABELS[index],
      priceLabel: template.priceLabels[index],
      effectiveMonthlyLabel: template.priceLabels[index],
      amount: template.amounts[index],
    })),
  };
}

/** Official TableWay V1.0 marketing pricing by ISO country code. Unknown countries use EUR. */
export function getOfficialMarketPricing(country: string | null | undefined): PublicMarketPricing {
  const normalized = country?.trim().toUpperCase() ?? null;
  const templateKey = normalized ? COUNTRY_TO_TEMPLATE[normalized] ?? 'EUR' : 'EUR';

  return buildMarketPricing(templateKey, normalized);
}

export function getOfficialMarketPricingForLocale(locale: SupportedLocale): PublicMarketPricing {
  const country = resolvePricingCountryFromLocale(locale);
  return getOfficialMarketPricing(country);
}
