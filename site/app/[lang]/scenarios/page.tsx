import { ScenarioBrowser } from '@/components/ScenarioBrowser';
import { getDict } from '@/lib/dict';
import { asLocale } from '@/lib/i18n';
import { pageMeta } from '@/lib/meta';
import { scenarioCount, scenarioFamilies, scenarioSource } from '@/lib/scenarios';

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  const lang = asLocale((await params).lang);
  const t = getDict(lang).scenarios;
  return pageMeta(lang, 'scenarios', t.title.replace('41', String(scenarioCount)), t.lead);
}

export default async function ScenariosPage({ params }: Props) {
  const lang = asLocale((await params).lang);
  const t = getDict(lang).scenarios;
  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1>{t.title.replace('41', String(scenarioCount))}</h1>
          <p className="lead">{t.lead}</p>
          <p style={{ color: 'var(--muted)', fontSize: '0.92rem' }}>
            {t.generated.replace('{source}', scenarioSource)} {t.riskLegend}
          </p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <ScenarioBrowser families={scenarioFamilies(lang)} labels={{ filterLabel: t.filterLabel, all: t.all, risk: t.risk, skill: t.skill }} />
        </div>
      </section>
    </>
  );
}
