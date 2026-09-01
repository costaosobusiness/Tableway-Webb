import { useEffect } from 'react';
import { useLocation } from 'wouter';

import { useTranslation } from '@/i18n/LocaleProvider';
import { getPageSeoCopy } from '@/lib/seo/metadata';
import type { SeoPageId } from '@/lib/seo/pageIds';
import { SEO_PAGE_PATHS } from '@/lib/seo/pageIds';
import {
  SEO_DEFAULT_LOCALE,
  SEO_HREFLANG_LOCALES,
  SEO_OG_IMAGE,
  SEO_SITE_URL,
  resolveSeoLocale,
} from '@/lib/seo/siteConfig';

type PageSeoProps = {
  pageId: SeoPageId;
  noindex?: boolean;
  jsonLd?: Record<string, unknown>[];
  breadcrumbs?: { name: string; path: string }[];
};

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function upsertLink(rel: string, href: string, extra?: Record<string, string>) {
  const selectorParts = [`link[rel="${rel}"]`, extra?.hreflang ? `[hreflang="${extra.hreflang}"]` : ''];
  let element = document.head.querySelector(selectorParts.join(''));

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);

  if (extra?.hreflang) {
    element.setAttribute('hreflang', extra.hreflang);
  } else {
    element.removeAttribute('hreflang');
  }
}

function removeManagedLinks(rel: string) {
  document.head.querySelectorAll(`link[rel="${rel}"][data-seo-managed="true"]`).forEach((node) => {
    node.remove();
  });
}

function removeManagedJsonLd() {
  document.head.querySelectorAll('script[data-seo-jsonld="true"]').forEach((node) => {
    node.remove();
  });
}

function buildLocalizedUrl(path: string, locale: string) {
  const url = new URL(path, SEO_SITE_URL);

  if (locale !== SEO_DEFAULT_LOCALE) {
    url.searchParams.set('lang', locale);
  }

  return url.toString();
}

export function PageSeo({ pageId, noindex = false, jsonLd = [], breadcrumbs = [] }: PageSeoProps) {
  const { locale } = useTranslation();
  const [pathname] = useLocation();
  const seoLocale = resolveSeoLocale(locale);
  const path = SEO_PAGE_PATHS[pageId];
  const copy = getPageSeoCopy(pageId, seoLocale);
  const canonicalUrl = buildLocalizedUrl(path, seoLocale);

  const jsonLdSignature = JSON.stringify(jsonLd);
  const breadcrumbsSignature = JSON.stringify(breadcrumbs);

  useEffect(() => {
    document.title = copy.title;

    upsertMeta('name', 'description', copy.description);
    upsertMeta(
      'name',
      'robots',
      noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large',
    );

    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:title', copy.title);
    upsertMeta('property', 'og:description', copy.description);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:image', SEO_OG_IMAGE);
    upsertMeta('property', 'og:site_name', 'TableWay');

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', copy.title);
    upsertMeta('name', 'twitter:description', copy.description);
    upsertMeta('name', 'twitter:image', SEO_OG_IMAGE);

    upsertLink('canonical', canonicalUrl);

    removeManagedLinks('alternate');
    for (const hreflangLocale of SEO_HREFLANG_LOCALES) {
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', hreflangLocale);
      link.setAttribute('href', buildLocalizedUrl(path, hreflangLocale));
      link.setAttribute('data-seo-managed', 'true');
      document.head.appendChild(link);
    }

    const xDefault = document.createElement('link');
    xDefault.setAttribute('rel', 'alternate');
    xDefault.setAttribute('hreflang', 'x-default');
    xDefault.setAttribute('href', buildLocalizedUrl(path, SEO_DEFAULT_LOCALE));
    xDefault.setAttribute('data-seo-managed', 'true');
    document.head.appendChild(xDefault);

    removeManagedJsonLd();
    const schemas = [...jsonLd];

    if (breadcrumbs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [{ name: 'Home', path: '/' }, ...breadcrumbs].map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: buildLocalizedUrl(item.path, seoLocale),
        })),
      });
    }

    for (const schema of schemas) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-jsonld', 'true');
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      removeManagedLinks('alternate');
      removeManagedJsonLd();
    };
  }, [breadcrumbsSignature, canonicalUrl, copy.description, copy.title, jsonLdSignature, noindex, pageId, pathname, seoLocale, path]);

  return null;
}
