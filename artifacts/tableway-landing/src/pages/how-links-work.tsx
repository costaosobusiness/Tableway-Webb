import { useEffect, type ReactNode } from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa6';
import { Globe } from 'lucide-react';

import { SAAS_REGISTER_URL } from '@/components/home/homeLinks';
import { HomeFooter } from '@/components/layout/HomeFooter';
import { Navbar } from '@/components/layout/Navbar';
import { PageSeo } from '@/components/seo/PageSeo';
import { useTranslation } from '@/i18n/LocaleProvider';
import type { LandingTranslationKey } from '@/i18n/types';

import '@/styles/home.css';
import '@/styles/how-links-work.css';

const BOOKING_LINK = 'https://book.tableway.app/yourrestaurant';

const WEBSITE_PLACEMENT_KEYS = [
  { titleKey: 'hlw.website.placement1.title', textKey: 'hlw.website.placement1.text' },
  { titleKey: 'hlw.website.placement2.title', textKey: 'hlw.website.placement2.text' },
  { titleKey: 'hlw.website.placement3.title', textKey: 'hlw.website.placement3.text' },
  { titleKey: 'hlw.website.placement4.title', textKey: 'hlw.website.placement4.text' },
] as const satisfies readonly { titleKey: LandingTranslationKey; textKey: LandingTranslationKey }[];

const BUTTON_EXAMPLES = [
  'Reserve a Table',
  'Book Now',
  'Reserve Instantly',
  'Book Your Table',
] as const;

const TABLE_ROWS = [
  { platformKey: 'hlw.table.instagram', locationKey: 'hlw.table.instagramLoc' },
  { platformKey: 'hlw.table.facebook', locationKey: 'hlw.table.facebookLoc' },
  { platformKey: 'hlw.table.website', locationKey: 'hlw.table.websiteLoc' },
  { platformKey: 'hlw.table.tiktok', locationKey: 'hlw.table.tiktokLoc' },
  { platformKey: 'hlw.table.youtube', locationKey: 'hlw.table.youtubeLoc' },
] as const satisfies readonly { platformKey: LandingTranslationKey; locationKey: LandingTranslationKey }[];

function PlatformIcon({ children }: { children: ReactNode }) {
  return <div className="hlw-platform__icon">{children}</div>;
}

function PracticeCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="hlw-practice">
      <p className="hlw-practice__title">{title}</p>
      <div className="hlw-practice__body">{children}</div>
    </div>
  );
}

function StepList({ steps }: { steps: readonly string[] }) {
  return (
    <ol className="hlw-steps">
      {steps.map((step) => (
        <li key={step}>{step}</li>
      ))}
    </ol>
  );
}

export default function HowLinksWorkPage() {
  const { t } = useTranslation();

  const instagramSteps = [
    t('hlw.instagram.step1'),
    t('hlw.instagram.step2'),
    t('hlw.instagram.step3'),
    t('hlw.instagram.step4'),
    t('hlw.instagram.step5'),
    t('hlw.instagram.step6'),
    t('hlw.instagram.step7'),
    t('hlw.instagram.step8'),
  ] as const;

  const facebookSteps = [
    t('hlw.facebook.step1'),
    t('hlw.facebook.step2'),
    t('hlw.facebook.step3'),
    t('hlw.facebook.step4'),
    t('hlw.facebook.step5'),
    t('hlw.facebook.step6'),
  ] as const;

  const tiktokSteps = [
    t('hlw.tiktok.step1'),
    t('hlw.tiktok.step2'),
    t('hlw.tiktok.step3'),
    t('hlw.tiktok.step4'),
    t('hlw.tiktok.step5'),
    t('hlw.tiktok.step6'),
  ] as const;

  const youtubeSteps = [
    t('hlw.youtube.step1'),
    t('hlw.youtube.step2'),
    t('hlw.youtube.step3'),
    t('hlw.youtube.step4'),
    t('hlw.youtube.step5'),
    t('hlw.youtube.step6'),
    t('hlw.youtube.step7'),
  ] as const;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page hlw-page">
      <PageSeo
        pageId="howLinksWork"
        breadcrumbs={[{ name: t('hlw.hero.title'), path: '/how-links-work' }]}
      />
      <Navbar />
      <main>
        <section className="hlw-hero">
          <div className="home-container hlw-hero__inner">
            <p className="home-eyebrow">{t('hlw.hero.eyebrow')}</p>
            <h1 className="hlw-hero__title">{t('hlw.hero.title')}</h1>
            <p className="home-lede hlw-hero__lede">{t('hlw.hero.lede1')}</p>
            <p className="home-lede hlw-hero__lede">{t('hlw.hero.lede2')}</p>
            <a href={SAAS_REGISTER_URL} className="tableway-btn hlw-hero__cta">
              {t('hlw.hero.cta')}
            </a>
          </div>
        </section>

        <section className="hlw-section">
          <div className="home-container hlw-split">
            <div className="hlw-split__copy">
              <h2 className="home-display hlw-heading">{t('hlw.link.title')}</h2>
              <p className="home-lede">{t('hlw.link.p1')}</p>
              <p className="home-lede hlw-body-gap">{t('hlw.link.p2')}</p>
            </div>
            <div className="hlw-split__aside">
              <div className="hlw-code-box">
                <code>{BOOKING_LINK}</code>
              </div>
              <p className="hlw-code-caption">{t('hlw.link.caption')}</p>
            </div>
          </div>
        </section>

        <section className="hlw-section">
          <div className="home-container">
            <article className="hlw-card hlw-platform">
              <PlatformIcon>
                <FaInstagram aria-hidden />
              </PlatformIcon>
              <h2 className="home-display hlw-platform__title">{t('hlw.instagram.title')}</h2>
              <p className="home-lede hlw-platform__desc">{t('hlw.instagram.desc')}</p>
              <StepList steps={instagramSteps} />
              <PracticeCard title={t('hlw.instagram.practiceTitle')}>
                <p>{t('hlw.instagram.practiceText')}</p>
              </PracticeCard>
              <p className="hlw-tip">{t('hlw.instagram.tip')}</p>
            </article>
          </div>
        </section>

        <section className="hlw-section">
          <div className="home-container">
            <article className="hlw-card hlw-platform">
              <PlatformIcon>
                <FaFacebook aria-hidden />
              </PlatformIcon>
              <h2 className="home-display hlw-platform__title">{t('hlw.facebook.title')}</h2>
              <p className="home-lede hlw-platform__desc">
                {t('hlw.facebook.descBefore')}
                <strong>{t('hlw.facebook.descStrong')}</strong>
                {t('hlw.facebook.descAfter')}
              </p>
              <StepList steps={facebookSteps} />
              <PracticeCard title={t('hlw.facebook.practiceTitle')}>
                <p>{t('hlw.facebook.practiceIntro')}</p>
                <ul className="hlw-list">
                  <li>{t('hlw.facebook.practice1')}</li>
                  <li>{t('hlw.facebook.practice2')}</li>
                  <li>{t('hlw.facebook.practice3')}</li>
                  <li>{t('hlw.facebook.practice4')}</li>
                </ul>
              </PracticeCard>
            </article>
          </div>
        </section>

        <section className="hlw-section">
          <div className="home-container">
            <article className="hlw-card hlw-platform">
              <PlatformIcon>
                <Globe aria-hidden strokeWidth={1.5} />
              </PlatformIcon>
              <h2 className="home-display hlw-platform__title">{t('hlw.website.title')}</h2>
              <p className="home-lede hlw-platform__desc">{t('hlw.website.desc')}</p>
              <div className="hlw-mini-grid">
                {WEBSITE_PLACEMENT_KEYS.map((item) => (
                  <div key={item.titleKey} className="hlw-mini-card">
                    <h3 className="hlw-mini-card__title">{t(item.titleKey)}</h3>
                    <p className="hlw-mini-card__text">{t(item.textKey)}</p>
                  </div>
                ))}
              </div>
              <div className="hlw-button-examples">
                <p className="hlw-label">{t('hlw.website.buttonExamples')}</p>
                <div className="hlw-button-examples__row">
                  {BUTTON_EXAMPLES.map((label) => (
                    <span key={label} className="tableway-btn hlw-button-example">
                      {label}
                    </span>
                  ))}
                </div>
                <p className="hlw-example-note">{t('hlw.website.exampleNote')}</p>
              </div>
              <div className="hlw-code-block">
                <p className="hlw-label">{t('hlw.website.htmlExample')}</p>
                <pre>
                  <code>{`<a href="${BOOKING_LINK}" target="_blank">\n  Reserve a Table\n</a>`}</code>
                </pre>
              </div>
            </article>
          </div>
        </section>

        <section className="hlw-section">
          <div className="home-container">
            <article className="hlw-card hlw-platform">
              <PlatformIcon>
                <FaTiktok aria-hidden />
              </PlatformIcon>
              <h2 className="home-display hlw-platform__title">{t('hlw.tiktok.title')}</h2>
              <p className="home-lede hlw-platform__desc">{t('hlw.tiktok.desc')}</p>
              <StepList steps={tiktokSteps} />
              <PracticeCard title={t('hlw.tiktok.practiceTitle')}>
                <p>{t('hlw.tiktok.practiceText')}</p>
              </PracticeCard>
            </article>
          </div>
        </section>

        <section className="hlw-section">
          <div className="home-container">
            <article className="hlw-card hlw-platform">
              <PlatformIcon>
                <FaYoutube aria-hidden />
              </PlatformIcon>
              <h2 className="home-display hlw-platform__title">{t('hlw.youtube.title')}</h2>
              <p className="home-lede hlw-platform__desc">{t('hlw.youtube.desc')}</p>
              <StepList steps={youtubeSteps} />
              <PracticeCard title={t('hlw.youtube.practiceTitle')}>
                <p>{t('hlw.youtube.practiceIntro')}</p>
                <ul className="hlw-list">
                  <li>{t('hlw.youtube.practice1')}</li>
                  <li>{t('hlw.youtube.practice2')}</li>
                  <li>{t('hlw.youtube.practice3')}</li>
                </ul>
              </PracticeCard>
            </article>
          </div>
        </section>

        <section className="hlw-section">
          <div className="home-container">
            <h2 className="home-display hlw-heading hlw-table-heading">{t('hlw.table.heading')}</h2>
            <div className="hlw-table-wrap">
              <table className="hlw-table">
                <thead>
                  <tr>
                    <th scope="col">{t('hlw.table.colPlatform')}</th>
                    <th scope="col">{t('hlw.table.colLocation')}</th>
                  </tr>
                </thead>
                <tbody>
                  {TABLE_ROWS.map((row) => (
                    <tr key={row.platformKey}>
                      <td>{t(row.platformKey)}</td>
                      <td>{t(row.locationKey)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="hlw-section hlw-section--final">
          <div className="home-container">
            <div className="hlw-final-cta">
              <h2 className="home-display">{t('hlw.final.title')}</h2>
              <p className="home-lede">{t('hlw.final.line1')}</p>
              <p className="home-lede">{t('hlw.final.line2')}</p>
              <p className="home-lede hlw-body-gap">{t('hlw.final.line3')}</p>
              <a href={SAAS_REGISTER_URL} className="tableway-btn hlw-final-cta__btn">
                {t('hlw.final.cta')}
              </a>
            </div>
          </div>
        </section>
      </main>
      <HomeFooter />
    </div>
  );
}
