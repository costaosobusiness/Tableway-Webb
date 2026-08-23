import { describe, expect, it, vi } from 'vitest';

import { loadVisitorMarket, visitorMarketQueryKey } from '@/lib/visitorMarket';

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

      return jsonResponse({ error: 'not found' }, false, 404);
    }) as typeof fetch;

    await loadVisitorMarket(fetchMock);

    const detectedCountryCalls = fetchMock.mock.calls.filter(([url]) =>
      String(url).includes('/api/detected-country'),
    );

    expect(detectedCountryCalls).toHaveLength(1);
    expect(fetchMock).not.toHaveBeenCalledWith(expect.stringContaining('/api/v1/public/billing/pricing'));
  });
});
