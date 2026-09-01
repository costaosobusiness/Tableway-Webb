import { useEffect, useMemo } from "react";

import { FaqAccordion } from "@/components/home/FaqAccordion";
import { MarketingSubpageHero } from "@/components/MarketingSubpageHero";
import { MarketingSubpageShell } from "@/components/MarketingSubpageShell";
import { PageSeo } from "@/components/seo/PageSeo";
import { useTranslation } from "@/i18n/LocaleProvider";
import { buildFaqPageSchema } from "@/lib/seo/structuredData";

export default function FaqPage() {
  const { t } = useTranslation();
  const faqSchema = useMemo(
    () =>
      buildFaqPageSchema([
        { question: t("faq.q1.question"), answer: t("faq.q1.answer") },
        { question: t("faq.q2.question"), answer: t("faq.q2.answer") },
        { question: t("faq.q3.question"), answer: t("faq.q3.answer") },
        { question: t("faq.q4.question"), answer: t("faq.q4.answer") },
        { question: t("faq.q5.question"), answer: t("faq.q5.answer") },
      ]),
    [t],
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MarketingSubpageShell>
      <PageSeo
        pageId="faq"
        jsonLd={[faqSchema]}
        breadcrumbs={[{ name: t("faq.title"), path: "/faq" }]}
      />
      <MarketingSubpageHero eyebrow={t("faq.eyebrow")} title={t("faq.title")} />

      <div className="subpage-body">
        <div className="subpage-content subpage-content--narrow subpage-faq">
          <FaqAccordion />
        </div>
      </div>
    </MarketingSubpageShell>
  );
}
