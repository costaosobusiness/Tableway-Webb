import { useMemo } from 'react';
import { useHomeReveal } from '@/components/home/useHomeReveal';
import { useTranslation } from '@/i18n/LocaleProvider';
import { buildHomePricingCards, type HomePricingCard } from '@/lib/homePricingPlans';
import {
  getOfficialMarketPricingForLocale,
  resolvePricingCountryFromLocale,
} from '@/lib/officialMarketPricing';
import { tablewaySaasRegisterUrl } from '@/lib/tablewayUrls';

function PricingCardCta({
  card,
  locale,
  country,
  label,
}: {
  card: HomePricingCard;
  locale: ReturnType<typeof useTranslation>['locale'];
  country: string;
  label: string;
}) {
  return (
    <a
      href={tablewaySaasRegisterUrl(card.slug, locale, country)}
      className="tableway-btn home-rate__cta"
    >
      {label}
    </a>
  );
}

export function PricingSection() {
  const { ref, visible } = useHomeReveal<HTMLDivElement>(0.1);
  const { locale, t } = useTranslation();
  const pricing = useMemo(() => getOfficialMarketPricingForLocale(locale), [locale]);
  const country = resolvePricingCountryFromLocale(locale);
  const cards = buildHomePricingCards(pricing, t);
  const ctaLabel = locale === 'ar' ? t('site.pricing.cta30') : t('site.pricing.cta');

  return (
    <section id="pricing" className="home-section home-rates" ref={ref}>
      <div className="home-container home-rates__container">
        <div className={`home-reveal home-rates__intro ${visible ? 'is-visible' : ''}`}>
          <h2 className="home-display home-rates__title">{t('site.pricing.title')}</h2>
          <p className="home-lede home-rates__subtitle">{t('site.pricing.subtitle')}</p>
        </div>

        <div className="home-rates__grid">
          {cards.map((card) => (
            <article key={card.slug} className={`home-rate home-rate--${card.variant}`}>
              <div className="home-rate__head">
                <p className="home-rate__name">{card.name}</p>
                {card.badge ? <span className="home-rate__badge">{card.badge}</span> : null}
              </div>

              <p className="home-rate__price">{card.plan?.priceLabel ?? '—'}</p>
              <p className="home-rate__period">{card.billingPeriod}</p>
              {card.currency ? <p className="home-rate__currency">{card.currency}</p> : null}

              <ul className="home-rate__list">
                {card.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <PricingCardCta card={card} locale={locale} country={country} label={ctaLabel} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
