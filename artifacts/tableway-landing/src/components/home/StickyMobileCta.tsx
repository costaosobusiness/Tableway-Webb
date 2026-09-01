import { useEffect, useState } from 'react';

import { SAAS_REGISTER_URL } from '@/components/home/homeLinks';
import { useTranslation } from '@/i18n/LocaleProvider';

export function StickyMobileCta() {
  const { t } = useTranslation();
  const [pastHeroImage, setPastHeroImage] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const heroImage = document.querySelector('.home-hero__mobile-visual');
    const footer = document.querySelector('.home-footer');
    if (!heroImage || !footer) {
      return;
    }

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        const scrolledPast =
          !entry.isIntersecting && entry.boundingClientRect.top < 0;
        setPastHeroImage(scrolledPast);
      },
      { threshold: 0 },
    );

    const footerObserver = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      { threshold: 0 },
    );

    heroObserver.observe(heroImage);
    footerObserver.observe(footer);

    return () => {
      heroObserver.disconnect();
      footerObserver.disconnect();
    };
  }, []);

  const visible = pastHeroImage && !footerVisible;

  return (
    <div className={`home-sticky-cta${visible ? ' is-visible' : ''}`} aria-hidden={!visible}>
      <a href={SAAS_REGISTER_URL} className="tableway-btn-primary home-sticky-cta__button">
        {t('nav.startFreeTrial')}
      </a>
    </div>
  );
}
