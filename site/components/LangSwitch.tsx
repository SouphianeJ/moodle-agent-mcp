'use client';

import { usePathname } from 'next/navigation';
import type { Locale } from '@/lib/i18n';

/** Link to the same page in the other language. */
export function LangSwitch({ lang, text, label }: { lang: Locale; text: string; label: string }) {
  const pathname = usePathname() || `/${lang}/`;
  const other: Locale = lang === 'fr' ? 'en' : 'fr';
  const target = pathname.replace(/^\/(fr|en)(?=\/|$)/, `/${other}`);
  return (
    <a className="lang-link" href={target} hrefLang={other} lang={other} aria-label={label} title={label}>
      {text}
    </a>
  );
}
