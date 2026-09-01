import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';

import { SAAS_LOGIN_URL, SAAS_REGISTER_URL } from '@/components/home/homeLinks';
import { useTranslation } from '@/i18n/LocaleProvider';
import type { LandingTranslationKey } from '@/i18n/types';
import {
  getHashIdFromHref,
  queueHomeHashScroll,
  scrollToHashWhenReady,
} from '@/lib/hashScroll';

type DrawerLink = {
  labelKey: LandingTranslationKey;
  href: string;
};

const PRIMARY_DRAWER_LINKS: DrawerLink[] = [
  { labelKey: 'nav.features', href: '/#features' },
  { labelKey: 'nav.pricing', href: '/#pricing' },
  { labelKey: 'nav.compare', href: '/compare' },
  { labelKey: 'nav.howItWorks', href: '/#how-it-works' },
  { labelKey: 'nav.downloadApp', href: '/download' },
];

const SECONDARY_DRAWER_LINKS: DrawerLink[] = [
  { labelKey: 'footer.about', href: '/about' },
  { labelKey: 'footer.contact', href: '/contact' },
  { labelKey: 'footer.faq', href: '/faq' },
  { labelKey: 'footer.privacy', href: '/privacy-policy' },
  { labelKey: 'footer.terms', href: '/terms-of-service' },
];

function isHomePath(pathname: string) {
  return pathname === '/' || pathname === '';
}

function isLinkActive(href: string, pathname: string, currentHash: string) {
  const hashId = getHashIdFromHref(href);
  if (hashId) {
    return isHomePath(pathname) && currentHash.replace(/^#/, '') === hashId;
  }

  return pathname === href;
}

type MobileNavDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNavDrawer({ open, onClose }: MobileNavDrawerProps) {
  const [pathname, navigate] = useLocation();
  const { t } = useTranslation();
  const [currentHash, setCurrentHash] = useState(() =>
    typeof window === 'undefined' ? '' : window.location.hash,
  );
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const syncHash = () => setCurrentHash(window.location.hash);
    syncHash();
    window.addEventListener('hashchange', syncHash);
    return () => window.removeEventListener('hashchange', syncHash);
  }, [pathname]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  const handleHashNavigate = (href: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    const hashId = getHashIdFromHref(href);
    if (!hashId) {
      onClose();
      return;
    }

    event.preventDefault();
    onClose();

    if (isHomePath(pathname)) {
      window.history.pushState(null, '', `#${hashId}`);
      scrollToHashWhenReady(hashId);
      return;
    }

    queueHomeHashScroll(hashId);
    navigate('/');
  };

  const handleRouteClick = () => {
    onClose();
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    const startX = touchStartX.current;
    touchStartX.current = null;
    if (startX == null) {
      return;
    }

    const endX = event.changedTouches[0]?.clientX ?? startX;
    const isRtl = document.documentElement.dir === 'rtl';
    const swipeClosed = isRtl ? startX - endX > 56 : endX - startX > 56;
    if (swipeClosed) {
      onClose();
    }
  };

  const renderDrawerLink = (link: DrawerLink) => {
    const hashId = getHashIdFromHref(link.href);
    const active = isLinkActive(link.href, pathname, currentHash);

    if (hashId) {
      return (
        <Link
          key={link.labelKey}
          href={link.href}
          className={`mobile-nav-drawer__link${active ? ' is-active' : ''}`}
          onClick={handleHashNavigate(link.href)}
        >
          {t(link.labelKey)}
        </Link>
      );
    }

    return (
      <Link
        key={link.labelKey}
        href={link.href}
        className={`mobile-nav-drawer__link${active ? ' is-active' : ''}`}
        onClick={handleRouteClick}
      >
        {t(link.labelKey)}
      </Link>
    );
  };

  return (
    <div className={`mobile-nav-drawer${open ? ' is-open' : ''}`} aria-hidden={!open}>
      <button
        type="button"
        className="mobile-nav-drawer__backdrop"
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        onClick={onClose}
      />

      <aside
        className="mobile-nav-drawer__panel"
        role="dialog"
        id="mobile-nav-drawer"
        aria-modal="true"
        aria-label="Navigation menu"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="mobile-nav-drawer__header">
          <button type="button" className="mobile-nav-drawer__close" onClick={onClose} aria-label="Close menu">
            <X aria-hidden size={22} strokeWidth={1.75} />
          </button>
        </div>

        <div className="mobile-nav-drawer__body">
          <div className="mobile-nav-drawer__actions">
            <a href={SAAS_REGISTER_URL} className="tableway-btn-primary mobile-nav-drawer__cta" onClick={onClose}>
              {t('nav.startFreeTrial')}
            </a>
            <a href={SAAS_LOGIN_URL} className="tableway-btn mobile-nav-drawer__cta" onClick={onClose}>
              {t('nav.logIn')}
            </a>
          </div>

          <hr className="mobile-nav-drawer__divider" aria-hidden="true" />

          <nav className="mobile-nav-drawer__links" aria-label={t('nav.features')}>
            {PRIMARY_DRAWER_LINKS.map(renderDrawerLink)}
          </nav>

          <hr className="mobile-nav-drawer__divider" aria-hidden="true" />

          <nav className="mobile-nav-drawer__links" aria-label={t('footer.company')}>
            {SECONDARY_DRAWER_LINKS.map(renderDrawerLink)}
          </nav>
        </div>
      </aside>
    </div>
  );
}

type MobileNavToggleProps = {
  open: boolean;
  onToggle: () => void;
};

export function MobileNavToggle({ open, onToggle }: MobileNavToggleProps) {
  return (
    <button
      type="button"
      className="mobile-nav-toggle"
      aria-expanded={open}
      aria-controls="mobile-nav-drawer"
      aria-label={open ? 'Close menu' : 'Open menu'}
      onClick={onToggle}
    >
      {open ? <X aria-hidden size={22} strokeWidth={1.75} /> : <Menu aria-hidden size={22} strokeWidth={1.75} />}
    </button>
  );
}
