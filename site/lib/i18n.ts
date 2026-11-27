export const locales = ['fr', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function asLocale(value: string): Locale {
  return isLocale(value) ? value : defaultLocale;
}

/** The pages of the site, in menu order; '' is the home page. */
export const pages = ['', 'examples', 'scenarios', 'security', 'install', 'skills', 'model-tests', 'faq', 'plugins', 'legal'] as const;
export type PageKey = (typeof pages)[number];

export function href(lang: Locale, page: PageKey | string = '', hash = ''): string {
  const path = page ? `/${lang}/${page}/` : `/${lang}/`;
  return hash ? `${path}#${hash}` : path;
}
