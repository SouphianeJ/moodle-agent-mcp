import Link from 'next/link';
import { asLocale, href } from '@/lib/i18n';

type Props = { params: Promise<{ lang: string }> };

// Served by the web server for any unknown address (see deploy/Caddyfile.site).
export async function generateMetadata({ params }: Props) {
  const lang = asLocale((await params).lang);
  return { title: lang === 'fr' ? 'Page introuvable · Moodle Agent MCP' : 'Page not found · Moodle Agent MCP', robots: { index: false } };
}

export default async function Missing({ params }: Props) {
  const lang = asLocale((await params).lang);
  return (
    <section className="page-head">
      <div className="container">
        <h1>{lang === 'fr' ? 'Page introuvable' : 'Page not found'}</h1>
        <p className="lead">{lang === 'fr' ? "Cette adresse n'existe pas ou plus." : 'This address does not exist, or no longer does.'}</p>
        <div className="actions">
          <Link className="btn btn-primary" href={href(lang)}>
            {lang === 'fr' ? "Retour à l'accueil" : 'Back to the home page'}
          </Link>
        </div>
      </div>
    </section>
  );
}
