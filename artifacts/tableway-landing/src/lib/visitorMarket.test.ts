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
    { interval: 'monthly', label: 'Monthly', priceLabel: '€29', effectiveMonthlyLabel: '€29', amount: 29 },
    { interval: '3m', label: '3 Months', priceLabel: '€79', effectiveMonthlyLabel: '€79', amount: 79 },
    { interval: '6m', label: '6 Months', priceLabel: '€149', effectiveMonthlyLabel: '€149', amount: 149 },
    { interval: '12m', label: '12 Months', priceLabel: '€279', effectiveMonthlyLabel: '€279', amount: 279 },
  ],
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

  it('C. handles country detection failure gracefully with EUR fallback pricing', async () => {
    const fetchMock = createFetchMock({
      '/api/detected-country': () => jsonResponse({ error: 'fail' }, false, 500),
    });

    const result = await loadVisitorMarket(fetchMock);
    expect(result.detectedCountry).toBeNull();
    expect(result.usedFallback).toBe(true);
    expect(result.pricing.currency).toBe('EUR');
    expect(result.pricing.plans[0]?.priceLabel).toBe('€29');
  });

  it('D. loads official EUR pricing for Spain without calling billing API', async () => {
    const fetchMock = createFetchMock({
      '/api/detected-country': () => jsonResponse({ country: 'ES' }),
    });

    await loadVisitorMarket(fetchMock);

    expect(buildPublicPricingUrl('ES')).toBe('/api/v1/public/billing/pricing?country=ES');
    expect(fetchMock).toHaveBeenCalledWith('/api/detected-country');
    expect(fetchMock).not.toHaveBeenCalledWith('/api/v1/public/billing/pricing?country=ES');
  });

  it('E. loads SEK pricing for Sweden', async () => {
    const fetchMock = createFetchMock({
      '/api/detected-country': () => jsonResponse({ country: 'SE' }),
    });

    const result = await loadVisitorMarket(fetchMock);
    expect(result.pricing.currency).toBe('SEK');
    expect(result.pricing.plans[0]?.priceLabel).toBe('299 kr');
  });

  it('F. loads GBP pricing for the United Kingdom', async () => {
    const fetchMock = createFetchMock({
      '/api/detected-country': () => jsonResponse({ country: 'GB' }),
    });

    const result = await loadVisitorMarket(fetchMock);
    expect(result.pricing.currency).toBe('GBP');
    expect(result.pricing.plans[0]?.priceLabel).toBe('£25');
    expect(result.pricing.plans[3]?.priceLabel).toBe('£239');
  });

  it('G. falls back to default EUR pricing for unknown countries', async () => {
    const fetchMock = createFetchMock({
      '/api/detected-country': () => jsonResponse({ country: 'BR' }),
    });

    const result = await loadVisitorMarket(fetchMock);
    expect(result.pricing.marketId).toBe('eur');
    expect(result.pricing.plans[0]?.priceLabel).toBe('€29');
  });

  it('H. uses USD pricing for detected United States visitors', async () => {
    const fetchMock = createFetchMock({
      '/api/detected-country': () => jsonResponse({ country: 'US' }),
    });

    const result = await loadVisitorMarket(fetchMock);
    expect(result.detectedCountry).toBe('US');
    expect(result.usedFallback).toBe(false);
    expect(result.pricing.currency).toBe('USD');
    expect(result.pricing.plans[0]?.priceLabel).toBe('$34');
  });

  it('I. preserves existing plan slugs from official pricing', async () => {
    const fetchMock = createFetchMock({
      '/api/detected-country': () => jsonResponse({ country: 'ES' }),
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

  it('still validates API pricing payloads when fetchPublicPricing is used', async () => {
    const fetchMock = createFetchMock({
      '/api/v1/public/billing/pricing?country=ES': () => jsonResponse(EUR_PRICING),
    });

    await expect(fetchPublicPricing('ES', fetchMock)).resolves.toEqual(EUR_PRICING);
  });
});
