import type { LandingTranslationKey } from '@/i18n/types';
import type { BillingPlanSlug, PublicMarketPlan, PublicMarketPricing } from '@/lib/visitorMarket.types';

export type HomePricingPlanLayout = {
  slug: BillingPlanSlug;
  name: string;
  badge?: string;
  variant: 'monthly' | '3m' | '6m' | '12m';
};

export type HomePricingCard = HomePricingPlanLayout & {
  plan: PublicMarketPlan | undefined;
  billingPeriod: string;
  currency: string;
  features: readonly string[];
};

type TranslateFn = (key: LandingTranslationKey) => string;

const FEATURE_KEYS = [
  'site.pricing.feature.1',
  'site.pricing.feature.2',
  'site.pricing.feature.3',
  'site.pricing.feature.4',
  'site.pricing.feature.5',
  'site.pricing.feature.6',
  'site.pricing.feature.7',
  'site.pricing.feature.8',
  'site.pricing.feature.9',
  'site.pricing.feature.10',
  'site.pricing.feature.11',
  'site.pricing.feature.12',
] as const satisfies readonly LandingTranslationKey[];

const PLAN_NAME_KEYS: Record<BillingPlanSlug, LandingTranslationKey> = {
  monthly: 'site.pricing.plan.monthly',
  '3m': 'site.pricing.plan.3m',
  '6m': 'site.pricing.plan.6m',
  '12m': 'site.pricing.plan.12m',
};

const BILLING_PERIOD_KEYS: Record<BillingPlanSlug, LandingTranslationKey> = {
  monthly: 'site.pricing.period.monthly',
  '3m': 'site.pricing.period.3m',
  '6m': 'site.pricing.period.6m',
  '12m': 'site.pricing.period.12m',
};

const PLAN_SLUGS: BillingPlanSlug[] = ['monthly', '3m', '6m', '12m'];

/** Identical on every official billing interval. */
export const HOME_PRICING_FEATURES = [
  'Unlimited reservations',
  'Online booking page',
  'Email notifications',
  'Customer database & history',
  'Google reservations',
  'Instagram reservations',
  'Facebook reservations',
  'Website booking widget',
  'Automated guest reminders',
  'Staff accounts',
  'No commission · Cancel anytime',
  '30-day free trial',
] as const;

/** Official billing intervals — prices always come from pricing.plans. */
export const HOME_PRICING_PLAN_LAYOUT: HomePricingPlanLayout[] = [
  { slug: 'monthly', name: '1 Month', variant: 'monthly' },
  { slug: '3m', name: '3 Months', variant: '3m' },
  { slug: '6m', name: '6 Months', badge: 'Most Popular', variant: '6m' },
  { slug: '12m', name: '12 Months', variant: '12m' },
];

const BILLING_PERIOD: Record<BillingPlanSlug, string> = {
  monthly: 'per month',
  '3m': 'every 3 months',
  '6m': 'every 6 months',
  '12m': 'per year',
};

export function getBillingPeriodLabel(slug: BillingPlanSlug): string {
  return BILLING_PERIOD[slug];
}

export function buildHomePricingCards(
  pricing: PublicMarketPricing,
  t: TranslateFn,
): HomePricingCard[] {
  return PLAN_SLUGS.map((slug) => ({
    slug,
    name: t(PLAN_NAME_KEYS[slug]),
    badge: slug === '6m' ? t('site.pricing.badge.popular') : undefined,
    variant: slug,
    plan: pricing.plans.find((entry) => entry.interval === slug),
    billingPeriod: t(BILLING_PERIOD_KEYS[slug]),
    currency: pricing.currency,
    features: FEATURE_KEYS.map((key) => t(key)),
  }));
}
