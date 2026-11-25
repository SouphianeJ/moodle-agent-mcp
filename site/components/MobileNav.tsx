'use client';

import { useRef } from 'react';
import { MenuIcon } from './Icons';
import { NavLinks, type NavItem } from './NavLinks';

/** The menu of small screens: a disclosure that closes once a link is followed or Escape is pressed. */
export function MobileNav({ label, items }: { label: string; items: NavItem[] }) {
  const ref = useRef<HTMLDetailsElement>(null);
  const close = () => ref.current?.removeAttribute('open');
  return (
    <details
      className="mobile-nav"
      ref={ref}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          close();
          ref.current?.querySelector('summary')?.focus();
        }
      }}
    >
      <summary className="icon-btn" aria-label={label} title={label}>
        <MenuIcon />
      </summary>
      <nav className="mobile-panel" aria-label={label} onClick={close}>
        <NavLinks items={items} />
      </nav>
    </details>
  );
}
