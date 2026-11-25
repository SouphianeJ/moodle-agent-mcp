import { Info } from '@/components/Icons';
import { Rich } from '@/components/Rich';
import type { Table } from '@/content/types';
import { getDict } from '@/lib/dict';
import { asLocale } from '@/lib/i18n';
import { pageMeta } from '@/lib/meta';

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  const lang = asLocale((await params).lang);
  const t = getDict(lang).tests;
  return pageMeta(lang, 'model-tests', t.title, t.lead);
}

/** A table of results. On a narrow screen each row becomes a small card, every cell labelled by its column. */
function Results({ table, label }: { table: Table; label: string }) {
  return (
    <div className="results-wrap">
      <table className="results" aria-label={label}>
        <thead>
          <tr>
            {table.head.map((h) => (
              <th key={h} scope="col">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row) => (
            <tr key={row[0]}>
              {row.map((cell, i) =>
                i === 0 ? (
                  <th key={i} scope="row">
                    {cell}
                  </th>
                ) : (
                  <td key={i} data-label={table.head[i]}>
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function ModelTests({ params }: Props) {
  const lang = asLocale((await params).lang);
  const t = getDict(lang).tests;
  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1>{t.title}</h1>
          <p className="lead">{t.lead}</p>
          <p className="when">{t.when}</p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="verdict">
        <div className="container">
          <h2 id="verdict">{t.verdictTitle}</h2>
          <div className="grid grid-3 verdict">
            {t.verdict.map((v) => (
              <article className="card voice" key={v.title}>
                <p className="card-tag">{v.tag}</p>
                <h3>{v.title}</h3>
                <p className="card-muted">{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt" aria-labelledby="e2e">
        <div className="container">
          <div className="section-head">
            <h2 id="e2e">{t.e2eTitle}</h2>
            <p className="lead">{t.e2eLead}</p>
          </div>
          <Results table={t.e2e} label={t.e2eTitle} />
          <ul className="notes">
            {t.e2eNotes.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="route">
        <div className="container split">
          <div>
            <h2 id="route">{t.routeTitle}</h2>
            <p className="card-muted">{t.routeLead}</p>
            <Results table={t.route} label={t.routeTitle} />
          </div>
          <div>
            <h2 id="calls">{t.callsTitle}</h2>
            <p className="card-muted">{t.callsLead}</p>
            <Results table={t.calls} label={t.callsTitle} />
          </div>
        </div>
      </section>

      <section className="section alt" aria-labelledby="method">
        <div className="container split">
          <div>
            <h2 id="method">{t.methodTitle}</h2>
            <ul className="prose-list">
              {t.method.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 id="changed">{t.changedTitle}</h2>
            <p className="card-muted">{t.changedLead}</p>
            <ul className="prose-list">
              {t.changed.map((c) => (
                <li key={c}>
                  <Rich text={c} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="limits">
        <div className="container split">
          <div>
            <h2 id="limits">{t.limitsTitle}</h2>
            <ul className="prose-list">
              {t.limits.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 id="others">{t.othersTitle}</h2>
            <p className="notice" role="note">
              <Info />
              <span>{t.othersText}</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
