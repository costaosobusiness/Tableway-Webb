import type { PublicMarketPlan, PublicMarketPricing } from '@/lib/visitorMarket.types';

export type HomePricingPair = {
  monthly: PublicMarketPlan | undefined;
  yearly: PublicMarketPlan | undefined;
};

export function getHomePricingPlans(pricing: PublicMarketPricing): HomePricingPair {
  return {
    monthly: pricing.plans.find((plan) => plan.interval === 'monthly'),
    yearly: pricing.plans.find((plan) => plan.interval === '12m'),
  };
}

export function formatYearlySavingsBadge(
  monthlyAmount: number | undefined,
  yearlyAmount: number | undefined,
): string | null {
  if (!monthlyAmount || !yearlyAmount || monthlyAmount <= 0) {
    return null;
  }

  const fullYearAtMonthly = monthlyAmount * 12;
  if (yearlyAmount >= fullYearAtMonthly) {
    return null;
  }

  const percent = Math.round((1 - yearlyAmount / fullYearAtMonthly) * 100);
  return percent > 0 ? `SAVE ${percent}%` : null;
}
