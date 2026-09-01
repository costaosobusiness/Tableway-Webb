import type { BillingPlanSlug, PublicMarketPricing } from '@/lib/visitorMarket.types';
import type { LandingTranslationKey, SupportedLocale } from '@/i18n/types';

const PLAN_SLUGS: BillingPlanSlug[] = ['monthly', '3m', '6m', '12m'];
const PLAN_LABELS = ['Monthly', '3 Months', '6 Months', '12 Months'] as const;
const AED_ARABIC_SYMBOL = 'د.إ ';

function isArabicLocale(locale: SupportedLocale): boolean {
  return locale === 'ar';
}

function formatAedMarketingLabel(amount: number, useArabicSymbol: boolean): string {
  const symbol = useArabicSymbol ? AED_ARABIC_SYMBOL : 'AED ';
  return `${symbol}${amount.toLocaleString('en-US')}`;
}

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
  USD: {
    marketId: 'usd',
    currency: 'USD',
    priceLabels: ['$34', '$94', '$174', '$329'],
    amounts: [34, 94, 174, 329],
  },
  JPY: {
    marketId: 'jpy',
    currency: 'JPY',
    priceLabels: ['¥4,980', '¥13,980', '¥26,980', '¥49,800'],
    amounts: [4980, 13980, 26980, 49800],
  },
  AED: {
    marketId: 'aed',
    currency: 'AED',
    priceLabels: ['AED 129', 'AED 349', 'AED 649', 'AED 1,149'],
    amounts: [129, 349, 649, 1149],
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
  US: 'USD',
  JP: 'JPY',
  AE: 'AED',
};

/** Marketing locale → pricing country (V1.0 market mapping). */
export const LOCALE_TO_PRICING_COUNTRY: Record<SupportedLocale, string> = {
  'en-gb': 'GB',
  'en-us': 'US',
  sv: 'SE',
  es: 'ES',
  de: 'DE',
  fr: 'FR',
  nb: 'NO',
  da: 'DK',
  ja: 'JP',
  ar: 'AE',
};

export function resolvePricingCountryFromLocale(locale: SupportedLocale): string {
  return LOCALE_TO_PRICING_COUNTRY[locale];
}

function buildMarketPricing(
  templateKey: keyof typeof MARKET_TEMPLATES,
  country: string | null,
  locale?: SupportedLocale,
): PublicMarketPricing {
  const template = MARKET_TEMPLATES[templateKey];
  const useArabicAed = templateKey === 'AED' && locale && isArabicLocale(locale);

  return {
    marketId: template.marketId,
    currency: template.currency,
    country,
    plans: PLAN_SLUGS.map((interval, index) => ({
      interval,
      label: PLAN_LABELS[index],
      priceLabel: useArabicAed
        ? formatAedMarketingLabel(template.amounts[index], true)
        : template.priceLabels[index],
      effectiveMonthlyLabel: useArabicAed
        ? formatAedMarketingLabel(template.amounts[index], true)
        : template.priceLabels[index],
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
  const templateKey = COUNTRY_TO_TEMPLATE[country] ?? 'EUR';
  return buildMarketPricing(templateKey, country, locale);
}

const DEFAULT_COMPETITOR_MONTHLY_RANGE = { min: 149, max: 299 } as const;
const AED_COMPETITOR_MONTHLY_RANGE = { min: 300, max: 900 } as const;

/** Verified annual savings figures for compare/dashboard marketing copy (not TableWay plan prices). */
const COMPARE_ANNUAL_SAVINGS: Record<keyof typeof MARKET_TEMPLATES, number> = {
  EUR: 3309,
  GBP: 2949,
  USD: 3609,
  SEK: 31000,
  NOK: 31000,
  DKK: 23000,
  JPY: 480000,
  AED: 9651,
};

function resolveTemplateKeyForLocale(locale: SupportedLocale): keyof typeof MARKET_TEMPLATES {
  const country = resolvePricingCountryFromLocale(locale);
  return COUNTRY_TO_TEMPLATE[country] ?? 'EUR';
}

function formatMarketingRange(
  templateKey: keyof typeof MARKET_TEMPLATES,
  min: number,
  max: number,
  locale: SupportedLocale,
): string {
  return formatMarketingAmount(templateKey, min, locale, max);
}

function formatMarketingAmount(
  templateKey: keyof typeof MARKET_TEMPLATES,
  amount: number,
  locale: SupportedLocale,
  maxAmount?: number,
): string {
  const currency = MARKET_TEMPLATES[templateKey].currency;
  const minLabel = amount.toLocaleString('en-US');
  const rangeSuffix = maxAmount !== undefined ? `–${maxAmount.toLocaleString('en-US')}` : '';

  switch (currency) {
    case 'EUR':
      return `€${minLabel}${rangeSuffix}`;
    case 'GBP':
      return `£${minLabel}${rangeSuffix}`;
    case 'USD':
      return `$${minLabel}${rangeSuffix}`;
    case 'SEK':
    case 'NOK':
    case 'DKK':
      return `${minLabel}${rangeSuffix} kr`;
    case 'JPY':
      return `¥${minLabel}${rangeSuffix}`;
    case 'AED':
      return isArabicLocale(locale)
        ? `${AED_ARABIC_SYMBOL}${minLabel}${rangeSuffix}`
        : `AED ${minLabel}${rangeSuffix}`;
    default:
      return `€${minLabel}${rangeSuffix}`;
  }
}

export function formatLocaleZeroCommission(locale: SupportedLocale): string {
  const templateKey = resolveTemplateKeyForLocale(locale);
  return formatMarketingAmount(templateKey, 0, locale);
}

export type DashboardPricingDisplay = {
  traditional: string;
  tableway: string;
};

type DashboardTranslate = (key: LandingTranslationKey) => string;

/** Homepage dashboard teaser stats derived from official locale pricing. */
export function getDashboardPricingDisplay(
  locale: SupportedLocale,
  t: DashboardTranslate,
): DashboardPricingDisplay {
  const pricing = getOfficialMarketPricingForLocale(locale);
  const templateKey = resolveTemplateKeyForLocale(locale);
  const range =
    templateKey === 'AED' ? AED_COMPETITOR_MONTHLY_RANGE : DEFAULT_COMPETITOR_MONTHLY_RANGE;
  const rangeLabel = formatMarketingRange(templateKey, range.min, range.max, locale);
  const monthlyLabel = pricing.plans[0]?.priceLabel ?? '';
  const perMonth = t('site.dashboard.perMonth');

  return {
    traditional: `${t('site.dashboard.traditionalPrefix')} ${rangeLabel}${perMonth}`,
    tableway: `${t('site.dashboard.tablewayPrefix')} ${monthlyLabel}${perMonth}`,
  };
}

type SavingsVariant = 'dashboard' | 'compare';

/** Annual savings stat for compare page and dashboard teaser. */
export function getAnnualSavingsDisplay(
  locale: SupportedLocale,
  t: DashboardTranslate,
  variant: SavingsVariant = 'compare',
): string {
  const templateKey = resolveTemplateKeyForLocale(locale);
  const amount = COMPARE_ANNUAL_SAVINGS[templateKey];
  const formatted = formatMarketingAmount(templateKey, amount, locale);
  const prefix =
    variant === 'dashboard' ? t('site.dashboard.savePrefix') : t('cmp.yearly.statPrefix');
  const suffix =
    variant === 'dashboard' ? t('site.dashboard.saveSuffix') : t('cmp.yearly.statSuffix');

  return `${prefix} ${formatted}${suffix}`;
}
