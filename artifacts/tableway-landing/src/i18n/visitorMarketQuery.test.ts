import { describe, expect, it, vi } from 'vitest';

import { loadVisitorMarket, visitorMarketQueryKey } from '@/lib/visitorMarket';

const DEFAULT_EUR_PRICING = {
  marketId: 'eur',
  currency: 'EUR',
  country: null,
  plans: [
    { interval: 'monthly', label: 'Monthly', priceLabel: '€29/mo', effectiveMonthlyLabel: 'Effective €29.00/mo', amount: 29 },
    { interval: '3m', label: '3 Months', priceLabel: '€79', effectiveMonthlyLabel: 'Effective €26.33/mo', amount: 79 },
    { interval: '6m', label: '6 Months', priceLabel: '€149', effectiveMonthlyLabel: 'Effective €24.83/mo', amount: 149 },
    { interval: '12m', label: '12 Months', priceLabel: '€279', effectiveMonthlyLabel: 'Effective €23.25/mo', amount: 279 },
  ],
};

function jsonResponse(body: unknown, ok = true, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status: ok ? status : status,
    headers: { 'Content-Type': 'application/json' },
  });
}

describe('visitor market query reuse', () => {
  it('uses a single shared query key for visitor market data', () => {
    expect(visitorMarketQueryKey).toEqual(['visitor-market']);
  });

  it('calls detected-country only once per loadVisitorMarket invocation', async () => {
    const fetchMock = vi.fn(async (input: RequestInfo | URL) => {
      const url = typeof input === 'string' ? input : input.toString();

      if (url.includes('/api/detected-country')) {
        return jsonResponse({ country: 'ES' });
      }

      if (url.includes('country=ES')) {
        return jsonResponse(DEFAULT_EUR_PRICING);
      }

      return jsonResponse({ error: 'not found' }, false, 404);
    }) as typeof fetch;

    await loadVisitorMarket(fetchMock);

    const detectedCountryCalls = fetchMock.mock.calls.filter(([url]) =>
      String(url).includes('/api/detected-country'),
    );

    expect(detectedCountryCalls).toHaveLength(1);
  });
});
