import { useEffect, useMemo } from 'react';
import { BookEverywhereSection } from '@/components/home/BookEverywhereSection';
import { DashboardSection } from '@/components/home/DashboardSection';
import { HeroSection } from '@/components/home/HeroSection';
import { MobileExperienceSection } from '@/components/home/MobileExperienceSection';
import { PricingSection } from '@/components/home/PricingSection';
import { PageSeo } from '@/components/seo/PageSeo';
import { HomeFooter } from '@/components/layout/HomeFooter';
import { Navbar } from '@/components/layout/Navbar';
import { StickyMobileCta } from '@/components/home/StickyMobileCta';
import { useHomeHashScroll } from '@/hooks/useHomeHashScroll';
import { useTranslation } from '@/i18n/LocaleProvider';
import { buildLocalizedFaqPageSchema } from '@/lib/seo/faqSchema';
import { HOME_JSON_LD } from '@/lib/seo/structuredData';

import '@/styles/home.css';

export default function LandingPage() {
  useHomeHashScroll();
  const { t } = useTranslation();
  const homeJsonLd = useMemo(
    () => [...HOME_JSON_LD, buildLocalizedFaqPageSchema(t)],
    [t],
  );

  return (
    <div className="home-page">
      <PageSeo pageId="home" jsonLd={homeJsonLd} />
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <div className="home-below-hero">
          <BookEverywhereSection />
          <DashboardSection />
          <MobileExperienceSection />
          <PricingSection />
        </div>
      </main>
      <HomeFooter />
      <StickyMobileCta />
    </div>
  );
}
