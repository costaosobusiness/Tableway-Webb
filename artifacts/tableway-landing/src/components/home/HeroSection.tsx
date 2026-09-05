import { SAAS_REGISTER_URL } from '@/components/home/homeLinks';
import { HOME_IMAGES, HOME_IMAGE_DIMENSIONS } from '@/components/home/homeImages';
import { useTranslation } from '@/i18n/LocaleProvider';

export function HeroSection() {
  const { t } = useTranslation();
  const heroDimensions = HOME_IMAGE_DIMENSIONS.hero;

  return (
    <section className="home-hero" aria-label="TableWay restaurant booking system">
      <img
        src={HOME_IMAGES.hero}
        alt="TableWay restaurant reservation and booking system on laptop and mobile"
        width={heroDimensions.width}
        height={heroDimensions.height}
        fetchPriority="high"
        decoding="async"
        className="home-hero__image home-hero__image--desktop"
      />
      <div className="home-hero__overlay home-hero__overlay--desktop" aria-hidden />

      <div className="home-hero__content home-container">
        <div className="home-hero__copy">
          <p className="home-eyebrow home-hero__eyebrow">{t('site.hero.eyebrow')}</p>
          <h1 className="home-headline home-hero__headline">
            {t('site.hero.headline1')}
            <br />
            {t('site.hero.headline2')}
            <br />
            {t('site.hero.headline3')}
          </h1>
          <div className="home-hero__paragraphs">
            <p className="home-subheadline home-hero-subheadline">{t('site.hero.sub1')}</p>
            <p className="home-subheadline home-hero-subheadline">{t('site.hero.sub2')}</p>
          </div>
          <div className="home-hero__actions">
            <a href={SAAS_REGISTER_URL} className="tableway-btn home-hero__cta home-hero__cta--desktop">
              {t('site.hero.cta')}
            </a>
            <a href={SAAS_REGISTER_URL} className="tableway-btn-primary home-hero__cta home-hero__cta--mobile">
              {t('site.hero.cta')}
            </a>
          </div>
        </div>
      </div>

      <div className="home-hero__mobile-visual home-container">
        <img
          src={HOME_IMAGES.hero}
          alt="TableWay restaurant reservation and booking system on laptop and mobile"
          width={heroDimensions.width}
          height={heroDimensions.height}
          loading="eager"
          decoding="async"
          className="home-hero__image-mobile"
        />
      </div>
    </section>
  );
}
