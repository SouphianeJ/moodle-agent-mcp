import type { MetadataRoute } from 'next';
import { href, locales, pages } from '@/lib/i18n';
import { site } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((lang) =>
    pages.map((page) => ({
      url: `${site.url}${href(lang, page)}`,
      alternates: { languages: Object.fromEntries(locales.map((l) => [l, `${site.url}${href(l, page)}`])) },
    })),
  );
}
