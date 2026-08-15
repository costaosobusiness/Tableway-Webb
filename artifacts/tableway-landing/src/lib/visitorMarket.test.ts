import { afterEach, describe, expect, it, vi } from 'vitest';

import {
  BILLING_PLAN_SLUGS,
  buildPublicPricingUrl,
  fetchDetectedCountry,
  fetchPublicPricing,
  loadVisitorMarket,
  normalizeCountryCode,
} from '@/lib/visitorMarket';
import type { PublicMarketPricing } from '@/lib/visitorMarket.types';

const EUR_PRICING: PublicMarketPricing = {
  marketId: 'eur',
  currency: 'EUR',
  country: 'ES',
  plans: [
    { interval: 'monthly', label: 'Monthly', priceLabel: '€29/mo', effectiveMonthlyLabel: 'Effective €29.00/mo', amount: 29 },
    { interval: '3m', label: '3 Months', priceLabel: '€79', effectiveMonthlyLabel: 'Effective €26.33/mo', amount: 79 },
    { interval: '6m', label: '6 Months', priceLabel: '€149', effectiveMonthlyLabel: 'Effective €24.83/mo', amount: 149 },
    { interval: '12m', label: '12 Months', priceLabel: '€279', effectiveMonthlyLabel: 'Effective €23.25/mo', amount: 279 },
  ],
};

const SEK_PRICING: PublicMarketPricing = {
  marketId: 'sek',
  currency: 'SEK',
  country: 'SE',
  plans: [
    { interval: 'monthly', label: 'Monthly', priceLabel: '299 SEK/mo', effectiveMonthlyLabel: 'Effective SEK 299.00/mo', amount: 299 },
    { interval: '3m', label: '3 Months', priceLabel: '799 SEK', effectiveMonthlyLabel: 'Effective SEK 266.33/mo', amount: 799 },
    { interval: '6m', label: '6 Months', priceLabel: '1,499 SEK', effectiveMonthlyLabel: 'Effective SEK 249.83/mo', amount: 1499 },
    { interval: '12m', label: '12 Months', priceLabel: '2,799 SEK', effectiveMonthlyLabel: 'Effective SEK 233.25/mo', amount: 2799 },
  ],
};

const GBP_PRICING: PublicMarketPricing = {
  marketId: 'gbp',
  currency: 'GBP',
  country: 'GB',
  plans: [
    { interval: 'monthly', label: 'Monthly', priceLabel: '£27/mo', effectiveMonthlyLabel: 'Effective £27.00/mo', amount: 27 },
    { interval: '3m', label: '3 Months', priceLabel: '£75', effectiveMonthlyLabel: 'Effective £25.00/mo', amount: 75 },
    { interval: '6m', label: '6 Months', priceLabel: '£139', effectiveMonthlyLabel: 'Effective £23.17/mo', amount: 139 },
    { interval: '12m', label: '12 Months', priceLabel: '£259', effectiveMonthlyLabel: 'Effective £21.58/mo', amount: 259 },
  ],
};

const DEFAULT_EUR_PRICING: PublicMarketPricing = {
  ...EUR_PRICING,
  country: null,
};

function jsonResponse(body: unknown, ok = true, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status: ok ? status : status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function createFetchMock(handlers: Record<string, () => Response | Promise<Response>>): typeof fetch {
  return vi.fn(async (input: RequestInfo | URL) => {
    const url = typeof input === 'string' ? input : input.toString();

    for (const [pattern, handler] of Object.entries(handlers)) {
      if (url.includes(pattern)) {
        return handler();
      }
    }

    return jsonResponse({ error: 'not found' }, false, 404);
  }) as typeof fetch;
}

afterEach(() => {
  vi.restoreAllMocks();
});

describe('visitor market pricing', () => {
  it('A. normalizes detected country success to ES', async () => {
    const fetchMock = createFetchMock({
      '/api/detected-country': () => jsonResponse({ country: 'ES' }),
    });

    await expect(fetchDetectedCountry(fetchMock)).resolves.toBe('ES');
  });

  it('B. normalizes lowercase country codes', () => {
    expect(normalizeCountryCode('es')).toBe('ES');
    expect(normalizeCountryCode('  se ')).toBe('SE');
  });

  it('C. handles country detection failure gracefully', async () => {
    const fetchMock = createFetchMock({
      '/api/detected-country': () => jsonResponse({ error: 'fail' }, false, 500),
      '/api/v1/public/billing/pricing': () => jsonResponse(DEFAULT_EUR_PRICING),
    });

    const result = await loadVisitorMarket(fetchMock);
    expect(result.detectedCountry).toBeNull();
    expect(result.usedFallback).toBe(true);
    expect(result.pricing.currency).toBe('EUR');
  });

  it('D. requests pricing with detected country query param', async () => {
    const fetchMock = createFetchMock({
      '/api/detected-country': () => jsonResponse({ country: 'ES' }),
      'country=ES': () => jsonResponse(EUR_PRICING),
    });

    await loadVisitorMarket(fetchMock);

    expect(buildPublicPricingUrl('ES')).toBe('/api/v1/public/billing/pricing?country=ES');
    expect(fetchMock).toHaveBeenCalledWith('/api/v1/public/billing/pricing?country=ES');
  });

  it('E. loads SEK pricing for Sweden', async () => {
    const fetchMock = createFetchMock({
      '/api/detected-country': () => jsonResponse({ country: 'SE' }),
      'country=SE': () => jsonResponse(SEK_PRICING),
    });

    const result = await loadVisitorMarket(fetchMock);
    expect(result.pricing.currency).toBe('SEK');
    expect(result.pricing.plans[0]?.priceLabel).toBe('299 SEK/mo');
  });

  it('F. loads GBP pricing for the United Kingdom', async () => {
    const fetchMock = createFetchMock({
      '/api/detected-country': () => jsonResponse({ country: 'GB' }),
      'country=GB': () => jsonResponse(GBP_PRICING),
    });

    const result = await loadVisitorMarket(fetchMock);
    expect(result.pricing.currency).toBe('GBP');
    expect(result.pricing.plans[0]?.priceLabel).toBe('£27/mo');
  });

  it('G. falls back to default EUR pricing for unknown countries', async () => {
    const fetchMock = createFetchMock({
      '/api/detected-country': () => jsonResponse({ country: 'BR' }),
      'country=BR': () => jsonResponse({ ...DEFAULT_EUR_PRICING, country: 'BR' }),
    });

    const result = await loadVisitorMarket(fetchMock);
    expect(result.pricing.marketId).toBe('eur');
    expect(result.pricing.plans[0]?.priceLabel).toBe('€29/mo');
  });

  it('H. falls back to default EUR pricing when pricing API fails', async () => {
    const fetchMock = createFetchMock({
      '/api/detected-country': () => jsonResponse({ country: 'US' }),
      'country=US': () => jsonResponse({ error: 'fail' }, false, 500),
      '/api/v1/public/billing/pricing': () => jsonResponse(DEFAULT_EUR_PRICING),
    });

    const result = await loadVisitorMarket(fetchMock);
    expect(result.detectedCountry).toBe('US');
    expect(result.usedFallback).toBe(true);
    expect(result.pricing.currency).toBe('EUR');
  });

  it('I. preserves existing plan slugs from API responses', async () => {
    const fetchMock = createFetchMock({
      '/api/detected-country': () => jsonResponse({ country: 'ES' }),
      'country=ES': () => jsonResponse(EUR_PRICING),
    });

    const result = await loadVisitorMarket(fetchMock);
    expect(result.pricing.plans.map((plan) => plan.interval)).toEqual(BILLING_PLAN_SLUGS);
  });

  it('returns null pricing for malformed API payloads', async () => {
    const fetchMock = createFetchMock({
      '/api/v1/public/billing/pricing?country=ES': () => jsonResponse({ marketId: 'eur' }),
    });

    await expect(fetchPublicPricing('ES', fetchMock)).resolves.toBeNull();
  });
});
