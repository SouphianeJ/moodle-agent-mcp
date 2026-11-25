import Link from 'next/link';
import { getDict } from '@/lib/dict';
import { asLocale, href } from '@/lib/i18n';

type Props = { params: Promise<{ lang: string }> };

// Served by the web server for any unknown address (see deploy/Caddyfile.site).
export async function generateMetadata({ params }: Props) {
  const lang = asLocale((await params).lang);
  return { title: lang === 'fr' ? 'Page introuvable · Moodle Agent MCP' : 'Page not found · Moodle Agent MCP', robots: { index: false } };
}

export default async function Missing({ params }: Props) {
  const lang = asLocale((await params).lang);
  const t = getDict(lang).missing;
  return (
    <section className="page-head missing">
      <div className="container">
        <svg className="missing-art" viewBox="0 0 220 120" fill="none" aria-hidden="true">
          <path d="M20 96h180" />
          <path d="M60 96V40l30-18 30 18v56" />
          <path d="M80 96V70h20v26" />
          <path d="M150 30c10-14 30-14 34 2 3 12-10 16-14 26M170 74v2" />
        </svg>
        <p className="eyebrow">{t.kicker}</p>
        <h1>{t.title}</h1>
        <p className="lead">{t.lead}</p>
        <div className="actions">
          <Link className="btn btn-primary" href={href(lang)}>
            {t.back}
          </Link>
        </div>
      </div>
    </section>
  );
}
