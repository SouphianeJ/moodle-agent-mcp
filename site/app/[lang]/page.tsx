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

/** The title with its accent words wrapped, underlined by a hand-drawn stroke. */
function HeroTitle({ title, accent }: { title: string; accent: string }) {
  const at = title.indexOf(accent);
  if (at < 0) return <h1>{title}</h1>;
  // Keep the closing punctuation with the accent words, so that it never wraps alone.
  const end = at + accent.length;
  const tail = /^[.!?…]+/.exec(title.slice(end))?.[0] ?? '';
  return (
    <h1>
      {title.slice(0, at)}
      <span className="hl-wrap">
        <span className="hl">
          {accent}
          <svg className="hl-stroke" viewBox="0 0 300 18" preserveAspectRatio="none" aria-hidden="true">
            <path d="M3 12C60 5 120 4 180 7s90 4 114-1" />
          </svg>
        </span>
        {tail}
      </span>
      {title.slice(end + tail.length)}
    </h1>
  );
}

/** A card in two voices: the plain name of the feature, what one says to oneself, then the exact explanation. */
function VoiceCard({ tag, title, text, icon }: { tag?: string; title: string; text: string; icon?: string }) {
  return (
    <article className="card voice">
      {icon ? (
        <span className="ico">
          <FamilyIcon name={icon} />
        </span>
      ) : null}
      {tag ? (
        <p className="card-tag">
          <Rich text={tag} />
        </p>
      ) : null}
      <h3>{title}</h3>
      <p className="card-muted">
        <Rich text={text} />
      </p>
    </article>
  );
}

export default async function Home({ params }: Props) {
  const lang = asLocale((await params).lang);
  const t = getDict(lang).home;
  const families = scenarioFamilies(lang);
  return (
    <>
      <section className="hero">
        <div className="hero-bg" aria-hidden="true">
          <span className="blob blob-a" />
          <span className="blob blob-b" />
          <svg className="doodle" viewBox="0 0 400 400" fill="none">
            <path d="M40 300c40-90 120-140 210-120s120-60 110-140" />
            <path d="M300 330l14 14M314 330l-14 14" />
            <circle cx="70" cy="90" r="9" />
            <path d="M340 230c6-10 16-10 22 0s16 10 22 0" />
          </svg>
        </div>
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <HeroTitle title={t.title} accent={t.titleAccent} />
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
          <div className="hero-chat">
            <Conversation t={t.demo} />
            <p className="chat-aside">
              <svg viewBox="0 0 60 40" fill="none" aria-hidden="true">
                <path d="M4 34C14 14 30 6 52 8M44 2l9 6-8 8" />
              </svg>
              {t.aside}
            </p>
          </div>
        </div>
      </section>

      <section className="section alt" aria-labelledby="benefits">
        <div className="container">
          <div className="section-head">
            <h2 id="benefits">{t.benefitsTitle}</h2>
          </div>
          <div className="grid grid-4">
            {t.benefits.map((b, i) => (
              <VoiceCard key={b.title} icon={benefitIcons[i] ?? 'plan'} {...b} />
            ))}
          </div>
        </div>
      </section>

      <section className="section band" aria-labelledby="how">
        <div className="container">
          <div className="section-head">
            <h2 id="how">{t.howTitle}</h2>
          </div>
          <ol className="flow">
            {t.how.map((s, i) => (
              <li className="flow-step" key={s.title}>
                <span className="flow-n" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="card-tag">{s.tag}</p>
                <h3>{s.title}</h3>
                <p>
                  <Rich text={s.text} />
                </p>
              </li>
            ))}
          </ol>
          <div className="actions">
            <Link className="btn btn-primary btn-big" href={href(lang, 'install')}>
              {t.startCta} <Arrow />
            </Link>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="scen">
        <div className="container">
          <div className="section-head">
            <h2 id="scen">{t.scenariosTitle}</h2>
            <p className="lead">{t.scenariosText}</p>
          </div>
          <div className="grid grid-3">
            {families.map((f) => (
              <Link key={f.id} href={href(lang, 'scenarios', f.id)} className="card voice family-card">
                <span className="ico">
                  <FamilyIcon name={f.icon} />
                </span>
                <span className="card-tag">{f.label}</span>
                <h3 className="family-quip">{f.quip}</h3>
                <span className="card-muted family-list">
                  {f.scenarios
                    .slice(0, 3)
                    .map((s) => s.title)
                    .join(' · ')}
                  {f.scenarios.length > 3 ? ' …' : ''}
                </span>
                <Arrow className="card-arrow" />
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

      <section className="section alt" aria-labelledby="trust">
        <div className="container">
          <div className="section-head">
            <h2 id="trust" className="with-icon">
              <Shield width={34} height={34} /> {t.trustTitle}
            </h2>
            <p className="lead">{t.trustLead}</p>
          </div>
          <ol className="trust">
            {t.trust.map((item, i) => (
              <li className="card voice" key={item.title}>
                <span className="lock-n" aria-hidden="true">
                  {i + 1}
                </span>
                {item.tag ? (
                  <p className="card-tag">
                    <Rich text={item.tag} />
                  </p>
                ) : null}
                <h3>{item.title}</h3>
                <p className="card-muted">
                  <Rich text={item.text} />
                </p>
              </li>
            ))}
          </ol>
          <div className="actions">
            <Link className="btn btn-ghost" href={href(lang, 'security')}>
              {t.trustCta} <Arrow />
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
