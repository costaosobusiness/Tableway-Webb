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

const LabelLi = ({
  labelKey,
  textKey,
}: {
  labelKey: LandingTranslationKey;
  textKey: LandingTranslationKey;
}) => {
  const { t } = useTranslation();
  return (
    <li>
      <strong>{t(labelKey)}</strong>
      {t(textKey)}
    </li>
  );
};

export default function PrivacyPage() {
  const { t } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MarketingSubpageShell>
      <PageSeo pageId="privacy" breadcrumbs={[{ name: t('privacy.title'), path: '/privacy-policy' }]} />
      <MarketingSubpageHero
        eyebrow={t('footer.privacy')}
        title={t('privacy.title')}
        subtitle={t('privacy.lastUpdated')}
      />

      <div className="subpage-body">
        <div className="subpage-content subpage-content--narrow">
          <article className="subpage-card subpage-prose">
        <p>
          {t('privacy.intro.beforeUrl')}{' '}
          <a href={TABLEWAY_URL}>
            {TABLEWAY_URL}
          </a>
          {t('privacy.intro.afterUrl')}
        </p>

        <Section title={t('privacy.s1.title')}>
          <p>{t('privacy.s1.intro')}</p>
          <ul>
            <LabelLi labelKey="privacy.s1.li1.label" textKey="privacy.s1.li1.text" />
            <LabelLi labelKey="privacy.s1.li2.label" textKey="privacy.s1.li2.text" />
            <LabelLi labelKey="privacy.s1.li3.label" textKey="privacy.s1.li3.text" />
          </ul>
          <p className="mt-3">{t('privacy.s1.outro')}</p>
        </Section>

        <Section title={t('privacy.s2.title')}>
          <p className="privacy-legal-entity-intro">
            <strong>{t('privacy.s2.p1.strong')}</strong>
            {t('privacy.s2.p1.afterStrong')}
          </p>
          <div className="privacy-legal-entity-details">
            <p>
              <strong>{t('privacy.s2.legalDetailsLabel')}</strong>
            </p>
            <p className="mt-2">
              {t('legal.companyName')}
              <br />
              {t('legal.addressLine1')}
              <br />
              {t('legal.addressLine2')}
              <br />
              {t('legal.nif')}
            </p>
          </div>
          <p>
            {t('privacy.s2.p3.beforeRestaurant')}
            <strong>{t('privacy.s2.p3.restaurantLabel')}</strong>
            {t('privacy.s2.p3.middle')}
            <strong>{t('privacy.s2.p3.processorLabel')}</strong>
            {t('privacy.s2.p3.afterProcessor')}
          </p>
          <p>{t('privacy.s2.p4')}</p>
        </Section>

        <Section title={t('privacy.s3.title')}>
          <p>
            <strong>{t('privacy.s3.accountLabel')}</strong>
          </p>
          <ul>
            <li>{t('privacy.s3.account.li1')}</li>
            <li>{t('privacy.s3.account.li2')}</li>
            <li>{t('privacy.s3.account.li3')}</li>
            <li>{t('privacy.s3.account.li4')}</li>
            <li>{t('privacy.s3.account.li5')}</li>
          </ul>
          <p className="mt-3">
            <strong>{t('privacy.s3.guestLabel')}</strong>
          </p>
          <ul>
            <li>{t('privacy.s3.guest.li1')}</li>
            <li>{t('privacy.s3.guest.li2')}</li>
          </ul>
          <p className="mt-3">
            <strong>{t('privacy.s3.bookingLabel')}</strong>
          </p>
          <ul>
            <li>{t('privacy.s3.booking.li1')}</li>
            <li>{t('privacy.s3.booking.li2')}</li>
            <li>{t('privacy.s3.booking.li3')}</li>
          </ul>
          <p className="mt-3">
            <strong>{t('privacy.s3.googleLabel')}</strong>
          </p>
          <p>{t('privacy.s3.google.p')}</p>
          <p className="mt-3">
            <strong>{t('privacy.s3.marketingLabel')}</strong>
          </p>
          <p>{t('privacy.s3.marketing.p')}</p>
        </Section>

        <Section title={t('privacy.s4.title')}>
          <p>{t('privacy.s4.intro')}</p>
          <ul>
            <LabelLi labelKey="privacy.s4.li1.label" textKey="privacy.s4.li1.text" />
            <LabelLi labelKey="privacy.s4.li2.label" textKey="privacy.s4.li2.text" />
            <LabelLi labelKey="privacy.s4.li3.label" textKey="privacy.s4.li3.text" />
            <LabelLi labelKey="privacy.s4.li4.label" textKey="privacy.s4.li4.text" />
            <LabelLi labelKey="privacy.s4.li5.label" textKey="privacy.s4.li5.text" />
          </ul>
          <p className="mt-3">{t('privacy.s4.outro')}</p>
        </Section>

        <Section title={t('privacy.s5.title')}>
          <p>
            <strong>{t('privacy.s5.platformLabel')}</strong>
          </p>
          <p>{t('privacy.s5.platform.p')}</p>
          <p className="mt-3">
            <strong>{t('privacy.s5.marketingLabel')}</strong>
          </p>
          <p>{t('privacy.s5.marketing.p')}</p>
          <p className="mt-3">
            <strong>{t('privacy.s5.consentLabel')}</strong>
          </p>
          <p>{t('privacy.s5.consent.p')}</p>
        </Section>

        <Section title={t('privacy.s6.title')}>
          <p>{t('privacy.s6.intro')}</p>
          <ul>
            <li>
              <strong>{t('privacy.s6.li1.label')}</strong>
              {t('privacy.s6.li1.text.beforeLink')}{' '}
              <a
                href="https://stripe.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('legal.stripePrivacyPolicy')}
              </a>
              {t('privacy.s6.li1.text.afterLink')}
            </li>
            <LabelLi labelKey="privacy.s6.li2.label" textKey="privacy.s6.li2.text" />
            <LabelLi labelKey="privacy.s6.li3.label" textKey="privacy.s6.li3.text" />
            <LabelLi labelKey="privacy.s6.li4.label" textKey="privacy.s6.li4.text" />
          </ul>
          <p className="mt-3">{t('privacy.s6.outro')}</p>
        </Section>

        <Section title={t('privacy.s7.title')}>
          <p>{t('privacy.s7.p')}</p>
        </Section>

        <Section title={t('privacy.s8.title')}>
          <p>{t('privacy.s8.intro')}</p>
          <ul>
            <LabelLi labelKey="privacy.s8.li1.label" textKey="privacy.s8.li1.text" />
            <LabelLi labelKey="privacy.s8.li2.label" textKey="privacy.s8.li2.text" />
            <LabelLi labelKey="privacy.s8.li3.label" textKey="privacy.s8.li3.text" />
            <LabelLi labelKey="privacy.s8.li4.label" textKey="privacy.s8.li4.text" />
          </ul>
          <p className="mt-3">{t('privacy.s8.outro')}</p>
        </Section>

        <Section title={t('privacy.s9.title')}>
          <p>{t('privacy.s9.intro')}</p>
          <ul>
            <li>{t('privacy.s9.li1')}</li>
            <li>{t('privacy.s9.li2')}</li>
            <li>{t('privacy.s9.li3')}</li>
            <li>{t('privacy.s9.li4')}</li>
            <li>{t('privacy.s9.li5')}</li>
          </ul>
          <p className="mt-3">{t('privacy.s9.p2')}</p>
          <p className="mt-3">
            {t('privacy.s9.p3.beforeLink')}{' '}
            <Link href="/contact">
              {t('legal.contactUs')}
            </Link>{' '}
            {t('privacy.s9.p3.afterLink')}
          </p>
        </Section>

        <Section title={t('privacy.s10.title')}>
          <p>{t('privacy.s10.p1')}</p>
          <p>{t('privacy.s10.p2')}</p>
          <p className="mt-3">
            {t('privacy.s10.p3.beforeLink')}{' '}
            <Link href="/contact">
              {t('legal.contactUs')}
            </Link>
            {t('privacy.s10.p3.afterLink')}
          </p>
          <p className="mt-3">
            {t('privacy.s10.p4.beforeLink')}{' '}
            <a
              href="https://www.aepd.es"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('legal.aepdLink')}
            </a>
            {t('privacy.s10.p4.afterLink')}
          </p>
        </Section>

        <Section title={t('privacy.s11.title')}>
          <p>{t('privacy.s11.p')}</p>
        </Section>

        <Section title={t('privacy.s12.title')}>
          <p>{t('privacy.s12.p')}</p>
        </Section>
          </article>
        </div>
      </div>
    </MarketingSubpageShell>
  );
}
