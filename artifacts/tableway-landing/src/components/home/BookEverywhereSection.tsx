import { Link } from 'wouter';

import { useHomeReveal } from '@/components/home/useHomeReveal';
import { useTranslation } from '@/i18n/LocaleProvider';

const BOOK_EVERYWHERE_IMAGE = '/images/new6.png';

export function BookEverywhereSection() {
  const { ref, visible } = useHomeReveal<HTMLElement>(0.1);
  const { t } = useTranslation();

  return (
    <section id="how-it-works" ref={ref} className="home-section home-book book-everywhere-section">
      <div className={`home-container home-book__inner home-reveal ${visible ? 'is-visible' : ''}`}>
        <div className="home-book__copy">
          <p className="home-eyebrow home-book__eyebrow">{t('nav.howItWorks')}</p>
          <h2 className="home-book__heading">{t('site.book.heading')}</h2>
          <p className="home-lede home-book__lede">{t('site.book.lede')}</p>
          <Link href="/how-links-work" className="tableway-btn home-book__cta">
            {t('site.book.cta')}
          </Link>
        </div>

        <img
          src={BOOK_EVERYWHERE_IMAGE}
          alt={t('site.book.imageAlt')}
          loading="lazy"
          decoding="async"
          className="home-book__image"
        />
      </div>
    </section>
  );
}
