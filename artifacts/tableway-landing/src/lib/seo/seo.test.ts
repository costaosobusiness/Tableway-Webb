import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

import { SUPPORTED_LOCALES } from '@/i18n/types';
import { getPageSeoCopy } from '@/lib/seo/metadata';
import { SEO_LANDING_SLUGS, SEO_PAGE_IDS, SEO_PAGE_PATHS } from '@/lib/seo/pageIds';
import {
  SEO_DEFAULT_LOCALE,
  SEO_HREFLANG_LOCALES,
  SEO_OG_IMAGE,
  SEO_SITE_URL,
} from '@/lib/seo/siteConfig';
import {
  HOME_JSON_LD,
  buildFaqPageSchema,
  buildOrganizationSchema,
  buildSoftwareApplicationSchema,
  buildWebSiteSchema,
} from '@/lib/seo/structuredData';

function expectValidJsonLd(schema: Record<string, unknown>) {
  expect(schema['@context']).toBe('https://schema.org');
  expect(schema['@type']).toBeTruthy();
  expect(() => JSON.stringify(schema)).not.toThrow();
}

describe('technical SEO configuration', () => {
  it('declares hreflang for all supported UI locales plus x-default coverage', () => {
    expect(SEO_HREFLANG_LOCALES).toEqual(SUPPORTED_LOCALES);
    expect(SEO_HREFLANG_LOCALES).toHaveLength(10);
    expect(SEO_DEFAULT_LOCALE).toBe('en-gb');
  });

  it('provides metadata for every public page id in every hreflang locale', () => {
    for (const locale of SEO_HREFLANG_LOCALES) {
      for (const pageId of SEO_PAGE_IDS) {
        const copy = getPageSeoCopy(pageId, locale);
        expect(copy.title.trim().length).toBeGreaterThan(0);
        expect(copy.description.trim().length).toBeGreaterThan(0);
      }
    }
  });

  it('builds valid homepage structured data graph without duplicate @type entries', () => {
    const types = HOME_JSON_LD.map((schema) => schema['@type']);
    expect(types).toEqual(['Organization', 'WebSite', 'SoftwareApplication']);
    expect(new Set(types).size).toBe(types.length);

    for (const schema of HOME_JSON_LD) {
      expectValidJsonLd(schema);
    }
  });

  it('links WebSite and SoftwareApplication schemas to Organization via @id', () => {
    const organization = buildOrganizationSchema();
    const website = buildWebSiteSchema();
    const software = buildSoftwareApplicationSchema();

    expect(organization['@id']).toBe(`${SEO_SITE_URL}/#organization`);
    expect(website.publisher).toEqual({ '@id': `${SEO_SITE_URL}/#organization` });
    expect(software.publisher).toEqual({ '@id': `${SEO_SITE_URL}/#organization` });
  });

  it('builds valid FAQPage schema from question and answer pairs', () => {
    const faqSchema = buildFaqPageSchema([
      { question: 'Why 0% commission?', answer: 'TableWay uses subscription pricing.' },
    ]);

    expectValidJsonLd(faqSchema);
    expect(faqSchema['@type']).toBe('FAQPage');
    expect(faqSchema.mainEntity).toHaveLength(1);
  });

  it('maps every SEO landing slug to a public route path', () => {
    for (const slug of SEO_LANDING_SLUGS) {
      expect(SEO_PAGE_PATHS[slug]).toBe(`/${slug}`);
    }
  });

  it('lists only existing public routes in sitemap.xml without duplicates', () => {
    const sitemapPath = resolve(process.cwd(), 'public/sitemap.xml');
    const sitemap = readFileSync(sitemapPath, 'utf8');
    const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);

    expect(new Set(locations).size).toBe(locations.length);
    expect(locations).not.toContain(`${SEO_SITE_URL}/download`);
    expect(locations).not.toContain(`${SEO_SITE_URL}/pricing`);

    for (const slug of SEO_LANDING_SLUGS) {
      expect(locations).toContain(`${SEO_SITE_URL}/${slug}`);
    }
  });

  it('uses the production OG image URL', () => {
    expect(SEO_OG_IMAGE).toBe(`${SEO_SITE_URL}/images/tableway.webp`);
  });
});
