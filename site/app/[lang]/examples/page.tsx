import Link from 'next/link';
import { examples } from '@/content/examples';
import { Info, Shield } from '@/components/Icons';
import { Rich } from '@/components/Rich';
import { getDict } from '@/lib/dict';
import { asLocale, href } from '@/lib/i18n';
import { pageMeta } from '@/lib/meta';
import { scenarioFamilies } from '@/lib/scenarios';

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  const lang = asLocale((await params).lang);
  const t = getDict(lang).examples;
  return pageMeta(lang, 'examples', t.title, t.lead);
}

export default async function ExamplesPage({ params }: Props) {
  const lang = asLocale((await params).lang);
  const t = getDict(lang).examples;
  const [open, close] = lang === 'fr' ? ['« ', ' »'] : ['“', '”'];
  const colon = lang === 'fr' ? ' : ' : ': ';
  const titles = new Map(scenarioFamilies(lang).flatMap((f) => f.scenarios.map((s) => [s.slug, s.title] as const)));
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
          <p className="notice" role="note">
            <Info />
            <span>{t.disclaimer}</span>
          </p>
          <div className="grid grid-2">
            {examples[lang].map((ex) => (
              <article key={ex.id} id={ex.id} className="card example" aria-labelledby={`ex-${ex.id}`}>
                <div className="example-head">
                  <h2 className="persona" id={`ex-${ex.id}`}>
                    {ex.persona}
                  </h2>
                  <Link className="tag" href={href(lang, 'scenarios', ex.scenario)}>
                    {t.scenario}
                    {colon}
                    {titles.get(ex.scenario) ?? ex.scenario}
                  </Link>
                </div>
                <div>
                  <p className="mini-title">{t.request}</p>
                  <blockquote className="quote">
                    {open}
                    {ex.request}
                    {close}
                  </blockquote>
                </div>
                <div>
                  <p className="mini-title">{t.plan}</p>
                  <ol>
                    {ex.plan.map((step) => (
                      <li key={step}>
                        <Rich text={step} />
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <p className="mini-title">{t.result}</p>
                  {ex.result.map((r) => (
                    <p key={r} style={{ margin: 0 }}>
                      <Rich text={r} />
                    </p>
                  ))}
                </div>
                <p className="guard">
                  <Shield />
                  <span>
                    <strong>
                      {t.guard}
                      {colon}
                    </strong>
                    {ex.guard}
                  </span>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
