import { SEO_LOGO_URL, SEO_ORGANIZATION_NAME, SEO_SITE_URL } from '@/lib/seo/siteConfig';

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SEO_SITE_URL}/#organization`,
    name: SEO_ORGANIZATION_NAME,
    url: SEO_SITE_URL,
    logo: SEO_LOGO_URL,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      url: `${SEO_SITE_URL}/contact`,
    },
  };
}

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SEO_SITE_URL}/#website`,
    name: SEO_ORGANIZATION_NAME,
    url: SEO_SITE_URL,
    publisher: {
      '@id': `${SEO_SITE_URL}/#organization`,
    },
  };
}

export function buildSoftwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${SEO_SITE_URL}/#software`,
    name: SEO_ORGANIZATION_NAME,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    url: SEO_SITE_URL,
    publisher: {
      '@id': `${SEO_SITE_URL}/#organization`,
    },
    brand: {
      '@type': 'Brand',
      name: SEO_ORGANIZATION_NAME,
    },
    description:
      'Restaurant reservation software and booking system for restaurants with commission-free online reservations and guest management.',
  };
}

export function buildFaqPageSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildHomeStructuredData() {
  return [buildOrganizationSchema(), buildWebSiteSchema(), buildSoftwareApplicationSchema()];
}

export const HOME_JSON_LD = buildHomeStructuredData();
