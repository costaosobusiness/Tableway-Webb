import { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';

import {
  SAAS_LOGIN_URL,
  SAAS_REGISTER_URL,
} from '@/components/home/homeLinks';
import { LanguageSelector } from '@/components/LanguageSelector';
import { HOME_IMAGES } from '@/components/home/homeImages';
import { MobileNavDrawer, MobileNavToggle } from '@/components/layout/MobileNavDrawer';
import { useTranslation } from '@/i18n/LocaleProvider';
import type { LandingTranslationKey } from '@/i18n/types';
import {
  getHashIdFromHref,
  queueHomeHashScroll,
  scrollToHashWhenReady,
} from '@/lib/hashScroll';

type NavLink = {
  labelKey: LandingTranslationKey;
  href: string;
  external?: boolean;
};

const NAV_LINKS: NavLink[] = [
  { labelKey: 'nav.features', href: '/#features' },
  { labelKey: 'nav.pricing', href: '/#pricing' },
  { labelKey: 'nav.compare', href: '/compare' },
  { labelKey: 'nav.howItWorks', href: '/#how-it-works' },
  { labelKey: 'nav.downloadApp', href: '/download' },
];

function isHomePath(pathname: string) {
  return pathname === '/' || pathname === '';
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pathname, navigate] = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const handleNavClick = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    const hashId = getHashIdFromHref(href);
    if (!hashId) {
      return;
    }

    event.preventDefault();

    if (isHomePath(pathname)) {
      window.history.pushState(null, '', `#${hashId}`);
      scrollToHashWhenReady(hashId);
      return;
    }

    queueHomeHashScroll(hashId);
    navigate('/');
  };

  return (
    <>
      <header
        className={`home-nav-header fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'border-b border-white/10 bg-[#050505]/92' : 'bg-transparent'
        }`}
      >
        <div className="home-container home-nav-bar flex items-center justify-between gap-4">
          <Link href="/" className="home-nav-logo">
            <img src={HOME_IMAGES.logo} alt="TableWay" className="home-logo" />
          </Link>

          <nav className="home-nav-desktop items-center gap-6">
            {NAV_LINKS.map((link) => {
              const hashId = getHashIdFromHref(link.href);

              if (hashId) {
                return (
                  <Link
                    key={link.labelKey}
                    href={link.href}
                    className="home-nav-link"
                    onClick={handleNavClick(link.href)}
                  >
                    {t(link.labelKey)}
                  </Link>
                );
              }

              return (
                <Link
                  key={link.labelKey}
                  href={link.href}
                  className="home-nav-link"
                  {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  {t(link.labelKey)}
                </Link>
              );
            })}
          </nav>

          <div className="home-nav-desktop-actions flex items-center gap-3">
            <LanguageSelector className="home-nav-desktop-lang" />
            <a href={SAAS_LOGIN_URL} className="tableway-btn home-nav-desktop-login">
              {t('nav.logIn')}
            </a>
            <a href={SAAS_REGISTER_URL} className="tableway-btn-primary home-nav-desktop-trial">
              {t('nav.startFreeTrial')}
            </a>
          </div>

          <div className="home-nav-mobile-actions flex items-center gap-2 shrink-0">
            <LanguageSelector className="home-nav-mobile-lang" />
            <MobileNavToggle open={mobileOpen} onToggle={() => setMobileOpen((value) => !value)} />
          </div>
        </div>
      </header>

      <MobileNavDrawer open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
