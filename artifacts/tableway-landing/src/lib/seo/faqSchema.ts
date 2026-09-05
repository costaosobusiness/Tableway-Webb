import type { LandingTranslationKey } from '@/i18n/types';
import { buildFaqPageSchema } from '@/lib/seo/structuredData';

const FAQ_SCHEMA_ITEM_KEYS = [
  { questionKey: 'faq.q1.question', answerKey: 'faq.q1.answer' },
  { questionKey: 'faq.q2.question', answerKey: 'faq.q2.answer' },
  { questionKey: 'faq.q3.question', answerKey: 'faq.q3.answer' },
  { questionKey: 'faq.q4.question', answerKey: 'faq.q4.answer' },
  { questionKey: 'faq.q5.question', answerKey: 'faq.q5.answer' },
] as const satisfies readonly {
  questionKey: LandingTranslationKey;
  answerKey: LandingTranslationKey;
}[];

type FaqTranslate = (key: LandingTranslationKey) => string;

/** FAQPage JSON-LD from existing FAQ translation keys only. */
export function buildLocalizedFaqPageSchema(t: FaqTranslate) {
  return buildFaqPageSchema(
    FAQ_SCHEMA_ITEM_KEYS.map(({ questionKey, answerKey }) => ({
      question: t(questionKey),
      answer: t(answerKey),
    })),
  );
}
