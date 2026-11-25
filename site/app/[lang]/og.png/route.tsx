import { ImageResponse } from 'next/og';
import { getDict } from '@/lib/dict';
import { asLocale, locales } from '@/lib/i18n';

// The sharing image (og:image) of every page, /<lang>/og.png, drawn at build time from the text of the home page: Next
// renders this JSX to PNG with its bundled renderer and font, no external service. One image per language (lib/meta.ts).
export const dynamic = 'force-static';
const size = { width: 1200, height: 630 };

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ lang: string }> }) {
  const t = getDict(asLocale((await params).lang)).home;
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#fbfaf7',
          color: '#17191c',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <svg width="72" height="72" viewBox="0 0 32 32">
            <rect width="32" height="32" rx="9" fill="#0d6b62" />
            <path d="M8 22V12.5l5 5 5-5V22" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="23.5" cy="11" r="2.6" fill="#f0a35c" />
          </svg>
          <span style={{ fontSize: 36, fontWeight: 600 }}>Moodle Agent MCP</span>
        </div>
        <div style={{ display: 'flex', fontSize: 64, fontWeight: 700, lineHeight: 1.12, letterSpacing: '-0.02em', maxWidth: 1000 }}>
          {t.title}
        </div>
        <div style={{ display: 'flex', gap: 48, fontSize: 28, color: '#0a5a52' }}>
          {t.facts.map((f) => (
            <span key={f.label} style={{ display: 'flex', gap: 10 }}>
              <b>{f.value}</b> {f.label}
            </span>
          ))}
        </div>
      </div>
    ),
    { ...size, headers: { 'Content-Type': 'image/png' } },
  );
}
