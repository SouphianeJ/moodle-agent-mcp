import Link from 'next/link';
import type { Dict } from '@/content/types';
import { href, type Locale } from '@/lib/i18n';
import { Logo } from './Icons';
import { LangSwitch } from './LangSwitch';
import { MobileNav } from './MobileNav';
import { NavLinks, type NavItem } from './NavLinks';
import { ThemeToggle } from './ThemeToggle';

export function Header({ lang, t }: { lang: Locale; t: Dict['nav'] }) {
  const items: NavItem[] = [
    { href: href(lang, 'examples'), label: t.examples },
    { href: href(lang, 'scenarios'), label: t.scenarios },
    { href: href(lang, 'security'), label: t.security },
    { href: href(lang, 'install'), label: t.install },
    { href: href(lang, 'skills'), label: t.skills },
    { href: href(lang, 'model-tests'), label: t.tests },
    { href: href(lang, 'faq'), label: t.faq },
    { href: href(lang, 'plugins'), label: t.plugins },
  ];
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href={href(lang)} className="brand" aria-label={`Moodle Agent MCP, ${t.home}`}>
          <Logo />
          <span>Moodle Agent MCP</span>
        </Link>
        <nav className="nav" aria-label={t.menu}>
          <NavLinks items={items} />
        </nav>
        <div className="tools">
          <LangSwitch lang={lang} text={t.otherLang} label={t.otherLangLabel} />
          <ThemeToggle label={t.theme} />
          <MobileNav label={t.menu} items={[{ href: href(lang), label: t.home }, ...items]} />
        </div>
      </div>
    </header>
  );
}
