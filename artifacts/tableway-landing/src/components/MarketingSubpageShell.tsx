import type { ReactNode } from 'react';
import { Link } from 'wouter';

import { Logo } from '@/components/logo';
import { useTranslation } from '@/i18n/LocaleProvider';

type MarketingSubpageShellProps = {
  children: ReactNode;
};

export function MarketingSubpageShell({ children }: MarketingSubpageShellProps) {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans">
      <header className="border-b border-white/5 bg-[#111111]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/">
            <Logo />
          </Link>
          <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
            {t('common.backToHome')}
          </Link>
        </div>
      </header>

      {children}

      <footer className="border-t border-white/5 py-8 px-6 text-center mt-12">
        <p className="text-xs text-gray-500">{t('footer.copyright')}</p>
      </footer>
    </div>
  );
}
