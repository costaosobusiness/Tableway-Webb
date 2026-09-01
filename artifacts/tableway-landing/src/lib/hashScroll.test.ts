import { describe, expect, it } from 'vitest';

import { getHashIdFromHref } from '@/lib/hashScroll';

describe('getHashIdFromHref', () => {
  it('extracts hash ids from homepage section links', () => {
    expect(getHashIdFromHref('/#features')).toBe('features');
    expect(getHashIdFromHref('/#pricing')).toBe('pricing');
    expect(getHashIdFromHref('/#how-it-works')).toBe('how-it-works');
  });

  it('returns null for normal routes', () => {
    expect(getHashIdFromHref('/compare')).toBeNull();
    expect(getHashIdFromHref('/download')).toBeNull();
  });
});
