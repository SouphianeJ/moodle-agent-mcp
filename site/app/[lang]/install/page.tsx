import { Arrow, External, Info } from '@/components/Icons';
import { Rich } from '@/components/Rich';
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
          <div className="grid grid-2">
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
        </section>

        <section className="block" id="apikeys" aria-labelledby="h-apikeys">
          <div className="split">
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
            <div className="card">
              <p className="card-muted" style={{ margin: 0 }}>
                <Rich text={t.apikeysSync} />
              </p>
            </div>
          </div>
        </section>

        <section className="block" id="gate" aria-labelledby="h-gate">
          <div className="split">
            <div>
              <h2 id="h-gate">{t.gateTitle}</h2>
              <p className="card-muted">{t.gateText}</p>
              <ul className="card-muted" style={{ paddingLeft: '1.2em' }}>
                {t.gatePoints.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>{t.familiesTitle}</h3>
              <p className="card-muted" style={{ margin: 0 }}>
                <Rich text={t.familiesText} />
              </p>
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
      </div>
    </>
  );
}
