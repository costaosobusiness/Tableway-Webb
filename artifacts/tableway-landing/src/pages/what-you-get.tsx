import { useEffect, useMemo } from 'react';

import { MarketingSubpageShell } from '@/components/MarketingSubpageShell';
import { PageSeo } from '@/components/seo/PageSeo';
import { useTranslation } from '@/i18n/LocaleProvider';
import type { LandingTranslationKey } from '@/i18n/types';
import {
  getOfficialMarketPricingForLocale,
  resolvePricingCountryFromLocale,
} from '@/lib/officialMarketPricing';
import { tablewaySaasRegisterUrl } from '@/lib/tablewayUrls';

import '@/styles/what-you-get.css';

const FEATURE_IDS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] as const;
const PRICING_POINT_IDS = [1, 2, 3, 4, 5] as const;

function featureTitleKey(id: (typeof FEATURE_IDS)[number]): LandingTranslationKey {
  return `whatYouGet.feature.${id}.title`;
}

function featureDescKey(id: (typeof FEATURE_IDS)[number]): LandingTranslationKey {
  return `whatYouGet.feature.${id}.desc`;
}

function pricingPointKey(id: (typeof PRICING_POINT_IDS)[number]): LandingTranslationKey {
  return `whatYouGet.pricing.point.${id}`;
}

export default function WhatYouGetPage() {
  const { locale, t } = useTranslation();
  const pricing = useMemo(() => getOfficialMarketPricingForLocale(locale), [locale]);
  const country = resolvePricingCountryFromLocale(locale);
  const monthlyPlan = useMemo(
    () => pricing.plans.find((plan) => plan.interval === 'monthly'),
    [pricing],
  );
  const registerUrl = tablewaySaasRegisterUrl('monthly', locale, country);
  const billingPeriod = t('site.pricing.period.monthly');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MarketingSubpageShell>
      <PageSeo
        pageId="whatYouGet"
        breadcrumbs={[{ name: t('nav.whatYouGet'), path: '/what-you-get' }]}
      />

      <section className="subpage-hero wyg-hero">
        <div className="home-container subpage-hero__inner">
          <p className="subpage-hero__eyebrow">{t('whatYouGet.hero.eyebrow')}</p>
          <h1 className="subpage-hero__title">{t('whatYouGet.hero.title')}</h1>
          <p className="subpage-hero__subtitle">{t('whatYouGet.hero.subtitle')}</p>
          <a href={registerUrl} className="tableway-btn-primary wyg-hero__cta">
            {t('common.startFreeTrial30')}
          </a>
        </div>
      </section>

      <div className="subpage-body">
        <div className="subpage-content">
          <section className="wyg-section">
            <p className="wyg-intro">{t('whatYouGet.intro')}</p>
            <div className="wyg-features">
              {FEATURE_IDS.map((id) => (
                <article key={id} className="wyg-feature-card">
                  <h2 className="wyg-feature-card__title">{t(featureTitleKey(id))}</h2>
                  <p className="wyg-feature-card__text">{t(featureDescKey(id))}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="wyg-featured subpage-card" aria-labelledby="wyg-featured-heading">
            <h2 id="wyg-featured-heading" className="wyg-featured__title">
              {t('whatYouGet.featured.title')}
            </h2>
            <p className="wyg-featured__lede">{t('whatYouGet.featured.lede')}</p>
            <p className="wyg-featured__text">{t('whatYouGet.featured.text')}</p>
          </section>

          <section className="wyg-section wyg-pricing" aria-labelledby="wyg-pricing-heading">
            <h2 id="wyg-pricing-heading" className="home-display wyg-section__heading">
              {t('whatYouGet.pricing.title')}
            </h2>
            <div className="wyg-pricing__wrap">
              <article className="home-rate wyg-pricing__card">
                <p className="home-rate__price">{monthlyPlan?.priceLabel ?? '—'}</p>
                <p className="home-rate__period">{billingPeriod}</p>
                {pricing.currency ? <p className="home-rate__currency">{pricing.currency}</p> : null}
                <ul className="home-rate__list">
                  {PRICING_POINT_IDS.map((id) => (
                    <li key={id}>{t(pricingPointKey(id))}</li>
                  ))}
                </ul>
                <a href={registerUrl} className="tableway-btn home-rate__cta">
                  {t('common.startFreeTrial30')}
                </a>
              </article>
            </div>
          </section>
        </div>
      </div>
    </MarketingSubpageShell>
  );
}
