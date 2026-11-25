import Link from 'next/link';
import type { Dict } from '@/content/types';
import { href, type Locale } from '@/lib/i18n';
import { site } from '@/lib/site';

export function Footer({ lang, t, nav }: { lang: Locale; t: Dict['footer']; nav: Dict['nav'] }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <strong style={{ color: 'var(--ink)' }}>Moodle Agent MCP</strong>
            <p style={{ margin: '4px 0 0' }}>{t.tagline}</p>
          </div>
          <nav aria-label="Footer">
            <Link href={href(lang, 'faq')}>{nav.faq}</Link>
            <Link href={href(lang, 'legal')}>{nav.legal}</Link>
            <a href={`mailto:${site.contact}`}>{t.contact}</a>
            <a href={site.repo} rel="noopener">{t.source}</a>
          </nav>
        </div>
        <p className="footer-small">
          {t.licence} · {t.noCookies}
        </p>
      </div>
    </footer>
  );
}
