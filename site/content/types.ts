/**
 * The text of the site, one object per language. Inline markup in strings: `code` and **bold** (see components/Rich).
 */
/** A card: `title` is what one says to oneself (human voice), `tag` the plain name of the feature, `text` the exact explanation. */
export type Step = { title: string; text: string; tag?: string };
export type Section = { id: string; title: string; text?: string; points?: string[] };

export type Example = {
  id: string;
  persona: string;
  scenario: string;
  request: string;
  plan: string[];
  result: string[];
  guard: string;
};

export type Assistant = { name: string; steps: string[]; note?: string };

export type SkillPlatform = {
  name: string;
  status: string;
  steps: string[];
  sources: { label: string; url: string }[];
};

export type Dict = {
  meta: { title: string; description: string };
  nav: {
    skip: string;
    menu: string;
    close: string;
    home: string;
    examples: string;
    scenarios: string;
    security: string;
    install: string;
    skills: string;
    faq: string;
    legal: string;
    otherLang: string;
    otherLangLabel: string;
    theme: string;
    themeLight: string;
    themeDark: string;
  };
  home: {
    eyebrow: string;
    title: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    facts: { value: string; label: string }[];
    benefitsTitle: string;
    benefits: Step[];
    titleAccent: string;
    aside: string;
    demo: {
      title: string;
      lead: string;
      who: string;
      assistant: string;
      request: string;
      planTitle: string;
      plan: string[];
      confirm: string;
      resultTitle: string;
      result: string[];
      replay: string;
      illustrative: string;
    };
    howTitle: string;
    how: Step[];
    scenariosTitle: string;
    scenariosText: string;
    scenariosCta: string;
    trustLead: string;
    trustTitle: string;
    trust: Step[];
    trustCta: string;
    startTitle: string;
    start: Step[];
    startCta: string;
  };
  examples: { title: string; lead: string; disclaimer: string; request: string; plan: string; result: string; guard: string; scenario: string };
  scenarios: {
    title: string;
    lead: string;
    generated: string;
    filterLabel: string;
    all: string;
    risk: Record<string, string>;
    riskLegend: string;
    skill: string;
  };
  security: { title: string; lead: string; sections: Section[]; disclaimer: string };
  install: {
    title: string;
    lead: string;
    toc: string;
    adminTitle: string;
    adminSteps: Step[];
    download: string;
    modesTitle: string;
    modes: Section[];
    apikeysTitle: string;
    apikeysText: string;
    apikeysPoints: string[];
    apikeysSync: string;
    gateTitle: string;
    gateText: string;
    gatePoints: string[];
    familiesTitle: string;
    familiesText: string;
    connectTitle: string;
    connectText: string;
    assistants: Assistant[];
    firstTry: string;
    centralTitle: string;
    centralText: string;
    centralCta: string;
    marketTitle: string;
    marketText: string;
    marketSoon: string;
    marketCta: string;
  };
  skills: {
    title: string;
    lead: string;
    listTitle: string;
    download: string;
    scenarios: string;
    platformsTitle: string;
    platformsLead: string;
    syncTitle: string;
    syncText: string;
    licence: string;
    descriptions: Record<string, string>;
  };
  missing: { kicker: string; title: string; lead: string; back: string };
  faq: { title: string; lead: string; items: { q: string; a: string }[] };
  legal: { title: string; description: string; sections: Section[] };
  footer: { tagline: string; licence: string; contact: string; source: string; noCookies: string };
};
