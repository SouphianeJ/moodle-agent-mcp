import type { Dict } from './types';

const en: Dict = {
  meta: {
    title: 'Moodle Agent MCP: an AI assistant that works in Moodle, with your rights',
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
    title: 'An AI assistant that works in Moodle, with your rights.',
    lead:
      'Ask in plain words for what you would do by hand: build a course, grade submissions, remind a group. The assistant proposes a plan, acts with **your** Moodle rights and nothing more, then checks the result.',
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
        title: 'Fewer clicks, more teaching',
        text: 'A four-week course, a quiz with its questions, a weighted gradebook: described in one sentence, set up in minutes, in your own Moodle.',
      },
      {
        title: 'A person always approves',
        text: 'Grades start as drafts; messages and deletions wait for your agreement on a preview. Nothing irreversible happens without you.',
      },
      {
        title: 'Your rights, no more',
        text: 'The assistant acts on behalf of an identified person, with their Moodle permissions. What you cannot do by hand, it cannot do either.',
      },
      {
        title: 'A way back',
        text: 'Every write is logged; many can be undone with one word. Course snapshots cover wider changes.',
      },
    ],
    demo: {
      title: 'One request, one plan, one result',
      lead: 'This is how a typical conversation goes. The assistant follows the plan of the scenario that the plugin gives it.',
      who: 'Teacher',
      assistant: 'Assistant',
      request: 'In my course "Project management", set up the assignment "Progress report" due on 12 March, then tell me who has not handed it in.',
      planTitle: 'Proposed plan',
      plan: [
        'Read the course and its sections (`course_get`, `course_sections_list`).',
        'Create the assignment in section 3: instructions, file submission, due on 12 March at 23:59.',
        'After the due date: list the students without a submission and show them to you before any reminder.',
      ],
      confirm: 'Fine, go ahead.',
      resultTitle: 'Checked result',
      result: [
        'Assignment "Progress report" created in section 3, visible, due on 12 March.',
        '`activity_list` confirms it; the operation can be undone.',
        'I will come back with the missing submissions: no message is sent without your agreement.',
      ],
      replay: 'Replay the animation',
      illustrative: 'Illustrative example, no real data.',
    },
    howTitle: 'How it works',
    how: [
      {
        title: '1. Your institution installs the plugin',
        text: 'A zip to upload to Moodle, closed by default. The administrator chooses who may use it and which tool families to open.',
      },
      {
        title: '2. You connect your assistant',
        text: 'Claude, ChatGPT, Mistral Le Chat or any MCP client: paste an address, authorize it in Moodle, as for any app.',
      },
      {
        title: '3. You ask, it plans, you approve',
        text: 'The assistant picks the right scenario, states its plan, acts step by step, then checks and quotes what Moodle returns.',
      },
    ],
    scenariosTitle: '41 scenarios for recurring tasks',
    scenariosText:
      'Build, assess, grade, follow, communicate, maintain: each scenario tells the assistant what to ask, in which order to act, which guards to respect and how to prove it is done.',
    scenariosCta: 'See the 41 scenarios',
    trustTitle: 'Built for trust',
    trust: [
      "Moodle's own permissions on every call.",
      'A course accepts AI writes only once a person opened it (the `_EDITABLE` marker).',
      'Access gate closed by default, by role or by person, read or read and write.',
      'Consent ticket for what cannot be taken back: messages, deletions, released grades.',
      'Every write logged, undo, emergency switch.',
    ],
    trustCta: 'Read the security page',
    startTitle: 'Try it in three steps',
    start: [
      { title: 'Install', text: 'Upload the plugin zip in *Site administration > Plugins*.' },
      { title: 'Open', text: 'Choose the OAuth mode, tick a role in the access gate, read-only to start.' },
      { title: 'Connect', text: 'Paste the connector address into your assistant and ask: "What can you do on this Moodle site?"' },
    ],
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
          'What cannot be taken back (a deletion, a sent message, released grades) does not run on the first call: the server answers with a preview and a single-use ticket. The assistant compares the preview with your request and asks you at the slightest gap. Optionally, a click of the person in Moodle is required.',
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
        text: 'Moodle 4.1 to 5.3, PHP 8.1 or later, site served over https. Take a backup, as before any plugin installation.',
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
    download: 'The zip will be published in the Moodle plugins directory. Until then, it is provided on request, with its SHA-256 checksum.',
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
    marketTitle: 'Moodle plugins directory',
    marketText: 'The listing of the plugin in the official Moodle plugins directory is being prepared.',
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
  faq: {
    title: 'Frequently asked questions',
    lead: 'Short answers. The details are in the guides shipped with the plugin.',
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
        q: 'What if the assistant makes a mistake?',
        a: 'Ask it to undo: the undo tool reverts many writes, with your rights. For a wide change, a course snapshot taken before lets you go back. What cannot be taken back (a sent message, a permanent deletion) needs your agreement first.',
      },
      {
        q: 'Are grades published automatically?',
        a: 'No. Grades proposed by the assistant are drafts. They are published only after your confirmation, and the grade release family must be opened by the administrator.',
      },
      {
        q: 'Do I need to change Moodle core?',
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
        q: 'How much does it cost?',
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
          'Publisher of the site: the author of the Moodle Agent MCP project, reachable at the address above.',
          'Hosting: OVH SAS, 2 rue Kellermann, 59100 Roubaix, France.',
        ],
      },
      {
        id: 'privacy',
        title: 'Personal data',
        text:
          'This site sets no cookie, has no audience measurement and loads no external resource. The web server may keep a short technical log of requests (IP address, page, date) for security. Your choice of light or dark theme is kept in your browser only.',
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
