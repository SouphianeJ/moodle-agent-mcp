import type { Locale } from '@/lib/i18n';

/**
 * Measured examples: real runs on a Moodle 5.3 test bench with a fictitious course and fictitious students, on
 * 26 November 2026 (plugin 2.5.4 in development). What was done is read in the server log and the state of Moodle, not
 * in the agent's own account. "Work tokens" = size of the agent's conversation at the end, minus that of an identical
 * empty agent. Figures exactly as measured; the page rounds the tokens to the thousand.
 */
export type MeasuredRun = {
  id: string;
  title: string;
  request: string;
  done: string[];
  calls: number;
  seconds: number;
  tokens: number;
};

export type HaikuRun = { id: string; request: string; verdict: string; ok: boolean; calls: number; seconds: number; tokens: number };

export type Measured = {
  title: string;
  lead: string;
  request: string;
  done: string;
  calls: string;
  seconds: string;
  tokens: string;
  runs: MeasuredRun[];
  haikuTitle: string;
  haikuLead: string;
  haikuOk: string;
  haikuGap: string;
  haiku: HaikuRun[];
  haikuCta: string;
  methodTitle: string;
  method: string[];
  illustrativeTitle: string;
};

export const measured: Record<Locale, Measured> = {
  fr: {
    title: 'Exemples mesurés',
    lead:
      'Six demandes tapées telles quelles, avec Claude Sonnet, sur un Moodle de test au cours et aux élèves fictifs. Pour chacune : ce qui a réellement été fait dans Moodle, et ce que ça a coûté.',
    request: 'Demande',
    done: 'Ce qui a été réellement fait',
    calls: 'appels',
    seconds: 'secondes',
    tokens: 'tokens de travail',
    runs: [
      {
        id: 'm-build',
        title: 'Quatre semaines de cours, quiz final compris. En 42 secondes.',
        request: 'Crée-moi une séquence de 4 semaines sur le développement durable avec un quiz final',
        done: [
          '4 sections ajoutées (Semaine 1 à 4) à côté des 3 séances déjà là : chacune avec un objectif, une page de cours et une activité (forum, quiz d’entraînement, devoir formatif, fiche de synthèse).',
          'Quiz final de 4 questions en semaine 4. Moodle compte 12 activités créées.',
          'Un instantané du cours permet de revenir en arrière.',
        ],
        calls: 11,
        seconds: 42,
        tokens: 22906,
      },
      {
        id: 'm-remind',
        title: 'Qui n’a pas rendu ? Et une relance prête, pas envoyée.',
        request: 'Qui n’a pas rendu le devoir 1 ? Prépare une relance',
        done: [
          '6 non-rendus sur 12, exacts : Élèves C, F, I, J, K et L.',
          'Texte de relance préparé et montré ; rien n’est envoyé avant votre accord sur la liste et le texte.',
          'Aucune écriture dans Moodle.',
        ],
        calls: 10,
        seconds: 23,
        tokens: 18449,
      },
      {
        id: 'm-grade',
        title: 'Six copies, une grille, et rien de publié.',
        request: 'Corrige les copies du devoir 1 avec la grille, en brouillon',
        done: [
          '6 copies lues, 6 brouillons de notation par la grille, avec commentaire : 10/10 pour deux copies, 5/10 pour quatre dont la justification n’est pas chiffrée.',
          'Aucune note publiée, aucun élève notifié.',
          '2 appels refusés par le serveur (argument mal nommé), corrigés aussitôt par l’assistant.',
        ],
        calls: 21,
        seconds: 40,
        tokens: 23082,
      },
      {
        id: 'm-extra-time',
        title: 'Un tiers-temps pour l’Élève C. Pour lui seul.',
        request: 'Mets un tiers-temps à l’Élève C sur tout le cours',
        done: [
          'Quiz 1 : de 30 à 40 minutes pour l’Élève C seul, par une dérogation individuelle, vérifiée.',
          'Devoir 1 non prolongé : aucune nouvelle date n’était donnée, l’assistant vous la demande.',
          'Défaut relevé : le scénario des groupes a été choisi au lieu de celui des aménagements individuels. Il sera corrigé.',
        ],
        calls: 14,
        seconds: 52,
        tokens: 19013,
      },
      {
        id: 'm-forum',
        title: 'Trois questions en attente au forum. Plus maintenant.',
        request: 'Réponds aux questions du forum',
        done: [
          '3 réponses postées au nom de l’enseignant : barème du devoir 1 (sur 10, avec une grille), durée et tentatives du quiz 1, dépôt tardif encore possible.',
          'Réponses tirées des réglages réels du devoir et du quiz.',
          'Contrôle : plus aucune question sans réponse.',
        ],
        calls: 20,
        seconds: 44,
        tokens: 20119,
      },
      {
        id: 'm-quiz',
        title: 'Le quiz 1 en trois lignes, et ce qu’il faut reprendre.',
        request: 'Résume les résultats du quiz 1',
        done: [
          '8 tentatives sur 12 inscrits, moyenne 6/10 ; 4 élèves ne l’ont pas passé.',
          'Q3 (effet de serre) et Q2 (unité de la facture) à 25 % de réussite ; 75 % confondent effet de serre et trou d’ozone.',
          'À reprendre : effet de serre et ozone, énergie (kWh) et puissance (kW). Lecture seule, rien modifié.',
        ],
        calls: 11,
        seconds: 33,
        tokens: 22904,
      },
    ],
    haikuTitle: 'Et avec Haiku ?',
    haikuLead: 'Trois des mêmes demandes avec Claude Haiku, plus petit et moins cher. Souvent juste, mais à vérifier :',
    haikuOk: 'Juste',
    haikuGap: 'Écart',
    haiku: [
      {
        id: 'h-remind',
        request: 'Qui n’a pas rendu le devoir 1 ? Prépare une relance',
        verdict:
          'Liste exacte des 6 non-rendus. Mais il annonce avoir envoyé la relance, alors que le journal du serveur ne montre aucun envoi.',
        ok: false,
        calls: 6,
        seconds: 56,
        tokens: 26000,
      },
      {
        id: 'h-grade',
        request: 'Corrige les copies du devoir 1 avec la grille, en brouillon',
        verdict:
          '6 vrais brouillons, rien publié. Mais une notation trop généreuse : 10/10 pour trois copies que la grille met à 5/10.',
        ok: false,
        calls: 14,
        seconds: 95,
        tokens: 34828,
      },
      {
        id: 'h-quiz',
        request: 'Résume les résultats du quiz 1',
        verdict:
          'Résumé exact : moyenne, questions ratées, confusion avec l’ozone, les trois élèves les plus en difficulté. Il ne cite pas les 4 élèves qui n’ont pas passé le quiz.',
        ok: true,
        calls: 7,
        seconds: 28,
        tokens: 21811,
      },
    ],
    haikuCta: 'Voir les essais des modèles',
    methodTitle: 'Comment on a mesuré',
    method: [
      'Le 26 novembre 2026, sur un Moodle 5.3 de test, plugin 2.5.4 (en développement) ; un cours et des élèves fictifs (« Élève A » à « Élève L »).',
      'Un agent neuf pour chaque demande. Le résultat se lit dans le journal du serveur et dans l’état de Moodle, pas dans le récit de l’agent.',
      'Appels : requêtes reçues par le serveur du plugin. Durée : du premier au dernier appel, lue dans le journal du serveur. Tokens de travail : la taille de la conversation de l’agent à la fin, moins celle d’un agent identique à vide (le contexte fixe de l’outil d’agent : ≈ 67 000 tokens avec Sonnet, ≈ 52 000 avec Haiku). Dans un client MCP comme Claude.ai ou ChatGPT, ce contexte fixe est différent.',
      'Un passage de la correction a été écarté et rejoué : notre script de préparation du banc avait désactivé le texte en ligne de deux copies.',
      'Un défaut trouvé : pour le tiers-temps, l’assistant a choisi le scénario des groupes au lieu de celui des aménagements individuels. Il sera corrigé.',
    ],
    illustrativeTitle: 'Exemples illustratifs, par scénario',
  },
  en: {
    title: 'Measured examples',
    lead:
      'Six requests typed as is, with Claude Sonnet, on a test Moodle with a fictitious course and fictitious students. For each one: what was really done in Moodle, and what it cost.',
    request: 'Request',
    done: 'What was really done',
    calls: 'calls',
    seconds: 'seconds',
    tokens: 'work tokens',
    runs: [
      {
        id: 'm-build',
        title: 'Four weeks of course, final quiz included. In 42 seconds.',
        request: 'Build me a 4-week sequence on sustainable development with a final quiz',
        done: [
          '4 sections added (Week 1 to 4) next to the 3 sessions already there: each with a goal, a course page and an activity (forum, practice quiz, formative assignment, summary sheet).',
          'Final quiz of 4 questions in week 4. Moodle counts 12 activities created.',
          'A course snapshot lets you go back.',
        ],
        calls: 11,
        seconds: 42,
        tokens: 22906,
      },
      {
        id: 'm-remind',
        title: 'Who hasn’t handed it in? And a reminder ready, not sent.',
        request: 'Who hasn’t handed in assignment 1? Prepare a reminder',
        done: [
          '6 missing out of 12, exact: Students C, F, I, J, K and L.',
          'Reminder text prepared and shown; nothing is sent before you agree on the list and the text.',
          'No write in Moodle.',
        ],
        calls: 10,
        seconds: 23,
        tokens: 18449,
      },
      {
        id: 'm-grade',
        title: 'Six papers, one rubric, and nothing released.',
        request: 'Grade the submissions of assignment 1 with the rubric, as drafts',
        done: [
          '6 submissions read, 6 rubric grading drafts with a comment: 10/10 for two papers, 5/10 for four whose justification has no figures.',
          'No grade released, no student notified.',
          '2 calls refused by the server (misnamed argument), fixed at once by the assistant.',
        ],
        calls: 21,
        seconds: 40,
        tokens: 23082,
      },
      {
        id: 'm-extra-time',
        title: 'Extra time for Student C. For that student only.',
        request: 'Give Student C extra time across the whole course',
        done: [
          'Quiz 1: from 30 to 40 minutes for Student C only, through an individual override, checked.',
          'Assignment 1 not extended: no new date was given, the assistant asks you for one.',
          'Flaw found: the groups scenario was picked instead of the individual accommodations one. It will be fixed.',
        ],
        calls: 14,
        seconds: 52,
        tokens: 19013,
      },
      {
        id: 'm-forum',
        title: 'Three questions waiting in the forum. Not any more.',
        request: 'Answer the questions in the forum',
        done: [
          '3 replies posted as the teacher: how assignment 1 is graded (out of 10, with a rubric), length and attempts of quiz 1, late submission still possible.',
          'Answers taken from the real settings of the assignment and the quiz.',
          'Check: no unanswered question left.',
        ],
        calls: 20,
        seconds: 44,
        tokens: 20119,
      },
      {
        id: 'm-quiz',
        title: 'Quiz 1 in three lines, and what to teach again.',
        request: 'Summarize the results of quiz 1',
        done: [
          '8 attempts out of 12 enrolled, average 6/10; 4 students did not take it.',
          'Q3 (greenhouse effect) and Q2 (unit on the bill) at 25 % success; 75 % mix up the greenhouse effect and the ozone hole.',
          'To teach again: greenhouse effect and ozone, energy (kWh) and power (kW). Read-only, nothing changed.',
        ],
        calls: 11,
        seconds: 33,
        tokens: 22904,
      },
    ],
    haikuTitle: 'What about Haiku?',
    haikuLead: 'Three of the same requests with Claude Haiku, smaller and cheaper. Often right, but worth checking:',
    haikuOk: 'Right',
    haikuGap: 'Gap',
    haiku: [
      {
        id: 'h-remind',
        request: 'Who hasn’t handed in assignment 1? Prepare a reminder',
        verdict: 'Exact list of the 6 missing. But it says it sent the reminder, while the server log shows no sending at all.',
        ok: false,
        calls: 6,
        seconds: 56,
        tokens: 26000,
      },
      {
        id: 'h-grade',
        request: 'Grade the submissions of assignment 1 with the rubric, as drafts',
        verdict: '6 real drafts, nothing released. But too generous: 10/10 for three papers that the rubric puts at 5/10.',
        ok: false,
        calls: 14,
        seconds: 95,
        tokens: 34828,
      },
      {
        id: 'h-quiz',
        request: 'Summarize the results of quiz 1',
        verdict:
          'Exact summary: average, missed questions, the mix-up with ozone, the three students who struggle most. It does not mention the 4 students who did not take the quiz.',
        ok: true,
        calls: 7,
        seconds: 28,
        tokens: 21811,
      },
    ],
    haikuCta: 'See the model tests',
    methodTitle: 'How we measured',
    method: [
      'On 26 November 2026, on a Moodle 5.3 test site, plugin 2.5.4 (in development); a fictitious course and fictitious students ("Student A" to "Student L").',
      'A fresh agent for each request. The result is read in the server log and the state of Moodle, not in the agent’s own account.',
      'Calls: requests received by the plugin server. Duration: from the first to the last call, read in the server log. Work tokens: the size of the agent’s conversation at the end, minus that of an identical empty agent (the fixed context of the agent tool: ≈ 67,000 tokens with Sonnet, ≈ 52,000 with Haiku). In an MCP client such as Claude.ai or ChatGPT, that fixed context is different.',
      'One grading run was discarded and replayed: our bench preparation script had switched off online text for two submissions.',
      'One flaw found: for the extra time, the assistant picked the groups scenario instead of the individual accommodations one. It will be fixed.',
    ],
    illustrativeTitle: 'Illustrative examples, by scenario',
  },
};

/** Tokens rounded to the thousand, written for the locale: "≈ 23 000" or "≈ 23,000". */
export function roundTokens(n: number, lang: Locale): string {
  const rounded = Math.round(n / 1000) * 1000;
  return `≈ ${new Intl.NumberFormat(lang === 'fr' ? 'fr-FR' : 'en-GB').format(rounded)}`;
}
