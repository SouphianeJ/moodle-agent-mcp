'use client';

import { useState } from 'react';
import type { Family } from '@/lib/scenarios';
import { FamilyIcon } from './Icons';

type Labels = { filterLabel: string; all: string; risk: Record<string, string>; skill: string };

/** The scenarios grouped by family, with a filter. Without JavaScript every family is shown. */
export function ScenarioBrowser({ families, labels }: { families: Family[]; labels: Labels }) {
  const [shown, setShown] = useState<string>('all');
  return (
    <>
      <ul className="filters" aria-label={labels.filterLabel}>
        <li>
          <button type="button" className="chip" aria-pressed={shown === 'all'} onClick={() => setShown('all')}>
            {labels.all}
          </button>
        </li>
        {families.map((f) => (
          <li key={f.id}>
            <button type="button" className="chip" aria-pressed={shown === f.id} onClick={() => setShown(f.id)}>
              {f.label} <span aria-hidden="true">· {f.scenarios.length}</span>
            </button>
          </li>
        ))}
      </ul>
      {families
        .filter((f) => shown === 'all' || shown === f.id)
        .map((f) => (
          <section key={f.id} className="family" id={f.id} aria-labelledby={`h-${f.id}`}>
            <div className="family-head">
              <span className="ico">
                <FamilyIcon name={f.icon} />
              </span>
              <div>
                <h2 id={`h-${f.id}`}>{f.label}</h2>
                <p className="family-voice">{f.quip}</p>
                <span className="count">
                  {labels.skill} <code>{f.id}</code> · {f.scenarios.length}
                </span>
              </div>
            </div>
            <ul className="scenario-list">
              {f.scenarios.map((s) => (
                <li key={s.slug} className="scenario" id={s.slug}>
                  <h3>{s.title}</h3>
                  <p>{s.summary}</p>
                  <div className="meta">
                    <code>{s.slug}</code>
                    <span className={`tag risk-${s.risk}`}>{labels.risk[s.risk] ?? s.risk}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
    </>
  );
}
