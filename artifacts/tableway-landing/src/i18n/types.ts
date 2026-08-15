export const SUPPORTED_LOCALES = ['en', 'es', 'de', 'fr', 'sv', 'nb', 'da'] as const;

export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

export type LandingTranslationKey =
  | 'nav.features'
  | 'nav.pricing'
  | 'nav.howItWorks'
  | 'nav.downloadApp'
  | 'nav.logIn'
  | 'nav.startFreeTrial'
  | 'hero.eyebrow'
  | 'hero.headlineLine1'
  | 'hero.headlineLine2'
  | 'hero.subline1'
  | 'hero.subline2'
  | 'hero.subline3'
  | 'hero.ctaStartTrial'
  | 'hero.ctaSeeHowItWorks'
  | 'hero.trustTrial'
  | 'hero.trustNoCommission'
  | 'hero.trustCancelAnytime'
  | 'hero.altDashboard'
  | 'hero.altMobile'
  | 'pricing.title'
  | 'pricing.subtitleLine1'
  | 'pricing.subtitleLine2'
  | 'pricing.period.monthly'
  | 'pricing.period.3m'
  | 'pricing.period.6m'
  | 'pricing.period.12m'
  | 'pricing.badge.save12'
  | 'pricing.badge.bestValue'
  | 'pricing.badge.bestSavings'
  | 'pricing.trialIncluded'
  | 'pricing.ctaStartTrial'
  | 'pricing.feature.everythingIncluded'
  | 'pricing.feature.unlimitedReservations'
  | 'pricing.feature.unlimitedStaff'
  | 'pricing.feature.customers'
  | 'pricing.feature.mobileStaff'
  | 'pricing.feature.noCommission'
  | 'pricing.feature.cancelAnytime'
  | 'pricing.everyPlanIncludes'
  | 'pricing.bottom.everythingIncluded'
  | 'pricing.bottom.noHiddenCosts'
  | 'pricing.bottom.freeUpdates'
  | 'pricing.bottom.unlimitedSupport'
  | 'pricing.bottom.cancelAnytime'
  | 'howItWorks.title'
  | 'howItWorks.subtitle'
  | 'howItWorks.step1.title'
  | 'howItWorks.step1.desc'
  | 'howItWorks.step2.title'
  | 'howItWorks.step2.desc'
  | 'howItWorks.step3.title'
  | 'howItWorks.step3.desc'
  | 'howItWorks.readyToStart'
  | 'howItWorks.ctaStartTrial'
  | 'features.titleLine1'
  | 'features.titleLine2'
  | 'features.subtitle'
  | 'features.card1.title'
  | 'features.card1.desc'
  | 'features.card2.title'
  | 'features.card2.desc'
  | 'features.card3.title'
  | 'features.card3.desc'
  | 'features.card4.title'
  | 'features.card4.desc'
  | 'features.card5.title'
  | 'features.card5.desc'
  | 'features.bottomLine'
  | 'features.ctaStartTrial'
  | 'footer.product'
  | 'footer.company'
  | 'footer.aboutUs'
  | 'footer.privacyPolicy'
  | 'footer.termsOfService'
  | 'footer.contactUs'
  | 'footer.readyForBookings'
  | 'footer.startTrialToday'
  | 'footer.startFreeTrial'
  | 'footer.copyright';

export type LandingTranslations = Record<LandingTranslationKey, string>;

export const LANDING_TRANSLATION_KEYS: LandingTranslationKey[] = [
  'nav.features',
  'nav.pricing',
  'nav.howItWorks',
  'nav.downloadApp',
  'nav.logIn',
  'nav.startFreeTrial',
  'hero.eyebrow',
  'hero.headlineLine1',
  'hero.headlineLine2',
  'hero.subline1',
  'hero.subline2',
  'hero.subline3',
  'hero.ctaStartTrial',
  'hero.ctaSeeHowItWorks',
  'hero.trustTrial',
  'hero.trustNoCommission',
  'hero.trustCancelAnytime',
  'hero.altDashboard',
  'hero.altMobile',
  'pricing.title',
  'pricing.subtitleLine1',
  'pricing.subtitleLine2',
  'pricing.period.monthly',
  'pricing.period.3m',
  'pricing.period.6m',
  'pricing.period.12m',
  'pricing.badge.save12',
  'pricing.badge.bestValue',
  'pricing.badge.bestSavings',
  'pricing.trialIncluded',
  'pricing.ctaStartTrial',
  'pricing.feature.everythingIncluded',
  'pricing.feature.unlimitedReservations',
  'pricing.feature.unlimitedStaff',
  'pricing.feature.customers',
  'pricing.feature.mobileStaff',
  'pricing.feature.noCommission',
  'pricing.feature.cancelAnytime',
  'pricing.everyPlanIncludes',
  'pricing.bottom.everythingIncluded',
  'pricing.bottom.noHiddenCosts',
  'pricing.bottom.freeUpdates',
  'pricing.bottom.unlimitedSupport',
  'pricing.bottom.cancelAnytime',
  'howItWorks.title',
  'howItWorks.subtitle',
  'howItWorks.step1.title',
  'howItWorks.step1.desc',
  'howItWorks.step2.title',
  'howItWorks.step2.desc',
  'howItWorks.step3.title',
  'howItWorks.step3.desc',
  'howItWorks.readyToStart',
  'howItWorks.ctaStartTrial',
  'features.titleLine1',
  'features.titleLine2',
  'features.subtitle',
  'features.card1.title',
  'features.card1.desc',
  'features.card2.title',
  'features.card2.desc',
  'features.card3.title',
  'features.card3.desc',
  'features.card4.title',
  'features.card4.desc',
  'features.card5.title',
  'features.card5.desc',
  'features.bottomLine',
  'features.ctaStartTrial',
  'footer.product',
  'footer.company',
  'footer.aboutUs',
  'footer.privacyPolicy',
  'footer.termsOfService',
  'footer.contactUs',
  'footer.readyForBookings',
  'footer.startTrialToday',
  'footer.startFreeTrial',
  'footer.copyright',
];

export type LocaleDictionary = LandingTranslations;
