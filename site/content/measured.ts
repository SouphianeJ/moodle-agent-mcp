import type { Locale } from '@/lib/i18n';

/**
 * Measured examples: real runs on a Moodle 5.3 test bench with a fictitious course (200 students, 50 submissions to
 * grade, a cohort of 30), on 28 November 2026 (plugin 2.5.6). The client is Claude Code on the command line with tool
 * search on. What was done is read in the state of Moodle and in the server log, not in the agent's own account.
 * Tokens are averaged over 3 Sonnet runs per request (input + cache written + cache read), rounded to the thousand;
 * the output is counted apart. Durations are rounded to ten seconds. Haiku: 2 runs per request.
 */
export type MeasuredRun = {
  id: string;
  title: string;
  request: string;
  done: string[];
  /** Average tokens processed per run (input, cache written, cache read, output), rounded to the thousand. */
  tokens: number;
  /** Share of the input tokens read from the cache, in %. */
  cachePct: number;
  /** Average tokens written by the model per run, rounded to the thousand. */
  output: number;
  calls: number;
  seconds: number;
  /** Successful runs out of 3, checked against Moodle. */
  wins: string;
};

export type HaikuRun = { id: string; request: string; verdict: string; ok: boolean; wins: string; tokens: number };

export type Measured = {
  title: string;
  lead: string;
  request: string;
  done: string;
  tokens: string;
  cacheRead: string;
  produced: string;
  calls: string;
  duration: string;
  wins: string;
  runs: MeasuredRun[];
  haikuTitle: string;
  haikuLead: string;
  haikuOk: string;
  haikuGap: string;
  haiku: HaikuRun[];
  haikuRest: string;
  haikuConclusion: string;
  haikuCta: string;
  methodTitle: string;
  method: string[];
  tip: string;
  limitsTitle: string;
  limits: string[];
  illustrativeTitle: string;
};

export const measured: Record<Locale, Measured> = {
  fr: {
    title: 'Exemples mesurés',
    lead:
      'Un cours de 200 étudiants, 50 copies à corriger, une cohorte de 30 à inscrire. Quatre demandes tapées telles quelles, avec Claude Sonnet, sur un Moodle de test aux élèves fictifs. Pour chacune : ce qui a réellement été fait dans Moodle, et les tokens traités. Version mesurée : plugin 2.5.6.',
    request: 'Demande',
    done: 'Ce qui a été réellement fait',
    tokens: 'tokens traités en moyenne',
    cacheRead: 'lus depuis le cache',
    produced: 'produits',
    calls: 'appels',
    duration: 'durée',
    wins: 'réussites',
    runs: [
      {
        id: 'm-grade',
        title: 'Cinquante brouillons, zéro note publiée.',
        request: 'Prépare les brouillons de note et de commentaire des 50 copies du Devoir 2 avec la grille ; je relirai avant de publier.',
        done: [
          '50 brouillons de grille, un par copie, avec la note des 3 critères et un commentaire, écrits par lots de 10 à 20.',
          'Aucune note publiée : le carnet de notes reste vide.',
          'Moyenne proposée par Sonnet : 9,4 à 10,7 sur 20 selon le passage.',
        ],
        tokens: 907000,
        cachePct: 86,
        output: 20000,
        calls: 23,
        seconds: 130,
        wins: '3/3',
      },
      {
        id: 'm-remind',
        title: 'Cent cinquante relances, pas une de plus.',
        request: 'Relance les étudiants qui n’ont pas rendu le Devoir 2.',
        done: [
          '150 messages envoyés, aux 150 étudiants qui n’avaient pas rendu.',
          'Aucun message à l’un des 50 qui avaient rendu.',
        ],
        tokens: 341000,
        cachePct: 90,
        output: 3000,
        calls: 12,
        seconds: 30,
        wins: '3/3',
      },
      {
        id: 'm-risk',
        title: '97 étudiants à risque, groupe par groupe.',
        request: 'Quels étudiants sur les 200 sont à risque ? Résume par groupe.',
        done: [
          '97 étudiants sous 50 % de moyenne : 21 dans le groupe A, 29 dans le B, 24 dans le C, 23 dans le D.',
          'Lecture seule : rien modifié, personne contacté.',
        ],
        tokens: 254000,
        cachePct: 83,
        output: 4000,
        calls: 13,
        seconds: 30,
        wins: '3/3',
      },
      {
        id: 'm-mockup',
        title: 'La rentrée prochaine, montée avant que le café refroidisse.',
        request:
          'Prépare la maquette de l’an prochain : dans la catégorie “Banc maquette (tirage)”, crée la catégorie “L1 Sciences 2027” avec deux sous-catégories, “Semestre 1” et “Semestre 2”. Duplique le cours “Modèle L1 Sciences” en quatre cours : “Physique S1” et “Chimie S1” dans Semestre 1, “Biologie S2” et “Mathématiques S2” dans Semestre 2. Inscris la cohorte “Promotion L1 Sciences 2027” (30 étudiants) dans Physique S1 et Chimie S1, et répartis-la dans chacun de ces deux cours en 3 groupes de 10.',
        done: [
          'Catégorie “L1 Sciences 2027” et ses deux sous-catégories, quatre cours dupliqués du modèle, deux par semestre.',
          'La cohorte de 30 étudiants inscrite dans Physique S1 et Chimie S1, en 3 groupes de 10 dans chacun.',
          'Rien dans les deux cours du semestre 2.',
        ],
        tokens: 458000,
        cachePct: 90,
        output: 5000,
        calls: 38,
        seconds: 40,
        wins: '3/3',
      },
    ],
    haikuTitle: 'Et avec Haiku ?',
    haikuLead:
      'Les mêmes demandes avec Claude Haiku, plus petit : 6 réussites sur 8 passages. Il a raté une lecture.',
    haikuOk: 'Juste',
    haikuGap: 'Écart',
    haiku: [
      {
        id: 'h-risk',
        request: 'Étudiants à risque, par groupe',
        verdict: 'Total de 97 juste, mais regroupé par niveau de risque et non par groupe.',
        ok: false,
        wins: '0/2',
        tokens: 261000,
      },
      {
        id: 'h-grade',
        request: 'Brouillons des 50 copies',
        verdict: 'Conforme dans les deux passages.',
        ok: true,
        wins: '2/2',
        tokens: 1120000,
      },
      {
        id: 'h-remind',
        request: 'Relance des 150 non-rendus',
        verdict: 'Conforme dans les deux passages.',
        ok: true,
        wins: '2/2',
        tokens: 579000,
      },
      {
        id: 'h-mockup',
        request: 'Maquette de l’an prochain',
        verdict: 'Conforme dans les deux passages.',
        ok: true,
        wins: '2/2',
        tokens: 939000,
      },
    ],
    haikuRest:
      'Sur les trois demandes réussies, Haiku traite plus de tokens que Sonnet : de 1,2 à 2 fois plus.',
    haikuConclusion: 'Haiku sait écrire en lot et relancer, mais la lecture par groupe lui a échappé. Pour ce qui touche des personnes, gardez Sonnet.',
    haikuCta: 'Voir les essais des modèles',
    methodTitle: 'Comment on a mesuré',
    method: [
      'Le 28 novembre 2026, sur un Moodle 5.3 de test, plugin 2.5.6 : 200 étudiants fictifs, 50 copies, une cohorte de 30 pour la maquette.',
      'Client réel : Claude Code en ligne de commande, recherche d’outils activée. Trois passages Sonnet et deux Haiku par demande, 20 passages en tout.',
      'Ce qui a été fait se lit dans l’état de Moodle et le journal du serveur, pas dans le récit de l’agent.',
      'Avec Sonnet, 83 à 90 % des tokens d’entrée sont lus depuis le cache.',
    ],
    tip:
      'Sans recherche d’outils, la liste complète des outils pèse environ 294\u202fK tokens à chaque appel, et Haiku ne peut pas la charger. Claude Code et Claude.ai la font d’eux-mêmes : ne la désactivez pas. Avec un autre client, vérifiez qu’il la propose, et n’ouvrez dans le plugin que les familles d’outils utiles.',
    limitsTitle: 'Limites',
    limits: [
      'Peu de passages : 3 par demande avec Sonnet, 2 avec Haiku. Les moyennes donnent un ordre de grandeur.',
      'Cache chaud : le premier passage d’une session écrit en plus le cache.',
      'Copies générées par gabarits, plus régulières que de vraies copies. La cohérence des notes est mesurée d’un passage à l’autre, pas face à une correction humaine.',
    ],
    illustrativeTitle: 'Exemples illustratifs, par scénario',
  },
  en: {
    title: 'Measured examples',
    lead:
      'A course of 200 students, 50 submissions to grade, a cohort of 30 to enrol. Four requests typed as is, with Claude Sonnet, on a test Moodle with fictitious students. For each one: what was really done in Moodle, and the tokens processed. Version measured: plugin 2.5.6.',
    request: 'Request',
    done: 'What was really done',
    tokens: 'tokens processed on average',
    cacheRead: 'read from the cache',
    produced: 'produced',
    calls: 'calls',
    duration: 'duration',
    wins: 'successes',
    runs: [
      {
        id: 'm-grade',
        title: 'Fifty drafts, zero grades released.',
        request: 'Prepare the grade and comment drafts for the 50 submissions of Assignment 2 with the rubric; I’ll review before releasing.',
        done: [
          '50 rubric drafts, one per submission, with the level of the 3 criteria and a comment, written in batches of 10 to 20.',
          'No grade released: the gradebook stays empty.',
          'Average proposed by Sonnet: 9.4 to 10.7 out of 20 depending on the run.',
        ],
        tokens: 907000,
        cachePct: 86,
        output: 20000,
        calls: 23,
        seconds: 130,
        wins: '3/3',
      },
      {
        id: 'm-remind',
        title: 'One hundred and fifty reminders, not one more.',
        request: 'Remind the students who haven’t handed in Assignment 2.',
        done: [
          '150 messages sent, to the 150 students who hadn’t handed in.',
          'No message to any of the 50 who had.',
        ],
        tokens: 341000,
        cachePct: 90,
        output: 3000,
        calls: 12,
        seconds: 30,
        wins: '3/3',
      },
      {
        id: 'm-risk',
        title: '97 students at risk, group by group.',
        request: 'Which of the 200 students are at risk? Summarise by group.',
        done: [
          '97 students under a 50 % average: 21 in group A, 29 in B, 24 in C, 23 in D.',
          'Read only: nothing changed, nobody contacted.',
        ],
        tokens: 254000,
        cachePct: 83,
        output: 4000,
        calls: 13,
        seconds: 30,
        wins: '3/3',
      },
      {
        id: 'm-mockup',
        title: 'Next year’s intake, set up before the coffee gets cold.',
        request:
          'Prepare next year’s mock-up: in the category ‘Banc maquette (tirage)’, create the category ‘L1 Sciences 2027’ with two subcategories, ‘Semestre 1’ and ‘Semestre 2’. Duplicate the course ‘Modèle L1 Sciences’ into four courses: ‘Physique S1’ and ‘Chimie S1’ in Semestre 1, ‘Biologie S2’ and ‘Mathématiques S2’ in Semestre 2. Enrol the cohort ‘Promotion L1 Sciences 2027’ (30 students) in Physique S1 and Chimie S1, and split it in each of these two courses into 3 groups of 10.',
        done: [
          'Category “L1 Sciences 2027” and its two subcategories, four courses duplicated from the template, two per semester.',
          'The cohort of 30 students enrolled in Physique S1 and Chimie S1, in 3 groups of 10 in each.',
          'Nothing in the two courses of semester 2.',
        ],
        tokens: 458000,
        cachePct: 90,
        output: 5000,
        calls: 38,
        seconds: 40,
        wins: '3/3',
      },
    ],
    haikuTitle: 'What about Haiku?',
    haikuLead:
      'The same requests with Claude Haiku, smaller: 6 successes out of 8 runs. It missed one read.',
    haikuOk: 'Right',
    haikuGap: 'Gap',
    haiku: [
      {
        id: 'h-risk',
        request: 'Students at risk, by group',
        verdict: 'Total of 97 right, but grouped by risk level, not by course group.',
        ok: false,
        wins: '0/2',
        tokens: 261000,
      },
      {
        id: 'h-grade',
        request: 'Drafts for the 50 submissions',
        verdict: 'Matches Moodle in both runs.',
        ok: true,
        wins: '2/2',
        tokens: 1120000,
      },
      {
        id: 'h-remind',
        request: 'Reminder to the 150 who hadn’t handed in',
        verdict: 'Matches Moodle in both runs.',
        ok: true,
        wins: '2/2',
        tokens: 579000,
      },
      {
        id: 'h-mockup',
        request: 'Next year’s mock-up',
        verdict: 'Matches Moodle in both runs.',
        ok: true,
        wins: '2/2',
        tokens: 939000,
      },
    ],
    haikuRest:
      'On the three requests it got right, Haiku processes more tokens than Sonnet: 1.2 to 2 times more.',
    haikuConclusion: 'Haiku can write in batches and send reminders, but the read by group got past it. For anything that touches people, stay with Sonnet.',
    haikuCta: 'See the model tests',
    methodTitle: 'How we measured',
    method: [
      'On 28 November 2026, on a Moodle 5.3 test site, plugin 2.5.6: 200 fictitious students, 50 submissions, a cohort of 30 for the mock-up.',
      'Real client: Claude Code on the command line, tool search on. Three Sonnet runs and two Haiku runs per request, 20 runs in all.',
      'What was done is read in the state of Moodle and the server log, not in the agent’s own account.',
      'With Sonnet, 83 to 90 % of input tokens are read from the cache.',
    ],
    tip:
      'Without tool search, the full list of tools weighs about 294K tokens on every call, and Haiku cannot load it. Claude Code and Claude.ai do it on their own: do not turn it off. With another client, check that it offers it, and open only the tool families you need in the plugin.',
    limitsTitle: 'Limits',
    limits: [
      'Few runs: 3 per request with Sonnet, 2 with Haiku. The averages give an order of magnitude.',
      'Warm cache: the first run of a session also writes the cache.',
      'Submissions generated from templates, more regular than real ones. Grading consistency is measured from one run to the next, not against a human marker.',
    ],
    illustrativeTitle: 'Illustrative examples, by scenario',
  },
};

/** Token count rounded for the locale: thousands in K, millions in M ("405 K tokens", "1,1 M tokens"; "1.1M tokens"). */
export function tokens(n: number, lang: Locale): string {
  const fr = lang === 'fr';
  if (n >= 1_000_000) {
    const m = (Math.round(n / 100_000) / 10).toString();
    return fr ? `${m.replace('.', ',')}\u202fM tokens` : `${m}M tokens`;
  }
  const k = Math.round(n / 1000);
  return fr ? `${k}\u202fK tokens` : `${k}K tokens`;
}

/** Duration in seconds (already rounded to ten), written short: "40 s" or "2 min 40 s". */
export function duration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  if (m === 0) return `${s} s`;
  return s === 0 ? `${m} min` : `${m} min ${s} s`;
}
