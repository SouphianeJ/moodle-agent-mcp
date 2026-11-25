import { Rich } from '@/components/Rich';
import { getDict } from '@/lib/dict';
import { asLocale } from '@/lib/i18n';
import { pageMeta } from '@/lib/meta';

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props) {
  const lang = asLocale((await params).lang);
  const t = getDict(lang).faq;
  return pageMeta(lang, 'faq', t.title, t.lead);
}

export default async function FaqPage({ params }: Props) {
  const lang = asLocale((await params).lang);
  const t = getDict(lang).faq;
  return (
    <>
      <section className="page-head">
        <div className="container">
          <h1>{t.title}</h1>
          <p className="lead">{t.lead}</p>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container faq">
          {t.items.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>
                <Rich text={item.a} />
              </p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
