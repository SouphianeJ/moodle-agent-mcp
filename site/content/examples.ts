import type { Locale } from '@/lib/i18n';
import type { Example } from './types';

/**
 * Synthetic examples. Each one follows the plan of a real scenario of the plugin (its slug in `scenario`): the steps,
 * the defaults and the guards come from that plan. Courses, people and figures are invented.
 */
export const examples: Record<Locale, Example[]> = {
  fr: [
    {
      id: 'build',
      persona: 'Enseignant, licence de gestion',
      scenario: 'course_full_build',
      request:
        'Construis mon cours “Initiation à la comptabilité” sur quatre semaines : une ressource et une activité par semaine, et un quiz de synthèse à la fin.',
      plan: [
        'Lit le cours, ses sections et ses activités pour savoir s’il est vide.',
        'Propose quatre sections avec une étiquette d’introduction, une ressource et une activité chacune, plus un quiz final, et attend votre accord.',
        'Crée le squelette en une opération, puis relit les sections et la liste des activités.',
      ],
      result: [
        '« Les quatre semaines sont en place : chacune a son introduction, une page de cours et un forum ou un exercice. Le quiz de synthèse compte 10 questions. Voici la liste relue dans Moodle. La création du squelette peut être annulée si besoin. »',
      ],
      guard: 'Dans un cours qui contient déjà des activités, l’assistant demande confirmation avant d’écrire.',
    },
    {
      id: 'grade',
      persona: 'Enseignante, BTS',
      scenario: 'assignment_grading_assist',
      request: 'Aide-moi à corriger le devoir “Étude de cas n° 2” avec la grille d’évaluation du cours.',
      plan: [
        'Lit les copies trois par trois : texte en ligne, fichiers déposés, pages scannées lues comme des images.',
        'Prépare pour chaque copie un brouillon de note et de commentaire, critère par critère.',
        'Vous présente les brouillons ; ne publie que ceux que vous confirmez.',
      ],
      result: [
        '« 24 copies lues, 24 brouillons prêts. Trois copies méritent votre attention : deux sont très courtes, une contient un fichier illisible. Rien n’est publié. Dites-moi lesquelles valider. »',
      ],
      guard: 'Brouillon d’abord, jamais de note publiée sans votre confirmation explicite.',
    },
    {
      id: 'remind',
      persona: 'Enseignant, lycée professionnel',
      scenario: 'assignment_follow_up',
      request: 'Qui n’a pas rendu le dossier de stage ? Relance-les et donne une semaine de plus à ceux qui ont un justificatif.',
      plan: [
        'Lit le bilan des remises puis la liste complète des « non rendu », page après page.',
        'Vous montre les noms et le texte de la relance, et attend votre accord avant d’envoyer.',
        'Accorde la prolongation uniquement aux personnes que vous nommez.',
      ],
      result: [
        '« 6 élèves n’ont pas rendu. Relance envoyée aux 6 après votre accord. Prolongation jusqu’au 21 accordée à 2 élèves, visible dans la liste des prolongations du devoir. »',
      ],
      guard: 'Un message envoyé ne se reprend pas : liste et texte validés par vous, puis jeton d’accord du serveur.',
    },
    {
      id: 'session',
      persona: 'Responsable de formation continue',
      scenario: 'training_session_open',
      request: 'Ouvre la session de mars de la formation “Sécurité au travail” pour ces douze stagiaires, à partir du cours modèle.',
      plan: [
        'Crée le cours depuis le modèle, sans les participants du modèle, avec les dates de la session.',
        'Prévisualise la création des comptes manquants et vous montre les lignes refusées avant de créer.',
        'Inscrit les stagiaires par une cohorte, crée le groupe de la session, puis publie l’annonce de bienvenue en dernier, après accord sur son texte.',
      ],
      result: [
        '« La session est ouverte : cours créé avec ses dates, 9 comptes créés et 3 retrouvés, 12 stagiaires inscrits comme étudiants, groupe “Mars” créé. L’annonce de bienvenue est publiée dans le forum des annonces. »',
      ],
      guard: 'Une étape à la fois, chaque résultat relu avant la suivante ; les comptes créés ne s’annulent pas, d’où l’aperçu.',
    },
    {
      id: 'storage',
      persona: 'Administrateur du site',
      scenario: 'storage_cleanup_run',
      request: 'Notre disque se remplit. Qu’est-ce qui prend de la place, et que peut-on libérer sans risque ?',
      plan: [
        'Lit l’inventaire nocturne du stockage : volumes du site, cours les plus lourds, cours inactifs (en écartant les cours masqués, qui peuvent être des modèles).',
        'Propose de supprimer d’abord les sauvegardes les plus anciennes, en gardant la plus récente de chaque cours, avec l’espace réellement récupérable.',
        'Supprime par lots, chacun après un aperçu que vous confirmez.',
      ],
      result: [
        '« Lot confirmé : 14 anciennes sauvegardes supprimées, 3,2 Go récupérables. L’espace revient sur le disque quand Moodle vide sa corbeille interne (toutes les 6 heures). Restent deux cours lourds dont la décision revient à leurs enseignants. »',
      ],
      guard: 'Toute suppression est définitive : aperçu d’abord, puis suppression avec le jeton de cet aperçu.',
    },
    {
      id: 'exam',
      persona: 'Enseignante, classe préparatoire',
      scenario: 'exam_setup_secure',
      request: 'Crée l’examen de mi-semestre : 20 questions, 1 h 30, une seule tentative. Le groupe “Tiers-temps” a 30 minutes de plus.',
      plan: [
        'Crée une catégorie de questions dédiée à l’examen et y place les questions.',
        'Crée le quiz avec des réglages verrouillés : une tentative, envoi automatique à l’échéance, correction différée.',
        'Ajoute la dérogation de temps du groupe, puis relit les questions et les réglages.',
      ],
      result: [
        '« L’examen est prêt, masqué, avec 20 questions et une durée de 1 h 30. Le groupe “Tiers-temps” a 2 h. Prévisualisez-le avant de l’ouvrir aux étudiants. »',
      ],
      guard: 'Les réglages d’examen (relecture fermée pendant l’épreuve, une seule tentative) ne changent que sur votre demande expresse.',
    },
    {
      id: 'quiz',
      persona: 'Enseignant, première année de licence',
      scenario: 'quiz_results_analysis',
      request: 'Comment s’est passé le quiz du chapitre 3 ? Qu’est-ce que je dois reprendre en cours ?',
      plan: [
        'Lit les statistiques du quiz : facilité et discrimination de chaque question.',
        'Lit les réponses des questions ratées pour repérer les erreurs fréquentes.',
        'Regarde qui n’a pas passé le quiz, sans contacter personne.',
      ],
      result: [
        '« Moyenne 11,8/20. Les questions 4 et 7 ont un taux de réussite sous 30 % : la plupart confondent actif et passif. Je vous propose de reprendre ce point avec un exemple. 5 étudiants sont sous 8/20 ; 3 n’ont pas passé le quiz. »',
      ],
      guard: 'Lecture seule : aucune écriture, et les résultats nominatifs restent entre vous et l’assistant.',
    },
    {
      id: 'dates',
      persona: 'Enseignante, IUT',
      scenario: 'course_dates_shift',
      request: 'Le semestre commence une semaine plus tard : décale toutes les dates du cours.',
      plan: [
        'Calcule l’aperçu : chaque date du cours et des activités avec sa nouvelle valeur.',
        'Vous montre l’aperçu et attend votre accord.',
        'Applique le décalage avec l’empreinte de l’aperçu ; si une date a changé entre-temps, rien n’est écrit.',
      ],
      result: [
        '« Toutes les dates ont avancé de 7 jours : début du cours, 9 échéances de devoirs et 4 ouvertures de quiz. Les dates vides restent vides. Le décalage peut être annulé. »',
      ],
      guard: 'Toutes les dates bougent, ou aucune.',
    },
    {
      id: 'activity',
      persona: 'Référent pédagogique',
      scenario: 'student_activity_review',
      request: 'Quels étudiants ne viennent plus sur le cours depuis deux semaines ?',
      plan: [
        'Lit la participation et l’achèvement du cours, d’abord en agrégé.',
        'Liste les participants dont le dernier accès au cours date de plus de 14 jours.',
        'Propose des suites (message, entretien), sans rien envoyer.',
      ],
      result: [
        '« 4 étudiants n’ont pas ouvert le cours depuis 14 jours ; 2 d’entre eux ont aussi des notes en baisse. Je vous suggère un message personnel pour les 4 ; voulez-vous que je prépare un texte ? »',
      ],
      guard: 'Lecture seule par défaut : l’assistant ne contacte jamais les étudiants dans ce scénario.',
    },
    {
      id: 'undo',
      persona: 'Enseignant, master',
      scenario: 'course_recovery_undo',
      request: 'J’ai demandé de masquer des activités et ce n’étaient pas les bonnes. Peux-tu revenir en arrière ?',
      plan: [
        'Liste vos opérations récentes que l’annulation peut encore défaire.',
        'Vous montre ce qui sera rétabli, et attend votre accord.',
        'Annule l’opération, puis vérifie dans le journal l’opération de compensation.',
      ],
      result: [
        '« Les 5 activités masquées tout à l’heure sont de nouveau visibles. Le journal montre l’annulation. Dites-moi lesquelles il fallait masquer. »',
      ],
      guard: 'Le retour le plus petit possible d’abord ; une restauration plus large demande une confirmation explicite.',
    },
  ],
  en: [
    {
      id: 'build',
      persona: 'Lecturer, business degree',
      scenario: 'course_full_build',
      request:
        'Build my course "Introduction to accounting" over four weeks: one resource and one activity per week, and a recap quiz at the end.',
      plan: [
        'Reads the course, its sections and activities to know whether it is empty.',
        'Proposes four sections, each with an intro label, a resource and an activity, plus a final quiz, and waits for your agreement.',
        'Creates the skeleton in one operation, then reads the sections and the activity list back.',
      ],
      result: [
        '"The four weeks are in place: each has its introduction, a course page and a forum or an exercise. The recap quiz has 10 questions. Here is the list as Moodle returns it. The skeleton can be undone if needed."',
      ],
      guard: 'In a course that already has activities, the assistant asks for confirmation before writing.',
    },
    {
      id: 'grade',
      persona: 'Teacher, vocational college',
      scenario: 'assignment_grading_assist',
      request: 'Help me grade the assignment "Case study 2" with the rubric of the course.',
      plan: [
        'Reads the submissions three at a time: online text, uploaded files, scanned pages read as images.',
        'Drafts a grade and a comment for each submission, criterion by criterion.',
        'Shows you the drafts; publishes only those you confirm.',
      ],
      result: [
        '"24 submissions read, 24 drafts ready. Three need your attention: two are very short, one has an unreadable file. Nothing is published. Tell me which ones to confirm."',
      ],
      guard: 'Draft first, never a published grade without your explicit confirmation.',
    },
    {
      id: 'remind',
      persona: 'Teacher, secondary school',
      scenario: 'assignment_follow_up',
      request: 'Who has not handed in the internship report? Remind them, and give one more week to those with a valid excuse.',
      plan: [
        'Reads the submission summary, then the whole "not submitted" list, page after page.',
        'Shows you the names and the text of the reminder, and waits for your agreement before sending.',
        'Grants the extension only to the people you name.',
      ],
      result: [
        '"6 students have not handed in. Reminder sent to the 6 after your agreement. Extension to the 21st granted to 2 students, shown in the extension list of the assignment."',
      ],
      guard: 'A sent message cannot be recalled: you approve the list and the text, then the server asks for a consent ticket.',
    },
    {
      id: 'session',
      persona: 'Training manager',
      scenario: 'training_session_open',
      request: 'Open the March session of the "Workplace safety" training for these twelve trainees, from the template course.',
      plan: [
        'Creates the course from the template, without the people of the template, with the dates of the session.',
        'Previews the creation of the missing accounts and shows you the refused rows before creating them.',
        'Enrols the trainees through a cohort, creates the group of the session, then posts the welcome announcement last, once you agree on its text.',
      ],
      result: [
        '"The session is open: course created with its dates, 9 accounts created and 3 found, 12 trainees enrolled as students, group "March" created. The welcome announcement is in the announcements forum."',
      ],
      guard: 'One step at a time, each result read before the next; created accounts cannot be undone, hence the preview.',
    },
    {
      id: 'storage',
      persona: 'Site administrator',
      scenario: 'storage_cleanup_run',
      request: 'Our disk is filling up. What takes the space, and what can we free safely?',
      plan: [
        'Reads the nightly storage inventory: site volumes, heaviest courses, inactive courses (leaving hidden ones aside: they may be templates).',
        'Proposes to delete the oldest backups first, keeping the latest of each course, with the space that can really be reclaimed.',
        'Deletes in batches, each after a preview you confirm.',
      ],
      result: [
        '"Batch confirmed: 14 old backups deleted, 3.2 GB reclaimable. The disk gets the space back when Moodle empties its internal trash (every 6 hours). Two heavy courses remain; their teachers decide."',
      ],
      guard: 'Every deletion is permanent: a preview first, then the deletion with the token of that preview.',
    },
    {
      id: 'exam',
      persona: 'Teacher, preparatory class',
      scenario: 'exam_setup_secure',
      request: 'Create the mid-term exam: 20 questions, 90 minutes, one attempt. The "Extra time" group gets 30 more minutes.',
      plan: [
        'Creates a question category for the exam and puts the questions in it.',
        'Creates the quiz with locked settings: one attempt, automatic submission at the deadline, deferred feedback.',
        'Adds the time override of the group, then reads the questions and the settings back.',
      ],
      result: [
        '"The exam is ready and hidden, with 20 questions and 90 minutes. The "Extra time" group has 2 hours. Preview it before you open it to students."',
      ],
      guard: 'Exam settings (review closed during the attempt, a single attempt) change only on your explicit request.',
    },
    {
      id: 'quiz',
      persona: 'Lecturer, first year',
      scenario: 'quiz_results_analysis',
      request: 'How did the chapter 3 quiz go? What should I teach again?',
      plan: [
        'Reads the quiz statistics: facility and discrimination of each question.',
        'Reads the answers to the failed questions to find the common mistakes.',
        'Checks who did not take the quiz, without contacting anyone.',
      ],
      result: [
        '"Average 11.8/20. Questions 4 and 7 have a success rate under 30%: most students mix up assets and liabilities. I suggest going over this with an example. 5 students are under 8/20; 3 did not take the quiz."',
      ],
      guard: 'Read-only: no write, and the named results stay between you and the assistant.',
    },
    {
      id: 'dates',
      persona: 'Lecturer, university',
      scenario: 'course_dates_shift',
      request: 'The term starts one week later: shift every date of the course.',
      plan: [
        'Computes the preview: every date of the course and its activities with its new value.',
        'Shows you the preview and waits for your agreement.',
        'Applies the shift with the fingerprint of the preview; if a date changed in between, nothing is written.',
      ],
      result: [
        '"Every date moved by 7 days: the course start, 9 assignment due dates and 4 quiz openings. Empty dates stay empty. The shift can be undone."',
      ],
      guard: 'All the dates move, or none.',
    },
    {
      id: 'activity',
      persona: 'Programme coordinator',
      scenario: 'student_activity_review',
      request: 'Which students have not come to the course for two weeks?',
      plan: [
        'Reads the participation and completion of the course, aggregated first.',
        'Lists the participants whose last access to the course is older than 14 days.',
        'Suggests follow-ups (a message, a meeting), without sending anything.',
      ],
      result: [
        '"4 students have not opened the course for 14 days; 2 of them also have falling grades. I suggest a personal message to the 4; shall I draft one?"',
      ],
      guard: 'Read-only by default: the assistant never contacts students in this scenario.',
    },
    {
      id: 'undo',
      persona: 'Lecturer, master’s degree',
      scenario: 'course_recovery_undo',
      request: 'I asked you to hide some activities and they were the wrong ones. Can you go back?',
      plan: [
        'Lists your recent operations that undo can still reverse.',
        'Shows you what will be restored and waits for your agreement.',
        'Undoes the operation, then checks the compensating operation in the log.',
      ],
      result: ['"The 5 activities hidden earlier are visible again. The log shows the undo. Tell me which ones should have been hidden."'],
      guard: 'The smallest revert first; a wider restore needs an explicit confirmation.',
    },
  ],
};
