import { useEffect } from 'react';

import { MarketingSubpageHero } from '@/components/MarketingSubpageHero';
import { MarketingSubpageShell } from '@/components/MarketingSubpageShell';
import { PageSeo } from '@/components/seo/PageSeo';
import { HOME_IMAGE_DIMENSIONS } from '@/components/home/homeImages';
import { useTranslation } from '@/i18n/LocaleProvider';
import { resolvePricingCountryFromLocale } from '@/lib/officialMarketPricing';
import { tablewaySaasRegisterUrl } from '@/lib/tablewayUrls';

export default function AboutPage() {
  const { t, locale } = useTranslation();
  const pricingCountry = resolvePricingCountryFromLocale(locale);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MarketingSubpageShell>
      <PageSeo pageId="about" breadcrumbs={[{ name: t('about.title'), path: '/about' }]} />
      <MarketingSubpageHero
        eyebrow={t('footer.about')}
        title={t('about.title')}
        subtitle={t('about.subtitle')}
      />

      <div className="subpage-body">
        <div className="subpage-content subpage-content--narrow subpage-stack">
          <article className="subpage-card subpage-prose">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
            <p>{t('about.p4')}</p>
            <p>{t('about.p5')}</p>
            <p>{t('about.p6')}</p>
            <p>{t('about.p7')}</p>
            <p>{t('about.p8')}</p>
            <p>{t('about.p9')}</p>
            <p>
              <strong>{t('about.founderName')}</strong>
              <br />
              {t('about.founderTitle')}
            </p>
          </article>

          <img
            src="/about-us.png"
            alt={t('about.imageAlt')}
            width={HOME_IMAGE_DIMENSIONS.about.width}
            height={HOME_IMAGE_DIMENSIONS.about.height}
            className="subpage-about-image"
            loading="lazy"
            decoding="async"
          />

          <article className="subpage-card subpage-cta">
            <p className="subpage-cta__title">{t('about.ctaTitle')}</p>
            <a
              href={tablewaySaasRegisterUrl('12m', locale, pricingCountry)}
              className="tableway-btn-primary"
            >
              {t('common.startFreeTrial30')}
            </a>
          </article>
        </div>
      </div>
    </MarketingSubpageShell>
  );
}
