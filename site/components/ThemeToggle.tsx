'use client';

import { Moon, Sun } from './Icons';

/** Switches between light and dark; the choice is kept in localStorage (no cookie), and the system choice applies by default. */
export function ThemeToggle({ label }: { label: string }) {
  const toggle = () => {
    const root = document.documentElement;
    const current = root.dataset.theme ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* storage blocked: the choice lasts for this page only */
    }
  };
  return (
    <button type="button" className="icon-btn theme-btn" onClick={toggle} aria-label={label} title={label}>
      <Sun className="sun" />
      <Moon className="moon" />
    </button>
  );
}

/** Inline script run before the first paint, so that a stored theme does not flash. */
export const themeScript =
  "try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light')document.documentElement.dataset.theme=t}catch(e){}";
