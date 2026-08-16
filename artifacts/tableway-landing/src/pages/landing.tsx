import React, { useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import {
  Calendar,
  Users,
  Check,
  Menu,
  Play,
  ArrowRight,
  Globe2,
  Bell,
  UserPlus,
  UtensilsCrossed,
  ArrowDown,
} from 'lucide-react';
import { Logo } from '@/components/logo';
import { useTranslation } from '@/i18n/LocaleProvider';
import type { LandingTranslationKey } from '@/i18n/types';
import { useVisitorMarket } from '@/hooks/useVisitorMarket';
import type { PricingBadgeKey } from '@/lib/visitorMarket.types';
import {
  TABLEWAY_DOWNLOAD_APP_URL,
  TABLEWAY_SAAS_LOGIN_URL,
  tablewaySaasRegisterUrl,
} from '@/lib/tablewayUrls';

const BADGE_TRANSLATION_KEYS: Record<PricingBadgeKey, LandingTranslationKey> = {
  save12: 'pricing.badge.save12',
  bestValue: 'pricing.badge.bestValue',
  bestSavings: 'pricing.badge.bestSavings',
};

const PRICING_FEATURE_KEYS: LandingTranslationKey[] = [
  'pricing.feature.everythingIncluded',
  'pricing.feature.unlimitedReservations',
  'pricing.feature.unlimitedStaff',
  'pricing.feature.customers',
  'pricing.feature.mobileStaff',
  'pricing.feature.noCommission',
  'pricing.feature.cancelAnytime',
];

const PRICING_BOTTOM_KEYS: LandingTranslationKey[] = [
  'pricing.bottom.everythingIncluded',
  'pricing.bottom.noHiddenCosts',
  'pricing.bottom.freeUpdates',
  'pricing.bottom.unlimitedSupport',
  'pricing.bottom.cancelAnytime',
];

const TRUST_STRIP_KEYS: LandingTranslationKey[] = [
  'hero.trustTrial',
  'hero.trustNoCommission',
  'hero.trustCancelAnytime',
];

const HeroVisual = ({
  altDashboard,
  altMobile,
}: {
  altDashboard: string;
  altMobile: string;
}) => (
  <>
    <img
      src="/dashboard.png"
      alt={altDashboard}
      className="hidden lg:block w-full rounded-2xl shadow-[0_40px_120px_rgba(0,0,0,0.7)] border border-white/8"
    />

    <div
      className="hidden lg:block absolute -bottom-12 -right-8 z-20"
      style={{ filter: 'drop-shadow(0 32px 48px rgba(0,0,0,0.6))' }}
    >
      <img
        src="/dashboard-mobile.png"
        alt={altMobile}
        className="w-[175px] rounded-[1.75rem] border-[8px] border-[#222] shadow-2xl"
      />
    </div>

    <div className="lg:hidden flex justify-center mt-10 w-full max-w-full">
      <img
        src="/dashboard-mobile.png"
        alt={altMobile}
        className="w-full max-w-full min-w-0 h-auto rounded-2xl shadow-[0_40px_120px_rgba(0,0,0,0.7)] border border-white/8"
      />
    </div>
  </>
);

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, locale } = useTranslation();
  const { pricingCards, isPricingLoading } = useVisitorMarket();

  const featureCards = [
    { icon: <Globe2 className="w-7 h-7" strokeWidth={1.5} />, titleKey: 'features.card1.title' as const, descKey: 'features.card1.desc' as const },
    { icon: <Calendar className="w-7 h-7" strokeWidth={1.5} />, titleKey: 'features.card2.title' as const, descKey: 'features.card2.desc' as const },
    { icon: <Users className="w-7 h-7" strokeWidth={1.5} />, titleKey: 'features.card3.title' as const, descKey: 'features.card3.desc' as const },
    { icon: <Bell className="w-7 h-7" strokeWidth={1.5} />, titleKey: 'features.card4.title' as const, descKey: 'features.card4.desc' as const },
    { icon: <UserPlus className="w-7 h-7" strokeWidth={1.5} />, titleKey: 'features.card5.title' as const, descKey: 'features.card5.desc' as const },
  ];

  const howItWorksSteps = [
    {
      num: '01',
      icon: <UtensilsCrossed className="w-7 h-7" strokeWidth={1.5} />,
      titleKey: 'howItWorks.step1.title' as const,
      descKey: 'howItWorks.step1.desc' as const,
    },
    {
      num: '02',
      icon: <Users className="w-7 h-7" strokeWidth={1.5} />,
      titleKey: 'howItWorks.step2.title' as const,
      descKey: 'howItWorks.step2.desc' as const,
    },
    {
      num: '03',
      icon: <Calendar className="w-7 h-7" strokeWidth={1.5} />,
      titleKey: 'howItWorks.step3.title' as const,
      descKey: 'howItWorks.step3.desc' as const,
    },
  ];

  const footerProductLinks = [
    { labelKey: 'nav.features' as const, href: '#features' },
    { labelKey: 'nav.pricing' as const, href: '#pricing' },
    { labelKey: 'nav.howItWorks' as const, href: '#how-it-works' },
  ];

  const footerCompanyLinks = [
    { labelKey: 'footer.aboutUs' as const, href: '/about' },
    { labelKey: 'footer.privacyPolicy' as const, href: '/privacy-policy' },
    { labelKey: 'footer.termsOfService' as const, href: '/terms-of-service' },
    { labelKey: 'footer.contactUs' as const, href: '/contact' },
  ];

  return (
    <div className="min-h-[100dvh] bg-[#111111] text-white selection:bg-primary/30 font-sans overflow-hidden">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#111111]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#features" className="hover:text-white transition-colors">{t('nav.features')}</a>
            <a href="#pricing" className="hover:text-white transition-colors">{t('nav.pricing')}</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">{t('nav.howItWorks')}</a>
            <a
              href={TABLEWAY_DOWNLOAD_APP_URL}
              className="hover:text-white transition-colors"
            >
              {t('nav.downloadApp')}
            </a>
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <a href={TABLEWAY_SAAS_LOGIN_URL} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              {t('nav.logIn')}
            </a>
            <a
              href={tablewaySaasRegisterUrl('12m', locale)}
              className="bg-primary hover:bg-primary/90 transition-colors text-white px-5 py-2.5 rounded-full text-sm font-semibold"
            >
              {t('nav.startFreeTrial')}
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-[#111] border-b border-white/5 p-6 flex flex-col gap-4">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 font-medium py-2">{t('nav.features')}</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 font-medium py-2">{t('nav.pricing')}</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 font-medium py-2">{t('nav.howItWorks')}</a>
            <a
              href={TABLEWAY_DOWNLOAD_APP_URL}
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-300 font-medium py-2"
            >
              {t('nav.downloadApp')}
            </a>
            <hr className="border-white/5 my-2" />
            <a href={TABLEWAY_SAAS_LOGIN_URL} className="text-gray-300 font-medium py-2">{t('nav.logIn')}</a>
            <a
              href={tablewaySaasRegisterUrl('12m', locale)}
              onClick={() => setMobileMenuOpen(false)}
              className="bg-primary text-white px-5 py-3 rounded-full text-sm font-semibold w-full mt-2 text-center"
            >
              {t('nav.startFreeTrial')}
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-24 px-6 overflow-visible">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/8 rounded-full blur-[140px] -z-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-gray-400 text-xs font-medium px-4 py-2 rounded-full mb-8 tracking-wide">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              {t('hero.eyebrow')}
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight mb-7">
              <span className="text-white block">{t('hero.headlineLine1')}</span>
              <span className="text-primary block">{t('hero.headlineLine2')}</span>
            </h1>

            <div className="text-lg lg:text-xl text-gray-400 font-light max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10 space-y-1">
              <p>{t('hero.subline1')}</p>
              <p>{t('hero.subline2')}</p>
              <p>{t('hero.subline3')}</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-12">
              <a
                href={tablewaySaasRegisterUrl('12m', locale)}
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 active:scale-95 transition-all text-white px-8 py-4 rounded-full text-base font-semibold flex items-center justify-center gap-2 group shadow-[0_0_40px_rgba(34,197,94,0.25)]"
              >
                {t('hero.ctaStartTrial')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all text-white px-8 py-4 rounded-full text-base font-semibold flex items-center justify-center gap-3"
              >
                <span className="w-6 h-6 rounded-full border border-white/40 flex items-center justify-center shrink-0">
                  <Play className="w-2.5 h-2.5 ml-0.5" fill="currentColor" />
                </span>
                {t('hero.ctaSeeHowItWorks')}
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-3">
              {TRUST_STRIP_KEYS.map((key) => (
                <div key={key} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-gray-400">{t(key)}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
            className="relative"
          >
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-primary/10 blur-[60px] -z-10 pointer-events-none rounded-full" />

            <HeroVisual
              altDashboard={t('hero.altDashboard')}
              altMobile={t('hero.altMobile')}
            />
          </motion.div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-28 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">{t('pricing.title')}</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              {t('pricing.subtitleLine1')}<br />
              {t('pricing.subtitleLine2')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingCards.map((plan, i) => (
              <motion.div
                key={plan.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-[#0f0f0f] border-2 border-primary shadow-[0_0_40px_rgba(34,197,94,0.12)]'
                    : 'bg-[#0f0f0f] border border-white/10 hover:border-white/20'
                }`}
              >
                {plan.badgeKey ? (
                  <div className={`inline-flex self-start mb-6 px-3 py-1 rounded-full text-xs font-bold ${
                    plan.highlighted ? 'bg-primary text-white' : 'bg-white/8 text-gray-300'
                  }`}>
                    {t(BADGE_TRANSLATION_KEYS[plan.badgeKey])}
                  </div>
                ) : (
                  <div className="mb-6" />
                )}

                <div className="text-gray-400 text-sm font-medium mb-3">
                  {t(`pricing.period.${plan.slug}` as LandingTranslationKey)}
                </div>
                <div className={`text-5xl font-bold text-white mb-2 ${isPricingLoading ? 'opacity-60' : ''}`}>
                  {plan.price}
                </div>
                <div className="text-gray-500 text-xs mb-1 font-medium">{t('pricing.trialIncluded')}</div>

                <div className="my-7 h-px bg-white/8"></div>

                <ul className="space-y-3.5 flex-1 mb-8">
                  {PRICING_FEATURE_KEYS.map((key) => (
                    <li key={key} className="flex items-center gap-3 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      {t(key)}
                    </li>
                  ))}
                </ul>

                <a
                  href={tablewaySaasRegisterUrl(plan.slug, locale)}
                  className={`w-full py-3.5 rounded-full text-sm font-bold transition-all duration-200 text-center ${
                    plan.highlighted
                      ? 'bg-primary hover:bg-primary/90 text-white'
                      : 'border border-white/20 hover:bg-white/8 text-white'
                  }`}
                >
                  {t('pricing.ctaStartTrial')}
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-14 text-center"
          >
            <p className="text-sm font-medium text-gray-400 mb-6">{t('pricing.everyPlanIncludes')}</p>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
              {PRICING_BOTTOM_KEYS.map((key) => (
                <div key={key} className="flex items-center gap-2 text-sm text-gray-400">
                  <Check className="w-4 h-4 text-primary" />
                  {t(key)}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="how-it-works" className="py-28 px-6 border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">{t('howItWorks.title')}</h2>
            <p className="text-gray-400 text-lg">{t('howItWorks.subtitle')}</p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-0 lg:gap-4">
            {howItWorksSteps.map((step, i) => (
              <React.Fragment key={step.num}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex flex-col items-center text-center flex-1 px-4 lg:px-6"
                >
                  <div className="text-6xl lg:text-7xl font-bold text-primary/20 leading-none mb-6 tracking-tighter">
                    {step.num}
                  </div>
                  <div className="w-16 h-16 rounded-2xl border border-white/10 bg-[#131313] flex items-center justify-center text-primary mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{t(step.titleKey)}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{t(step.descKey)}</p>
                </motion.div>

                {i < howItWorksSteps.length - 1 && (
                  <div className="flex lg:hidden items-center justify-center py-4 text-primary/40">
                    <ArrowDown className="w-6 h-6" />
                  </div>
                )}
                {i < howItWorksSteps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center self-center pb-10 text-primary/30">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <p className="text-3xl lg:text-4xl font-bold text-white mb-10">{t('howItWorks.readyToStart')}</p>
            <a
              href={tablewaySaasRegisterUrl('12m', locale)}
              className="bg-primary hover:bg-primary/90 transition-colors text-white px-10 py-4 rounded-full text-base font-bold inline-flex items-center gap-2 group"
            >
              {t('howItWorks.ctaStartTrial')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-28 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              {t('features.titleLine1')}<br />
              <span className="text-primary">{t('features.titleLine2')}</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              {t('features.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCards.map((card, i) => (
              <motion.div
                key={card.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group bg-[#0f0f0f] border border-white/8 rounded-2xl p-8 hover:border-primary/30 hover:bg-[#131313] transition-all duration-300 cursor-default"
              >
                <div className="text-primary mb-5">{card.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3">{t(card.titleKey)}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{t(card.descKey)}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <p className="text-2xl lg:text-3xl font-bold text-white mb-2">
              {t('features.bottomLine')}
            </p>
            <div className="mt-10">
              <a
                href={tablewaySaasRegisterUrl('12m', locale)}
                className="bg-primary hover:bg-primary/90 transition-colors text-white px-10 py-4 rounded-full text-base font-bold inline-flex items-center gap-2 group"
              >
                {t('features.ctaStartTrial')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-20 pb-10 px-6 border-t border-white/5 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-12 lg:gap-8 mb-16">

            <div className="flex flex-col">
              <div className="mb-8">
                <Logo />
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-white tracking-wider mb-6">{t('footer.product')}</h4>
              <ul className="space-y-4">
                {footerProductLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">{t(link.labelKey)}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-white tracking-wider mb-6 uppercase">{t('footer.company')}</h4>
              <ul className="space-y-4">
                {footerCompanyLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">{t(link.labelKey)}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col lg:items-end text-left lg:text-right">
              <p className="text-white font-medium mb-2">{t('footer.readyForBookings')}</p>
              <p className="text-gray-400 text-sm mb-6">{t('footer.startTrialToday')}</p>
              <a
                href={tablewaySaasRegisterUrl('12m', locale)}
                className="bg-primary hover:bg-primary/90 transition-colors text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 max-w-max"
              >
                {t('footer.startFreeTrial')} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 text-center">
            <p className="text-xs text-gray-500">{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
