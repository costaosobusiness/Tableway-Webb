import type { ReactNode } from 'react';
import { Link } from 'wouter';

import { Logo } from '@/components/logo';
import { LanguageSelector } from '@/components/LanguageSelector';
import { useTranslation } from '@/i18n/LocaleProvider';

type MarketingSubpageShellProps = {
  children: ReactNode;
};

export function MarketingSubpageShell({ children }: MarketingSubpageShellProps) {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-navy text-white font-sans">
      <header className="border-b border-white/5 bg-navy/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <div className="flex items-center gap-4">
            <LanguageSelector />
            <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
              {t('common.backToHome')}
            </Link>
          </div>
        </div>
      </header>

      {children}

      <footer className="border-t border-white/5 py-8 px-6 text-center mt-12">
        <p className="text-xs text-gray-500">{t('footer.copyright')}</p>
      </footer>
    </div>
  );
}
