import '@fontsource-variable/inter';
import '@fontsource-variable/fraunces';
import '../globals.css';
import type { ReactNode } from 'react';
import type { Viewport } from 'next';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { themeScript } from '@/components/ThemeToggle';
import { getDict } from '@/lib/dict';
import { asLocale, locales } from '@/lib/i18n';

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbfaf7' },
    { media: '(prefers-color-scheme: dark)', color: '#101214' },
  ],
};

export default async function LangLayout({ children, params }: { children: ReactNode; params: Promise<{ lang: string }> }) {
  const lang = asLocale((await params).lang);
  const t = getDict(lang);
  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip" href="#content">
          {t.nav.skip}
        </a>
        <Header lang={lang} t={t.nav} />
        <main id="content" tabIndex={-1}>
          {children}
        </main>
        <Footer lang={lang} t={t.footer} nav={t.nav} />
      </body>
    </html>
  );
}
