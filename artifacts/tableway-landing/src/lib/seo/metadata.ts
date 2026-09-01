import type { SeoHreflangLocale } from '@/lib/seo/siteConfig';
import type { SeoPageId } from '@/lib/seo/pageIds';

export type PageSeoCopy = {
  title: string;
  description: string;
};

const EN_GB: Record<SeoPageId, PageSeoCopy> = {
  home: {
    title: 'TableWay — Restaurant Booking & Reservation Software',
    description:
      'Commission-free restaurant reservation software. Accept online bookings 24/7, manage guests, and run reservations with one booking system built for restaurants.',
  },
  about: {
    title: 'About TableWay — Restaurant Reservation Software',
    description:
      'Learn how TableWay helps independent restaurants accept reservations, reduce no-shows, and manage bookings without commission fees or complex setup.',
  },
  contact: {
    title: 'Contact TableWay — Restaurant Booking Support',
    description:
      'Contact TableWay for help with restaurant reservation software, onboarding, pricing, and support for your booking system setup.',
  },
  faq: {
    title: 'TableWay FAQ — Restaurant Booking Questions',
    description:
      'Answers about TableWay restaurant reservation software, free trial, commission-free pricing, mobile access, and online booking channels.',
  },
  privacy: {
    title: 'TableWay Privacy Policy',
    description:
      'Read how TableWay handles data for restaurant reservation software, contact forms, bookings, and website visitors.',
  },
  terms: {
    title: 'TableWay Terms of Service',
    description:
      'TableWay terms of service for restaurants using our reservation management software, booking platform, and related services.',
  },
  compare: {
    title: 'Compare TableWay — Restaurant Reservation Pricing',
    description:
      'Compare TableWay with traditional restaurant booking systems. See transparent pricing, included features, and annual savings with zero commission.',
  },
  howLinksWork: {
    title: 'How TableWay Booking Links Work',
    description:
      'Learn how TableWay booking links connect Google, Instagram, Facebook, and your website to one restaurant reservation system.',
  },
  download: {
    title: 'Download TableWay App',
    description: 'Download the TableWay app to manage restaurant reservations and staff bookings on mobile.',
  },
  notFound: {
    title: 'Page Not Found — TableWay',
    description: 'The page you requested could not be found on TableWay.',
  },
  'restaurant-booking-system': {
    title: 'Restaurant Booking System — TableWay',
    description:
      'TableWay is a restaurant booking system for independent restaurants. Accept reservations online, manage guests, and keep every booking in one place.',
  },
  'restaurant-reservation-system': {
    title: 'Restaurant Reservation System — TableWay',
    description:
      'Run your restaurant reservation system with TableWay. Online bookings, guest management, reminders, and commission-free pricing for restaurants.',
  },
  'restaurant-booking-software': {
    title: 'Restaurant Booking Software — TableWay',
    description:
      'TableWay restaurant booking software helps you take reservations from your website and social channels with one simple dashboard.',
  },
  'restaurant-reservation-software': {
    title: 'Restaurant Reservation Software — TableWay',
    description:
      'Use TableWay reservation software to manage tables, staff, and guest bookings without paying commission on every reservation.',
  },
  'online-restaurant-reservations': {
    title: 'Online Restaurant Reservations — TableWay',
    description:
      'Accept online restaurant reservations 24/7 with TableWay. Share one booking page across Google, Instagram, Facebook, and your website.',
  },
  'restaurant-booking-system-zero-commission': {
    title: 'Zero Commission Restaurant Booking — TableWay',
    description:
      'TableWay is a zero-commission restaurant booking system with one transparent monthly price, unlimited reservations, and no hidden fees.',
  },
};

const ES: Partial<Record<SeoPageId, PageSeoCopy>> = {
  home: {
    title: 'TableWay — Software de reservas para restaurantes',
    description:
      'Software de reservas sin comisión para restaurantes. Acepta reservas online 24/7, gestiona comensales y controla tus reservas en un solo sistema.',
  },
  about: {
    title: 'Sobre TableWay — Software de reservas',
    description:
      'Descubre cómo TableWay ayuda a restaurantes independientes a gestionar reservas, reducir no-shows y operar sin comisiones.',
  },
  contact: {
    title: 'Contacto TableWay — Soporte de reservas',
    description:
      'Contacta con TableWay para ayuda con software de reservas, precios, onboarding y soporte para tu restaurante.',
  },
  faq: {
    title: 'FAQ TableWay — Preguntas sobre reservas',
    description:
      'Respuestas sobre el software de reservas TableWay, prueba gratuita, precios sin comisión, acceso móvil y canales de reserva.',
  },
  compare: {
    title: 'Comparar TableWay — Precios de reservas',
    description:
      'Compara TableWay con otros sistemas de reservas. Precios transparentes, funciones incluidas y ahorro anual sin comisión.',
  },
};

const DE: Partial<Record<SeoPageId, PageSeoCopy>> = {
  home: {
    title: 'TableWay — Reservierungssoftware für Restaurants',
    description:
      'Provisionfreie Reservierungssoftware für Restaurants. Online-Buchungen rund um die Uhr, Gästeverwaltung und ein einfaches Reservierungssystem.',
  },
  about: {
    title: 'Über TableWay — Reservierungssoftware',
    description:
      'Erfahren Sie, wie TableWay unabhängige Restaurants bei Reservierungen, weniger No-Shows und provisionfreiem Betrieb unterstützt.',
  },
  contact: {
    title: 'TableWay Kontakt — Reservierungssupport',
    description:
      'Kontaktieren Sie TableWay für Hilfe zu Reservierungssoftware, Preisen, Onboarding und Support für Ihr Restaurant.',
  },
  faq: {
    title: 'TableWay FAQ — Fragen zu Reservierungen',
    description:
      'Antworten zu TableWay Reservierungssoftware, kostenloser Testphase, provisionfreien Preisen, Mobile-Zugang und Buchungskanälen.',
  },
  compare: {
    title: 'TableWay vergleichen — Reservierungspreise',
    description:
      'Vergleichen Sie TableWay mit traditionellen Reservierungssystemen. Transparente Preise, enthaltene Funktionen und jährliche Ersparnis.',
  },
};

const SV: Partial<Record<SeoPageId, PageSeoCopy>> = {
  home: {
    title: 'TableWay — Bokningssystem för restauranger',
    description:
      'Provisionsfritt bokningssystem för restauranger. Ta emot onlinebokningar dygnet runt, hantera gäster och samla alla reservationer på ett ställe.',
  },
  about: {
    title: 'Om TableWay — Bokningsprogramvara',
    description:
      'Läs hur TableWay hjälper independent restauranger med reservationer, färre no-shows och drift utan provision.',
  },
  contact: {
    title: 'Kontakta TableWay — Bokningssupport',
    description:
      'Kontakta TableWay för hjälp med bokningsprogramvara, priser, onboarding och support för din restaurang.',
  },
  faq: {
    title: 'TableWay FAQ — Frågor om bokningar',
    description:
      'Svar om TableWay bokningsprogramvara, gratis provperiod, provisionsfria priser, mobil åtkomst och bokningskanaler.',
  },
  compare: {
    title: 'Jämför TableWay — Bokningspriser',
    description:
      'Jämför TableWay med traditionella bokningssystem. Transparenta priser, inkluderade funktioner och årlig besparing utan provision.',
  },
};

const JA: Partial<Record<SeoPageId, PageSeoCopy>> = {
  home: {
    title: 'TableWay — レストラン予約・予約管理ソフト',
    description:
      '手数料0%のレストラン予約ソフト。24時間オンライン予約、ゲスト管理、そして1つの予約システムで運用できます。',
  },
  about: {
    title: 'TableWayについて — 予約管理ソフト',
    description:
      'TableWayが独立レストランの予約受付、ノーショー削減、手数料なし運用をどのように支援するかをご覧ください。',
  },
  contact: {
    title: 'TableWayお問い合わせ — 予約サポート',
    description:
      '予約ソフト、料金、導入、レストラン向けサポートについてTableWayにお問い合わせください。',
  },
  faq: {
    title: 'TableWay FAQ — 予約に関する質問',
    description:
      'TableWay予約ソフト、無料トライアル、手数料0%の料金、モバイルアクセス、予約チャネルに関する回答。',
  },
  compare: {
    title: 'TableWay比較 — 予約システム料金',
    description:
      'TableWayを従来の予約システムと比較。透明な料金、含まれる機能、手数料なしでの年間コスト削減。',
  },
};

export const SEO_METADATA: Record<SeoHreflangLocale, Record<SeoPageId, PageSeoCopy>> = {
  'en-gb': EN_GB,
  'en-us': EN_GB,
  es: { ...EN_GB, ...ES },
  de: { ...EN_GB, ...DE },
  sv: { ...EN_GB, ...SV },
  ja: { ...EN_GB, ...JA },
};

export function getPageSeoCopy(pageId: SeoPageId, locale: SeoHreflangLocale): PageSeoCopy {
  return SEO_METADATA[locale][pageId];
}
