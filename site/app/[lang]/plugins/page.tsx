import { Rich } from '@/components/Rich';
import { getDict } from '@/lib/dict';
import { asLocale } from '@/lib/i18n';
import { pageMeta } from '@/lib/meta';
import { site } from '@/lib/site';

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  const lang = asLocale((await params).lang);
  const t = getDict(lang).plugins;
  return pageMeta(lang, 'plugins', t.title, t.description);
}

export default async function PluginsPage({ params }: Props) {
  const lang = asLocale((await params).lang);
  const t = getDict(lang).plugins;
  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1>{t.title}</h1>
        </div>
      </section>
      <div className="container prose" style={{ paddingBottom: 72 }}>
        {t.sections.map((s) => (
          <section className="block" key={s.id} id={s.id} aria-labelledby={`h-${s.id}`}>
            <h2 id={`h-${s.id}`} style={{ fontSize: '1.5rem' }}>
              {s.title}
            </h2>
            {s.id === 'contact' ? (
              <p>
                <a href={`mailto:${site.contact}`}>{site.contact}</a>
              </p>
            ) : (
              s.text && (
                <p>
                  <Rich text={s.text} />
                </p>
              )
            )}
            {s.points && (
              <ul>
                {s.points.map((p) => (
                  <li key={p}>
                    <Rich text={p} />
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </>
  );
}
