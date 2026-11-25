import Link from 'next/link';
import { Conversation } from '@/components/Conversation';
import { Arrow, Check, FamilyIcon, Shield } from '@/components/Icons';
import { Rich } from '@/components/Rich';
import { getDict } from '@/lib/dict';
import { asLocale, href } from '@/lib/i18n';
import { pageMeta } from '@/lib/meta';
import { scenarioFamilies } from '@/lib/scenarios';

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  return pageMeta(asLocale((await params).lang), '');
}

const benefitIcons = ['time', 'plan', 'rights', 'undo'];

export default async function Home({ params }: Props) {
  const lang = asLocale((await params).lang);
  const t = getDict(lang).home;
  const families = scenarioFamilies(lang);
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>{t.title}</h1>
            <p className="lead">
              <Rich text={t.lead} />
            </p>
            <div className="actions">
              <Link className="btn btn-primary" href={href(lang, 'install')}>
                {t.ctaPrimary} <Arrow />
              </Link>
              <Link className="btn btn-ghost" href={href(lang, 'examples')}>
                {t.ctaSecondary}
              </Link>
            </div>
            <ul className="facts">
              {t.facts.map((f) => (
                <li key={f.label}>
                  <strong>{f.value}</strong>
                  <span>{f.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <Conversation t={t.demo} />
        </div>
      </section>

      <section className="section alt" aria-labelledby="benefits">
        <div className="container">
          <div className="section-head">
            <h2 id="benefits">{t.benefitsTitle}</h2>
          </div>
          <div className="grid grid-4">
            {t.benefits.map((b, i) => (
              <article className="card" key={b.title}>
                <span className="ico">
                  <FamilyIcon name={benefitIcons[i] ?? 'plan'} />
                </span>
                <h3>{b.title}</h3>
                <p className="card-muted">{b.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="how">
        <div className="container">
          <div className="section-head">
            <h2 id="how">{t.howTitle}</h2>
          </div>
          <div className="flow">
            {t.how.map((s) => (
              <article className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p className="card-muted">{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt" aria-labelledby="scen">
        <div className="container">
          <div className="section-head">
            <h2 id="scen">{t.scenariosTitle}</h2>
            <p className="lead">{t.scenariosText}</p>
          </div>
          <div className="grid grid-3">
            {families.map((f) => (
              <Link key={f.id} href={href(lang, 'scenarios', f.id)} className="card" style={{ textDecoration: 'none', color: 'inherit' }}>
                <span className="ico">
                  <FamilyIcon name={f.icon} />
                </span>
                <h3>{f.label}</h3>
                <p className="card-muted" style={{ fontSize: '0.95rem' }}>
                  {f.scenarios
                    .slice(0, 3)
                    .map((s) => s.title)
                    .join(' · ')}
                  {f.scenarios.length > 3 ? ' …' : ''}
                </p>
              </Link>
            ))}
          </div>
          <div className="actions">
            <Link className="btn btn-ghost" href={href(lang, 'scenarios')}>
              {t.scenariosCta} <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="trust">
        <div className="container split">
          <div>
            <h2 id="trust" style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <Shield width={30} height={30} style={{ color: 'var(--accent-text)', flex: 'none' }} /> {t.trustTitle}
            </h2>
            <ul className="checks">
              {t.trust.map((item) => (
                <li key={item}>
                  <Check />
                  <span>
                    <Rich text={item} />
                  </span>
                </li>
              ))}
            </ul>
            <div className="actions">
              <Link className="btn btn-ghost" href={href(lang, 'security')}>
                {t.trustCta} <Arrow />
              </Link>
            </div>
          </div>
          <div>
            <h2>{t.startTitle}</h2>
            <ol className="steps">
              {t.start.map((s) => (
                <li key={s.title}>
                  <h3>{s.title}</h3>
                  <p>
                    <Rich text={s.text} />
                  </p>
                </li>
              ))}
            </ol>
            <div className="actions">
              <Link className="btn btn-primary" href={href(lang, 'install')}>
                {t.startCta} <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
