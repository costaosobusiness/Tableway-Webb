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
  | 'footer.copyright'
  | 'common.backToHome'
  | 'common.startFreeTrial30'
  | 'common.needHelpGettingStarted'
  | 'common.readyToSimplifyReservations'
  | 'about.title'
  | 'about.subtitle'
  | 'about.p1'
  | 'about.p2'
  | 'about.p3'
  | 'about.p4'
  | 'about.p5'
  | 'about.p6'
  | 'about.p7'
  | 'about.p8'
  | 'about.p9'
  | 'about.founderName'
  | 'about.founderTitle'
  | 'about.imageAlt'
  | 'about.ctaTitle'
  | 'contact.title'
  | 'contact.subtitle'
  | 'contact.success.title'
  | 'contact.success.message'
  | 'contact.form.name'
  | 'contact.form.namePlaceholder'
  | 'contact.form.restaurant'
  | 'contact.form.restaurantPlaceholder'
  | 'contact.form.email'
  | 'contact.form.emailPlaceholder'
  | 'contact.form.subject'
  | 'contact.form.subjectPlaceholder'
  | 'contact.form.message'
  | 'contact.form.messagePlaceholder'
  | 'contact.form.submit'
  | 'contact.ctaTitle'
  | 'notFound.title'
  | 'notFound.message'
  | 'privacy.title'
  | 'privacy.lastUpdated'
  | 'terms.title'
  | 'terms.lastUpdated'
  | 'legal.addressLine1'
  | 'legal.addressLine2'
  | 'legal.aepdLink'
  | 'legal.companyName'
  | 'legal.contactUs'
  | 'legal.nif'
  | 'legal.stripePrivacyPolicy'
  | 'legal.website'
  | 'privacy.intro.afterUrl'
  | 'privacy.intro.beforeUrl'
  | 'privacy.s1.intro'
  | 'privacy.s1.li1.label'
  | 'privacy.s1.li1.text'
  | 'privacy.s1.li2.label'
  | 'privacy.s1.li2.text'
  | 'privacy.s1.li3.label'
  | 'privacy.s1.li3.text'
  | 'privacy.s1.outro'
  | 'privacy.s1.title'
  | 'privacy.s10.p1'
  | 'privacy.s10.p2'
  | 'privacy.s10.p3.afterLink'
  | 'privacy.s10.p3.beforeLink'
  | 'privacy.s10.p4.afterLink'
  | 'privacy.s10.p4.beforeLink'
  | 'privacy.s10.title'
  | 'privacy.s11.p'
  | 'privacy.s11.title'
  | 'privacy.s12.p'
  | 'privacy.s12.title'
  | 'privacy.s13.intro'
  | 'privacy.s13.title'
  | 'privacy.s2.legalDetailsLabel'
  | 'privacy.s2.p1.afterStrong'
  | 'privacy.s2.p1.beforeStrong'
  | 'privacy.s2.p1.strong'
  | 'privacy.s2.p3.afterProcessor'
  | 'privacy.s2.p3.beforeRestaurant'
  | 'privacy.s2.p3.middle'
  | 'privacy.s2.p3.processorLabel'
  | 'privacy.s2.p3.restaurantLabel'
  | 'privacy.s2.p4'
  | 'privacy.s2.title'
  | 'privacy.s3.account.li1'
  | 'privacy.s3.account.li2'
  | 'privacy.s3.account.li3'
  | 'privacy.s3.account.li4'
  | 'privacy.s3.account.li5'
  | 'privacy.s3.accountLabel'
  | 'privacy.s3.booking.li1'
  | 'privacy.s3.booking.li2'
  | 'privacy.s3.booking.li3'
  | 'privacy.s3.bookingLabel'
  | 'privacy.s3.google.p'
  | 'privacy.s3.googleLabel'
  | 'privacy.s3.guest.li1'
  | 'privacy.s3.guest.li2'
  | 'privacy.s3.guestLabel'
  | 'privacy.s3.marketing.p'
  | 'privacy.s3.marketingLabel'
  | 'privacy.s3.title'
  | 'privacy.s4.intro'
  | 'privacy.s4.li1.label'
  | 'privacy.s4.li1.text'
  | 'privacy.s4.li2.label'
  | 'privacy.s4.li2.text'
  | 'privacy.s4.li3.label'
  | 'privacy.s4.li3.text'
  | 'privacy.s4.li4.label'
  | 'privacy.s4.li4.text'
  | 'privacy.s4.li5.label'
  | 'privacy.s4.li5.text'
  | 'privacy.s4.outro'
  | 'privacy.s4.title'
  | 'privacy.s5.consent.p'
  | 'privacy.s5.consentLabel'
  | 'privacy.s5.marketing.p'
  | 'privacy.s5.marketingLabel'
  | 'privacy.s5.platform.p'
  | 'privacy.s5.platformLabel'
  | 'privacy.s5.title'
  | 'privacy.s6.intro'
  | 'privacy.s6.li1.label'
  | 'privacy.s6.li1.text.afterLink'
  | 'privacy.s6.li1.text.beforeLink'
  | 'privacy.s6.li2.label'
  | 'privacy.s6.li2.text'
  | 'privacy.s6.li3.label'
  | 'privacy.s6.li3.text'
  | 'privacy.s6.li4.label'
  | 'privacy.s6.li4.text'
  | 'privacy.s6.outro'
  | 'privacy.s6.title'
  | 'privacy.s7.p'
  | 'privacy.s7.title'
  | 'privacy.s8.intro'
  | 'privacy.s8.li1.label'
  | 'privacy.s8.li1.text'
  | 'privacy.s8.li2.label'
  | 'privacy.s8.li2.text'
  | 'privacy.s8.li3.label'
  | 'privacy.s8.li3.text'
  | 'privacy.s8.li4.label'
  | 'privacy.s8.li4.text'
  | 'privacy.s8.outro'
  | 'privacy.s8.title'
  | 'privacy.s9.intro'
  | 'privacy.s9.li1'
  | 'privacy.s9.li2'
  | 'privacy.s9.li3'
  | 'privacy.s9.li4'
  | 'privacy.s9.li5'
  | 'privacy.s9.p2'
  | 'privacy.s9.p3.afterLink'
  | 'privacy.s9.p3.beforeLink'
  | 'privacy.s9.title'
  | 'terms.intro.afterUrl'
  | 'terms.intro.beforeUrl'
  | 'terms.s1.p1'
  | 'terms.s1.p2'
  | 'terms.s1.title'
  | 'terms.s10.intro'
  | 'terms.s10.li1'
  | 'terms.s10.li2'
  | 'terms.s10.li3'
  | 'terms.s10.li4'
  | 'terms.s10.li5'
  | 'terms.s10.li6'
  | 'terms.s10.li7'
  | 'terms.s10.title'
  | 'terms.s11.p1'
  | 'terms.s11.p2'
  | 'terms.s11.title'
  | 'terms.s12.p1'
  | 'terms.s12.p2'
  | 'terms.s12.title'
  | 'terms.s13.p1'
  | 'terms.s13.p2'
  | 'terms.s13.title'
  | 'terms.s14.p1'
  | 'terms.s14.p2'
  | 'terms.s14.p3'
  | 'terms.s14.title'
  | 'terms.s15.p1'
  | 'terms.s15.p2'
  | 'terms.s15.title'
  | 'terms.s16.p1'
  | 'terms.s16.title'
  | 'terms.s17.p1'
  | 'terms.s17.p2'
  | 'terms.s17.title'
  | 'terms.s18.intro'
  | 'terms.s18.title'
  | 'terms.s2.p1'
  | 'terms.s2.p2'
  | 'terms.s2.title'
  | 'terms.s3.p1'
  | 'terms.s3.p2.afterLink'
  | 'terms.s3.p2.beforeLink'
  | 'terms.s3.title'
  | 'terms.s4.p1'
  | 'terms.s4.p2'
  | 'terms.s4.p3'
  | 'terms.s4.title'
  | 'terms.s5.p1'
  | 'terms.s5.p2'
  | 'terms.s5.title'
  | 'terms.s6.p1'
  | 'terms.s6.p2'
  | 'terms.s6.p3'
  | 'terms.s6.title'
  | 'terms.s7.p1'
  | 'terms.s7.p2'
  | 'terms.s7.p3'
  | 'terms.s7.title'
  | 'terms.s8.p1'
  | 'terms.s8.title'
  | 'terms.s9.intro'
  | 'terms.s9.li1'
  | 'terms.s9.li2'
  | 'terms.s9.li3'
  | 'terms.s9.li4'
  | 'terms.s9.li5'
  | 'terms.s9.title';

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
  'common.backToHome',
  'common.startFreeTrial30',
  'common.needHelpGettingStarted',
  'common.readyToSimplifyReservations',
  'about.title',
  'about.subtitle',
  'about.p1',
  'about.p2',
  'about.p3',
  'about.p4',
  'about.p5',
  'about.p6',
  'about.p7',
  'about.p8',
  'about.p9',
  'about.founderName',
  'about.founderTitle',
  'about.imageAlt',
  'about.ctaTitle',
  'contact.title',
  'contact.subtitle',
  'contact.success.title',
  'contact.success.message',
  'contact.form.name',
  'contact.form.namePlaceholder',
  'contact.form.restaurant',
  'contact.form.restaurantPlaceholder',
  'contact.form.email',
  'contact.form.emailPlaceholder',
  'contact.form.subject',
  'contact.form.subjectPlaceholder',
  'contact.form.message',
  'contact.form.messagePlaceholder',
  'contact.form.submit',
  'contact.ctaTitle',
  'notFound.title',
  'notFound.message',
  'privacy.title',
  'privacy.lastUpdated',
  'terms.title',
  'terms.lastUpdated',
];

export type LocaleDictionary = LandingTranslations;
