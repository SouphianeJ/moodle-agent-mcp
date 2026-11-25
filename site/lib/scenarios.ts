import data from '@/data/scenarios.json';
import fr from '@/data/scenarios.fr.json';
import families from '@/data/families.json';
import type { Locale } from './i18n';

export type Scenario = {
  slug: string;
  family: string;
  title: string;
  summary: string;
  risk: string;
};

/** `quip` is what a teacher says before reaching for the family: the human voice of its card. */
export type Family = { id: string; label: string; quip: string; icon: string; scenarios: Scenario[] };

type FamilyLabels = Record<string, { fr: string; en: string; icon: string; quip: { fr: string; en: string } }>;
const translations = fr as unknown as Record<string, [string, string]>;

/** The scenarios of the plugin (generated list), grouped by family, in the order of the families file. */
export function scenarioFamilies(lang: Locale): Family[] {
  const labels = families as FamilyLabels;
  return Object.entries(labels).map(([id, label]) => ({
    id,
    label: label[lang],
    quip: label.quip[lang],
    icon: label.icon,
    scenarios: data.scenarios
      .filter((s) => s.family === id)
      .map((s) => {
        const t = lang === 'fr' ? translations[s.slug] : undefined;
        return { slug: s.slug, family: s.family, risk: s.risk, title: t?.[0] ?? s.title, summary: t?.[1] ?? s.summary };
      }),
  }));
}

export const scenarioCount: number = data.count;
export const scenarioSource: string = data.source;
