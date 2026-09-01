import { Link } from 'wouter';

import { HOME_IMAGES } from '@/components/home/homeImages';
import { SAAS_DOWNLOAD_URL } from '@/components/home/homeLinks';
import { useTranslation } from '@/i18n/LocaleProvider';
import type { LandingTranslationKey } from '@/i18n/types';

type FooterLinkConfig = {
  labelKey: LandingTranslationKey;
  href: string;
  external?: boolean;
};

const PRODUCT_LINKS: FooterLinkConfig[] = [
  { labelKey: 'footer.features', href: '#features' },
  { labelKey: 'footer.pricing', href: '#pricing' },
  { labelKey: 'footer.compare', href: '/compare' },
  { labelKey: 'footer.downloadApp', href: SAAS_DOWNLOAD_URL, external: true },
  { labelKey: 'footer.howLinksWork', href: '/how-links-work' },
];

const COMPANY_LINKS: FooterLinkConfig[] = [
  { labelKey: 'footer.about', href: '/about' },
  { labelKey: 'footer.contact', href: '/contact' },
  { labelKey: 'footer.faq', href: '/faq' },
  { labelKey: 'footer.privacy', href: '/privacy-policy' },
  { labelKey: 'footer.terms', href: '/terms-of-service' },
];

function FooterLink({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  if (external) {
    return (
      <a href={href} className="home-footer__link" target="_blank" rel="noreferrer">
        {label}
      </a>
    );
  }

  if (href.startsWith('#')) {
    return (
      <a href={href} className="home-footer__link">
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className="home-footer__link">
      {label}
    </Link>
  );
}

export function HomeFooter() {
  const { t } = useTranslation();

  return (
    <footer className="home-footer">
      <div className="home-container home-footer__grid">
        <div className="home-footer__brand">
          <a href="/" className="home-footer__logo-link">
            <img src={HOME_IMAGES.logo} alt="TableWay" className="home-footer__logo" />
          </a>
          <p className="home-footer__tagline">{t('footer.tagline')}</p>
        </div>

        <nav className="home-footer__col" aria-label={t('footer.product')}>
          <p className="home-footer__heading">{t('footer.product')}</p>
          <ul className="home-footer__links">
            {PRODUCT_LINKS.map((link) => (
              <li key={link.labelKey}>
                <FooterLink href={link.href} label={t(link.labelKey)} external={link.external} />
              </li>
            ))}
          </ul>
        </nav>

        <nav className="home-footer__col" aria-label={t('footer.company')}>
          <p className="home-footer__heading">{t('footer.company')}</p>
          <ul className="home-footer__links">
            {COMPANY_LINKS.map((link) => (
              <li key={link.labelKey}>
                <FooterLink href={link.href} label={t(link.labelKey)} />
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="home-container home-footer__legal">
        <p>{t('footer.copyrightLine')}</p>
      </div>
    </footer>
  );
}
