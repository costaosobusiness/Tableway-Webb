import { normalizeCountryCode } from '@/lib/visitorMarket';

/** Canonical marketing website origin (public booking apex). */
export const TABLEWAY_MARKETING_ORIGIN = "https://tableway.app";

/** Canonical SaaS application + PWA origin. */
export const TABLEWAY_SAAS_APP_ORIGIN = "https://app.tableway.app";

export const TABLEWAY_SAAS_LOGIN_URL = `${TABLEWAY_SAAS_APP_ORIGIN}/auth/login`;

function normalizeSaasLang(locale?: string): string | undefined {
  if (!locale) {
    return undefined;
  }

  if (locale === 'en-gb' || locale === 'en-us') {
    return 'en';
  }

  return locale;
}

export function tablewaySaasLoginUrl(locale?: string, hash?: string): string {
  const params = new URLSearchParams();
  const lang = normalizeSaasLang(locale);
  if (lang) {
    params.set("lang", lang);
  }
  const query = params.toString();
  const url = `${TABLEWAY_SAAS_APP_ORIGIN}/auth/login${query ? `?${query}` : ""}`;

  if (!hash) {
    return url;
  }

  return `${url}${hash.startsWith("#") ? hash : `#${hash}`}`;
}

export function tablewaySaasRegisterUrl(
  plan = "12m",
  locale?: string,
  country?: string | null,
): string {
  const params = new URLSearchParams({ plan });
  const lang = normalizeSaasLang(locale);
  if (lang) {
    params.set("lang", lang);
  }

  const normalizedCountry = normalizeCountryCode(country);
  if (normalizedCountry) {
    params.set("country", normalizedCountry);
  }

  return `${TABLEWAY_SAAS_APP_ORIGIN}/auth/register?${params.toString()}`;
}

/** Opens the installable TableWay SaaS app (PWA lives on app.tableway.app). */
export const TABLEWAY_DOWNLOAD_APP_URL = TABLEWAY_SAAS_APP_ORIGIN;
