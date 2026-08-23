import { Globe2 } from 'lucide-react';

import { useTranslation } from '@/i18n/LocaleProvider';
import { LOCALE_LABELS } from '@/i18n/localeLabels';
import { SUPPORTED_LOCALES, type SupportedLocale } from '@/i18n/types';

type LanguageSelectorProps = {
  className?: string;
};

export function LanguageSelector({ className = '' }: LanguageSelectorProps) {
  const { locale, setLocale } = useTranslation();

  return (
    <label className={`inline-flex items-center gap-2 text-sm text-gray-300 ${className}`}>
      <Globe2 className="w-4 h-4 shrink-0" aria-hidden="true" />
      <span className="sr-only">Language</span>
      <select
        value={locale}
        onChange={(event) => setLocale(event.target.value as SupportedLocale)}
        className="bg-transparent border border-primary/50 hover:border-primary rounded-full px-3 py-1.5 text-sm text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-pointer"
        aria-label="Language"
      >
        {SUPPORTED_LOCALES.map((supportedLocale) => (
          <option key={supportedLocale} value={supportedLocale} className="bg-navy text-white">
            {LOCALE_LABELS[supportedLocale]}
          </option>
        ))}
      </select>
    </label>
  );
}
