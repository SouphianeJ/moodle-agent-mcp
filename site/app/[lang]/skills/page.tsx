import { platforms } from '@/content/platforms';
import { Download, FamilyIcon } from '@/components/Icons';
import { Rich } from '@/components/Rich';
import { getDict } from '@/lib/dict';
import { asLocale } from '@/lib/i18n';
import { pageMeta } from '@/lib/meta';
import { scenarioFamilies } from '@/lib/scenarios';
import { skillZip } from '@/lib/site';

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  const lang = asLocale((await params).lang);
  const t = getDict(lang).skills;
  return pageMeta(lang, 'skills', t.title, t.lead);
}

export default async function SkillsPage({ params }: Props) {
  const lang = asLocale((await params).lang);
  const t = getDict(lang).skills;
  const families = scenarioFamilies(lang);
  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1>{t.title}</h1>
          <p className="lead">
            <Rich text={t.lead} />
          </p>
        </div>
      </section>
      <div className="container" style={{ paddingBottom: 72 }}>
        <section className="block" aria-labelledby="h-list">
          <h2 id="h-list">{t.listTitle}</h2>
          <div className="grid grid-3">
            {families.map((f) => (
              <article className="card skill-card" key={f.id}>
                <span className="ico">
                  <FamilyIcon name={f.icon} />
                </span>
                <h3 style={{ margin: 0 }}>{f.label}</h3>
                <code>{f.id}</code>
                <p className="card-muted" style={{ margin: 0, fontSize: '0.95rem' }}>
                  {t.descriptions[f.id]} ({f.scenarios.length} {t.scenarios})
                </p>
                <a className="btn btn-ghost" href={skillZip(f.id)} rel="noopener" aria-label={`${t.download} ${f.id}`}>
                  <Download /> {t.download}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="block" aria-labelledby="h-platforms">
          <h2 id="h-platforms">{t.platformsTitle}</h2>
          <p className="lead" style={{ fontSize: '1.05rem' }}>
            <Rich text={t.platformsLead} />
          </p>
          <div className="platforms" style={{ marginTop: 20 }}>
            {platforms[lang].map((p) => (
              <article className="card platform" key={p.name}>
                <h3>
                  {p.name} <span className="tag">{p.status}</span>
                </h3>
                <ol>
                  {p.steps.map((s) => (
                    <li key={s}>
                      <Rich text={s} />
                    </li>
                  ))}
                </ol>
                <p className="sources">
                  {lang === 'fr' ? 'Sources :' : 'Sources:'}{' '}
                  {p.sources.map((s, i) => (
                    <span key={s.url}>
                      {i > 0 && ' · '}
                      <a href={s.url} rel="noopener">
                        {s.label}
                      </a>
                    </span>
                  ))}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="block" aria-labelledby="h-sync">
          <div className="split">
            <div>
              <h2 id="h-sync">{t.syncTitle}</h2>
              <p className="card-muted">
                <Rich text={t.syncText} />
              </p>
              <p className="card-muted">{t.licence}</p>
            </div>
            <pre className="terminal">
              <code>{`# Claude Code\n/plugin marketplace add SouphianeJ/moodle-agent-mcp\n/plugin install moodle-agent-mcp@moodle-agent-mcp\n\n# ${lang === 'fr' ? 'Mettre à jour depuis le plugin' : 'Refresh from the plugin'}\nscripts/sync-skills.sh ../local_mcpcourse\nscripts/build-skill-zips.sh`}</code>
            </pre>
          </div>
        </section>
      </div>
    </>
  );
}
