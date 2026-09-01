import type { ReactNode } from 'react';

import { HomeFooter } from '@/components/layout/HomeFooter';
import { Navbar } from '@/components/layout/Navbar';

import '@/styles/home.css';
import '@/styles/marketing-subpage.css';

type MarketingSubpageShellProps = {
  children: ReactNode;
};

export function MarketingSubpageShell({ children }: MarketingSubpageShellProps) {
  return (
    <div className="home-page subpage">
      <Navbar />
      <main className="subpage-main">{children}</main>
      <HomeFooter />
    </div>
  );
}
