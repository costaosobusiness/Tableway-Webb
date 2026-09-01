import type { SeoLandingSlug } from '@/lib/seo/pageIds';

export type SeoLandingSection = {
  heading: string;
  paragraphs: string[];
};

export type SeoLandingContent = {
  slug: SeoLandingSlug;
  eyebrow: string;
  title: string;
  intro: string;
  sections: SeoLandingSection[];
  ctaTitle: string;
};

export const SEO_LANDING_CONTENT: Record<SeoLandingSlug, SeoLandingContent> = {
  'restaurant-booking-system': {
    slug: 'restaurant-booking-system',
    eyebrow: 'Restaurant booking system',
    title: 'A booking system built for how restaurants actually work',
    intro:
      'TableWay gives independent restaurants one place to accept reservations, manage guests, and stay in control of every booking channel — without commission fees or complicated setup.',
    sections: [
      {
        heading: 'One system for every reservation',
        paragraphs: [
          'A modern restaurant booking system should do more than display a calendar. It should help your team confirm guests faster, reduce no-shows, and keep service organized during every service.',
          'TableWay brings online bookings, guest details, staff access, and booking links into one reservation management workflow designed for restaurants, cafés, and bars.',
        ],
      },
      {
        heading: 'Accept bookings where guests already are',
        paragraphs: [
          'Guests discover restaurants on Google, Instagram, Facebook, and your website. TableWay lets you share one booking page across those channels so reservations arrive in the same dashboard.',
          'That means fewer missed bookings, less manual work, and a cleaner experience for both guests and staff.',
        ],
      },
      {
        heading: 'Commission-free pricing that stays predictable',
        paragraphs: [
          'Many booking platforms charge monthly fees plus commission or add-ons for essential features. TableWay uses one transparent monthly price with unlimited reservations and no commission on bookings.',
          'You keep more of the revenue from every table you fill, with pricing that is easy to explain to owners and managers.',
        ],
      },
      {
        heading: 'Built for teams, not just websites',
        paragraphs: [
          'Front-of-house and management teams can review today’s reservations, confirm guests, and stay updated from desktop or mobile. TableWay is reservation software your staff can actually use during service.',
          'If you are comparing options, review pricing, features, and savings on our Compare page before starting your free trial.',
        ],
      },
    ],
    ctaTitle: 'Start your 30-day free trial',
  },
  'restaurant-reservation-system': {
    slug: 'restaurant-reservation-system',
    eyebrow: 'Restaurant reservation system',
    title: 'Run reservations with one clear system',
    intro:
      'TableWay is a restaurant reservation system that helps you take online bookings, manage guest flow, and operate with one fixed monthly price and zero commission.',
    sections: [
      {
        heading: 'Reservation management without the overhead',
        paragraphs: [
          'Restaurants need reservation software that is reliable during busy services and simple enough for daily use. TableWay focuses on the workflows that matter: taking bookings, managing guests, and keeping your team aligned.',
          'Instead of juggling phone calls, social messages, and separate tools, your team works from one reservation system.',
        ],
      },
      {
        heading: 'Online reservations that stay on-brand',
        paragraphs: [
          'Your booking page should feel like part of your restaurant, not a third-party marketplace. TableWay keeps guests booking directly with you while still supporting the channels that drive discovery.',
          'Share your booking link on your website, social profiles, and guest touchpoints to make reservations easy at every step.',
        ],
      },
      {
        heading: 'Reduce no-shows with better guest communication',
        paragraphs: [
          'Missed reservations hurt revenue and planning. TableWay includes automated guest reminders and a clear view of upcoming bookings so your team can prepare more accurately.',
          'Better communication helps protect covers and improves the experience for guests who do arrive.',
        ],
      },
      {
        heading: 'Compare before you switch',
        paragraphs: [
          'If you are evaluating restaurant reservation systems, compare TableWay with traditional platforms on pricing, included features, and annual savings.',
          'Every plan includes a 30-day free trial so you can set up your restaurant and test the system before paying.',
        ],
      },
    ],
    ctaTitle: 'Start your 30-day free trial',
  },
  'restaurant-booking-software': {
    slug: 'restaurant-booking-software',
    eyebrow: 'Restaurant booking software',
    title: 'Booking software that keeps restaurants in control',
    intro:
      'TableWay is restaurant booking software for teams that want direct guest relationships, transparent pricing, and a reservation workflow that works across web and mobile.',
    sections: [
      {
        heading: 'Software that supports service, not complexity',
        paragraphs: [
          'The best restaurant booking software removes friction for guests and staff. TableWay helps you publish a booking page, collect reservations, and manage guest information without unnecessary features or hidden costs.',
          'It is built for independent operators who need practical reservation management, not enterprise complexity.',
        ],
      },
      {
        heading: 'Connect your booking channels',
        paragraphs: [
          'Restaurants rarely receive every reservation from one source. TableWay helps you route bookings from your website and social channels into one dashboard, making it easier to track demand and plan staffing.',
          'See how booking links work across Google, Instagram, Facebook, and your site on our How Links Work page.',
        ],
      },
      {
        heading: 'Mobile access for working teams',
        paragraphs: [
          'Managers and staff can stay updated on reservations from mobile devices, which matters when service is happening away from a fixed terminal.',
          'That flexibility helps teams respond faster and reduces the risk of missed or late confirmations.',
        ],
      },
      {
        heading: 'Straightforward pricing for growing restaurants',
        paragraphs: [
          'TableWay includes unlimited reservations, staff accounts, and core booking features in every plan. There are no commission fees and no surprise add-ons for essentials.',
          'Review plans and included features on our Pricing section, then start a free trial when you are ready.',
        ],
      },
    ],
    ctaTitle: 'Start your 30-day free trial',
  },
  'restaurant-reservation-software': {
    slug: 'restaurant-reservation-software',
    eyebrow: 'Restaurant reservation software',
    title: 'Reservation software with transparent restaurant pricing',
    intro:
      'TableWay is restaurant reservation software designed for operators who want online bookings, guest management, and channel coverage without paying commission on every cover.',
    sections: [
      {
        heading: 'Manage bookings from one dashboard',
        paragraphs: [
          'TableWay gives restaurants a single place to review reservations, guest details, and daily booking activity. That clarity helps teams prepare better and respond faster when plans change.',
          'Whether bookings arrive from your website or social channels, they land in the same reservation management system.',
        ],
      },
      {
        heading: 'Keep guest relationships direct',
        paragraphs: [
          'Marketplace-style booking tools can insert themselves between you and your guests. TableWay keeps the reservation relationship with your restaurant while still making it easy for guests to book online.',
          'That direct connection supports repeat visits, clearer communication, and stronger brand trust.',
        ],
      },
      {
        heading: 'Features included from day one',
        paragraphs: [
          'Core capabilities like online booking pages, guest reminders, staff access, and booking links are included in every TableWay plan.',
          'If you want to see how those features compare with traditional systems, visit our Compare page for a side-by-side view.',
        ],
      },
      {
        heading: 'Start with a free trial',
        paragraphs: [
          'Every TableWay plan includes a 30-day free trial, so you can configure your restaurant, connect booking channels, and test the software before committing.',
          'Questions about setup, pricing, or channels? Visit the FAQ or contact our team for help.',
        ],
      },
    ],
    ctaTitle: 'Start your 30-day free trial',
  },
  'online-restaurant-reservations': {
    slug: 'online-restaurant-reservations',
    eyebrow: 'Online restaurant reservations',
    title: 'Take online reservations without losing control',
    intro:
      'TableWay helps restaurants accept online reservations 24/7 while keeping bookings, guest data, and pricing under your control.',
    sections: [
      {
        heading: 'Online booking that works around the clock',
        paragraphs: [
          'Guests expect to book restaurants online at any time. TableWay gives you a booking page you can share across your website and social channels so reservations continue even when the phone is unanswered.',
          'That availability helps capture demand you might otherwise miss during closed hours or busy services.',
        ],
      },
      {
        heading: 'One booking page, multiple channels',
        paragraphs: [
          'Instead of maintaining separate flows for every platform, TableWay routes online restaurant reservations into one reservation system.',
          'Your team sees every booking in one place, which simplifies planning and reduces manual follow-up.',
        ],
      },
      {
        heading: 'Better guest experience, less admin',
        paragraphs: [
          'Automated confirmations and reminders help guests arrive prepared while reducing repetitive work for staff.',
          'TableWay keeps the booking experience simple for guests and manageable for restaurant teams.',
        ],
      },
      {
        heading: 'Commission-free online reservations',
        paragraphs: [
          'Some platforms charge restaurants commission or premium fees for online booking capability. TableWay includes online reservations in its standard plans with no commission on bookings.',
          'Compare annual savings and included features before choosing your next reservation platform.',
        ],
      },
    ],
    ctaTitle: 'Start your 30-day free trial',
  },
  'restaurant-booking-system-zero-commission': {
    slug: 'restaurant-booking-system-zero-commission',
    eyebrow: 'Zero commission booking',
    title: 'A zero-commission restaurant booking system',
    intro:
      'TableWay is a zero-commission restaurant booking system with one monthly price, unlimited reservations, and no hidden booking fees.',
    sections: [
      {
        heading: 'Stop paying commission on your own guests',
        paragraphs: [
          'Commission-based booking models can reduce margin on every reservation your restaurant generates. TableWay uses commission-free pricing so the value of each booking stays with your business.',
          'That makes budgeting simpler and easier to explain to ownership teams.',
        ],
      },
      {
        heading: 'One price with core features included',
        paragraphs: [
          'TableWay plans include online booking pages, guest management, staff access, booking links, and automated reminders without charging extra for essentials.',
          'You can review plan details and compare against traditional systems before starting your trial.',
        ],
      },
      {
        heading: 'Built for independent restaurants',
        paragraphs: [
          'TableWay is designed for restaurants that want professional reservation software without marketplace dependency or unpredictable fees.',
          'It supports the channels guests use most while keeping your brand and guest relationship intact.',
        ],
      },
      {
        heading: 'Try TableWay free for 30 days',
        paragraphs: [
          'Set up your restaurant, connect booking channels, and test the system during a 30-day free trial included with every plan.',
          'Need help deciding? Read the FAQ or contact us with questions about pricing, features, or onboarding.',
        ],
      },
    ],
    ctaTitle: 'Start your 30-day free trial',
  },
};
