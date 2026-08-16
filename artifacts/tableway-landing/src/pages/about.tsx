import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { MarketingSubpageShell } from '@/components/MarketingSubpageShell';
import { useTranslation } from '@/i18n/LocaleProvider';
import { tablewaySaasRegisterUrl } from '@/lib/tablewayUrls';

export default function AboutPage() {
  const { t, locale } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MarketingSubpageShell>
      <main className="max-w-3xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            {t('about.title')}
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">{t('about.subtitle')}</p>
        </motion.div>

        <div className="h-px bg-white/5 mb-20" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 leading-relaxed space-y-4 text-lg mb-16"
        >
          <p>{t('about.p1')}</p>
          <p>{t('about.p2')}</p>
          <p>{t('about.p3')}</p>
          <p>{t('about.p4')}</p>
          <p>{t('about.p5')}</p>
          <p>{t('about.p6')}</p>
          <p>{t('about.p7')}</p>
          <p>{t('about.p8')}</p>
          <p>{t('about.p9')}</p>
          <p className="pt-4 text-white">
            {t('about.founderName')}
            <br />
            {t('about.founderTitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <img
            src="/about-us.png"
            alt={t('about.imageAlt')}
            className="w-full rounded-2xl border border-white/8"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 pt-16 border-t border-white/5 text-center"
        >
          <p className="text-3xl font-bold text-white mb-10">{t('about.ctaTitle')}</p>
          <a
            href={tablewaySaasRegisterUrl('12m', locale)}
            className="bg-primary hover:bg-primary/90 transition-colors text-white px-10 py-4 rounded-full text-base font-bold inline-flex items-center gap-2 group"
          >
            {t('common.startFreeTrial30')}{' '}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </main>
    </MarketingSubpageShell>
  );
}
