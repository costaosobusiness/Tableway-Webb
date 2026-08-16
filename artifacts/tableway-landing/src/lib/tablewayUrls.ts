/** Canonical marketing website origin (public booking apex). */
export const TABLEWAY_MARKETING_ORIGIN = "https://tableway.app";

/** Canonical SaaS application + PWA origin. */
export const TABLEWAY_SAAS_APP_ORIGIN = "https://app.tableway.app";

export const TABLEWAY_SAAS_LOGIN_URL = `${TABLEWAY_SAAS_APP_ORIGIN}/auth/login`;

export function tablewaySaasLoginUrl(locale?: string, hash?: string): string {
  const params = new URLSearchParams();
  if (locale) {
    params.set("lang", locale);
  }
  const query = params.toString();
  const url = `${TABLEWAY_SAAS_APP_ORIGIN}/auth/login${query ? `?${query}` : ""}`;

  if (!hash) {
    return url;
  }

  return `${url}${hash.startsWith("#") ? hash : `#${hash}`}`;
}

export function tablewaySaasRegisterUrl(plan = "12m", locale?: string): string {
  const params = new URLSearchParams({ plan });
  if (locale) {
    params.set("lang", locale);
  }
  return `${TABLEWAY_SAAS_APP_ORIGIN}/auth/register?${params.toString()}`;
}

/** Opens the installable TableWay SaaS app (PWA lives on app.tableway.app). */
export const TABLEWAY_DOWNLOAD_APP_URL = TABLEWAY_SAAS_APP_ORIGIN;
