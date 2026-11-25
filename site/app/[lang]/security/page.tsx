import { FamilyIcon, Info } from '@/components/Icons';
import { Rich } from '@/components/Rich';
import { getDict } from '@/lib/dict';
import { asLocale } from '@/lib/i18n';
import { pageMeta } from '@/lib/meta';

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  const lang = asLocale((await params).lang);
  const t = getDict(lang).security;
  return pageMeta(lang, 'security', t.title, t.lead);
}

/** The five locks, from the outside in: a diagram of what a request goes through. */
function Locks({ lang }: { lang: 'fr' | 'en' }) {
  const labels =
    lang === 'fr'
      ? ['Authentification', "Porte d'accès", "Familles d'outils", 'Barrière _EDITABLE', 'Droits Moodle']
      : ['Authentication', 'Access gate', 'Tool families', '_EDITABLE barrier', 'Moodle permissions'];
  const title = lang === 'fr' ? 'Cinq verrous qui se cumulent' : 'Five locks that add up';
  return (
    <figure className="card" style={{ margin: '0 0 8px' }}>
      <ol className="locks" aria-label={title}>
        <li className="locks-end">{lang === 'fr' ? 'Assistant IA' : 'AI assistant'}</li>
        {labels.map((label, i) => (
          <li key={label} className="lock">
            <span className="lock-n" aria-hidden="true">
              {i + 1}
            </span>
            {label}
          </li>
        ))}
        <li className="locks-end">Moodle</li>
      </ol>
      <figcaption style={{ color: 'var(--muted)', fontSize: '0.9rem', marginTop: 12 }}>{title}</figcaption>
    </figure>
  );
}

const icons: Record<string, string> = {
  rights: 'rights', editable: 'build', gate: 'plan', families: 'assess', consent: 'grade', journal: 'undo', stop: 'time', gdpr: 'follow', 'ai-notice': 'talk', hosting: 'maintain',
};

export default async function SecurityPage({ params }: Props) {
  const lang = asLocale((await params).lang);
  const t = getDict(lang).security;
  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1>{t.title}</h1>
          <p className="lead">{t.lead}</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Locks lang={lang} />
          <div className="grid grid-2" style={{ marginTop: 24 }}>
            {t.sections.map((s) => (
              <article className="card" key={s.id} id={s.id}>
                <span className="ico">
                  <FamilyIcon name={icons[s.id] ?? 'plan'} />
                </span>
                <h2 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-sans)', fontWeight: 650 }}>
                  <Rich text={s.title} />
                </h2>
                {s.text && (
                  <p className="card-muted">
                    <Rich text={s.text} />
                  </p>
                )}
                {s.points && (
                  <ul className="card-muted" style={{ paddingLeft: '1.2em', margin: 0 }}>
                    {s.points.map((p) => (
                      <li key={p}>
                        <Rich text={p} />
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
          <p className="notice" role="note" style={{ marginTop: 28 }}>
            <Info />
            <span>{t.disclaimer}</span>
          </p>
        </div>
      </section>
    </>
  );
}
