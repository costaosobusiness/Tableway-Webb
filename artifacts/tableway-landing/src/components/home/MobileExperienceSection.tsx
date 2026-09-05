import { HOME_IMAGES, HOME_IMAGE_DIMENSIONS } from '@/components/home/homeImages';
import { SAAS_REGISTER_URL } from '@/components/home/homeLinks';
import { useHomeReveal } from '@/components/home/useHomeReveal';
import { useTranslation } from '@/i18n/LocaleProvider';
import type { LandingTranslationKey } from '@/i18n/types';

const MOBILE_BULLET_KEYS = [
  'site.mobile.bullet1',
  'site.mobile.bullet2',
  'site.mobile.bullet3',
] as const satisfies readonly LandingTranslationKey[];

export function MobileExperienceSection() {
  const { ref, visible } = useHomeReveal<HTMLElement>(0.1);
  const { t } = useTranslation();

  return (
    <section className="home-section home-mobile mobile-app-section" ref={ref}>
      <div className="home-container home-device-pair home-device-pair--reverse home-mobile__inner">
        <div
          className={`home-mobile__visual home-spotlight home-reveal ${visible ? 'is-visible' : ''}`}
        >
          <img
            className="home-mobile__image home-device-shadow section-image mobile-app-image"
            src={HOME_IMAGES.mobile}
            alt={t('site.mobile.imageAlt')}
            width={HOME_IMAGE_DIMENSIONS.mobile.width}
            height={HOME_IMAGE_DIMENSIONS.mobile.height}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className={`home-reveal home-mobile__copy ${visible ? 'is-visible' : ''}`}>
          <p className="home-eyebrow section-eyebrow">{t('site.mobile.eyebrow')}</p>
          <h2 className="home-display home-editorial-heading section-title">{t('site.mobile.heading')}</h2>
          <p className="home-lede home-mobile__lede section-description">{t('site.mobile.lede')}</p>
          <ul className="home-mobile__list">
            {MOBILE_BULLET_KEYS.map((key) => (
              <li key={key}>{t(key)}</li>
            ))}
          </ul>
          <a href={SAAS_REGISTER_URL} className="tableway-btn home-mobile__cta section-button">
            {t('site.mobile.cta')}
          </a>
        </div>
      </div>
    </section>
  );
}
