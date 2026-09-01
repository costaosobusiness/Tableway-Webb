import { useEffect, useMemo } from 'react';
import {
  Globe,
  Link2,
  QrCode,
  UserPlus,
  Users,
  Wallet,
} from 'lucide-react';
import { Link } from 'wouter';

import { SAAS_REGISTER_URL } from '@/components/home/homeLinks';
import { HomeFooter } from '@/components/layout/HomeFooter';
import { Navbar } from '@/components/layout/Navbar';
import { PageSeo } from '@/components/seo/PageSeo';
import { useTranslation } from '@/i18n/LocaleProvider';
import type { LandingTranslationKey } from '@/i18n/types';
import {
  formatLocaleZeroCommission,
  getAnnualSavingsDisplay,
  getOfficialMarketPricingForLocale,
} from '@/lib/officialMarketPricing';

import '@/styles/home.css';
import '@/styles/compare.css';

type CompareResearchRow = {
  countryKey: LandingTranslationKey;
  other: string;
};

const MONTHLY_ROW_DEFS: CompareResearchRow[] = [
  { countryKey: 'cmp.row.uk', other: '€149–299' },
  { countryKey: 'cmp.row.se', other: '€67' },
  { countryKey: 'cmp.row.de', other: '€149.90' },
  { countryKey: 'cmp.row.fr', other: '€49–129' },
  { countryKey: 'cmp.row.es', other: '€49–89' },
  { countryKey: 'cmp.row.no', other: '€69+' },
  { countryKey: 'cmp.row.uae', other: 'AED 300–900/month' },
];

const YEARLY_ROW_DEFS: CompareResearchRow[] = [
  { countryKey: 'cmp.row.ukAnnual', other: '€1,788–3,588' },
  { countryKey: 'cmp.row.se', other: '€804' },
  { countryKey: 'cmp.row.de', other: '€1,798.80' },
  { countryKey: 'cmp.row.fr', other: '€588–1,548' },
  { countryKey: 'cmp.row.es', other: '€588–1,068' },
  { countryKey: 'cmp.row.no', other: '€828+' },
  { countryKey: 'cmp.row.uae', other: 'AED 3,600–10,800/year' },
];

const FEATURE_ROW_DEFS = [
  { featureKey: 'cmp.feat.reservations', traditionalKey: 'cmp.val.mostIncluded', tablewayKey: 'cmp.val.includedCheck' },
  { featureKey: 'cmp.feat.staff', traditionalKey: 'cmp.val.oftenLimited', tablewayKey: 'cmp.val.includedCheck' },
  { featureKey: 'cmp.feat.crm', traditionalKey: 'cmp.val.premium', tablewayKey: 'cmp.val.includedCheck' },
  { featureKey: 'cmp.feat.widget', traditionalKey: 'cmp.val.paidExtra', tablewayKey: 'cmp.val.includedCheck' },
  { featureKey: 'cmp.feat.qr', traditionalKey: 'cmp.val.sometimesExtra', tablewayKey: 'cmp.val.includedCheck' },
  { featureKey: 'cmp.feat.instagram', traditionalKey: 'cmp.val.somePlans', tablewayKey: 'cmp.val.includedCheck' },
  { featureKey: 'cmp.feat.mobile', traditionalKey: 'cmp.val.included', tablewayKey: 'cmp.val.includedCheck' },
  { featureKey: 'cmp.feat.trial', traditionalKey: 'cmp.val.rare', tablewayKey: 'cmp.val.includedCheck' },
  { featureKey: 'cmp.feat.cancel', traditionalKey: 'cmp.val.depends', tablewayKey: 'cmp.val.includedCheck' },
  { featureKey: 'cmp.feat.commission', traditionalKey: 'cmp.val.extraSome', tablewayKey: 'zero' },
] as const;

const INCLUDED_ITEM_KEYS = [
  'cmp.included.reservations',
  'cmp.included.staff',
  'cmp.included.crm',
  'cmp.included.qr',
  'cmp.included.widget',
  'cmp.included.instagram',
  'cmp.included.google',
  'cmp.included.mobile',
  'cmp.included.facebook',
  'cmp.included.noCommission',
  'cmp.included.trial',
  'cmp.included.cancel',
] as const satisfies readonly LandingTranslationKey[];

const PLAN_SLUGS = ['monthly', '3m', '6m', '12m'] as const;

const PLAN_NAME_KEYS: Record<(typeof PLAN_SLUGS)[number], LandingTranslationKey> = {
  monthly: 'site.pricing.plan.monthly',
  '3m': 'site.pricing.plan.3m',
  '6m': 'site.pricing.plan.6m',
  '12m': 'site.pricing.plan.12m',
};

export default function ComparePage() {
  const { locale, t } = useTranslation();
  const isArabic = locale === 'ar';
  const pricing = useMemo(() => getOfficialMarketPricingForLocale(locale), [locale]);

  const whyCards = useMemo(
    () => [
      {
        icon: Wallet,
        title: isArabic ? t('cmp.why.commission.titleAed') : t('cmp.why.commission.title'),
        text: t('cmp.why.commission.text'),
      },
      { icon: Users, title: t('cmp.why.crm.title'), text: t('cmp.why.crm.text') },
      { icon: UserPlus, title: t('cmp.why.staff.title'), text: t('cmp.why.staff.text') },
      { icon: Globe, title: t('cmp.why.widget.title'), text: t('cmp.why.widget.text') },
      { icon: QrCode, title: t('cmp.why.qr.title'), text: t('cmp.why.qr.text') },
      { icon: Link2, title: t('cmp.why.instagram.title'), text: t('cmp.why.instagram.text') },
    ],
    [isArabic, t],
  );

  const planRows = useMemo(
    () =>
      PLAN_SLUGS.map((slug, index) => ({
        name: t(PLAN_NAME_KEYS[slug]),
        price: pricing.plans[index]?.priceLabel ?? '—',
        best: slug === '12m',
      })),
    [pricing.plans, t],
  );

  const monthlyPrice = pricing.plans[0]?.priceLabel ?? '—';
  const annualPrice = pricing.plans[3]?.priceLabel ?? '—';
  const yearlySavingsStat = getAnnualSavingsDisplay(locale, t, 'compare');
  const zeroCommission = formatLocaleZeroCommission(locale);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page compare-page">
      <PageSeo pageId="compare" breadcrumbs={[{ name: t('cmp.hero.title'), path: '/compare' }]} />
      <Navbar />
      <main>
        <section className="compare-hero">
          <div className="compare-wrap compare-hero__inner">
            <p className="home-eyebrow compare-hero__eyebrow">{t('cmp.hero.eyebrow')}</p>
            <h1 className="compare-hero__title">{t('cmp.hero.title')}</h1>
            <p className="home-lede compare-hero__lede">{t('cmp.hero.lede')}</p>
            <div className="compare-hero__actions">
              <a href={SAAS_REGISTER_URL} className="tableway-btn">
                {t('cmp.hero.ctaTrial')}
              </a>
              <a href="/#pricing" className="tableway-btn">
                {t('cmp.hero.ctaPricing')}
              </a>
            </div>
          </div>
        </section>

        <section className="compare-section">
          <div className="compare-wrap">
            <h2 className="home-display compare-heading">{t('cmp.monthly.heading')}</h2>
            <p className="compare-subtitle">{t('cmp.monthly.subtitle')}</p>
            <div className="compare-table-wrap">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th scope="col">{t('cmp.col.country')}</th>
                    <th scope="col" className="compare-table__num">
                      {t('cmp.col.otherMonthly')}
                    </th>
                    <th scope="col" className="compare-table__num">
                      {t('cmp.col.tableway')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {MONTHLY_ROW_DEFS.map((row) => (
                    <tr key={row.countryKey}>
                      <td>{t(row.countryKey)}</td>
                      <td className="compare-table__num">{row.other}</td>
                      <td className="compare-table__num compare-table__tw">
                        <strong>{monthlyPrice}</strong>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="compare-footnote">{t('cmp.footnote')}</p>
          </div>
        </section>

        <section className="compare-section">
          <div className="compare-wrap">
            <h2 className="home-display compare-heading">{t('cmp.yearly.heading')}</h2>
            <div className="compare-table-wrap">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th scope="col">{t('cmp.col.country')}</th>
                    <th scope="col" className="compare-table__num">
                      {t('cmp.col.typicalAnnual')}
                    </th>
                    <th scope="col" className="compare-table__num">
                      {t('cmp.col.tableway')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {YEARLY_ROW_DEFS.map((row) => (
                    <tr key={`${row.countryKey}-${row.other}`}>
                      <td>{t(row.countryKey)}</td>
                      <td className="compare-table__num">{row.other}</td>
                      <td className="compare-table__num compare-table__tw">
                        <strong>{annualPrice}</strong>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="compare-stat">
              <p className="compare-stat__value">{yearlySavingsStat}</p>
              <p className="compare-stat__caption">{t('cmp.yearly.caption')}</p>
            </div>
          </div>
        </section>

        <section className="compare-section">
          <div className="compare-wrap">
            <h2 className="home-display compare-heading">{t('cmp.why.heading')}</h2>
            <div className="compare-cards">
              {whyCards.map(({ icon: Icon, title, text }) => (
                <article key={title} className="compare-card">
                  <span className="compare-card__icon">
                    <Icon aria-hidden />
                  </span>
                  <h3 className="compare-card__title">{title}</h3>
                  <p className="compare-card__text">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="compare-section">
          <div className="compare-wrap">
            <h2 className="home-display compare-heading">{t('cmp.features.heading')}</h2>
            <div className="compare-table-wrap">
              <table className="compare-table">
                <thead>
                  <tr>
                    <th scope="col">{t('cmp.col.feature')}</th>
                    <th scope="col">{t('cmp.col.traditional')}</th>
                    <th scope="col">{t('cmp.col.tableway')}</th>
                  </tr>
                </thead>
                <tbody>
                  {FEATURE_ROW_DEFS.map((row) => (
                    <tr key={row.featureKey}>
                      <td>{t(row.featureKey)}</td>
                      <td>{t(row.traditionalKey)}</td>
                      <td className="compare-table__tw">
                        {row.tablewayKey === 'zero' ? (
                          <strong className="compare-check">{zeroCommission}</strong>
                        ) : (
                          t(row.tablewayKey)
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="compare-section">
          <div className="compare-wrap">
            <h2 className="home-display compare-heading">{t('cmp.included.heading')}</h2>
            <ul className="compare-checklist">
              {INCLUDED_ITEM_KEYS.map((key) => (
                <li key={key}>{t(key)}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="compare-section compare-section--spacious">
          <div className="compare-wrap">
            <div className="compare-pricing-card">
              <p className="compare-pricing-card__eyebrow">{t('cmp.pricing.eyebrow')}</p>
              <p className="compare-pricing-card__price">
                {monthlyPrice}
                {t('cmp.pricing.perMonth')}
              </p>
              <p className="compare-pricing-card__sub">{t('cmp.pricing.sub')}</p>
              <div className="compare-plan-rows">
                {planRows.map((plan) =>
                  plan.best ? (
                    <div key={plan.name} className="compare-plan-row compare-plan-row--best">
                      <span className="compare-plan-row__name">
                        {plan.name}
                        <span className="compare-badge">{t('cmp.pricing.badge')}</span>
                      </span>
                      <span className="compare-plan-row__price">{plan.price}</span>
                    </div>
                  ) : (
                    <div key={plan.name} className="compare-plan-row">
                      <span className="compare-plan-row__name">{plan.name}</span>
                      <span className="compare-plan-row__price">{plan.price}</span>
                    </div>
                  ),
                )}
              </div>
              <div className="compare-pricing-card__footer">
                <span>{t('cmp.pricing.footerTrial')}</span>
                <span>{t('cmp.pricing.footerCommission')}</span>
                <span>{t('cmp.pricing.footerCancel')}</span>
              </div>
              <a href={SAAS_REGISTER_URL} className="tableway-btn compare-pricing-card__btn">
                {t('cmp.pricing.cta')}
              </a>
            </div>
          </div>
        </section>

        <section className="compare-section compare-section--spacious">
          <div className="compare-wrap">
            <div className="compare-final">
              <h2 className="home-display">{t('cmp.final.title')}</h2>
              <p className="home-lede compare-final__lede">
                {isArabic ? t('cmp.final.ledeAed') : t('cmp.final.lede')}
              </p>
              <div className="compare-final__actions">
                <a href={SAAS_REGISTER_URL} className="tableway-btn">
                  {t('cmp.final.cta')}
                </a>
                <Link href="/#pricing" className="compare-link">
                  {t('cmp.final.viewPricing')}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <HomeFooter />
    </div>
  );
}
