import type { Metadata } from 'next';
import { getDict } from './dict';
import { href, type Locale, type PageKey } from './i18n';
import { site } from './site';

/** Title, description, canonical address and language alternates of a page. */
export function pageMeta(lang: Locale, page: PageKey, title?: string, description?: string): Metadata {
  const t = getDict(lang);
  const fullTitle = title ? `${title} · Moodle Agent MCP` : t.meta.title;
  const desc = description ?? t.meta.description;
  return {
    title: fullTitle,
    description: desc,
    metadataBase: new URL(site.url),
    alternates: {
      canonical: href(lang, page),
      languages: { fr: href('fr', page), en: href('en', page), 'x-default': href('fr', page) },
    },
    openGraph: {
      title: fullTitle,
      description: desc,
      type: 'website',
      locale: lang === 'fr' ? 'fr_FR' : 'en_GB',
      siteName: 'Moodle Agent MCP',
      images: [{ url: `/${lang}/og.png`, width: 1200, height: 630, alt: t.home.title }],
    },
    twitter: { card: 'summary_large_image' },
    icons: { icon: '/favicon.svg' },
  };
}
