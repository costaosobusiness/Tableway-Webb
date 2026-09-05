import { Link } from 'wouter';

import { HOME_IMAGES, HOME_IMAGE_DIMENSIONS } from '@/components/home/homeImages';
import { useHomeReveal } from '@/components/home/useHomeReveal';
import { useTranslation } from '@/i18n/LocaleProvider';
import { getAnnualSavingsDisplay, getDashboardPricingDisplay } from '@/lib/officialMarketPricing';

export function DashboardSection() {
  const { ref, visible } = useHomeReveal<HTMLElement>(0.08);
  const { locale, t } = useTranslation();
  const dashboardStats = getDashboardPricingDisplay(locale, t);
  const savingsStat = getAnnualSavingsDisplay(locale, t, 'dashboard');

  return (
    <section id="features" ref={ref} className="home-section home-dashboard compare-section">
      <div className="home-container home-device-pair home-dashboard__inner">
        <div className={`home-reveal home-dashboard__copy ${visible ? 'is-visible' : ''}`}>
          <p className="home-eyebrow home-dashboard__eyebrow">{t('site.dashboard.eyebrow')}</p>
          <h2 className="home-display home-editorial-heading">{t('site.dashboard.heading')}</h2>
          <p className="home-lede home-dashboard__lede">{t('site.dashboard.lede')}</p>
          <ul className="home-dashboard__stats">
            <li>{dashboardStats.traditional}</li>
            <li>{dashboardStats.tableway}</li>
          </ul>
          <p className="home-dashboard__save">{savingsStat}</p>
          <Link href="/compare" className="tableway-btn home-dashboard__cta">
            {t('site.dashboard.cta')}
          </Link>
        </div>

        <div
          className={`home-dashboard__visual home-spotlight home-reveal ${visible ? 'is-visible' : ''}`}
        >
          <img
            className="home-dashboard__image home-device-shadow"
            src={HOME_IMAGES.desktop}
            alt={t('site.dashboard.imageAlt')}
            width={HOME_IMAGE_DIMENSIONS.desktop.width}
            height={HOME_IMAGE_DIMENSIONS.desktop.height}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
