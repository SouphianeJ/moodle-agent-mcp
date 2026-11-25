import type { Dict } from './types';

const fr: Dict = {
  meta: {
    title: 'Moodle Agent MCP : un assistant IA qui travaille dans Moodle, avec vos droits',
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
    title: 'Un assistant IA qui travaille dans Moodle, avec vos droits.',
    titleAccent: 'avec vos droits',
    aside: "Le plan d'abord. Le résultat, vérifié ensuite.",
    lead:
      "Demandez en français ce que vous feriez à la main : construire un cours, corriger des copies, relancer un groupe. L'assistant propose un plan, agit avec **vos** droits Moodle et rien de plus, puis vérifie le résultat.",
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
        tag: 'Moins de clics',
        title: 'Tu me montes ça pendant mon café\u00a0?',
        text: "Un cours de quatre semaines, un quiz avec ses questions, un carnet de notes pondéré : décrits en une phrase, montés en quelques minutes, dans votre Moodle.",
      },
      {
        tag: "Un aperçu avant l'irréversible",
        title: 'Hmm… oui, ça me semble pas mal. Vas-y.',
        text: "Les notes partent en brouillon. Suppressions, messages et notes publiées renvoient d'abord un aperçu : l'assistant le compare à votre demande et vous consulte au moindre écart. L'établissement peut exiger en plus votre clic dans Moodle.",
      },
      {
        tag: 'Vos droits, pas plus',
        title: 'Mêmes clés que moi, pas une de plus.',
        text: "L'assistant agit au nom d'une personne identifiée, avec ses permissions Moodle. Ce que vous ne pouvez pas faire à la main, il ne le peut pas non plus.",
      },
      {
        tag: 'Un retour en arrière possible',
        title: "Ah non… finalement, j'ai changé d'avis.",
        text: "Chaque écriture est journalisée ; une grande partie s'annule d'un mot. Les instantanés de cours couvrent les changements plus larges.",
      },
    ],
    demo: {
      title: 'Une demande, un plan, un résultat',
      lead: "Voici comment se déroule une conversation type. L'assistant suit le plan du scénario que le plugin lui fournit.",
      who: 'Enseignante',
      assistant: 'Assistant',
      request:
        'Dans mon cours « Gestion de projet », prépare le devoir « Rapport d’étape » pour le 12 mars, puis dis-moi qui ne l’a pas encore rendu.',
      planTitle: 'Plan proposé',
      plan: [
        'Lire le cours et ses sections (`course_get`, `course_sections_list`).',
        'Créer le devoir dans la section 3 : consignes, remise en fichier, date limite le 12 mars à 23 h 59.',
        'Après la date : lister les étudiants sans remise, et vous les montrer avant toute relance.',
      ],
      confirm: "D'accord, vas-y.",
      resultTitle: 'Résultat vérifié',
      result: [
        'Devoir « Rapport d’étape » créé en section 3, visible, date limite le 12 mars.',
        '`activity_list` le confirme ; l’opération peut être annulée.',
        'Je reviendrai vers vous avec la liste des remises manquantes : aucun message ne part sans votre accord.',
      ],
      replay: 'Animer la conversation',
      illustrative: 'Exemple illustratif, sans données réelles.',
    },
    howTitle: 'Comment ça marche',
    how: [
      {
        tag: 'Votre établissement installe le plugin',
        title: "On l'installe, et on garde la clé.",
        text: "Un zip à déposer dans Moodle, fermé par défaut. L'administrateur choisit qui peut l'utiliser et quelles familles d'outils ouvrir.",
      },
      {
        tag: 'Vous connectez votre assistant',
        title: 'Une adresse à coller, un clic pour autoriser.',
        text: "Claude, ChatGPT, Mistral Le Chat ou tout client MCP : une adresse à coller, une autorisation à donner dans Moodle, comme pour une application.",
      },
      {
        tag: 'Vous demandez, il planifie, vous validez',
        title: "Explique-moi d'abord ce que tu vas faire.",
        text: "L'assistant choisit le scénario adapté, annonce son plan, agit étape par étape, puis vérifie et cite ce que Moodle répond.",
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
        title: 'Il ne fera rien que je ne puisse faire.',
        text: 'Droits natifs de Moodle appliqués à chaque appel.',
      },
      {
        tag: 'Marqueur `_EDITABLE`',
        title: "Ce cours-là, tu n'y touches pas.",
        text: "Un cours n'est modifiable par l'IA que si une personne l'a ouvert (marqueur `_EDITABLE`).",
      },
      {
        tag: "Porte d'accès",
        title: "Fermé jusqu'à nouvel ordre.",
        text: "Porte d'accès fermée par défaut, par rôle ou par personne, en lecture ou en écriture.",
      },
      {
        tag: "Jeton d'accord",
        title: "Tu me montres avant d'envoyer\u00a0?",
        text: "Jeton d'accord pour ce qui ne se reprend pas : messages, suppressions, notes publiées.",
      },
      {
        tag: 'Journal et arrêt',
        title: 'Qui a fait quoi, et quand\u00a0?',
        text: 'Journal de chaque écriture, annulation, interrupteur d’urgence.',
      },
    ],
    trustCta: 'Lire la page sécurité',
    startTitle: 'Essayer en trois étapes',
    start: [
      { title: 'Installer', text: "Déposez le zip du plugin dans *Administration du site > Plugins*." },
      { title: 'Ouvrir', text: "Choisissez le mode OAuth, cochez un rôle dans la porte d'accès, en lecture pour commencer." },
      { title: 'Connecter', text: "Collez l'adresse du connecteur dans votre assistant et demandez : « Que peux-tu faire sur ce site Moodle ? »" },
    ],
    startCta: "Guide d'installation",
  },
  examples: {
    title: 'Exemples de demandes',
    lead:
      "Dix demandes d'enseignants, de responsables de formation et d'administrateurs, avec la réponse type de l'assistant. Chacune suit un scénario réel du plugin : mêmes étapes, mêmes garde-fous.",
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
          "Ce qui ne se reprend pas (une suppression, un message envoyé, des notes publiées) ne s'exécute pas au premier appel : le serveur renvoie un aperçu et un jeton à usage unique. L'assistant compare l'aperçu à votre demande et vous consulte au moindre écart. C'est le mode « ticket », par défaut : l'assistant relit lui-même l'aperçu. En mode « ticket et clic », les écritures qui atteignent des personnes (message, annonce, notes publiées, demande de nettoyage) attendent en plus le clic de la personne dans Moodle.",
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
      {
        id: 'gateway',
        title: 'Passerelle',
        text:
          "Une passerelle externe authentifie la personne et signe son identité à chaque requête (HMAC-SHA256, nonce à usage unique). Pour les organismes qui ont déjà une telle infrastructure ; la passerelle n'est pas fournie avec le plugin.",
      },
    ],
    apikeysTitle: "Clés d'API personnelles",
    apikeysText:
      "Pour un client qui ne sait ni OAuth ni passer par une passerelle (un script, un outil en ligne de commande), chaque personne peut créer ses propres clés, en plus du mode choisi. Le réglage « Accepter les clés d'API » est décoché par défaut.",
    apikeysPoints: [
      "Chacun crée les siennes sur « Mes clés d'API » (enseignants éditeurs et gestionnaires par défaut) : un nom, une portée lecture seule ou lecture et écriture, une expiration obligatoire (90 jours par défaut, 365 au plus). La clé n'est montrée qu'une fois.",
      "Mêmes barrières que tout le reste : la clé agit au nom de son propriétaire, sous la porte d'accès et son niveau, les familles, `_EDITABLE`, les droits Moodle, le journal et l'arrêt d'urgence.",
      "La personne révoque ses clés ; l'administrateur voit et révoque toutes les clés du site. Aucune clé n'est créée pour autrui.",
    ],
    apikeysSync:
      "Synchronisation d'établissement sans personne derrière : pas de clé de site, mais un compte Moodle dédié, avec un rôle restreint, ouvert par personne en lecture, qui crée sa propre clé en lecture seule (guide de l'administrateur, §3.7).",
    gateTitle: "Ouvrir la porte d'accès",
    gateText:
      "La porte décide qui peut utiliser le connecteur, à chaque requête. Deux niveaux : lecture, ou lecture et écriture. Un niveau ne fait que restreindre : les droits Moodle s'appliquent toujours en plus.",
    gatePoints: [
      'Par rôle : cochez par exemple « Enseignant » en lecture pour commencer.',
      'Par personne : la page « Utilisateurs autorisés » ajoute des volontaires un à un, chacun avec son niveau.',
      'Puis ouvrez les familles utiles (notation, inscriptions, communication…), et seulement celles-là.',
    ],
    familiesTitle: "Familles d'outils",
    familiesText:
      "Seule `course_activity_work` (le contenu des cours) est active par défaut. Les autres — notation, publication des notes, inscriptions, groupes, cohortes, calendrier et communication, achèvement, compétences, comptes du site, rapports, stockage, certificats — s'ouvrent une à une dans les réglages.",
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
  missing: {
    kicker: 'Erreur 404',
    title: 'Page introuvable',
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
        a: "Demandez-lui d'annuler : l'outil d'annulation défait une grande partie des écritures, avec vos droits. Pour un changement large, un instantané de cours pris avant permet de revenir en arrière. Ce qui ne se reprend pas (message envoyé, suppression définitive) passe d'abord par un aperçu que l'assistant compare à votre demande.",
      },
      {
        q: 'Les notes sont-elles publiées automatiquement ?',
        a: "Non. Les notes proposées par l'assistant sont des brouillons. Leur publication exige que l'administrateur ait ouvert la famille de publication des notes, puis passe par un aperçu et un jeton d'accord ; si l'établissement a choisi le mode « ticket et clic », elle attend aussi votre clic dans Moodle.",
      },
      {
        q: 'Faut-il modifier le cœur de Moodle ?',
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
        q: 'Combien ça coûte ?',
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
