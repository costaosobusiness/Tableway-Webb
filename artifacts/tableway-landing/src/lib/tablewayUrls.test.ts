import { describe, expect, it } from 'vitest';

import {
  TABLEWAY_SAAS_LOGIN_URL,
  tablewaySaasLoginUrl,
  tablewaySaasRegisterUrl,
} from '@/lib/tablewayUrls';

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

describe('tablewaySaasRegisterUrl', () => {
  it('preserves plan and lang without country when none is detected', () => {
    expect(tablewaySaasRegisterUrl('monthly', 'sv')).toBe(
      'https://app.tableway.app/auth/register?plan=monthly&lang=sv',
    );
  });

  it('appends normalized country codes for detected visitors', () => {
    expect(tablewaySaasRegisterUrl('monthly', 'es', 'ES')).toBe(
      'https://app.tableway.app/auth/register?plan=monthly&lang=es&country=ES',
    );
    expect(tablewaySaasRegisterUrl('monthly', 'sv', 'SE')).toBe(
      'https://app.tableway.app/auth/register?plan=monthly&lang=sv&country=SE',
    );
    expect(tablewaySaasRegisterUrl('12m', 'en', 'GB')).toBe(
      'https://app.tableway.app/auth/register?plan=12m&lang=en&country=GB',
    );
    expect(tablewaySaasRegisterUrl('12m', 'nb', 'NO')).toBe(
      'https://app.tableway.app/auth/register?plan=12m&lang=nb&country=NO',
    );
    expect(tablewaySaasRegisterUrl('12m', 'da', 'DK')).toBe(
      'https://app.tableway.app/auth/register?plan=12m&lang=da&country=DK',
    );
  });

  it('normalizes lowercase country codes and omits invalid values', () => {
    expect(tablewaySaasRegisterUrl('12m', 'sv', 'se')).toBe(
      'https://app.tableway.app/auth/register?plan=12m&lang=sv&country=SE',
    );
    expect(tablewaySaasRegisterUrl('12m', 'en', null)).toBe(
      'https://app.tableway.app/auth/register?plan=12m&lang=en',
    );
    expect(tablewaySaasRegisterUrl('12m', 'en', 'INVALID')).toBe(
      'https://app.tableway.app/auth/register?plan=12m&lang=en',
    );
  });
});
