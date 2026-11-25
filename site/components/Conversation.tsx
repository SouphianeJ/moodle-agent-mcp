'use client';

import { useState } from 'react';
import type { Dict } from '@/content/types';
import { Rich } from './Rich';

/**
 * The conversation of the home page: a clear request done and checked, then a vague one answered by a question. Shown
 * whole from the first render; the replay button plays it message by message (static under prefers-reduced-motion).
 */
export function Conversation({ t }: { t: Dict['home']['demo'] }) {
  const [run, setRun] = useState(0);
  return (
    <figure className="chat" style={{ margin: 0 }} aria-label={t.title}>
      <div className="chat-top">
        <span className="chat-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <button type="button" className="replay" onClick={() => setRun((n) => n + 1)}>
          ↻ {t.replay}
        </button>
      </div>
      <div className={run > 0 ? 'anim playing' : 'anim'} key={run}>
        <div className="msg user">
          <span className="who">{t.who}</span>
          {t.request}
        </div>
        <div className="msg bot result">
          <span className="who">{t.assistant}</span>
          <strong className="label">✓ {t.doneTitle}</strong>
          <ul>
            {t.done.map((line) => (
              <li key={line}>
                <Rich text={line} />
              </li>
            ))}
          </ul>
        </div>
        <div className="msg user">
          <span className="who">{t.who}</span>
          {t.followUp}
        </div>
        <div className="msg bot">
          <span className="who">{t.assistant}</span>
          {t.question}
        </div>
      </div>
      <figcaption className="chat-note">{t.illustrative}</figcaption>
    </figure>
  );
}
