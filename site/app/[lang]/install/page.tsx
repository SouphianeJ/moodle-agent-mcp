import { Arrow, External, Info } from '@/components/Icons';
import { Rich } from '@/components/Rich';
import type { Dict } from '@/content/types';
import { getDict } from '@/lib/dict';
import { asLocale } from '@/lib/i18n';
import { pageMeta } from '@/lib/meta';
import { site } from '@/lib/site';

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  const lang = asLocale((await params).lang);
  const t = getDict(lang).install;
  return pageMeta(lang, 'install', t.title, t.lead);
}

/**
 * The access gate settings, drawn: role checkboxes in two levels, and the field that adds a person (or a cohort, from
 * 2.5.3). A picture of the screen, not a form: the controls are hidden from assistive technologies, the caption says it.
 */
function GateFigure({ f }: { f: Dict['install']['gateFigure'] }) {
  const ticked = [[true, false], [false, false], [false, false]];
  return (
    <figure className="gate-fig">
      <div className="gate-ui" aria-hidden="true">
        <div className="gate-panel">
          <div className="gate-row gate-head">
            <span>{f.roles}</span>
            <span>{f.read}</span>
            <span>{f.readWrite}</span>
          </div>
          {f.roleNames.map((name, i) => (
            <div className="gate-row" key={name}>
              <span>{name}</span>
              {ticked[i].map((on, k) => (
                <span key={k} className={on ? 'box on' : 'box'} />
              ))}
            </div>
          ))}
        </div>
        <div className="gate-panel">
          <div className="gate-add-title">
            {f.add} <span className="gate-soon">{f.cohortSoon}</span>
          </div>
          <div className="gate-add">
            <span className="gate-field">{f.search}</span>
            <span className="gate-select">{f.level} ▾</span>
            <span className="gate-btn">{f.button}</span>
          </div>
        </div>
      </div>
      <figcaption>{f.caption}</figcaption>
    </figure>
  );
}

export default async function InstallPage({ params }: Props) {
  const lang = asLocale((await params).lang);
  const t = getDict(lang).install;
  const toc = [
    ['plugin', t.adminTitle],
    ['mode', t.modesTitle],
    ['apikeys', t.apikeysTitle],
    ['gate', t.gateTitle],
    ['connect', t.connectTitle],
    ['central', t.centralTitle],
    ['marketplace', t.marketTitle],
    ['advanced', t.advancedTitle],
  ];
  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1>{t.title}</h1>
          <p className="lead">{t.lead}</p>
          <nav aria-label={t.toc}>
            <ul className="toc">
              {toc.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
      <div className="container" style={{ paddingBottom: 72 }}>
        <section className="block" id="plugin" aria-labelledby="h-plugin">
          <h2 id="h-plugin">{t.adminTitle}</h2>
          <ol className="steps" style={{ maxWidth: 820 }}>
            {t.adminSteps.map((s) => (
              <li key={s.title}>
                <h3>{s.title}</h3>
                <p>
                  <Rich text={s.text} />
                </p>
              </li>
            ))}
          </ol>
          <p className="notice" role="note" style={{ marginTop: 18, maxWidth: 820 }}>
            <Info />
            <span>
              {t.download} <a href={`mailto:${site.contact}`}>{site.contact}</a>
            </span>
          </p>
        </section>

        <section className="block" id="mode" aria-labelledby="h-mode">
          <h2 id="h-mode">{t.modesTitle}</h2>
          <div className="grid" style={{ maxWidth: 820 }}>
            {t.modes.map((m) => (
              <article className="card" key={m.id}>
                <h3>{m.title}</h3>
                {m.text && (
                  <p className="card-muted">
                    <Rich text={m.text} />
                  </p>
                )}
                {m.points && (
                  <ul className="card-muted" style={{ paddingLeft: '1.2em', margin: 0 }}>
                    {m.points.map((p) => (
                      <li key={p}>
                        <Rich text={p} />
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
          <p className="card-muted" style={{ marginTop: 14 }}>
            <a href="#advanced">{t.otherMode}</a>
          </p>
        </section>

        <section className="block" id="apikeys" aria-labelledby="h-apikeys">
          <div style={{ maxWidth: 820 }}>
            <div>
              <h2 id="h-apikeys">{t.apikeysTitle}</h2>
              <p className="card-muted">{t.apikeysText}</p>
              <ul className="card-muted" style={{ paddingLeft: '1.2em' }}>
                {t.apikeysPoints.map((p) => (
                  <li key={p}>
                    <Rich text={p} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="block" id="gate" aria-labelledby="h-gate">
          <h2 id="h-gate">{t.gateTitle}</h2>
          <p className="card-muted">{t.gateText}</p>
          <div className="split gate-split">
            <GateFigure f={t.gateFigure} />
            <div>
              <ul className="gate-points">
                {t.gatePoints.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="card" style={{ marginTop: 18 }}>
                <h3>{t.familiesTitle}</h3>
                <p className="card-muted" style={{ margin: 0 }}>
                  <Rich text={t.familiesText} />
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="block" id="connect" aria-labelledby="h-connect">
          <h2 id="h-connect">{t.connectTitle}</h2>
          <p className="lead" style={{ fontSize: '1.05rem' }}>
            <Rich text={t.connectText} />
          </p>
          <div className="platforms" style={{ marginTop: 20 }}>
            {t.assistants.map((a) => (
              <article className="card platform" key={a.name}>
                <h3>{a.name}</h3>
                <ol>
                  {a.steps.map((s) => (
                    <li key={s}>
                      <Rich text={s} />
                    </li>
                  ))}
                </ol>
                {a.note && (
                  <p className="sources">
                    <Rich text={a.note} />
                  </p>
                )}
              </article>
            ))}
          </div>
          <p className="notice" role="note" style={{ marginTop: 18 }}>
            <Info />
            <span>{t.firstTry}</span>
          </p>
        </section>

        <section className="block" id="central" aria-labelledby="h-central">
          <div className="callout">
            <div>
              <h2 id="h-central" style={{ fontSize: '1.5rem' }}>
                {t.centralTitle}
              </h2>
              <p>
                <Rich text={t.centralText} />
              </p>
            </div>
            <a className="btn btn-primary" href={site.central} rel="noopener">
              {t.centralCta} <External />
            </a>
          </div>
        </section>

        <section className="block" id="marketplace" aria-labelledby="h-market">
          <div className="callout" style={{ background: 'var(--surface)' }}>
            <div>
              <h2 id="h-market" style={{ fontSize: '1.5rem' }}>
                {t.marketTitle}
              </h2>
              <p>{t.marketText}</p>
            </div>
            {site.marketplace ? (
              <a className="btn btn-ghost" href={site.marketplace} rel="noopener">
                {t.marketCta} <Arrow />
              </a>
            ) : (
              <span className="soon" aria-disabled="true">
                {t.marketSoon}
              </span>
            )}
          </div>
        </section>

        <section className="block" id="advanced" aria-labelledby="h-advanced">
          <h2 id="h-advanced" style={{ fontSize: '1.5rem' }}>
            {t.advancedTitle}
          </h2>
          <div className="advanced">
            {t.advanced.map((a) => (
              <details key={a.id} id={a.id}>
                <summary>
                  <h3>{a.title}</h3>
                </summary>
                <p className="card-muted">
                  <Rich text={a.text ?? ''} />
                </p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
