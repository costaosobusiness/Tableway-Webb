import { useMemo, useState } from "react";

import { useTranslation } from "@/i18n/LocaleProvider";
import type { LandingTranslationKey } from "@/i18n/types";

const FAQ_ITEM_KEYS = [
  { id: "faq.q1", questionKey: "faq.q1.question", answerKey: "faq.q1.answer" },
  { id: "faq.q2", questionKey: "faq.q2.question", answerKey: "faq.q2.answer" },
  { id: "faq.q3", questionKey: "faq.q3.question", answerKey: "faq.q3.answer" },
  { id: "faq.q4", questionKey: "faq.q4.question", answerKey: "faq.q4.answer" },
  { id: "faq.q5", questionKey: "faq.q5.question", answerKey: "faq.q5.answer" },
] as const satisfies readonly {
  id: string;
  questionKey: LandingTranslationKey;
  answerKey: LandingTranslationKey;
}[];

export function FaqAccordion() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = useMemo(
    () =>
      FAQ_ITEM_KEYS.map((item) => ({
        id: item.id,
        question: t(item.questionKey),
        answer: t(item.answerKey),
      })),
    [t],
  );

  return (
    <div className="home-faq__list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const triggerId = `faq-trigger-${index}`;

        return (
          <article key={item.id} className="home-faq__item">
            <button
              id={triggerId}
              type="button"
              className="home-faq__trigger"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span>{item.question}</span>
              <span className="home-faq__mark" aria-hidden>
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className={`home-faq__panel ${isOpen ? "is-open" : ""}`}
            >
              <div className="home-faq__panel-inner">
                <p>{item.answer}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
