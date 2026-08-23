import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';

import type { SupportedLocale } from '@/i18n/types';
import { getOfficialMarketPricingForLocale } from '@/lib/officialMarketPricing';
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

export function useVisitorMarket(pricingLocale?: SupportedLocale): UseVisitorMarketResult {
  const query = useQuery<VisitorMarketResult>({
    queryKey: visitorMarketQueryKey,
    queryFn: () => loadVisitorMarket(),
    staleTime: PRICING_STALE_TIME_MS,
    retry: 1,
  });

  const pricing = useMemo(() => {
    if (pricingLocale) {
      return getOfficialMarketPricingForLocale(pricingLocale);
    }

    return query.data?.pricing;
  }, [pricingLocale, query.data?.pricing]);

  const pricingCards = pricing
    ? buildPricingCards(pricing)
    : buildLoadingPricingCards();

  return {
    detectedCountry: query.data?.detectedCountry ?? null,
    pricing,
    pricingCards,
    isPricingLoading: pricingLocale ? false : query.isLoading,
    isPricingError: query.isError,
    usedFallback: query.data?.usedFallback ?? false,
  };
}
