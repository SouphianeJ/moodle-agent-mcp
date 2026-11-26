import type { Dict } from './types';

const fr: Dict = {
  meta: {
    title: 'Agent Moodle, pour vous servir · Moodle Agent MCP',
    description:
      "Un plugin Moodle libre qui laisse votre assistant IA (Claude, ChatGPT, Mistral…) construire, corriger et suivre vos cours, avec les droits de l'enseignant et jamais davantage.",
  },
  nav: {
    skip: 'Aller au contenu',
    menu: 'Menu',
    close: 'Fermer le menu',
    home: 'Accueil',
    examples: 'Exemples',
    scenarios: 'Scénarios',
    security: 'Sécurité',
    install: 'Installer',
    skills: 'Skills',
    tests: 'Essais',
    faq: 'FAQ',
    legal: 'Mentions légales',
    otherLang: 'EN',
    otherLangLabel: 'Read this page in English',
    theme: 'Changer de thème',
    themeLight: 'Thème clair',
    themeDark: 'Thème sombre',
  },
  home: {
    eyebrow: 'Plugin Moodle libre · GPL v3',
    title: 'Agent Moodle, pour vous servir.',
    titleAccent: 'pour vous servir',
    aside: 'Clair : il agit, puis vérifie. Flou : il demande.',
    lead:
      "Demandez en français ce que vous feriez à la main : construire un cours, corriger des copies, relancer un groupe. Quand c'est clair, l'assistant agit avec **vos** droits Moodle et rien de plus, puis vérifie le résultat ; quand ça ne l'est pas, il vous pose la question.",
    ctaPrimary: "Voir comment l'installer",
    ctaSecondary: 'Parcourir des exemples',
    facts: [
      { value: '41', label: 'scénarios guidés' },
      { value: '542', label: 'outils Moodle' },
      { value: '4.1 – 5.3', label: 'versions de Moodle' },
    ],
    benefitsTitle: 'Ce que vous y gagnez',
    benefits: [
      {
        tag: 'Du temps pour la pédagogie',
        title: 'Pour moi de la réflexion et un café, pour toi une liste de tâches à faire.',
        text: "Laissez-lui les tâches longues et répétitives, et gardez votre temps pour la pédagogie, la diversification de vos activités, pour aller plus loin. Un cours de quatre semaines, un quiz avec ses questions, un carnet de notes pondéré : décrits en une phrase, montés dans votre Moodle.",
      },
      {
        tag: 'Un plan si vous le voulez, un contrôle là où il faut',
        title: 'Hmm… oui, ça me semble pas mal. Vas\u2011y.',
        text: "Si vous le demandez, il montre d'abord son plan. Pour ce qui ne se reprend pas (suppressions, messages, notes publiées), le serveur exige un jeton d'accord : l'assistant relit l'aperçu rendu et ne vous sollicite qu'en cas d'écart avec votre demande. L'établissement peut exiger en plus votre clic dans Moodle.",
      },
      {
        tag: 'Vos droits, pas plus',
        title: 'Mêmes clés que moi. Et non, pas le passe\u2011partout.',
        text: "L'assistant agit au nom d'une personne identifiée, avec ses permissions Moodle. Ce que vous ne pouvez pas faire à la main, il ne le peut pas non plus.",
      },
      {
        tag: 'Un retour en arrière possible',
        title: "Ah non… finalement, j'ai changé d'avis.",
        text: "Chaque écriture est journalisée ; une grande partie s'annule d'un mot. Les instantanés de cours couvrent les changements plus larges.",
      },
    ],
    demo: {
      title: 'Une demande claire, une demande floue',
      lead: "Voici comment se déroule une conversation type. L'assistant suit le plan du scénario que le plugin lui fournit.",
      who: 'Enseignante',
      assistant: 'Assistant',
      request:
        'Dans mon cours « Gestion de projet », crée le devoir « Rapport d’étape » en section 3, remise en fichier, pour le 12 mars à 23 h 59.',
      doneTitle: 'Fait, et vérifié',
      done: [
        'Cours et sections lus (`course_get`, `course_sections_list`).',
        'Devoir « Rapport d’étape » créé en section 3 : remise en fichier, date limite le 12 mars à 23 h 59.',
        '`activity_list` le confirme ; l’opération peut être annulée.',
      ],
      followUp: 'Et relance ceux qui sont en retard.',
      question: 'Une précision avant d’écrire : tous ceux qui n’auront rien remis le 12 mars au soir, ou un seul groupe ?',
      replay: 'Animer la conversation',
      illustrative: 'Exemple illustratif, sans données réelles.',
    },
    howTitle: 'Comment ça marche',
    how: [
      {
        tag: 'Votre établissement installe le plugin',
        title: "On l'installe… et on ferme à double tour.",
        text: "Un zip à déposer dans *Administration du site > Plugins*, fermé par défaut. L'administrateur choisit le mode OAuth, ouvre la porte d'accès à un rôle (en lecture pour commencer) et les familles d'outils utiles.",
      },
      {
        tag: 'Vous connectez votre assistant',
        title: 'Une adresse à coller, un clic. Même un lundi matin.',
        text: "Claude, ChatGPT, Mistral Le Chat ou tout client MCP : l'adresse du connecteur à coller, une autorisation à donner dans Moodle, comme pour une application. Premier essai : « Que peux-tu faire sur ce site Moodle ? »",
      },
      {
        tag: 'Vous demandez, il agit, il vérifie',
        title: 'Fais-le. Et prouve\u2011le\u2011moi.',
        text: "L'assistant choisit le scénario adapté. Demande claire : il agit étape par étape, puis vérifie et cite ce que Moodle répond. Demande floue : il pose une question courte. Il montre d'abord son plan si vous le lui demandez.",
      },
    ],
    scenariosTitle: '41 scénarios pour les tâches qui reviennent',
    scenariosText:
      "Construire, évaluer, corriger, suivre, communiquer, entretenir : chaque scénario dit à l'assistant quoi demander, dans quel ordre agir, quels garde-fous respecter et comment prouver que c'est fait.",
    scenariosCta: 'Voir les 41 scénarios',
    trustTitle: 'Conçu pour la confiance',
    trustLead: "Cinq verrous qui se cumulent. Aucun ne s'ouvre tout seul.",
    trust: [
      {
        tag: 'Droits natifs de Moodle',
        title: 'Il ne fera rien que je ne puisse faire. Même pas en douce.',
        text: 'Droits natifs de Moodle appliqués à chaque appel.',
      },
      {
        tag: 'Marqueur `_EDITABLE`',
        title: 'Ce cours-là, pas touche. Sauf si je te le confie.',
        text: "Un cours n'est modifiable par l'IA que si une personne l'a ouvert (marqueur `_EDITABLE`).",
      },
      {
        tag: "Porte d'accès",
        title: "Fermé jusqu'à nouvel ordre. Le mien.",
        text: "Porte d'accès fermée par défaut, par rôle ou par personne, en lecture ou en écriture.",
      },
      {
        tag: "Jeton d'accord",
        title: 'Un message parti ne revient pas. Alors on relit avant.',
        text: "Jeton d'accord du serveur pour ce qui ne se reprend pas : messages, suppressions, notes publiées. L'assistant relit l'aperçu ; votre clic dans Moodle si l'établissement l'exige.",
      },
      {
        tag: 'Journal et arrêt',
        title: 'Qui a fait quoi, et quand\u00a0? Tout est noté.',
        text: 'Journal de chaque écriture, annulation, interrupteur d’urgence.',
      },
    ],
    trustCta: 'Lire la page sécurité',
    testsLine: 'Ce que ça donne vraiment : six demandes mesurées sur un Moodle de test, avec leurs appels, leur durée et leurs tokens. Et quel modèle choisir.',
    testsCta: 'Voir les essais des modèles',
    measuredCta: 'Voir des exemples mesurés',
    startCta: "Guide d'installation",
  },
  examples: {
    title: 'Exemples de demandes',
    lead:
      "D'abord six demandes réellement passées sur un Moodle de test, mesurées. Puis dix demandes d'enseignants, de responsables de formation et d'administrateurs, avec la réponse type de l'assistant : chacune suit un scénario réel du plugin, mêmes étapes, mêmes garde-fous.",
    disclaimer:
      'Exemples illustratifs et synthétiques : les cours, personnes et chiffres sont inventés. Les réponses réelles dépendent de votre site, de vos droits et de votre assistant.',
    request: 'Demande',
    plan: "Ce que fait l'assistant",
    result: 'Réponse type',
    guard: 'Garde-fou',
    scenario: 'Scénario',
  },
  scenarios: {
    title: 'Les 41 scénarios',
    lead:
      "Un scénario est un plan que le plugin donne à l'assistant : le but, les informations à demander, les étapes (lire, agir, vérifier), les garde-fous et le critère de réussite. L'assistant choisit le bon scénario à partir de votre demande.",
    generated: 'Liste générée depuis le catalogue du plugin ({source}).',
    filterLabel: 'Afficher la famille',
    all: 'Toutes',
    risk: { none: 'lecture seule', low: 'risque faible', medium: 'risque moyen', high: 'sensible' },
    riskLegend:
      "Le niveau indique la prudence que le plan demande : « sensible » signifie aperçu obligatoire et accord explicite avant d'écrire.",
    skill: 'Skill',
  },
  security: {
    title: 'Sécurité et confiance',
    lead:
      "Le plugin ajoute à Moodle une porte d'entrée pour un assistant d'IA choisi par votre organisme. L'assistant agit au nom d'une personne identifiée, avec ses droits Moodle et jamais davantage. Le plugin n'appelle lui-même aucune IA.",
    sections: [
      {
        id: 'rights',
        title: 'Les droits natifs de Moodle',
        text:
          "Chaque appel s'exécute avec les capacités Moodle de la personne connectée, dans le contexte du cours ou de l'activité visé. Groupes séparés, rôles, dérogations : tout ce que Moodle applique à la main s'applique à l'assistant.",
      },
      {
        id: 'editable',
        title: 'La barrière `_EDITABLE`',
        text:
          "Un cours n'accepte les écritures de l'IA que si son nom abrégé contient `_EDITABLE`. Seule une personne peut l'ajouter, dans les paramètres du cours ; l'IA ne peut pas s'ouvrir un cours elle-même. Les lectures restent possibles partout où la personne peut lire.",
      },
      {
        id: 'gate',
        title: "La porte d'accès",
        text:
          "Fermée à l'installation, administrateurs compris. L'administrateur l'ouvre par rôle ou personne par personne, au niveau lecture ou lecture et écriture. Le retrait prend effet dès la requête suivante.",
      },
      {
        id: 'families',
        title: "Les familles d'outils",
        text:
          "Les outils sont rangés en familles (contenu des cours, notation, inscriptions, comptes du site…). Seule la famille du contenu des cours est active par défaut ; chaque autre famille s'ouvre explicitement.",
      },
      {
        id: 'consent',
        title: "Le jeton d'accord",
        text:
          "Ce qui ne se reprend pas (une suppression, un message envoyé, des notes publiées) ne s'exécute pas au premier appel : le serveur renvoie un aperçu et un jeton à usage unique. L'assistant relit lui-même l'aperçu et ne vous sollicite que s'il s'écarte de votre demande. C'est le mode « ticket », par défaut : l'assistant relit lui-même l'aperçu. En mode « ticket et clic », les écritures qui atteignent des personnes (message, annonce, notes publiées, demande de nettoyage) attendent en plus le clic de la personne dans Moodle. Quand l'assistant lit des copies, des messages de forum ou des messages d'étudiants, préférez le mode « ticket et clic » : un texte lu dans Moodle est une donnée, jamais une instruction, et seul votre clic prouve qu'une personne a approuvé l'action.",
      },
      {
        id: 'journal',
        title: 'Journal et annulation',
        text:
          "Chaque écriture est journalisée (secrets et jetons masqués), 90 jours par défaut. Une grande partie des écritures enregistre son inverse : l'outil d'annulation la défait avec les droits de la personne. Les notes passent d'abord par des brouillons.",
      },
      {
        id: 'stop',
        title: "Arrêt d'urgence",
        text:
          "Une case coupe le connecteur pour tout le monde, sans toucher aux autres réglages. Plus finement : retirer une personne de la porte, révoquer ses connexions, fermer une famille, limiter le nombre de requêtes par minute.",
      },
      {
        id: 'gdpr',
        title: 'RGPD',
        text:
          "Le plugin déclare ses tables et ses lieux externes à l'API de confidentialité de Moodle : l'outil de Moodle exporte et supprime les données d'une personne. Les données Moodle restent chez votre hébergeur ; ce que lit l'assistant est traité chez son fournisseur, selon l'offre que votre organisme a souscrite.",
        points: [
          'Votre organisme reste responsable de traitement ; le fournisseur d’IA est en principe son sous-traitant (DPA).',
          'Réglages de minimisation : familles fermées, niveau lecture, réponses non conservées, durée de conservation réglable.',
          'À votre charge, avec votre DPO : registre, information des personnes, analyse d’impact si l’IA aide à évaluer.',
        ],
      },
      {
        id: 'ai-notice',
        title: "Mention de l'IA (facultative)",
        text:
          "Un réglage ajoute une mention courte (« Préparé avec l'aide d'un assistant IA ») à ce que l'assistant publie pour d'autres : annonces, messages, messages de forum, commentaires de correction. Elle est désactivée par défaut ; l'établissement décide.",
      },
      {
        id: 'hosting',
        title: 'Hébergement',
        text:
          "Le plugin s'installe dans votre Moodle : il n'a pas de serveur à lui où copier vos données. Ce site et le service central d'enregistrement sont hébergés dans l'Union européenne, en France (OVH). Le service central ne reçoit que des informations publiques sur le site (adresse, nom, version du plugin), jamais de donnée sur une personne.",
      },
    ],
    disclaimer:
      "Ces informations décrivent le fonctionnement du logiciel ; elles ne constituent pas un avis juridique. La conformité de votre usage (RGPD, règlement européen sur l'IA) est à valider avec votre DPO et votre conseil.",
  },
  install: {
    title: 'Installer et connecter',
    lead:
      "Pour l'administrateur Moodle : installer le plugin, choisir le mode d'authentification, ouvrir la porte d'accès, puis connecter les assistants. Le plugin s'installe fermé : rien ne se passe tant que ces étapes ne sont pas faites.",
    toc: 'Sur cette page',
    adminTitle: 'Installer le plugin',
    adminSteps: [
      {
        title: 'Prérequis',
        text: 'Moodle 4.1 à 5.3, PHP 8.1 ou plus, site servi en https. Moodle 4.1 ne reçoit plus de correctifs de sécurité depuis le 8 décembre 2025 : préférez 4.5 LTS ou 5.x. Faites une sauvegarde comme avant toute installation de plugin.',
      },
      {
        title: 'Déposer le zip',
        text:
          "*Administration du site > Plugins > Installer des plugins*, déposez le zip (environ 3 Mo), puis suivez les écrans. Par le serveur : décompressez dans `local/mcpcourse` (dans `public/local/mcpcourse` à partir de Moodle 5.1).",
      },
      {
        title: 'Vérifier',
        text:
          "Le plugin s'installe fermé : mode passerelle sans secret, porte d'accès vide, seule la famille du contenu des cours active, marqueur `_EDITABLE` exigé.",
      },
    ],
    download: 'Obtenir le plugin : bientôt sur Moodle Marketplace ; en attendant, sur demande, avec son empreinte SHA-256 :',
    modesTitle: "Choisir le mode d'authentification",
    modes: [
      {
        id: 'oauth',
        title: 'OAuth autoportant (recommandé)',
        text:
          "Moodle devient son propre serveur d'autorisation OAuth 2.1. Chaque personne autorise son assistant dans son navigateur, connectée à Moodle comme d'habitude (SSO compris). Aucun mot de passe ni secret n'est donné à l'assistant.",
        points: [
          'Ajoutez les deux règles `/.well-known/…` que la page « Contrôler la configuration OAuth » calcule pour Apache, Nginx ou Caddy.',
          'Lancez le contrôle : toutes les lignes doivent être vertes, puis choisissez le mode OAuth.',
          "Hébergeur qui n'accepte pas ces règles : liez le site au relais de découverte (enregistrement central, ci-dessous).",
        ],
      },
    ],
    otherMode:
      "Une autre voie, la passerelle, ne sert qu'aux établissements qui en ont déjà une : elle est décrite dans les options avancées, en bas de page.",
    apikeysTitle: "Clés d'API personnelles",
    apikeysText:
      "Pour un client qui ne sait ni OAuth ni passer par une passerelle (un script, un outil en ligne de commande), chaque personne peut créer ses propres clés, en plus du mode choisi. Le réglage « Accepter les clés d'API » est décoché par défaut.",
    apikeysPoints: [
      "Chacun crée les siennes sur « Mes clés d'API » (enseignants éditeurs et gestionnaires par défaut) : un nom, une portée lecture seule ou lecture et écriture, une expiration obligatoire (90 jours par défaut, 365 au plus). La clé n'est montrée qu'une fois.",
      "Mêmes barrières que tout le reste : la clé agit au nom de son propriétaire, sous la porte d'accès et son niveau, les familles, `_EDITABLE`, les droits Moodle, le journal et l'arrêt d'urgence.",
      "La personne révoque ses clés ; l'administrateur voit et révoque toutes les clés du site. Aucune clé n'est créée pour autrui.",
    ],
    gateTitle: "Ouvrir la porte d'accès",
    gateText: "Fermée à l'installation, administrateurs compris. Vous l'ouvrez en deux niveaux : lecture, ou lecture et écriture.",
    gatePoints: [
      'Par rôle : cochez « Enseignant » en lecture pour commencer.',
      "Par personne (et par cohorte à partir de 2.5.3) : ajoutez-les un à un, chacun avec son niveau.",
      "Les droits Moodle s'appliquent toujours en plus ; un retrait compte dès la requête suivante.",
    ],
    gateFigure: {
      caption: "Illustration simplifiée des réglages de la porte d'accès.",
      roles: 'Rôles',
      read: 'Lecture',
      readWrite: 'Lecture et écriture',
      roleNames: ['Enseignant', 'Enseignant non éditeur', 'Étudiant'],
      add: 'Ajouter',
      search: 'Utilisateur ou cohorte…',
      level: 'Lecture',
      button: 'Ajouter',
      cohortSoon: 'cohortes : à partir de 2.5.3',
    },
    familiesTitle: "Familles d'outils",
    familiesText:
      "Seule `course_activity_work` (le contenu des cours) est active par défaut. Ouvrez ensuite, une à une, seulement les familles utiles : notation, inscriptions, communication…",
    connectTitle: 'Connecter les assistants',
    connectText:
      "L'adresse à donner est toujours `https://<votre Moodle>/local/mcpcourse/mcp.php`. En mode OAuth, l'assistant découvre le reste et ouvre une page Moodle où la personne se connecte puis clique sur **Autoriser**. Les offres qui permettent un connecteur MCP personnalisé dépendent du fournisseur et de l'abonnement.",
    assistants: [
      {
        name: 'Claude (web et bureau)',
        steps: ["Réglages des connecteurs : ajouter un connecteur personnalisé.", "Coller l'adresse du connecteur, puis se connecter à Moodle et autoriser."],
      },
      {
        name: 'ChatGPT',
        steps: ['Ajouter un connecteur MCP personnalisé (selon votre offre, en mode développeur).', "Coller l'adresse, choisir OAuth, puis autoriser dans Moodle."],
      },
      {
        name: 'Mistral Le Chat',
        steps: ["Connecteurs : ajouter un connecteur MCP personnalisé avec l'adresse et l'authentification OAuth.", 'Autoriser dans Moodle.'],
        note:
          "Si le client s'enregistre par enregistrement dynamique (DCR), l'administrateur coche « Accepter l'enregistrement dynamique de clients ».",
      },
      {
        name: 'Claude Code',
        steps: ['`claude mcp add --transport http moodle https://<votre Moodle>/local/mcpcourse/mcp.php`', 'Puis `/mcp` dans Claude Code : le navigateur ouvre la page d’autorisation de Moodle.'],
      },
      {
        name: 'Autre client MCP',
        steps: [
          'Le plugin suit la spécification MCP (HTTP « Streamable », OAuth 2.1).',
          "Un client qui ne s'identifie ni par document de métadonnées ni par enregistrement dynamique peut être déclaré par l'administrateur sur la page « Clients OAuth ».",
        ],
      },
    ],
    firstTry: 'Premier essai conseillé : « Que peux-tu faire sur ce site Moodle ? » L’assistant décrit votre rôle, votre niveau d’accès et les familles ouvertes.',
    centralTitle: 'Enregistrement central',
    centralText:
      "Votre hébergeur ne permet pas d'ajouter les règles `/.well-known/…` ? Le service central publie pour votre site le document public de découverte OAuth. Le lien se fait depuis la page « Lien avec le relais de découverte » du plugin, par un bouton ou par une inscription manuelle. Seules des informations publiques sur le site y transitent ; connexions, jetons et données vont directement de l'assistant à votre Moodle.",
    centralCta: "Ouvrir l'enregistrement central",
    marketTitle: 'Moodle Marketplace',
    marketText: 'La fiche du plugin sur Moodle Marketplace est en préparation. En attendant, le plugin est fourni sur demande.',
    marketSoon: 'Bientôt',
    marketCta: 'Voir la fiche',
    advancedTitle: 'Options avancées',
    advanced: [
      {
        id: 'gateway',
        title: 'Mode passerelle',
        text:
          "Votre établissement a déjà une passerelle ou une plateforme d'intégration qui authentifie les personnes ? Le plugin peut s'y brancher : la passerelle signe l'identité de la personne à chaque requête (HMAC-SHA256, nonce à usage unique). Elle n'est pas fournie avec le plugin ; pour la plupart des sites, OAuth suffit.",
      },
      {
        id: 'sync',
        title: 'Un outil qui lit Moodle sans personne derrière',
        text:
          "Un script ou un outil de l'établissement doit lire Moodle sans personne derrière ? Créez-lui un compte Moodle dédié, avec un rôle limité à ce dont il a besoin et le droit de créer ses propres clés. Autorisez ce compte en lecture dans la porte d'accès, puis connectez-vous avec lui pour créer sa clé d'API en lecture seule, à renouveler avant son expiration (365 jours au plus). Il n'existe pas de clé « de site » qui donnerait tous les droits.",
      },
    ],
  },
  skills: {
    title: 'Skills pour votre assistant',
    lead:
      "Les skills sont des fiches d'instructions que l'assistant charge quand une tâche s'y prête. Les six skills du plugin reprennent, pour chaque famille de tâches, les plans des scénarios : étapes, appels minimaux, garde-fous et vérification finale. Elles complètent le connecteur, elles ne le remplacent pas.",
    listTitle: 'Les six skills',
    download: 'Télécharger le zip',
    scenarios: 'scénarios',
    platformsTitle: 'Installer selon votre assistant',
    platformsLead:
      "Les skills suivent le format ouvert Agent Skills : un dossier par skill, un fichier `SKILL.md` avec un en-tête `name` et `description`. Voici ce que chaque plateforme permet aujourd'hui, d'après sa documentation.",
    syncTitle: 'Une seule source',
    syncText:
      'Les skills sont générées par le plugin à partir de son catalogue de scénarios ; ce dépôt les publie telles quelles (`scripts/sync-skills.sh`). Ne les modifiez pas à la main.',
    licence: 'Licence des skills : GNU GPL v3 ou ultérieure, comme le plugin dont elles sont tirées.',
    descriptions: {
      'moodle-build-course-content': 'Construire un cours, publier des ressources, une leçon, un glossaire, un wiki, une base de données, un SCORM, un H5P.',
      'moodle-create-assessment': 'Examen sécurisé, quiz d’entraînement, devoir et carnet de notes.',
      'moodle-grade-student-work': 'Corriger des devoirs, les questions ouvertes d’un quiz, un atelier entre pairs.',
      'moodle-follow-class': 'Activité, remises manquantes, résultats, SCORM, plans, présences, rapports, journaux, certificats.',
      'moodle-communicate-and-organize': 'Annonces, groupes et tiers-temps, inscriptions, classe virtuelle, ouverture de session.',
      'moodle-maintain-course': 'Rentrée suivante, dates, réinitialisation, archivage, catégories, annulation, audit, stockage.',
    },
  },
  tests: {
    title: 'Essais des modèles',
    lead:
      "Quel modèle d'IA choisir pour piloter Moodle ? Nous avons mis de vrais agents au travail sur un Moodle de test et compté ce qu'ils ont réellement fait, pas ce qu'ils ont raconté.",
    when: 'Essais du 20 au 24 novembre 2026, banc Moodle 5.3, versions du plugin 2.4 à 2.5.1. Modèles : Claude Haiku, Claude Sonnet, Claude Opus.',
    verdictTitle: 'En bref',
    verdict: [
      {
        tag: 'Claude Sonnet · milieu de gamme',
        title: 'Le bon choix pour travailler.',
        text: "Il fait le travail complet de façon fiable : toutes les étapes de trois scénarios de bout en bout sur cinq, 5/6 et 10/11 sur les deux autres, le bon scénario choisi 37 fois sur 37, aucune question inutile, 96 à 97 % d'appels justes du premier coup.",
      },
      {
        tag: 'Claude Haiku · petit et peu cher',
        title: "Il s'en sort, avec un œil sur lui.",
        text: "Il choisit aussi bien le scénario (37/37) et réussit une bonne partie des tâches (5/7, 8/11), mais il demande plus de vérification : 17 questions inutiles, 3 questions nécessaires manquées sur 11, des étapes partielles, et il lui arrive de se déclarer réussi à tort.",
      },
      {
        tag: 'Claude Opus · le plus puissant',
        title: 'Excellent, mais pas indispensable ici.',
        text: "Opus n'apporte guère plus que Sonnet sur ces tâches : 7/7, 6/6 et 7/7 étapes, 100 % d'appels justes. Sonnet fait le travail entier avec environ 15 % de tokens en moins (mesure du 20/11).",
      },
    ],
    methodTitle: 'Comment on a mesuré',
    method: [
      "De vrais agents IA, neufs à chaque essai, avec une consigne neutre : ils ne savent pas ce qu'on mesure.",
      "Un vrai Moodle de test, peuplé d'étudiants fictifs créés par script.",
      "Le verdict se lit dans le journal du serveur (les appels réellement envoyés) et dans l'état du Moodle, jamais dans le récit de l'agent : les petits modèles se déclarent parfois réussis à tort.",
      'Pour les mesures fines : tirages à l’aveugle, versions mélangées, correcteur automatique testé avant, intervalles de confiance et tests exacts.',
    ],
    e2eTitle: 'Des scénarios réels, de bout en bout',
    e2eLead: "Une demande d'enseignant, l'agent fait tout le travail ; on compte les étapes réellement réussies.",
    e2e: {
      head: ['Scénario', 'Sonnet', 'Opus', 'Haiku'],
      rows: [
        ['A · Examen QCM de 10 questions, tiers-temps, notes sur 20, badge', '7/7', '7/7', 'partiel'],
        ['B · Devoir avec grille, copies PDF et DOCX, notation', '5/5', '6/6', 'non exploitable ce jour-là'],
        ['C · Leçon à branchements et forum', '5/6', '—', 'partiel'],
        ['D · Glossaire, wiki, base de données, SCORM, H5P', '7/7', '7/7', '5/7'],
        ['E · Offre de formation en 11 étapes', '10/11', '—', '8/11'],
      ],
    },
    e2eNotes: [
      'Opus le 20/11 sur A et B ; les autres passes de A à D le 21/11 ; E le 24/11 (plugin 2.5.1-dev). « — » : pas de passe.',
      'Haiku sur B : passe inexploitable à cause du script de préparation du banc, pas du modèle.',
      "Haiku varie beaucoup d'une passe à l'autre et sur-déclare sa réussite.",
    ],
    routeTitle: 'Comprendre une demande courte',
    routeLead: '37 demandes courtes en français, le 24/11, plugin 2.5.1 : le modèle doit choisir le bon scénario, et ne poser que les questions utiles.',
    route: {
      head: ['Mesure', 'Haiku', 'Sonnet'],
      rows: [
        ['Bon scénario choisi', '37/37', '37/37'],
        ['Questions inutiles posées', '17', '0'],
        ['Questions nécessaires manquées (sur 11)', '3', '0'],
      ],
    },
    callsTitle: 'Écrire un appel juste du premier coup',
    callsLead: '1 350 appels sur 10 outils lourds, du 20 au 22/11.',
    calls: {
      head: ['Modèle', 'Appels justes du premier coup'],
      rows: [
        ['Opus', '100 %'],
        ['Sonnet', '96 à 97 %'],
        ['Haiku', '66 à 69 % ; 87,6 % une fois les dates lisibles acceptées'],
      ],
    },
    changedTitle: 'Ce que les essais ont changé dans le plugin',
    changedLead: 'Les essais servent aussi à corriger le plugin. Quelques exemples :',
    changed: [
      'Dates lisibles (ISO 8601) acceptées : Haiku gagne 21 points (p < 0,0001).',
      "Un argument inconnu est refusé avec une suggestion et un exemple : Haiku gagne 19 points après correction ; aucun modèle ne renvoie l'appel refusé tel quel.",
      "Aperçu résolu (noms, avant → après) sur les écritures irréversibles qui touchent des personnes : écritures fausses de Sonnet de 12/40 à 2/40 (p = 0,003) ; pas d'effet net sur Haiku.",
    ],
    limitsTitle: 'Les limites, honnêtement',
    limits: [
      "Un banc de test, des données fictives, des scénarios écrits par l'équipe du plugin.",
      "Peu de passes par scénario ; Haiku varie d'une passe à l'autre.",
      'Modèles Claude seulement à ce jour.',
      'Résultats datés : versions du plugin 2.4 à 2.5.1.',
    ],
    othersTitle: 'Et ChatGPT, Mistral ?',
    othersText: 'Pas encore mesurés ; Mistral est prévu. Le plugin fonctionne avec tout client MCP : seule la mesure manque.',
  },
  missing: {
    kicker: 'Erreur 404',
    title: 'Cette page a séché le cours.',
    lead: "Même l'outil d'annulation ne la ramènera pas : cette adresse n'existe pas ou plus.",
    back: "Retour à l'accueil",
  },
  faq: {
    title: 'Questions fréquentes',
    lead: "Celles qu'on se pose avant de laisser une IA entrer dans son cours. Les réponses courtes ; le détail est dans les guides fournis avec le plugin.",
    items: [
      {
        q: "L'IA peut-elle faire plus que moi ?",
        a: "Non. Chaque appel s'exécute avec vos permissions Moodle, puis la porte d'accès, les familles ouvertes et la barrière `_EDITABLE` restreignent encore. Aucun réglage ne donne à l'assistant un droit que vous n'avez pas.",
      },
      {
        q: 'Quel assistant faut-il ?',
        a: 'Tout client compatible MCP : Claude, ChatGPT, Mistral Le Chat, Claude Code, ou un autre. La possibilité d’ajouter un connecteur personnalisé dépend de l’offre du fournisseur.',
      },
      {
        q: 'Mes données servent-elles à entraîner des modèles ?',
        a: "Cela ne dépend pas du plugin mais de l'offre souscrite auprès du fournisseur de l'assistant. Vérifiez ses documents contractuels ; préférez une offre professionnelle avec accord de traitement des données (DPA).",
      },
      {
        q: 'Et si l’assistant se trompe\u00a0? (Ça arrive.)',
        a: "Demandez-lui d'annuler : l'outil d'annulation défait une grande partie des écritures, avec vos droits. Pour un changement large, un instantané de cours pris avant permet de revenir en arrière. Ce qui ne se reprend pas (message envoyé, suppression définitive) passe d'abord par un aperçu et un jeton d'accord du serveur : l'assistant compare l'aperçu à votre demande.",
      },
      {
        q: 'Me demande-t-il la permission à chaque fois\u00a0?',
        a: "Non. Si la demande est claire, il agit, puis vérifie et vous cite ce que Moodle répond ; si elle ne l'est pas, il pose une question courte. Demandez-lui son plan d'abord si vous préférez le valider. Pour ce qui ne se reprend pas (suppressions, messages, notes publiées), le serveur exige un jeton d'accord : l'assistant relit l'aperçu et ne vous sollicite qu'en cas d'écart ; l'établissement peut exiger en plus votre clic dans Moodle.",
      },
      {
        q: 'Les notes sont-elles publiées automatiquement ?',
        a: "Non. Les notes proposées par l'assistant sont des brouillons. Leur publication exige que l'administrateur ait ouvert la famille de publication des notes, puis passe par un aperçu et un jeton d'accord ; si l'établissement a choisi le mode « ticket et clic », elle attend aussi votre clic dans Moodle.",
      },
      {
        q: 'Faut-il toucher au cœur de Moodle\u00a0? (Votre administrateur retient son souffle.)',
        a: "Non. C'est un plugin local standard, sans service web de Moodle. En mode OAuth, deux règles de réécriture sont à ajouter au serveur web, ou le relais de découverte s'en charge.",
      },
      {
        q: 'Mon Moodle est hébergé chez un prestataire : est-ce possible ?',
        a: "Oui. Le zip s'installe par l'interface. Si l'hébergeur ne permet pas d'ajouter les règles `/.well-known/…`, l'enregistrement central publie le document de découverte à sa place. Une fiche à transmettre à l'hébergeur est fournie avec le plugin.",
      },
      {
        q: 'Que sont les skills, et sont-elles obligatoires ?',
        a: "Facultatives. Le serveur donne déjà à l'assistant le plan de chaque scénario. Les skills en sont une copie installable dans l'assistant, utile pour qu'il choisisse vite la bonne démarche.",
      },
      {
        q: 'Combien ça coûte\u00a0? (La bonne nouvelle d’abord.)',
        a: 'Le plugin est un logiciel libre sous licence GNU GPL v3. L’abonnement à l’assistant d’IA reste à la charge de votre organisme, auprès du fournisseur de son choix.',
      },
      {
        q: 'Qui contacter ?',
        a: 'Écrivez à souphianejender@gmail.com pour une question, une démonstration ou un signalement de sécurité.',
      },
    ],
  },
  legal: {
    title: 'Licence, contact et mentions légales',
    description:
      "Licences du plugin, des skills et du site ; éditeur, directeur de la publication et hébergeur ; données personnelles : ce site ne dépose aucun cookie et ne collecte rien.",
    sections: [
      {
        id: 'licence',
        title: 'Licences',
        points: [
          'Le plugin `local_mcpcourse` est un logiciel libre distribué sous licence **GNU GPL v3 ou ultérieure**.',
          'Les skills de ce dépôt sont tirées du plugin et sont distribuées sous la même licence **GNU GPL v3 ou ultérieure**.',
          'Le code de ce site est sous licence **MIT** ; ses textes et schémas sous licence **Creative Commons BY 4.0**.',
          'Moodle est une marque déposée de Moodle Pty Ltd. Ce projet est indépendant et n’est ni approuvé ni soutenu par Moodle Pty Ltd. Les noms des assistants cités appartiennent à leurs éditeurs.',
        ],
      },
      { id: 'contact', title: 'Contact', text: 'souphianejender@gmail.com' },
      {
        id: 'publisher',
        title: 'Éditeur et hébergement',
        points: [
          'Éditeur du site : Souphiane Jender, contact : souphianejender@gmail.com.',
          'Directeur de la publication : Souphiane Jender.',
          'Hébergeur : OVH SAS, société par actions simplifiée au capital de 50 000 000 €, RCS Lille Métropole 424 761 419, 2 rue Kellermann, 59100 Roubaix, France, téléphone : +33 9 72 10 10 07.',
        ],
      },
      {
        id: 'gdpr',
        title: 'Vos droits',
        points: [
          "Ce site ne collecte aucune donnée : pas de formulaire, pas de compte, pas de cookie, pas de mesure d'audience.",
          "Pour toute question sur vos données (journal technique du serveur, échange par e-mail) ou pour exercer vos droits d'accès, de rectification ou d'effacement : souphianejender@gmail.com.",
        ],
      },
      {
        id: 'privacy',
        title: 'Données personnelles',
        text:
          "Ce site ne dépose aucun cookie, ne contient aucun outil de mesure d'audience et ne charge aucune ressource externe. Le serveur web ne tient aucun journal des pages consultées. Ses messages techniques (certificats, erreurs de connexion), qui peuvent contenir une adresse IP, restent dans le journal système du serveur environ deux semaines, puis sont effacés automatiquement. Le choix du thème clair ou sombre est gardé dans votre navigateur seulement.",
      },
    ],
  },
  footer: {
    tagline: 'Un assistant IA dans Moodle, avec les droits de l’enseignant.',
    licence: 'Plugin et skills : GPL v3 · Site : MIT · Textes : CC BY 4.0',
    contact: 'Contact',
    source: 'Code source',
    noCookies: 'Aucun cookie, aucune mesure d’audience.',
  },
};

export default fr;
