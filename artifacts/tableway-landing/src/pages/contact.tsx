import { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

import { MarketingSubpageShell } from '@/components/MarketingSubpageShell';
import { useTranslation } from '@/i18n/LocaleProvider';
import { tablewaySaasRegisterUrl } from '@/lib/tablewayUrls';

export default function ContactPage() {
  const { t, locale } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', restaurant: '', email: '', subject: '', message: '' });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    'w-full bg-[#0f0f0f] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-primary/60 transition-colors';

  return (
    <MarketingSubpageShell>
      <main className="max-w-2xl mx-auto px-6 py-20">
        <div className="mb-14 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">{t('contact.title')}</h1>
          <p className="text-gray-400 text-lg">{t('contact.subtitle')}</p>
        </div>

        {submitted ? (
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6">
              <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">{t('contact.success.title')}</h2>
            <p className="text-gray-400 mb-8">{t('contact.success.message')}</p>
            <Link href="/" className="text-sm text-primary hover:underline">
              {t('common.backToHome')}
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t('contact.form.namePlaceholder')}
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                  {t('contact.form.restaurant')}
                </label>
                <input
                  type="text"
                  required
                  placeholder={t('contact.form.restaurantPlaceholder')}
                  value={form.restaurant}
                  onChange={(event) => setForm({ ...form, restaurant: event.target.value })}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                required
                placeholder={t('contact.form.emailPlaceholder')}
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                {t('contact.form.subject')}
              </label>
              <input
                type="text"
                required
                placeholder={t('contact.form.subjectPlaceholder')}
                value={form.subject}
                onChange={(event) => setForm({ ...form, subject: event.target.value })}
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                {t('contact.form.message')}
              </label>
              <textarea
                required
                rows={6}
                placeholder={t('contact.form.messagePlaceholder')}
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 transition-colors text-white py-4 rounded-full text-sm font-bold flex items-center justify-center gap-2 group mt-2"
            >
              {t('contact.form.submit')}{' '}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        )}

        <div className="mt-24 pt-14 border-t border-white/5 text-center">
          <p className="text-2xl font-bold text-white mb-8">{t('contact.ctaTitle')}</p>
          <a
            href={tablewaySaasRegisterUrl('12m', locale)}
            className="bg-primary hover:bg-primary/90 transition-colors text-white px-10 py-4 rounded-full text-base font-bold inline-flex items-center gap-2 group"
          >
            {t('common.startFreeTrial30')}{' '}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </main>
    </MarketingSubpageShell>
  );
}
