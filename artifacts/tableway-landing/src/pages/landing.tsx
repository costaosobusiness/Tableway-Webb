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
import { LanguageSelector } from '@/components/LanguageSelector';
import { useTranslation } from '@/i18n/LocaleProvider';
import type { LandingTranslationKey } from '@/i18n/types';
import { useVisitorMarket } from '@/hooks/useVisitorMarket';
import type { PricingBadgeKey } from '@/lib/visitorMarket.types';
import { resolvePricingCountryFromLocale } from '@/lib/officialMarketPricing';
import {
  tablewaySaasLoginUrl,
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
  'hero.trustUnlimitedReservations',
  'hero.trustCancelAnytime',
];

const HeroVisual = ({ alt }: { alt: string }) => (
  <div className="flex justify-center mt-10 lg:mt-4 w-full max-w-full min-w-0 overflow-hidden">
    <img
      src="/hero.webp"
      alt={alt}
      width={1536}
      height={1024}
      className="w-full max-w-full min-w-0 h-auto lg:scale-[1.026] lg:origin-center"
    />
  </div>
);

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, locale } = useTranslation();
  const pricingCountry = resolvePricingCountryFromLocale(locale);
  const { pricingCards, isPricingLoading } = useVisitorMarket(locale);

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
    <div className="min-h-[100dvh] bg-navy text-white selection:bg-primary/30 font-sans overflow-hidden">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-navy/80 backdrop-blur-md border-b border-white/5">
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
              href={tablewaySaasLoginUrl(locale, 'guest-install')}
              className="hover:text-white transition-colors"
            >
              {t('nav.downloadApp')}
            </a>
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <LanguageSelector />
            <a href={tablewaySaasLoginUrl(locale)} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              {t('nav.logIn')}
            </a>
            <a
              href={tablewaySaasRegisterUrl('12m', locale, pricingCountry)}
              className="bg-primary hover:bg-primary-hover transition-colors text-white px-5 py-2.5 rounded-full text-sm font-semibold"
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
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-navy border-b border-white/5 p-6 flex flex-col gap-4">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 font-medium py-2">{t('nav.features')}</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 font-medium py-2">{t('nav.pricing')}</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-gray-300 font-medium py-2">{t('nav.howItWorks')}</a>
            <a
              href={tablewaySaasLoginUrl(locale, 'guest-install')}
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-300 font-medium py-2"
            >
              {t('nav.downloadApp')}
            </a>
            <hr className="border-white/5 my-2" />
            <LanguageSelector className="py-2" />
            <a href={tablewaySaasLoginUrl(locale)} className="text-gray-300 font-medium py-2">{t('nav.logIn')}</a>
            <a
              href={tablewaySaasRegisterUrl('12m', locale, pricingCountry)}
              onClick={() => setMobileMenuOpen(false)}
              className="bg-primary text-white px-5 py-3 rounded-full text-sm font-semibold w-full mt-2 text-center"
            >
              {t('nav.startFreeTrial')}
            </a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-16 lg:pt-32 lg:pb-12 px-6 overflow-visible">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/8 rounded-full blur-[140px] -z-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[42fr_58fr] gap-12 lg:gap-10 items-center min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center lg:text-left min-w-0 relative z-10"
          >
            <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 text-gray-400 text-[0.9375rem] font-medium px-7 py-3 rounded-full mb-8 lg:mb-5 tracking-wide">
              <div className="w-2 h-2 rounded-full bg-primary" />
              {t('hero.eyebrow')}
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-[3.25rem] font-bold leading-[1.02] tracking-tight mb-7 lg:mb-5">
              <span className="text-white block">{t('hero.headlineLine1')}</span>
              <span className="block bg-gradient-to-r from-turquoise to-turquoise-end bg-clip-text text-transparent">{t('hero.headlineLine2')}</span>
            </h1>

            <div className="text-[0.95625rem] lg:text-[1.0625rem] text-gray-400 font-light max-w-xl mx-auto lg:mx-0 leading-snug mb-10 lg:mb-6 space-y-1">
              <p>{t('hero.subline1')}</p>
              <p>{t('hero.subline2')}</p>
              <p>{t('hero.subline3')}</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-12 lg:mb-8">
              <a
                href={tablewaySaasRegisterUrl('12m', locale, pricingCountry)}
                className="w-full sm:w-auto bg-primary hover:bg-primary-hover active:scale-95 transition-all text-white px-8 py-4 rounded-full text-base font-semibold flex items-center justify-center gap-2 group shadow-[0_0_40px_rgba(22,198,163,0.25)]"
              >
                {t('hero.ctaStartTrial')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto border border-primary text-primary hover:border-primary hover:bg-primary/5 hover:shadow-[0_0_24px_rgba(22,198,163,0.2)] transition-all px-8 py-4 rounded-full text-base font-semibold flex items-center justify-center gap-3"
              >
                <span className="w-6 h-6 rounded-full border border-primary/60 flex items-center justify-center shrink-0">
                  <Play className="w-2.5 h-2.5 ml-0.5" fill="currentColor" />
                </span>
                {t('hero.ctaSeeHowItWorks')}
              </a>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4 lg:gap-x-8 items-center justify-items-center lg:justify-items-start max-w-xl lg:max-w-none mx-auto lg:mx-0">
              {TRUST_STRIP_KEYS.map((key) => (
                <div key={key} className="flex items-center gap-2.5 w-full">
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-[0.9025rem] text-gray-400 leading-snug">{t(key)}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
            className="relative min-w-0 overflow-hidden"
          >
            <HeroVisual alt={t('hero.altDashboard')} />
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
                    ? 'bg-navy-card border-2 border-primary shadow-[0_0_40px_rgba(22,198,163,0.12)]'
                    : 'bg-navy-card border border-white/10 hover:border-white/20'
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
                  href={tablewaySaasRegisterUrl(plan.slug, locale, pricingCountry)}
                  className={`w-full py-3.5 rounded-full text-sm font-bold transition-all duration-200 text-center ${
                    plan.highlighted
                      ? 'bg-primary hover:bg-primary-hover text-white'
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
      <section id="how-it-works" className="py-28 px-6 border-t border-white/5 bg-navy">
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
                  <div className="w-16 h-16 rounded-2xl border border-white/10 bg-navy-elevated flex items-center justify-center text-primary mb-6">
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
              href={tablewaySaasRegisterUrl('12m', locale, pricingCountry)}
              className="bg-primary hover:bg-primary-hover transition-colors text-white px-10 py-4 rounded-full text-base font-bold inline-flex items-center gap-2 group"
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
              <span className="bg-gradient-to-r from-turquoise to-turquoise-end bg-clip-text text-transparent">{t('features.titleLine2')}</span>
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
                className="group bg-navy-card border border-white/8 rounded-2xl p-8 hover:border-primary/30 hover:bg-navy-elevated transition-all duration-300 cursor-default"
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
                href={tablewaySaasRegisterUrl('12m', locale, pricingCountry)}
                className="bg-primary hover:bg-primary-hover transition-colors text-white px-10 py-4 rounded-full text-base font-bold inline-flex items-center gap-2 group"
              >
                {t('features.ctaStartTrial')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-20 pb-10 px-6 border-t border-white/5 bg-navy">
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
                href={tablewaySaasRegisterUrl('12m', locale, pricingCountry)}
                className="bg-primary hover:bg-primary-hover transition-colors text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2 max-w-max"
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
