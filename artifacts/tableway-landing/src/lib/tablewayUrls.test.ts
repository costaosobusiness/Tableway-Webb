import { describe, expect, it } from 'vitest';

import { TABLEWAY_SAAS_LOGIN_URL, tablewaySaasLoginUrl } from '@/lib/tablewayUrls';

describe('tablewaySaasLoginUrl', () => {
  it('returns the canonical login URL when no locale is provided', () => {
    expect(tablewaySaasLoginUrl()).toBe(TABLEWAY_SAAS_LOGIN_URL);
  });

  it('appends a lang query parameter for supported locales', () => {
    expect(tablewaySaasLoginUrl('es')).toBe('https://app.tableway.app/auth/login?lang=es');
    expect(tablewaySaasLoginUrl('de')).toBe('https://app.tableway.app/auth/login?lang=de');
    expect(tablewaySaasLoginUrl('nb')).toBe('https://app.tableway.app/auth/login?lang=nb');
  });

  it('appends a guest-install hash for Download App links', () => {
    expect(tablewaySaasLoginUrl('es', 'guest-install')).toBe(
      'https://app.tableway.app/auth/login?lang=es#guest-install',
    );
    expect(tablewaySaasLoginUrl('en', 'guest-install')).toBe(
      'https://app.tableway.app/auth/login?lang=en#guest-install',
    );
    expect(tablewaySaasLoginUrl('sv', '#guest-install')).toBe(
      'https://app.tableway.app/auth/login?lang=sv#guest-install',
    );
  });
});
