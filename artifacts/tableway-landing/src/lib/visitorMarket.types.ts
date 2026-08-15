export type BillingPlanSlug = 'monthly' | '3m' | '6m' | '12m';

export type PublicMarketPlan = {
  interval: BillingPlanSlug;
  label: string;
  priceLabel: string;
  effectiveMonthlyLabel: string;
  amount: number;
};

export type PublicMarketPricing = {
  marketId: string;
  currency: string;
  country: string | null;
  plans: PublicMarketPlan[];
};

export type DetectedCountryResponse = {
  country: string | null;
};

export type PricingPlanLayout = {
  period: string;
  slug: BillingPlanSlug;
  badge?: string;
  highlighted: boolean;
};

export type PricingCardView = PricingPlanLayout & {
  price: string;
};

export type VisitorMarketResult = {
  /** Country detected from geo endpoint; cleared when pricing falls back to default EUR. */
  detectedCountry: string | null;
  pricing: PublicMarketPricing;
  usedFallback: boolean;
};

export type FetchLike = typeof fetch;
