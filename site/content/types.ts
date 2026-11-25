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

/** A table of results: the head row, then one row per line; the first cell of a row is its header. */
export type Table = { head: string[]; rows: string[][] };

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
    tests: string;
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
      doneTitle: string;
      done: string[];
      followUp: string;
      question: string;
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
    testsLine: string;
    testsCta: string;
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
    otherMode: string;
    apikeysTitle: string;
    apikeysText: string;
    apikeysPoints: string[];
    gateTitle: string;
    gateText: string;
    gatePoints: string[];
    gateFigure: {
      caption: string;
      roles: string;
      read: string;
      readWrite: string;
      roleNames: string[];
      add: string;
      search: string;
      level: string;
      button: string;
      cohortSoon: string;
    };
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
    advancedTitle: string;
    advanced: Section[];
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
  tests: {
    title: string;
    lead: string;
    when: string;
    verdictTitle: string;
    verdict: Step[];
    methodTitle: string;
    method: string[];
    e2eTitle: string;
    e2eLead: string;
    e2e: Table;
    e2eNotes: string[];
    routeTitle: string;
    routeLead: string;
    route: Table;
    callsTitle: string;
    callsLead: string;
    calls: Table;
    changedTitle: string;
    changedLead: string;
    changed: string[];
    limitsTitle: string;
    limits: string[];
    othersTitle: string;
    othersText: string;
  };
  missing: { kicker: string; title: string; lead: string; back: string };
  faq: { title: string; lead: string; items: { q: string; a: string }[] };
  legal: { title: string; description: string; sections: Section[] };
  footer: { tagline: string; licence: string; contact: string; source: string; noCookies: string };
};
