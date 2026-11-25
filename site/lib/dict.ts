import en from '@/content/en';
import fr from '@/content/fr';
import type { Dict } from '@/content/types';
import type { Locale } from './i18n';

const dicts: Record<Locale, Dict> = { fr, en };

export function getDict(lang: Locale): Dict {
  return dicts[lang];
}
