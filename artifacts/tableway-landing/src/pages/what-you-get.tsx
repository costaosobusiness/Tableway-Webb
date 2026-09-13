import { useEffect, useMemo } from 'react';

import { MarketingSubpageShell } from '@/components/MarketingSubpageShell';
import { PageSeo } from '@/components/seo/PageSeo';
import { useTranslation } from '@/i18n/LocaleProvider';
import {
  getOfficialMarketPricingForLocale,
  resolvePricingCountryFromLocale,
} from '@/lib/officialMarketPricing';
import { tablewaySaasRegisterUrl } from '@/lib/tablewayUrls';

import '@/styles/what-you-get.css';

const FEATURES = [
  {
    title: 'ONLINE RESERVATIONS',
    description: 'Accept reservations 24/7 through your own TableWay booking page.',
  },
  {
    title: 'CUSTOM BOOKING PAGE',
    description: 'Customize your booking page to fit your restaurant.',
  },
  {
    title: 'TABLE SETTINGS',
    description: 'Set up your tables and seating capacity to match the way your restaurant works.',
  },
  {
    title: 'OPENING HOURS & SERVICES',
    description:
      'Set different service hours and configure your reservation settings around your daily operation.',
  },
  {
    title: 'HOLIDAYS & CLOSED DAYS',
    description: "Set holidays and closed days so guests can't book when you're not open.",
  },
  {
    title: 'DAY, WEEK & MONTH VIEW',
    description: 'View and manage your reservations with Day, Week or Month calendar views.',
  },
  {
    title: 'GUEST DATABASE',
    description: 'Keep your guest information organized and easy to access.',
  },
  {
    title: 'GUEST HISTORY & SEARCH',
    description: 'Quickly search for guests and see their previous reservation history.',
  },
  {
    title: '7 LANGUAGES',
    description: 'Servers can choose between 7 languages for an easier work environment.',
  },
  {
    title: 'OWNER / MANAGER & SERVER MODE',
    description: 'Use the app according to your role, with separate Owner/Manager and Server modes.',
  },
  {
    title: 'TABLE NUMBERS',
    description: 'Enable table numbers and assign a specific table to a reservation.',
  },
  {
    title: 'SERVER ASSIGNMENT',
    description: 'Enable server assignment and assign a server to a specific reservation or party.',
  },
  {
    title: '24/7 AI HELP',
    description: 'Get help inside the app whenever you need it, with 24/7 AI assistance.',
  },
  {
    title: 'INVOICE DOWNLOADS',
    description: 'Download your invoices whenever you need them for easy bookkeeping.',
  },
] as const;

const PRICING_POINTS = [
  '0% Commission',
  'Unlimited Reservations',
  'No Fees Per Reservation',
  'No Add-ons',
  '30 Days Free Trial',
] as const;

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
        breadcrumbs={[{ name: 'What You Get', path: '/what-you-get' }]}
      />

      <section className="subpage-hero wyg-hero">
        <div className="home-container subpage-hero__inner">
          <p className="subpage-hero__eyebrow">What You Get</p>
          <h1 className="subpage-hero__title">EVERYTHING YOU NEED. NOTHING EXTRA.</h1>
          <p className="subpage-hero__subtitle">
            TableWay gives your restaurant the tools you need to manage reservations simply, while
            letting you configure the app around the way your restaurant actually works.
          </p>
          <a href={registerUrl} className="tableway-btn-primary wyg-hero__cta">
            {t('common.startFreeTrial30')}
          </a>
        </div>
      </section>

      <div className="subpage-body">
        <div className="subpage-content">
          <section className="wyg-section">
            <p className="wyg-intro">
              TableWay is a complete restaurant reservation system and booking software for
              independent restaurants. Every feature below comes included in your subscription — from
              online restaurant reservations and restaurant table management to your guest database
              and reservation calendar.
            </p>
            <div className="wyg-features">
              {FEATURES.map((feature) => (
                <article key={feature.title} className="wyg-feature-card">
                  <h2 className="wyg-feature-card__title">{feature.title}</h2>
                  <p className="wyg-feature-card__text">{feature.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="wyg-featured subpage-card" aria-labelledby="wyg-featured-heading">
            <h2 id="wyg-featured-heading" className="wyg-featured__title">
              YOUR RESTAURANT. YOUR SETTINGS.
            </h2>
            <p className="wyg-featured__lede">TableWay adapts to the way your restaurant works.</p>
            <p className="wyg-featured__text">
              Set your tables, services, opening hours, holidays and more — and make the app work for
              you.
            </p>
          </section>

          <section className="wyg-section wyg-pricing" aria-labelledby="wyg-pricing-heading">
            <h2 id="wyg-pricing-heading" className="home-display wyg-section__heading">
              EVERYTHING INCLUDED. NO ADD-ONS.
            </h2>
            <div className="wyg-pricing__wrap">
              <article className="home-rate wyg-pricing__card">
                <p className="home-rate__price">{monthlyPlan?.priceLabel ?? '—'}</p>
                <p className="home-rate__period">{billingPeriod}</p>
                {pricing.currency ? <p className="home-rate__currency">{pricing.currency}</p> : null}
                <ul className="home-rate__list">
                  {PRICING_POINTS.map((point) => (
                    <li key={point}>{point}</li>
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
