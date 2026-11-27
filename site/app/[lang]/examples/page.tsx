import Link from 'next/link';
import { examples } from '@/content/examples';
import { duration, measured, money } from '@/content/measured';
import { Arrow, Check, Info, Shield } from '@/components/Icons';
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
  const [open, close] = lang === 'fr' ? ['«\u00a0', '\u00a0»'] : ['“', '”'];
  const colon = lang === 'fr' ? ' : ' : ': ';
  const m = measured[lang];
  const titles = new Map(scenarioFamilies(lang).flatMap((f) => f.scenarios.map((s) => [s.slug, s.title] as const)));
  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1>{t.title}</h1>
          <p className="lead">{t.lead}</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="mesures">
        <div className="container">
          <div className="section-head">
            <h2 id="mesures">{m.title}</h2>
            <p className="lead">{m.lead}</p>
          </div>
          <div className="grid grid-2 measured">
            {m.runs.map((r) => (
              <article key={r.id} id={r.id} className="card voice measured-card">
                <h3>{r.title}</h3>
                <p className="mini-title">{m.request}</p>
                <blockquote className="quote">
                  {open}
                  {r.request}
                  {close}
                </blockquote>
                <p className="mini-title">{m.done}</p>
                <ul className="done">
                  {r.done.map((d) => (
                    <li key={d}>
                      <Check />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
                <dl className="figures">
                  <div>
                    <dt>{m.cost}</dt>
                    <dd>{money(r.cost, lang)}</dd>
                  </div>
                  <div>
                    <dt>{m.calls}</dt>
                    <dd>{r.calls}</dd>
                  </div>
                  <div>
                    <dt>{m.duration}</dt>
                    <dd>{duration(r.seconds)}</dd>
                  </div>
                  <div>
                    <dt>{m.wins}</dt>
                    <dd>{r.wins}</dd>
                  </div>
                </dl>
                <p className="haiku-fig">
                  {m.noCache}
                  {colon}
                  {money(r.costNoCache, lang)}
                </p>
              </article>
            ))}
          </div>

          <aside className="haiku" aria-labelledby="haiku">
            <h2 id="haiku">{m.haikuTitle}</h2>
            <p className="card-muted">{m.haikuLead}</p>
            <ul className="haiku-list">
              {m.haiku.map((h) => (
                <li key={h.id} className={h.ok ? 'ok' : 'gap'}>
                  <span className={`tag ${h.ok ? 'risk-none' : 'risk-high'}`}>{h.ok ? m.haikuOk : m.haikuGap}</span>
                  <div>
                    <p className="haiku-req">
                      {open}
                      {h.request}
                      {close}
                    </p>
                    <p className="card-muted">{h.verdict}</p>
                    <p className="haiku-fig">
                      {h.wins} {m.wins} · {money(h.cost, lang)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="card-muted">{m.haikuRest}</p>
            <p>
              <strong>{m.haikuConclusion}</strong>
            </p>
            <Link className="btn btn-ghost" href={href(lang, 'model-tests')}>
              {m.haikuCta} <Arrow />
            </Link>
          </aside>

          <div className="method-box">
            <h2>{m.methodTitle}</h2>
            <ul className="prose-list">
              {m.method.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <p className="notice" role="note">
              <Info />
              <span>{m.tip}</span>
            </p>
            <h2>{m.limitsTitle}</h2>
            <ul className="prose-list">
              {m.limits.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section alt" aria-labelledby="illustratifs">
        <div className="container">
          <div className="section-head">
            <h2 id="illustratifs">{m.illustrativeTitle}</h2>
          </div>
          <p className="notice" role="note">
            <Info />
            <span>{t.disclaimer}</span>
          </p>
          <div className="grid grid-2">
            {examples[lang].map((ex) => (
              <article key={ex.id} id={ex.id} className="card example" aria-labelledby={`ex-${ex.id}`}>
                <div className="example-head">
                  <h3 className="persona" id={`ex-${ex.id}`}>
                    {ex.persona}
                  </h3>
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
