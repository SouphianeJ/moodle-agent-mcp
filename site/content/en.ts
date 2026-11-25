import type { Dict } from './types';

const en: Dict = {
  meta: {
    title: 'Moodle Agent, at your service · Moodle Agent MCP',
    description:
      "A free Moodle plugin that lets your AI assistant (Claude, ChatGPT, Mistral…) build, grade and follow your courses, with the teacher's rights and never more.",
  },
  nav: {
    skip: 'Skip to content',
    menu: 'Menu',
    close: 'Close the menu',
    home: 'Home',
    examples: 'Examples',
    scenarios: 'Scenarios',
    security: 'Security',
    install: 'Install',
    skills: 'Skills',
    tests: 'Model tests',
    faq: 'FAQ',
    legal: 'Legal notice',
    otherLang: 'FR',
    otherLangLabel: 'Lire cette page en français',
    theme: 'Switch theme',
    themeLight: 'Light theme',
    themeDark: 'Dark theme',
  },
  home: {
    eyebrow: 'Free Moodle plugin · GPL v3',
    title: 'Moodle Agent, at your service.',
    titleAccent: 'at your service',
    aside: 'Clear: it acts, then checks. Vague: it asks.',
    lead:
      'Ask in plain words for what you would do by hand: build a course, grade submissions, remind a group. When the request is clear, the assistant acts with **your** Moodle rights and nothing more, then checks the result; when it is not, it asks you.',
    ctaPrimary: 'See how to install it',
    ctaSecondary: 'Browse examples',
    facts: [
      { value: '41', label: 'guided scenarios' },
      { value: '542', label: 'Moodle tools' },
      { value: '4.1 – 5.3', label: 'Moodle versions' },
    ],
    benefitsTitle: 'What you gain',
    benefits: [
      {
        tag: 'Time for teaching',
        title: 'The thinking and the coffee for me, the to-do list for you.',
        text: 'Hand over the long, repetitive tasks and keep your time for teaching, for varying your activities, for going further. A four-week course, a quiz with its questions, a weighted gradebook: described in one sentence, set up in your own Moodle.',
      },
      {
        tag: 'A plan if you want one, a check where it matters',
        title: 'Hmm… yes, that looks about right. Go for it.',
        text: 'Ask, and it shows its plan first. For what cannot be taken back (deletions, messages, released grades), the server requires a consent ticket: the assistant reviews the preview it returns and only asks you when it differs from your request. Your institution can also require your click in Moodle.',
      },
      {
        tag: 'Your rights, no more',
        title: 'Same keys as me. And no, not the master key.',
        text: 'The assistant acts on behalf of an identified person, with their Moodle permissions. What you cannot do by hand, it cannot do either.',
      },
      {
        tag: 'A way back',
        title: 'Actually… you know what? I changed my mind.',
        text: 'Every write is logged; many can be undone with one word. Course snapshots cover wider changes.',
      },
    ],
    demo: {
      title: 'A clear request, a vague one',
      lead: 'This is how a typical conversation goes. The assistant follows the plan of the scenario that the plugin gives it.',
      who: 'Teacher',
      assistant: 'Assistant',
      request: 'In my course "Project management", create the assignment "Progress report" in section 3, file submission, due on 12 March at 23:59.',
      doneTitle: 'Done, and checked',
      done: [
        'Course and sections read (`course_get`, `course_sections_list`).',
        'Assignment "Progress report" created in section 3: file submission, due on 12 March at 23:59.',
        '`activity_list` confirms it; the operation can be undone.',
      ],
      followUp: 'And chase the late ones.',
      question: 'One thing before I write anything: everyone with no submission by the evening of 12 March, or just one group?',
      replay: 'Play the conversation',
      illustrative: 'Illustrative example, no real data.',
    },
    howTitle: 'How it works',
    how: [
      {
        tag: 'Your institution installs the plugin',
        title: 'We install it… and double-lock the door.',
        text: 'A zip to upload in *Site administration > Plugins*, closed by default. The administrator chooses the OAuth mode, opens the access gate to a role (read-only to start) and the useful tool families.',
      },
      {
        tag: 'You connect your assistant',
        title: 'One address to paste, one click. Even on a Monday morning.',
        text: 'Claude, ChatGPT, Mistral Le Chat or any MCP client: paste the connector address, authorize it in Moodle, as for any app. First try: "What can you do on this Moodle site?"',
      },
      {
        tag: 'You ask, it acts, it checks',
        title: 'Do it. Then prove it.',
        text: 'The assistant picks the right scenario. Clear request: it acts step by step, then checks and quotes what Moodle returns. Vague request: it asks one short question. It shows its plan first if you ask for it.',
      },
    ],
    scenariosTitle: '41 scenarios for recurring tasks',
    scenariosText:
      'Build, assess, grade, follow, communicate, maintain: each scenario tells the assistant what to ask, in which order to act, which guards to respect and how to prove it is done.',
    scenariosCta: 'See the 41 scenarios',
    trustTitle: 'Built for trust',
    trustLead: 'Five locks that add up. None of them opens by itself.',
    trust: [
      { tag: "Moodle's own permissions", title: "It can't do anything I couldn't. Not even sneakily.", text: "Moodle's own permissions on every call." },
      {
        tag: 'The `_EDITABLE` marker',
        title: 'Hands off that course. Unless I hand it over.',
        text: 'A course accepts AI writes only once a person opened it (the `_EDITABLE` marker).',
      },
      {
        tag: 'Access gate',
        title: 'Closed until further notice. Mine.',
        text: 'Access gate closed by default, by role or by person, read or read and write.',
      },
      {
        tag: 'Consent ticket',
        title: 'A sent message never comes back. So we read it first.',
        text: 'Server consent ticket for what cannot be taken back: messages, deletions, released grades. The assistant reviews the preview; your click in Moodle if your institution requires it.',
      },
      { tag: 'Log and stop switch', title: "Who did what, and when? It's all written down.", text: 'Every write logged, undo, emergency switch.' },
    ],
    trustCta: 'Read the security page',
    testsLine: 'Which model should you pick? We measured Claude Haiku, Sonnet and Opus on real Moodle tasks.',
    testsCta: 'See the model tests',
    startCta: 'Installation guide',
  },
  examples: {
    title: 'Example requests',
    lead:
      "Ten requests from teachers, training managers and administrators, with the assistant's typical answer. Each follows a real scenario of the plugin: same steps, same guards.",
    disclaimer:
      'Illustrative, synthetic examples: courses, people and figures are made up. Real answers depend on your site, your rights and your assistant.',
    request: 'Request',
    plan: 'What the assistant does',
    result: 'Typical answer',
    guard: 'Guard',
    scenario: 'Scenario',
  },
  scenarios: {
    title: 'The 41 scenarios',
    lead:
      'A scenario is a plan that the plugin gives the assistant: the goal, the inputs to ask for, the steps (read, act, check), the guards and the success criterion. The assistant picks the right scenario from your request.',
    generated: 'List generated from the catalog of the plugin ({source}).',
    filterLabel: 'Show family',
    all: 'All',
    risk: { none: 'read-only', low: 'low risk', medium: 'medium risk', high: 'sensitive' },
    riskLegend: 'The level shows how careful the plan is: "sensitive" means a mandatory preview and explicit agreement before any write.',
    skill: 'Skill',
  },
  security: {
    title: 'Security and trust',
    lead:
      "The plugin adds to Moodle an entry point for an AI assistant chosen by your institution. The assistant acts on behalf of an identified person, with their Moodle rights and never more. The plugin itself calls no AI.",
    sections: [
      {
        id: 'rights',
        title: "Moodle's own permissions",
        text:
          'Every call runs with the Moodle capabilities of the signed-in person, in the context of the targeted course or activity. Separate groups, roles, overrides: everything Moodle applies by hand applies to the assistant.',
      },
      {
        id: 'editable',
        title: 'The `_EDITABLE` barrier',
        text:
          'A course accepts AI writes only when its short name contains `_EDITABLE`. Only a person can add it, in the course settings; the AI cannot open a course for itself. Reads stay possible wherever the person may read.',
      },
      {
        id: 'gate',
        title: 'The access gate',
        text:
          'Closed at installation, administrators included. The administrator opens it by role or person by person, at the read or the read-and-write level. A removal takes effect at the next request.',
      },
      {
        id: 'families',
        title: 'Tool families',
        text:
          'Tools are grouped in families (course content, grading, enrolments, site accounts…). Only the course content family is on by default; every other family is opened explicitly.',
      },
      {
        id: 'consent',
        title: 'The consent ticket',
        text:
          'What cannot be taken back (a deletion, a sent message, released grades) does not run on the first call: the server answers with a preview and a single-use ticket. The assistant reviews the preview itself and only asks you when it differs from your request. This is the default “ticket” mode: the assistant reviews the preview itself. In “ticket and click” mode, the writes that reach people (a message, an announcement, released grades, a cleanup request) also wait for the person’s click in Moodle.',
      },
      {
        id: 'journal',
        title: 'Log and undo',
        text:
          'Every write is logged (secrets and tokens masked), 90 days by default. Many writes record their inverse: the undo tool reverts them with the rights of the person. Grades go through drafts first.',
      },
      {
        id: 'stop',
        title: 'Emergency stop',
        text:
          'One checkbox cuts the connector for everyone without touching other settings. More finely: remove a person from the gate, revoke their connections, close a family, limit requests per minute.',
      },
      {
        id: 'gdpr',
        title: 'GDPR',
        text:
          "The plugin declares its tables and external locations to Moodle's privacy API: Moodle's tool exports and deletes the data of a person. Moodle data stays with your host; what the assistant reads is processed by its provider, under the plan your institution subscribed to.",
        points: [
          'Your institution remains the controller; the AI provider is in principle its processor (DPA).',
          'Minimisation settings: closed families, read level, replies not kept, adjustable retention.',
          'Up to you, with your DPO: records of processing, information of the people, impact assessment if the AI helps to assess.',
        ],
      },
      {
        id: 'ai-notice',
        title: 'AI notice (optional)',
        text:
          'A setting adds a short notice ("Prepared with the help of an AI assistant") to what the assistant publishes for others: announcements, messages, forum posts, grading comments. It is off by default; the institution decides.',
      },
      {
        id: 'hosting',
        title: 'Hosting',
        text:
          'The plugin installs in your Moodle: it has no server of its own to copy your data to. This site and the central registration service are hosted in the European Union, in France (OVH). The central service only receives public information about the site (address, name, plugin version), never data about a person.',
      },
    ],
    disclaimer:
      'This describes how the software works; it is not legal advice. Whether your use complies (GDPR, EU AI Act) is for your DPO and your counsel to confirm.',
  },
  install: {
    title: 'Install and connect',
    lead:
      'For the Moodle administrator: install the plugin, choose the authentication mode, open the access gate, then connect the assistants. The plugin installs closed: nothing happens until these steps are done.',
    toc: 'On this page',
    adminTitle: 'Install the plugin',
    adminSteps: [
      {
        title: 'Requirements',
        text: 'Moodle 4.1 to 5.3, PHP 8.1 or later, site served over https. Moodle 4.1 no longer gets security fixes since 8 December 2025: prefer 4.5 LTS or 5.x. Take a backup, as before any plugin installation.',
      },
      {
        title: 'Upload the zip',
        text:
          '*Site administration > Plugins > Install plugins*, upload the zip (about 3 MB) and follow the screens. On the server: unzip into `local/mcpcourse` (`public/local/mcpcourse` from Moodle 5.1).',
      },
      {
        title: 'Check',
        text: 'The plugin installs closed: gateway mode without secrets, empty access gate, only the course content family on, `_EDITABLE` marker required.',
      },
    ],
    download: 'Get the plugin: coming soon on Moodle Marketplace; until then, on request, with its SHA-256 checksum:',
    modesTitle: 'Choose the authentication mode',
    modes: [
      {
        id: 'oauth',
        title: 'Self-hosted OAuth (recommended)',
        text:
          'Moodle becomes its own OAuth 2.1 authorization server. Each person authorizes their assistant in their browser, signed in to Moodle as usual (SSO included). No password or secret is given to the assistant.',
        points: [
          'Add the two `/.well-known/…` rules that the page "Check the OAuth configuration" computes for Apache, Nginx or Caddy.',
          'Run the check: every line must be green, then choose the OAuth mode.',
          'Host that does not accept these rules: link the site to the discovery relay (central registration, below).',
        ],
      },
      {
        id: 'gateway',
        title: 'Gateway',
        text:
          'An external gateway authenticates the person and signs their identity on every request (HMAC-SHA256, single-use nonce). For institutions that already run such infrastructure; the gateway is not shipped with the plugin.',
      },
    ],
    apikeysTitle: 'Personal API keys',
    apikeysText:
      'For a client that speaks neither OAuth nor through a gateway (a script, a command-line tool), each person can create their own keys, on top of the chosen mode. The setting “Accept API keys” is off by default.',
    apikeysPoints: [
      'Each person creates their own on “My API keys” (editing teachers and managers by default): a name, a scope, read only or read and write, and a mandatory expiry (90 days by default, 365 at most). The key is shown once.',
      'The same barriers as everything else: the key acts for its owner, under the access gate and its level, the families, `_EDITABLE`, the Moodle permissions, the log and the emergency cut-off.',
      'People revoke their own keys; the administrator sees and revokes every key of the site. No key is ever created for someone else.',
    ],
    apikeysSync:
      'An institutional sync with no person behind it: no site key, but a dedicated Moodle account with a narrow role, let through the gate by name at the read level, which creates its own read-only key (administrator guide, §3.7).',
    gateTitle: 'Open the access gate',
    gateText:
      'The gate decides who may use the connector, on every request. Two levels: read, or read and write. A level only restricts: Moodle permissions always apply on top.',
    gatePoints: [
      'By role: for instance tick "Teacher" at the read level to start.',
      'By person: the page "Users allowed" adds volunteers one by one, each with their level.',
      'Then open the useful families (grading, enrolments, communication…), and only those.',
    ],
    familiesTitle: 'Tool families',
    familiesText:
      'Only `course_activity_work` (course content) is on by default. The others — grading, grade release, enrolments, groups, cohorts, calendar and communication, completion, competencies, site accounts, reports, storage, certificates — are opened one by one in the settings.',
    connectTitle: 'Connect the assistants',
    connectText:
      'The address to give is always `https://<your Moodle>/local/mcpcourse/mcp.php`. In OAuth mode the assistant discovers the rest and opens a Moodle page where the person signs in and clicks **Allow**. Which plans allow a custom MCP connector depends on the provider and the subscription.',
    assistants: [
      {
        name: 'Claude (web and desktop)',
        steps: ['Connector settings: add a custom connector.', 'Paste the connector address, then sign in to Moodle and allow.'],
      },
      {
        name: 'ChatGPT',
        steps: ['Add a custom MCP connector (depending on your plan, in developer mode).', 'Paste the address, choose OAuth, then allow in Moodle.'],
      },
      {
        name: 'Mistral Le Chat',
        steps: ['Connectors: add a custom MCP connector with the address and OAuth authentication.', 'Allow in Moodle.'],
        note: 'If the client registers through dynamic client registration (DCR), the administrator ticks "Accept dynamic client registration".',
      },
      {
        name: 'Claude Code',
        steps: ['`claude mcp add --transport http moodle https://<your Moodle>/local/mcpcourse/mcp.php`', 'Then `/mcp` in Claude Code: the browser opens the Moodle authorization page.'],
      },
      {
        name: 'Other MCP clients',
        steps: [
          'The plugin follows the MCP specification (Streamable HTTP, OAuth 2.1).',
          'A client that identifies itself neither by a metadata document nor by dynamic registration can be declared by the administrator on the "OAuth clients" page.',
        ],
      },
    ],
    firstTry: 'Suggested first try: "What can you do on this Moodle site?" The assistant describes your role, your access level and the open families.',
    centralTitle: 'Central registration',
    centralText:
      "Your host does not let you add the `/.well-known/…` rules? The central service publishes the public OAuth discovery document for your site. The link is made from the plugin's \"Link to the discovery relay\" page, with a button or a manual registration. Only public information about the site goes through it; sign-ins, tokens and data go straight from the assistant to your Moodle.",
    centralCta: 'Open the central registration',
    marketTitle: 'Moodle Marketplace',
    marketText: 'The listing of the plugin on Moodle Marketplace is being prepared. Until then, the plugin is provided on request.',
    marketSoon: 'Coming soon',
    marketCta: 'See the listing',
  },
  skills: {
    title: 'Skills for your assistant',
    lead:
      'Skills are instruction sheets that the assistant loads when a task calls for them. The six skills of the plugin carry, for each family of tasks, the plans of the scenarios: steps, minimal calls, guards and final check. They complement the connector; they do not replace it.',
    listTitle: 'The six skills',
    download: 'Download the zip',
    scenarios: 'scenarios',
    platformsTitle: 'Install for your assistant',
    platformsLead:
      'The skills follow the open Agent Skills format: one folder per skill, a `SKILL.md` file with a `name` and `description` header. Here is what each platform allows today, according to its documentation.',
    syncTitle: 'One source',
    syncText:
      'The skills are generated by the plugin from its scenario catalog; this repository publishes them as they are (`scripts/sync-skills.sh`). Do not edit them by hand.',
    licence: 'Licence of the skills: GNU GPL v3 or later, like the plugin they come from.',
    descriptions: {
      'moodle-build-course-content': 'Build a course, publish resources, a lesson, a glossary, a wiki, a database, SCORM, H5P.',
      'moodle-create-assessment': 'Secure exam, practice quiz, assignment and gradebook.',
      'moodle-grade-student-work': 'Grade assignments, the open questions of a quiz, a peer workshop.',
      'moodle-follow-class': 'Activity, missing submissions, results, SCORM, plans, attendance, reports, logs, certificates.',
      'moodle-communicate-and-organize': 'Announcements, groups and extra time, enrolments, virtual classroom, opening a session.',
      'moodle-maintain-course': 'Next term, dates, reset, archive, categories, undo, audit, storage.',
    },
  },
  tests: {
    title: 'Model tests',
    lead:
      'Which AI model should drive your Moodle? We put real agents to work on a test Moodle and counted what they actually did, not what they said they did.',
    when: 'Tests from 20 to 24 November 2026, Moodle 5.3 bench, plugin versions 2.4 to 2.5.1. Models: Claude Haiku, Claude Sonnet, Claude Opus.',
    verdictTitle: 'In short',
    verdict: [
      {
        tag: 'Claude Sonnet · mid-range',
        title: 'The right pick for the job.',
        text: 'It does the whole job reliably: every step of three end-to-end scenarios out of five, 5/6 and 10/11 on the other two, the right scenario 37 times out of 37, no needless question, 96 to 97 % of calls right the first time.',
      },
      {
        tag: 'Claude Haiku · small and cheap',
        title: 'It copes, with someone keeping an eye on it.',
        text: 'It picks the scenario just as well (37/37) and gets a good share of the tasks done (5/7, 8/11), but needs more checking: 17 needless questions, 3 needed questions missed out of 11, partial steps, and it sometimes reports a success that did not happen.',
      },
      {
        tag: 'Claude Opus · the most capable',
        title: 'Excellent, just not needed here.',
        text: 'Opus adds little over Sonnet on these tasks: 7/7, 6/6 and 7/7 steps, 100 % of calls right. Sonnet does the whole job with about 15 % fewer tokens (measured on 20 November).',
      },
    ],
    methodTitle: 'How we measured',
    method: [
      'Real AI agents, fresh for each test, with a neutral instruction: they do not know what is being measured.',
      'A real test Moodle, filled with fictitious students created by a script.',
      "The verdict is read in the server log (the calls actually sent) and in the state of Moodle, never in the agent's own account: small models sometimes report a success that did not happen.",
      'For the fine measurements: blind draws, shuffled versions, an automatic grader tested beforehand, confidence intervals and exact tests.',
    ],
    e2eTitle: 'Real scenarios, end to end',
    e2eLead: "A teacher's request, the agent does all the work; we count the steps actually completed.",
    e2e: {
      head: ['Scenario', 'Sonnet', 'Opus', 'Haiku'],
      rows: [
        ['A · 10-question multiple-choice exam, extra time, grades out of 20, badge', '7/7', '7/7', 'partial'],
        ['B · Assignment with a rubric, PDF and DOCX submissions, grading', '5/5', '6/6', 'unusable that day'],
        ['C · Branching lesson and forum', '5/6', '—', 'partial'],
        ['D · Glossary, wiki, database, SCORM, H5P', '7/7', '7/7', '5/7'],
        ['E · Training offer in 11 steps', '10/11', '—', '8/11'],
      ],
    },
    e2eNotes: [
      'Opus on 20 November for A and B; the other runs of A to D on 21 November; E on 24 November (plugin 2.5.1-dev). "—": no run.',
      'Haiku on B: run unusable because of the bench preparation script, not the model.',
      'Haiku varies a lot from one run to the next and over-reports its success.',
    ],
    routeTitle: 'Understanding a short request',
    routeLead: '37 short requests in French, on 24 November, plugin 2.5.1: the model must pick the right scenario and ask only the useful questions.',
    route: {
      head: ['Measure', 'Haiku', 'Sonnet'],
      rows: [
        ['Right scenario picked', '37/37', '37/37'],
        ['Needless questions asked', '17', '0'],
        ['Needed questions missed (out of 11)', '3', '0'],
      ],
    },
    callsTitle: 'Writing a correct call the first time',
    callsLead: '1,350 calls on 10 heavy tools, from 20 to 22 November.',
    calls: {
      head: ['Model', 'Calls right the first time'],
      rows: [
        ['Opus', '100 %'],
        ['Sonnet', '96 to 97 %'],
        ['Haiku', '66 to 69 %; 87.6 % once readable dates were accepted'],
      ],
    },
    changedTitle: 'What the tests changed in the plugin',
    changedLead: 'The tests are also how the plugin gets fixed. A few examples:',
    changed: [
      'Readable dates (ISO 8601) accepted: Haiku gains 21 points (p < 0.0001).',
      'An unknown argument is refused with a suggestion and an example: Haiku gains 19 points after correction; no model sends the refused call back unchanged.',
      "Resolved preview (names, before → after) on irreversible writes that reach people: Sonnet's wrong writes down from 12/40 to 2/40 (p = 0.003); no net effect on Haiku.",
    ],
    limitsTitle: 'The limits, honestly',
    limits: [
      'A test bench, fictitious data, scenarios written by the plugin team.',
      'Few runs per scenario; Haiku varies from one run to the next.',
      'Claude models only so far.',
      'Dated results: plugin versions 2.4 to 2.5.1.',
    ],
    othersTitle: 'What about ChatGPT, Mistral?',
    othersText: 'Not measured yet; Mistral is planned. The plugin works with any MCP client: only the measurement is missing.',
  },
  missing: {
    kicker: 'Error 404',
    title: 'This page skipped class.',
    lead: 'Not even undo can bring this one back: the address does not exist, or no longer does.',
    back: 'Back to the home page',
  },
  faq: {
    title: 'Frequently asked questions',
    lead: 'The ones people ask before letting an AI into their course. Short answers; the details are in the guides shipped with the plugin.',
    items: [
      {
        q: 'Can the AI do more than I can?',
        a: 'No. Every call runs with your Moodle permissions, then the access gate, the open families and the `_EDITABLE` barrier restrict further. No setting gives the assistant a right you do not have.',
      },
      {
        q: 'Which assistant do I need?',
        a: 'Any MCP client: Claude, ChatGPT, Mistral Le Chat, Claude Code, or another. Whether you can add a custom connector depends on the plan of the provider.',
      },
      {
        q: 'Is my data used to train models?',
        a: "That does not depend on the plugin but on the plan subscribed with the assistant's provider. Check its contractual documents; prefer a business plan with a data processing agreement (DPA).",
      },
      {
        q: 'What if the assistant makes a mistake? (It happens.)',
        a: 'Ask it to undo: the undo tool reverts many writes, with your rights. For a wide change, a course snapshot taken before lets you go back. What cannot be taken back (a sent message, a permanent deletion) first goes through a preview and a server consent ticket: the assistant checks the preview against your request.',
      },
      {
        q: 'Does it ask for permission every time?',
        a: 'No. When the request is clear, it acts, then checks and quotes what Moodle returns; when it is not, it asks one short question. Ask for its plan first if you prefer to approve it. For what cannot be taken back (deletions, messages, released grades), the server requires a consent ticket: the assistant reviews the preview and only asks you when something differs; your institution can also require your click in Moodle.',
      },
      {
        q: 'Are grades published automatically?',
        a: 'No. Grades proposed by the assistant are drafts. Releasing them needs the grade release family, opened by the administrator, then goes through a preview and a consent ticket; if your institution chose the “ticket and click” mode, it also waits for your click in Moodle.',
      },
      {
        q: 'Do we have to touch Moodle core? (Your administrator is holding their breath.)',
        a: 'No. It is a standard local plugin, without Moodle web services. In OAuth mode, two rewrite rules go into the web server, or the discovery relay takes care of it.',
      },
      {
        q: 'My Moodle is hosted by a provider: can I use it?',
        a: 'Yes. The zip installs through the interface. If the host does not allow the `/.well-known/…` rules, the central registration publishes the discovery document instead. A sheet for your host ships with the plugin.',
      },
      {
        q: 'What are skills, and are they required?',
        a: 'Optional. The server already gives the assistant the plan of each scenario. The skills are an installable copy of it, useful for the assistant to pick the right approach quickly.',
      },
      {
        q: 'How much does it cost? (Good news first.)',
        a: 'The plugin is free software under the GNU GPL v3. The subscription to the AI assistant is up to your institution, with the provider of its choice.',
      },
      {
        q: 'Who do I contact?',
        a: 'Write to souphianejender@gmail.com for a question, a demo or a security report.',
      },
    ],
  },
  legal: {
    title: 'Licence, contact and legal notice',
    description:
      'Licences of the plugin, the skills and the site; publisher, publication director and host; personal data: this site sets no cookie and collects nothing.',
    sections: [
      {
        id: 'licence',
        title: 'Licences',
        points: [
          'The `local_mcpcourse` plugin is free software under the **GNU GPL v3 or later**.',
          'The skills of this repository come from the plugin and are distributed under the same **GNU GPL v3 or later**.',
          'The code of this site is under the **MIT** licence; its texts and diagrams under **Creative Commons BY 4.0**.',
          'Moodle is a registered trademark of Moodle Pty Ltd. This project is independent and is not endorsed or supported by Moodle Pty Ltd. The names of the assistants belong to their publishers.',
        ],
      },
      { id: 'contact', title: 'Contact', text: 'souphianejender@gmail.com' },
      {
        id: 'publisher',
        title: 'Publisher and hosting',
        points: [
          'Publisher of the site: Souphiane Jender, contact: souphianejender@gmail.com.',
          'Publication director: Souphiane Jender.',
          'Host: OVH SAS, simplified joint-stock company with a capital of €50,000,000, RCS Lille Métropole 424 761 419, 2 rue Kellermann, 59100 Roubaix, France, phone: +33 9 72 10 10 07.',
        ],
      },
      {
        id: 'gdpr',
        title: 'Your rights',
        points: [
          'This site collects no data: no form, no account, no cookie, no audience measurement.',
          'For any question about your data (technical log of the server, an e-mail exchange) or to exercise your rights of access, rectification or erasure: souphianejender@gmail.com.',
        ],
      },
      {
        id: 'privacy',
        title: 'Personal data',
        text:
          'This site sets no cookie, has no audience measurement and loads no external resource. The web server keeps no log of the pages viewed. Its technical messages (certificates, connection errors), which may contain an IP address, stay in the system journal of the server for about two weeks, then are deleted automatically. Your choice of light or dark theme is kept in your browser only.',
      },
    ],
  },
  footer: {
    tagline: "An AI assistant in Moodle, with the teacher's rights.",
    licence: 'Plugin and skills: GPL v3 · Site: MIT · Texts: CC BY 4.0',
    contact: 'Contact',
    source: 'Source code',
    noCookies: 'No cookies, no audience measurement.',
  },
};

export default en;
