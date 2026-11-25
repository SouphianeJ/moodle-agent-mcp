import type { Locale } from '@/lib/i18n';
import type { SkillPlatform } from './types';

/**
 * How each assistant takes skills, as documented by its publisher (checked November 2026). Only what the sources say:
 * update this file when a platform changes, and keep the sources.
 */
const sources = {
  spec: { label: 'agentskills.io', url: 'https://agentskills.io/specification' },
  claudeCodePlugins: { label: 'Claude Code: plugin marketplaces', url: 'https://code.claude.com/docs/en/plugin-marketplaces' },
  claudeCodeSkills: { label: 'Claude Code: skills', url: 'https://code.claude.com/docs/en/skills' },
  claudeAi: { label: 'Claude Help Center: skills', url: 'https://support.claude.com/en/articles/12512180-using-skills-in-claude' },
  claudeApi: { label: 'Claude API: Agent Skills', url: 'https://docs.claude.com/en/docs/agents-and-tools/agent-skills/overview' },
  chatgpt: { label: 'OpenAI Help Center: Skills in ChatGPT', url: 'https://help.openai.com/en/articles/20001066-skills-in-chatgpt' },
  codex: { label: 'OpenAI: build skills (Codex)', url: 'https://learn.chatgpt.com/docs/build-skills' },
  gemini: { label: 'Gemini CLI: Agent Skills', url: 'https://geminicli.com/docs/cli/skills/' },
  cursor: { label: 'Cursor: Agent Skills', url: 'https://cursor.com/docs/skills' },
  mistral: { label: 'Mistral: create your first Skill', url: 'https://docs.mistral.ai/getting-started/quickstarts/vibe-work/create-first-skill' },
};

export const platforms: Record<Locale, SkillPlatform[]> = {
  fr: [
    {
      name: 'Claude Code',
      status: 'Place de marché de plugins',
      steps: [
        '`/plugin marketplace add SouphianeJ/moodle-agent-mcp`',
        '`/plugin install moodle-agent-mcp@moodle-agent-mcp`',
        'Ou, sans plugin : copier un dossier de `skills/` dans `.claude/skills/` du projet ou `~/.claude/skills/`.',
      ],
      sources: [sources.claudeCodePlugins, sources.claudeCodeSkills],
    },
    {
      name: 'Claude (claude.ai, bureau)',
      status: 'Envoi d’un zip',
      steps: [
        'Télécharger le zip d’une skill (ci-dessus) : il contient le dossier de la skill et son `SKILL.md`.',
        'Personnaliser > Skills, « + », Créer une skill, Envoyer une skill, puis choisir le zip.',
        'Les skills envoyées sont privées à votre compte ; l’offre doit inclure les skills.',
      ],
      sources: [sources.claudeAi],
    },
    {
      name: 'API Claude',
      status: 'Skills personnalisées par API',
      steps: ['Envoyer le dossier de la skill par l’API Skills, puis la référencer dans les requêtes qui utilisent l’exécution de code.'],
      sources: [sources.claudeApi],
    },
    {
      name: 'ChatGPT',
      status: 'Offres Business, Enterprise, Edu',
      steps: [
        'Skills, Créer, « Envoyer depuis votre ordinateur », puis choisir le zip de la skill (un seul `SKILL.md` par envoi).',
        'ChatGPT analyse la skill avant de la rendre disponible ; l’espace de travail doit autoriser les skills.',
      ],
      sources: [sources.chatgpt],
    },
    {
      name: 'Codex (OpenAI)',
      status: 'Dossier de skills',
      steps: ['Copier le dossier de la skill dans `.agents/skills/` du dépôt ou `~/.agents/skills/`.', 'L’invoquer avec `$` ou `/skills`, ou laisser Codex la choisir.'],
      sources: [sources.codex],
    },
    {
      name: 'Gemini CLI',
      status: 'Dossier de skills',
      steps: ['Copier le dossier dans `.gemini/skills/` (ou `.agents/skills/`) du projet, ou `~/.gemini/skills/`.', 'Ou `gemini skills link <dossier skills/ de ce dépôt>`.'],
      sources: [sources.gemini],
    },
    {
      name: 'Cursor',
      status: 'Dossier de skills',
      steps: ['Copier le dossier dans `.cursor/skills/` du projet. Cursor lit aussi `.claude/skills/` et `.codex/skills/`.', 'L’invoquer avec `/` dans le chat de l’agent.'],
      sources: [sources.cursor],
    },
    {
      name: 'Mistral (Vibe Work)',
      status: 'Formulaire, sans envoi de zip documenté',
      steps: [
        'Context > Skills > New Skill, en portée personnelle ou d’espace de travail.',
        'Renseigner le titre et la description de l’en-tête, puis coller le contenu du `SKILL.md`.',
      ],
      sources: [sources.mistral],
    },
    {
      name: 'Autre assistant',
      status: 'Instructions',
      steps: ['Donner le contenu du `SKILL.md` comme instructions du projet ou de l’agent. Le format suit la spécification ouverte Agent Skills.'],
      sources: [sources.spec],
    },
  ],
  en: [
    {
      name: 'Claude Code',
      status: 'Plugin marketplace',
      steps: [
        '`/plugin marketplace add SouphianeJ/moodle-agent-mcp`',
        '`/plugin install moodle-agent-mcp@moodle-agent-mcp`',
        'Or, without the plugin: copy a folder of `skills/` into `.claude/skills/` of the project or `~/.claude/skills/`.',
      ],
      sources: [sources.claudeCodePlugins, sources.claudeCodeSkills],
    },
    {
      name: 'Claude (claude.ai, desktop)',
      status: 'Zip upload',
      steps: [
        'Download the zip of a skill (above): it holds the folder of the skill and its `SKILL.md`.',
        'Customize > Skills, "+", Create skill, Upload a skill, then pick the zip.',
        'Uploaded skills are private to your account; your plan must include skills.',
      ],
      sources: [sources.claudeAi],
    },
    {
      name: 'Claude API',
      status: 'Custom skills through the API',
      steps: ['Upload the folder of the skill with the Skills API, then reference it in requests that use code execution.'],
      sources: [sources.claudeApi],
    },
    {
      name: 'ChatGPT',
      status: 'Business, Enterprise, Edu plans',
      steps: [
        'Skills, Create, "Upload from your computer", then pick the zip of the skill (one `SKILL.md` per upload).',
        'ChatGPT scans the skill before it becomes available; the workspace must allow skills.',
      ],
      sources: [sources.chatgpt],
    },
    {
      name: 'Codex (OpenAI)',
      status: 'Skills folder',
      steps: ['Copy the folder of the skill into `.agents/skills/` of the repository or `~/.agents/skills/`.', 'Invoke it with `$` or `/skills`, or let Codex pick it.'],
      sources: [sources.codex],
    },
    {
      name: 'Gemini CLI',
      status: 'Skills folder',
      steps: ['Copy the folder into `.gemini/skills/` (or `.agents/skills/`) of the project, or `~/.gemini/skills/`.', 'Or `gemini skills link <the skills/ folder of this repository>`.'],
      sources: [sources.gemini],
    },
    {
      name: 'Cursor',
      status: 'Skills folder',
      steps: ['Copy the folder into `.cursor/skills/` of the project. Cursor also reads `.claude/skills/` and `.codex/skills/`.', 'Invoke it with `/` in the agent chat.'],
      sources: [sources.cursor],
    },
    {
      name: 'Mistral (Vibe Work)',
      status: 'Form, no documented zip upload',
      steps: [
        'Context > Skills > New Skill, personal or workspace scope.',
        'Fill in the title and the description of the frontmatter, then paste the content of `SKILL.md`.',
      ],
      sources: [sources.mistral],
    },
    {
      name: 'Other assistants',
      status: 'Instructions',
      steps: ['Give the content of `SKILL.md` as the instructions of the project or agent. The format follows the open Agent Skills specification.'],
      sources: [sources.spec],
    },
  ],
};
