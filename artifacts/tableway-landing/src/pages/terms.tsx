import { useEffect } from 'react';
import { Link } from 'wouter';

import { MarketingSubpageHero } from '@/components/MarketingSubpageHero';
import { MarketingSubpageShell } from '@/components/MarketingSubpageShell';
import { PageSeo } from '@/components/seo/PageSeo';
import { useTranslation } from '@/i18n/LocaleProvider';
import type { LandingTranslationKey } from '@/i18n/types';

const TABLEWAY_URL = 'https://tableway.app';

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="subpage-section">
    <h2 className="subpage-section__title">{title}</h2>
    <div>{children}</div>
  </div>
);

export default function TermsPage() {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const acceptableUseKeys: LandingTranslationKey[] = [
    'terms.s10.li1',
    'terms.s10.li2',
    'terms.s10.li3',
    'terms.s10.li4',
    'terms.s10.li5',
    'terms.s10.li6',
    'terms.s10.li7',
  ];

  const responsibilityKeys: LandingTranslationKey[] = [
    'terms.s9.li1',
    'terms.s9.li2',
    'terms.s9.li3',
    'terms.s9.li4',
    'terms.s9.li5',
  ];

  return (
    <MarketingSubpageShell>
      <PageSeo pageId="terms" breadcrumbs={[{ name: t('terms.title'), path: '/terms-of-service' }]} />
      <MarketingSubpageHero
        eyebrow={t('footer.terms')}
        title={t('terms.title')}
        subtitle={t('terms.lastUpdated')}
      />

      <div className="subpage-body">
        <div className="subpage-content subpage-content--narrow">
          <article className="subpage-card subpage-prose">
        <p>
          {t('terms.intro.beforeUrl')}{' '}
          <a href={TABLEWAY_URL}>
            {TABLEWAY_URL}
          </a>
          {t('terms.intro.afterUrl')}
        </p>

        <Section title={t('terms.s1.title')}>
          <p>{t('terms.s1.p1')}</p>
          <p>{t('terms.s1.p2')}</p>
        </Section>

        <Section title={t('terms.s2.title')}>
          <p>{t('terms.s2.p1')}</p>
          <p>{t('terms.s2.p2')}</p>
        </Section>

        <Section title={t('terms.s3.title')}>
          <p>{t('terms.s3.p1')}</p>
          <p>
            {t('terms.s3.p2.beforeLink')}{' '}
            <Link href="/contact">
              {t('legal.contactUs')}
            </Link>{' '}
            {t('terms.s3.p2.afterLink')}
          </p>
        </Section>

        <Section title={t('terms.s4.title')}>
          <p>{t('terms.s4.p1')}</p>
          <p>{t('terms.s4.p2')}</p>
          <p>{t('terms.s4.p3')}</p>
        </Section>

        <Section title={t('terms.s5.title')}>
          <p>{t('terms.s5.p1')}</p>
          <p>{t('terms.s5.p2')}</p>
        </Section>

        <Section title={t('terms.s6.title')}>
          <p>{t('terms.s6.p1')}</p>
          <p>{t('terms.s6.p2')}</p>
          <p>{t('terms.s6.p3')}</p>
        </Section>

        <Section title={t('terms.s7.title')}>
          <p>{t('terms.s7.p1')}</p>
          <p>{t('terms.s7.p2')}</p>
          <p>{t('terms.s7.p3')}</p>
        </Section>

        <Section title={t('terms.s8.title')}>
          <p>{t('terms.s8.p1')}</p>
        </Section>

        <Section title={t('terms.s9.title')}>
          <p>{t('terms.s9.intro')}</p>
          <ul>
            {responsibilityKeys.map((key) => (
              <li key={key}>{t(key)}</li>
            ))}
          </ul>
        </Section>

        <Section title={t('terms.s10.title')}>
          <p>{t('terms.s10.intro')}</p>
          <ul>
            {acceptableUseKeys.map((key) => (
              <li key={key}>{t(key)}</li>
            ))}
          </ul>
        </Section>

        <Section title={t('terms.s11.title')}>
          <p>{t('terms.s11.p1')}</p>
          <p>{t('terms.s11.p2')}</p>
        </Section>

        <Section title={t('terms.s12.title')}>
          <p>{t('terms.s12.p1')}</p>
          <p>{t('terms.s12.p2')}</p>
        </Section>

        <Section title={t('terms.s13.title')}>
          <p>{t('terms.s13.p1')}</p>
          <p>{t('terms.s13.p2')}</p>
        </Section>

        <Section title={t('terms.s14.title')}>
          <p>{t('terms.s14.p1')}</p>
          <p>{t('terms.s14.p2')}</p>
          <p>{t('terms.s14.p3')}</p>
        </Section>

        <Section title={t('terms.s15.title')}>
          <p>{t('terms.s15.p1')}</p>
          <p>{t('terms.s15.p2')}</p>
        </Section>

        <Section title={t('terms.s16.title')}>
          <p>{t('terms.s16.p1')}</p>
        </Section>

        <Section title={t('terms.s17.title')}>
          <p>{t('terms.s17.p1')}</p>
          <p>{t('terms.s17.p2')}</p>
        </Section>
          </article>
        </div>
      </div>
    </MarketingSubpageShell>
  );
}
