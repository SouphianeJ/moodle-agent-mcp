import type { Metadata } from 'next';
import Link from 'next/link';

// The site lives under /fr/ and /en/; the web server redirects / to /fr/. This page is the fallback without that rule.
export const metadata: Metadata = {
  title: 'Moodle Agent MCP',
  robots: { index: false },
};

export default function RootPage() {
  return (
    <p>
      <meta httpEquiv="refresh" content="0; url=/fr/" />
      <Link href="/fr/" hrefLang="fr">
        Moodle Agent MCP — français
      </Link>{' '}
      ·{' '}
      <Link href="/en/" hrefLang="en">
        English
      </Link>
    </p>
  );
}
