import { useEffect, useMemo } from "react";

import { FaqAccordion } from "@/components/home/FaqAccordion";
import { MarketingSubpageHero } from "@/components/MarketingSubpageHero";
import { MarketingSubpageShell } from "@/components/MarketingSubpageShell";
import { PageSeo } from "@/components/seo/PageSeo";
import { useTranslation } from "@/i18n/LocaleProvider";
import { buildLocalizedFaqPageSchema } from '@/lib/seo/faqSchema';

export default function FaqPage() {
  const { t } = useTranslation();
  const faqSchema = useMemo(() => buildLocalizedFaqPageSchema(t), [t]);

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
