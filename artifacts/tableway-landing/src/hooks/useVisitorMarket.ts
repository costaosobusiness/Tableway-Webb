import { useQuery } from '@tanstack/react-query';

import {
  buildLoadingPricingCards,
  buildPricingCards,
  loadVisitorMarket,
  visitorMarketQueryKey,
} from '@/lib/visitorMarket';
import type { PricingCardView, PublicMarketPricing, VisitorMarketResult } from '@/lib/visitorMarket.types';

const PRICING_STALE_TIME_MS = 5 * 60 * 1000;

export type UseVisitorMarketResult = {
  detectedCountry: string | null;
  pricing: PublicMarketPricing | undefined;
  pricingCards: PricingCardView[];
  isPricingLoading: boolean;
  isPricingError: boolean;
  usedFallback: boolean;
};

export function useVisitorMarket(): UseVisitorMarketResult {
  const query = useQuery<VisitorMarketResult>({
    queryKey: visitorMarketQueryKey,
    queryFn: () => loadVisitorMarket(),
    staleTime: PRICING_STALE_TIME_MS,
    retry: 1,
  });

  const pricing = query.data?.pricing;
  const pricingCards = pricing
    ? buildPricingCards(pricing)
    : buildLoadingPricingCards();

  return {
    detectedCountry: query.data?.detectedCountry ?? null,
    pricing,
    pricingCards,
    isPricingLoading: query.isLoading,
    isPricingError: query.isError,
    usedFallback: query.data?.usedFallback ?? false,
  };
}
