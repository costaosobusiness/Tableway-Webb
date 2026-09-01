import { useEffect } from 'react';
import { Link } from 'wouter';

import { MarketingSubpageHero } from '@/components/MarketingSubpageHero';
import { MarketingSubpageShell } from '@/components/MarketingSubpageShell';
import { PageSeo } from '@/components/seo/PageSeo';
import { SAAS_REGISTER_URL } from '@/components/home/homeLinks';
import { SEO_LANDING_CONTENT } from '@/content/seoLandingPages';
import type { SeoLandingSlug } from '@/lib/seo/pageIds';

import '@/styles/seo-landing.css';

type SeoLandingPageProps = {
  slug: SeoLandingSlug;
};

export default function SeoLandingPage({ slug }: SeoLandingPageProps) {
  const content = SEO_LANDING_CONTENT[slug];
  const path = `/${slug}`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <MarketingSubpageShell>
      <PageSeo pageId={slug} breadcrumbs={[{ name: content.title, path }]} />

      <MarketingSubpageHero eyebrow={content.eyebrow} title={content.title} subtitle={content.intro} />

      <div className="subpage-body">
        <div className="subpage-content subpage-content--narrow seo-landing">
          {content.sections.map((section) => (
            <article key={section.heading} className="subpage-card subpage-prose seo-landing__section">
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ))}

          <nav className="subpage-card seo-landing__links" aria-label="Related TableWay pages">
            <p className="seo-landing__links-title">Explore TableWay</p>
            <ul>
              <li>
                <Link href="/#features">Features</Link>
              </li>
              <li>
                <Link href="/#pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/compare">Compare</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/how-links-work">How Links Work</Link>
              </li>
            </ul>
          </nav>

          <article className="subpage-card subpage-cta">
            <p className="subpage-cta__title">{content.ctaTitle}</p>
            <a href={SAAS_REGISTER_URL} className="tableway-btn-primary">
              {content.ctaTitle}
            </a>
          </article>
        </div>
      </div>
    </MarketingSubpageShell>
  );
}
