import type {
  BillingPlanSlug,
  DetectedCountryResponse,
  FetchLike,
  PricingCardView,
  PricingPlanLayout,
  PublicMarketPricing,
  VisitorMarketResult,
} from '@/lib/visitorMarket.types';

export const DETECTED_COUNTRY_URL = '/api/detected-country';
export const PUBLIC_PRICING_URL = '/api/v1/public/billing/pricing';

export const BILLING_PLAN_SLUGS: BillingPlanSlug[] = ['monthly', '3m', '6m', '12m'];

export const PRICING_PLAN_LAYOUT: PricingPlanLayout[] = [
  {
    period: 'Month',
    slug: 'monthly',
    highlighted: false,
  },
  {
    period: '3 Months',
    slug: '3m',
    badge: 'Save 12%',
    highlighted: false,
  },
  {
    period: '6 Months',
    slug: '6m',
    badge: 'Best Value',
    highlighted: true,
  },
  {
    period: '12 Months',
    slug: '12m',
    badge: 'Best Savings',
    highlighted: false,
  },
];

export const visitorMarketQueryKey = ['visitor-market'] as const;

export function normalizeCountryCode(country: string | null | undefined): string | null {
  if (!country) {
    return null;
  }

  const normalized = country.trim().toUpperCase();
  return normalized.length === 2 ? normalized : null;
}

export function buildPublicPricingUrl(country: string | null): string {
  if (!country) {
    return PUBLIC_PRICING_URL;
  }

  return `${PUBLIC_PRICING_URL}?country=${encodeURIComponent(country)}`;
}

export function isValidPublicMarketPricing(data: unknown): data is PublicMarketPricing {
  if (!data || typeof data !== 'object') {
    return false;
  }

  const record = data as Record<string, unknown>;
  if (typeof record.marketId !== 'string' || typeof record.currency !== 'string') {
    return false;
  }

  if (record.country !== null && typeof record.country !== 'string') {
    return false;
  }

  if (!Array.isArray(record.plans) || record.plans.length !== BILLING_PLAN_SLUGS.length) {
    return false;
  }

  return record.plans.every((plan) => {
    if (!plan || typeof plan !== 'object') {
      return false;
    }

    const entry = plan as Record<string, unknown>;
    return (
      typeof entry.interval === 'string'
      && BILLING_PLAN_SLUGS.includes(entry.interval as BillingPlanSlug)
      && typeof entry.priceLabel === 'string'
      && entry.priceLabel.length > 0
    );
  });
}

export async function fetchDetectedCountry(fetchImpl: FetchLike = fetch): Promise<string | null> {
  try {
    const response = await fetchImpl(DETECTED_COUNTRY_URL);
    if (!response.ok) {
      return null;
    }

    const payload = await response.json() as DetectedCountryResponse;
    return normalizeCountryCode(payload.country);
  } catch {
    return null;
  }
}

export async function fetchPublicPricing(
  country: string | null,
  fetchImpl: FetchLike = fetch,
): Promise<PublicMarketPricing | null> {
  try {
    const response = await fetchImpl(buildPublicPricingUrl(country));
    if (!response.ok) {
      return null;
    }

    const payload = await response.json();
    if (!isValidPublicMarketPricing(payload)) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

export async function loadVisitorMarket(fetchImpl: FetchLike = fetch): Promise<VisitorMarketResult> {
  const detectedCountry = await fetchDetectedCountry(fetchImpl);

  if (detectedCountry) {
    const marketPricing = await fetchPublicPricing(detectedCountry, fetchImpl);
    if (marketPricing) {
      return {
        detectedCountry,
        pricing: marketPricing,
        usedFallback: false,
      };
    }
  }

  const fallbackPricing = await fetchPublicPricing(null, fetchImpl);
  if (!fallbackPricing) {
    throw new Error('Unable to load market pricing');
  }

  return {
    detectedCountry: null,
    pricing: fallbackPricing,
    usedFallback: true,
  };
}

export function buildPricingCards(
  pricing: PublicMarketPricing,
  loadingPlaceholder = '...',
): PricingCardView[] {
  return PRICING_PLAN_LAYOUT.map((layout) => {
    const plan = pricing.plans.find((entry) => entry.interval === layout.slug);
    return {
      ...layout,
      price: plan?.priceLabel ?? loadingPlaceholder,
    };
  });
}

export function buildLoadingPricingCards(loadingPlaceholder = '...'): PricingCardView[] {
  return PRICING_PLAN_LAYOUT.map((layout) => ({
    ...layout,
    price: loadingPlaceholder,
  }));
}
