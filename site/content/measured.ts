import type { Locale } from '@/lib/i18n';

/**
 * Measured examples: real runs on a Moodle 5.3 test bench with a fictitious course (200 students, 50 submissions to
 * grade, 160 quiz attempts), on 27 November 2026 (plugin 2.5.5 in development). The client is Claude Code on the
 * command line with tool search on. What was done is read in the state of Moodle and in the server log, not in the
 * agent's own account. Costs are list prices, averaged over 3 Sonnet runs per request; "without cache" is
 * (input + cache written + cache read) x input price + output x output price. Durations are rounded to ten seconds.
 */
export type MeasuredRun = {
  id: string;
  title: string;
  request: string;
  done: string[];
  /** Average cost with prompt caching, USD. */
  cost: number;
  /** Same runs priced without prompt caching, USD. */
  costNoCache: number;
  calls: number;
  seconds: number;
  /** Successful runs out of 3, checked against Moodle. */
  wins: string;
};

export type HaikuRun = { id: string; request: string; verdict: string; ok: boolean; wins: string; cost: number };

export type Measured = {
  title: string;
  lead: string;
  request: string;
  done: string;
  cost: string;
  noCache: string;
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
      'Un cours de 200 étudiants, 50 copies à corriger. Huit demandes tapées telles quelles, avec Claude Sonnet, sur un Moodle de test aux élèves fictifs. Pour chacune : ce qui a réellement été fait dans Moodle, et ce que ça coûte, cache des prompts compris.',
    request: 'Demande',
    done: 'Ce qui a été réellement fait',
    cost: 'coût avec cache',
    noCache: 'sans cache',
    calls: 'appels',
    duration: 'durée',
    wins: 'réussites',
    runs: [
      {
        id: 'm-grade',
        title: 'Cinquante copies, cinquante brouillons, deux centimes pièce.',
        request: 'Prépare les brouillons de note et de commentaire des 50 copies du Devoir 2 avec la grille ; je relirai avant de publier.',
        done: [
          '50 brouillons de grille remplis, un par copie : 3 critères, une remarque par critère, un commentaire général.',
          'Aucune note publiée, le carnet de notes reste vide.',
          'Moyenne proposée stable d’un passage à l’autre : 11,6 à 11,9 sur 20.',
        ],
        cost: 1.02,
        costNoCache: 2.36,
        calls: 74,
        seconds: 160,
        wins: '3/3',
      },
      {
        id: 'm-remind',
        title: 'Cent cinquante relances, pas une de plus.',
        request: 'Relance les étudiants qui n’ont pas rendu le Devoir 2.',
        done: [
          '150 messages envoyés, aux 150 étudiants qui n’avaient pas rendu.',
          'Aucun message à l’un des 50 qui avaient rendu, y compris les 6 en retard.',
        ],
        cost: 0.37,
        costNoCache: 0.92,
        calls: 13,
        seconds: 40,
        wins: '3/3',
      },
      {
        id: 'm-risk',
        title: '97 étudiants à risque, groupe par groupe.',
        request: 'Quels étudiants sur les 200 sont à risque ? Résume par groupe.',
        done: [
          '97 étudiants sous 50 % de moyenne : 21 dans le groupe A, 29 dans le B, 24 dans le C, 23 dans le D.',
          'Le groupe B ressort, avec 8 étudiants sous 15 %.',
          'Lecture seule : rien modifié, personne contacté.',
        ],
        cost: 0.34,
        costNoCache: 0.79,
        calls: 14,
        seconds: 40,
        wins: '3/3',
      },
      {
        id: 'm-badge',
        title: '83 badges, pas un de trop.',
        request: 'Donne le badge « Assidu » à tous ceux qui ont fini le Quiz 1 avec au moins 12/20.',
        done: [
          '83 badges attribués sur 160 tentatives, exactement aux étudiants à 12/20 ou plus.',
          'Aucun badge à un étudiant sous 12.',
        ],
        cost: 0.43,
        costNoCache: 1.15,
        calls: 18,
        seconds: 40,
        wins: '3/3',
      },
      {
        id: 'm-extension',
        title: 'Une semaine de plus pour 50 étudiants, pas pour les 150 autres.',
        request: 'Prolonge d’une semaine le Devoir 2 pour le groupe B.',
        done: [
          '50 prolongations d’une semaine créées, une par étudiant du groupe B.',
          'Aucune prolongation en dehors du groupe B ; 50 événements au calendrier.',
        ],
        cost: 0.19,
        costNoCache: 0.76,
        calls: 14,
        seconds: 30,
        wins: '3/3',
      },
      {
        id: 'm-week',
        title: 'La semaine prochaine, préparée en une minute.',
        request: 'Crée le cours de la semaine prochaine : 4 séances, un quiz de 10 questions, un forum.',
        done: [
          '4 sections « Semaine 3 – Séance 1 à 4 », avec leur contenu.',
          'Un quiz de 10 questions et un forum de la semaine.',
        ],
        cost: 0.33,
        costNoCache: 0.97,
        calls: 16,
        seconds: 60,
        wins: '3/3',
      },
      {
        id: 'm-participation',
        title: 'Le mois de 200 étudiants, en 20 secondes.',
        request: 'Bilan de participation des 200 étudiants sur le mois.',
        done: [
          '183 étudiants actifs, 17 sans aucune action sur les 30 derniers jours.',
          'Lecture seule : rien modifié.',
        ],
        cost: 0.25,
        costNoCache: 0.52,
        calls: 11,
        seconds: 20,
        wins: '3/3',
      },
      {
        id: 'm-quiz',
        title: '160 tentatives de quiz, résumées en 20 secondes.',
        request: 'Résume les résultats du Quiz 1.',
        done: [
          '160 tentatives, moyenne 10,99 sur 20, 83 étudiants à 12 ou plus.',
          'La question la plus ratée, la Q3, n’a que 38 bonnes réponses sur 160.',
          'Lecture seule : rien modifié.',
        ],
        cost: 0.21,
        costNoCache: 0.57,
        calls: 9,
        seconds: 20,
        wins: '3/3',
      },
    ],
    haikuTitle: 'Et avec Haiku ?',
    haikuLead:
      'Les mêmes demandes avec Claude Haiku, plus petit et moins cher : 0,09 à 0,32 $ au lieu de 0,19 à 1,02 $. Mais 9 réussites sur 16 passages, et des erreurs qui touchent des personnes :',
    haikuOk: 'Juste',
    haikuGap: 'Écart',
    haiku: [
      {
        id: 'h-remind',
        request: 'Relance des 150 non-rendus',
        verdict:
          'Relance partie à 145 étudiants, puis à 133 dont 27 qui avaient rendu. Le compte rendu annonçait 150, puis 148 envois.',
        ok: false,
        wins: '0/2',
        cost: 0.15,
      },
      {
        id: 'h-risk',
        request: 'Étudiants à risque, par groupe',
        verdict: 'Total de 97 juste, mais la répartition par groupe est inventée « d’après les numéros d’identifiant ».',
        ok: false,
        wins: '0/2',
        cost: 0.15,
      },
      {
        id: 'h-grade',
        request: 'Brouillons des 50 copies',
        verdict:
          'Un passage s’arrête pour demander un accord déjà donné. Des notes plus généreuses : 14,7 de moyenne contre 11,8, 18 copies à 20/20 contre 6 à 12.',
        ok: false,
        wins: '1/2',
        cost: 0.32,
      },
      {
        id: 'h-badge',
        request: 'Badge aux 83 étudiants à 12/20',
        verdict: '81 badges sur 83 dans un passage, annoncés « sans erreur ».',
        ok: false,
        wins: '1/2',
        cost: 0.22,
      },
      {
        id: 'h-week',
        request: 'Cours de la semaine prochaine',
        verdict: '« 4 séances » faites en 4 pages dans une seule section, dans un passage.',
        ok: false,
        wins: '1/2',
        cost: 0.2,
      },
    ],
    haikuRest:
      'Les trois autres demandes (prolongation, participation, résumé du quiz) sont justes sur les 6 passages, pour 0,09 à 0,12 $.',
    haikuConclusion: 'Haiku suffit pour lire et résumer. Pour ce qui touche des personnes (envois, badges, notes), prenez Sonnet.',
    haikuCta: 'Voir les essais des modèles',
    methodTitle: 'Comment on a mesuré',
    method: [
      'Le 27 novembre 2026, sur un Moodle 5.3 de test, plugin 2.5.5 (en développement) : 200 étudiants fictifs, 50 copies, 160 tentatives de quiz.',
      'Client réel : Claude Code en ligne de commande, recherche d’outils activée. Trois passages Sonnet et deux Haiku par demande ; 45 passages en tout, dont 5 à vide pour mesurer le coût fixe.',
      'Ce qui a été fait se lit dans l’état de Moodle et le journal du serveur, pas dans le récit de l’agent.',
      'Tarifs de liste par million de tokens. Sonnet : 2 $ en entrée, 10 $ en sortie, 4 $ pour écrire le cache, 0,20 $ pour le lire. Haiku : 1 $, 5 $, 2 $ et 0,10 $. Sans cache = (tokens d’entrée + écrits + lus en cache) × tarif d’entrée + sortie × tarif de sortie.',
      '87 % des tokens d’entrée sont lus depuis le cache. Total : 12,21 $ pour 45 passages, contre 32,15 $ sans cache.',
    ],
    tip:
      'Sans recherche d’outils, la liste complète des outils pèse environ 294 000 tokens : 1,18 $ pour le seul premier appel avec Sonnet, et Haiku ne peut pas la charger. Activez la recherche d’outils de votre client.',
    limitsTitle: 'Limites',
    limits: [
      'Peu de passages : 3 par demande avec Sonnet, 2 avec Haiku. Les moyennes donnent un ordre de grandeur.',
      'Cache chaud : le premier passage d’une session paie en plus l’écriture du cache, environ 0,04 $.',
      'Copies générées par gabarits, plus régulières que de vraies copies. La cohérence des notes est mesurée d’un passage à l’autre, pas face à une correction humaine.',
    ],
    illustrativeTitle: 'Exemples illustratifs, par scénario',
  },
  en: {
    title: 'Measured examples',
    lead:
      'A course of 200 students, 50 submissions to grade. Eight requests typed as is, with Claude Sonnet, on a test Moodle with fictitious students. For each one: what was really done in Moodle, and what it costs, prompt caching included.',
    request: 'Request',
    done: 'What was really done',
    cost: 'cost with cache',
    noCache: 'without cache',
    calls: 'calls',
    duration: 'duration',
    wins: 'successes',
    runs: [
      {
        id: 'm-grade',
        title: 'Fifty papers, fifty drafts, two cents each.',
        request: 'Prepare the grade and comment drafts for the 50 submissions of Assignment 2 with the rubric; I’ll review before releasing.',
        done: [
          '50 rubric drafts filled in, one per submission: 3 criteria, a remark per criterion, an overall comment.',
          'No grade released, the gradebook stays empty.',
          'Proposed average stable from one run to the next: 11.6 to 11.9 out of 20.',
        ],
        cost: 1.02,
        costNoCache: 2.36,
        calls: 74,
        seconds: 160,
        wins: '3/3',
      },
      {
        id: 'm-remind',
        title: 'One hundred and fifty reminders, not one more.',
        request: 'Remind the students who haven’t handed in Assignment 2.',
        done: [
          '150 messages sent, to the 150 students who hadn’t handed in.',
          'No message to any of the 50 who had, the 6 late ones included.',
        ],
        cost: 0.37,
        costNoCache: 0.92,
        calls: 13,
        seconds: 40,
        wins: '3/3',
      },
      {
        id: 'm-risk',
        title: '97 students at risk, group by group.',
        request: 'Which of the 200 students are at risk? Sum up by group.',
        done: [
          '97 students under a 50 % average: 21 in group A, 29 in B, 24 in C, 23 in D.',
          'Group B stands out, with 8 students under 15 %.',
          'Read-only: nothing changed, nobody contacted.',
        ],
        cost: 0.34,
        costNoCache: 0.79,
        calls: 14,
        seconds: 40,
        wins: '3/3',
      },
      {
        id: 'm-badge',
        title: '83 badges, not one too many.',
        request: 'Give the “Steady” badge to everyone who finished Quiz 1 with at least 12/20.',
        done: [
          '83 badges awarded out of 160 attempts, exactly to the students at 12/20 or more.',
          'No badge to a student under 12.',
        ],
        cost: 0.43,
        costNoCache: 1.15,
        calls: 18,
        seconds: 40,
        wins: '3/3',
      },
      {
        id: 'm-extension',
        title: 'One more week for 50 students, not for the other 150.',
        request: 'Extend Assignment 2 by one week for group B.',
        done: [
          '50 one-week extensions created, one per student of group B.',
          'No extension outside group B; 50 calendar events.',
        ],
        cost: 0.19,
        costNoCache: 0.76,
        calls: 14,
        seconds: 30,
        wins: '3/3',
      },
      {
        id: 'm-week',
        title: 'Next week’s course, ready in a minute.',
        request: 'Create next week’s course: 4 sessions, a 10-question quiz, a forum.',
        done: [
          '4 sections “Week 3 – Session 1 to 4”, with their content.',
          'A 10-question quiz and a forum for the week.',
        ],
        cost: 0.33,
        costNoCache: 0.97,
        calls: 16,
        seconds: 60,
        wins: '3/3',
      },
      {
        id: 'm-participation',
        title: 'The month of 200 students, in 20 seconds.',
        request: 'Participation report for the 200 students over the month.',
        done: [
          '183 active students, 17 with no action at all over the last 30 days.',
          'Read-only: nothing changed.',
        ],
        cost: 0.25,
        costNoCache: 0.52,
        calls: 11,
        seconds: 20,
        wins: '3/3',
      },
      {
        id: 'm-quiz',
        title: '160 quiz attempts, summed up in 20 seconds.',
        request: 'Summarize the results of Quiz 1.',
        done: [
          '160 attempts, average 10.99 out of 20, 83 students at 12 or more.',
          'The most missed question, Q3, has only 38 right answers out of 160.',
          'Read-only: nothing changed.',
        ],
        cost: 0.21,
        costNoCache: 0.57,
        calls: 9,
        seconds: 20,
        wins: '3/3',
      },
    ],
    haikuTitle: 'What about Haiku?',
    haikuLead:
      'The same requests with Claude Haiku, smaller and cheaper: $0.09 to $0.32 instead of $0.19 to $1.02. But 9 successes out of 16 runs, and mistakes that touch people:',
    haikuOk: 'Right',
    haikuGap: 'Gap',
    haiku: [
      {
        id: 'h-remind',
        request: 'Reminder to the 150 who hadn’t handed in',
        verdict:
          'Reminder sent to 145 students, then to 133 of whom 27 had handed in. The report claimed 150, then 148 sent.',
        ok: false,
        wins: '0/2',
        cost: 0.15,
      },
      {
        id: 'h-risk',
        request: 'Students at risk, by group',
        verdict: 'Total of 97 right, but the split by group is made up “from the sequential ids”.',
        ok: false,
        wins: '0/2',
        cost: 0.15,
      },
      {
        id: 'h-grade',
        request: 'Drafts for the 50 submissions',
        verdict:
          'One run stops to ask for an approval already given. More generous grades: 14.7 average against 11.8, 18 papers at 20/20 against 6 to 12.',
        ok: false,
        wins: '1/2',
        cost: 0.32,
      },
      {
        id: 'h-badge',
        request: 'Badge to the 83 students at 12/20',
        verdict: '81 badges out of 83 in one run, reported “without error”.',
        ok: false,
        wins: '1/2',
        cost: 0.22,
      },
      {
        id: 'h-week',
        request: 'Next week’s course',
        verdict: '“4 sessions” built as 4 pages in a single section, in one run.',
        ok: false,
        wins: '1/2',
        cost: 0.2,
      },
    ],
    haikuRest:
      'The other three requests (extension, participation, quiz summary) are right on all 6 runs, for $0.09 to $0.12.',
    haikuConclusion: 'Haiku is enough to read and summarize. For anything that touches people (messages, badges, grades), use Sonnet.',
    haikuCta: 'See the model tests',
    methodTitle: 'How we measured',
    method: [
      'On 27 November 2026, on a Moodle 5.3 test site, plugin 2.5.5 (in development): 200 fictitious students, 50 submissions, 160 quiz attempts.',
      'Real client: Claude Code on the command line, tool search on. Three Sonnet runs and two Haiku runs per request; 45 runs in all, 5 of them empty to measure the fixed cost.',
      'What was done is read in the state of Moodle and the server log, not in the agent’s own account.',
      'List prices per million tokens. Sonnet: $2 input, $10 output, $4 to write the cache, $0.20 to read it. Haiku: $1, $5, $2 and $0.10. Without cache = (input + cache written + cache read tokens) × input price + output × output price.',
      '87 % of input tokens are read from the cache. Total: $12.21 for 45 runs, against $32.15 without cache.',
    ],
    tip:
      'Without tool search, the full list of tools weighs about 294,000 tokens: $1.18 for the first Sonnet call alone, and Haiku cannot load it. Turn on tool search in your client.',
    limitsTitle: 'Limits',
    limits: [
      'Few runs: 3 per request with Sonnet, 2 with Haiku. The averages give an order of magnitude.',
      'Warm cache: the first run of a session also pays to write the cache, about $0.04.',
      'Submissions generated from templates, more regular than real ones. Grading consistency is measured from one run to the next, not against a human marker.',
    ],
    illustrativeTitle: 'Illustrative examples, by scenario',
  },
};

/** Cost in dollars, written for the locale: "1,02 $" or "$1.02". */
export function money(n: number, lang: Locale): string {
  return lang === 'fr' ? `${n.toFixed(2).replace('.', ',')} $` : `$${n.toFixed(2)}`;
}

/** Duration in seconds (already rounded to ten), written short: "40 s" or "2 min 40 s". */
export function duration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  if (m === 0) return `${s} s`;
  return s === 0 ? `${m} min` : `${m} min ${s} s`;
}
