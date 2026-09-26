import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiPython,
  SiNextdotjs,
  SiPhp,
  SiAngular,
  SiNginx,
} from 'react-icons/si';

/* ── Hero ─────────────────────────────────────────────── */

export const heroSentences = [
  "Explorer et intégrer de l'IA",
  'Aller à la salle',
  'Construire des interfaces propres et performantes',
  'Ecouter de la musique',
  'Automatiser tout ce qui peut l\'être',
];

/* ── About ────────────────────────────────────────────── */

export const aboutText =
  "Je suis Tyméo MERCIER, diplômé d'un BTS SIO SLAM et en formation chez Aflokkat, dans le parcours CLIC (Conception logicielle, IA & cybersécurité). En parallèle, je travaille déjà en freelance : je conçois et je maintiens des sites et des outils pour de vrais clients. Ce qui me motive le plus, c'est d'intégrer de l'IA dans des solutions concrètes.";

/* ── Skills ───────────────────────────────────────────── */

export const skills = [
  { name: 'React', progress: 70, status: 'Maîtrisé', icon: SiReact, accent: '#5ed3f3' },
  { name: 'Next.js', progress: 72, status: 'Maîtrisé', icon: SiNextdotjs, accent: '#ffffff' },
  { name: 'TypeScript', progress: 65, status: 'En cours', icon: SiTypescript, accent: '#3578c6' },
  { name: 'Node.js', progress: 60, status: 'En cours', icon: SiNodedotjs, accent: '#6abf4b' },
  { name: 'Angular', progress: 55, status: 'En cours', icon: SiAngular, accent: '#dd0031' },
  { name: 'PHP', progress: 60, status: 'En cours', icon: SiPhp, accent: '#777bb4' },
  { name: 'Python', progress: 65, status: 'En cours', icon: SiPython, accent: '#3776ab' },
  { name: 'PostgreSQL', progress: 72, status: 'Maîtrisé', icon: SiPostgresql, accent: '#2f5e9f' },
  { name: 'Tailwind CSS', progress: 75, status: 'Maîtrisé', icon: SiTailwindcss, accent: '#38bdf8' },
  { name: 'Git', progress: 70, status: 'Maîtrisé', icon: SiGit, accent: '#f05032' },
  { name: 'Docker', progress: 50, status: 'En cours', icon: SiDocker, accent: '#0db7ed' },
  { name: 'Linux / Nginx', progress: 68, status: 'Maîtrisé', icon: SiNginx, accent: '#009639' },
];

export const aiTools = [
  { name: 'Claude API', desc: 'Intégration d\'APIs LLM Anthropic dans des applications de prod' },
  { name: 'OpenAI / Codex', desc: 'GPT, Codex CLI, intégration dans des wrappers internes (stage MyOrigines)' },
  { name: 'Ollama', desc: 'Déploiement de LLM en local (qwen, llama) pour fallback ou inference privée' },
  { name: 'Claude Code', desc: 'Développement assisté par IA, refactoring, déploiement automatisé' },
  { name: 'n8n', desc: 'Orchestration de workflows IA et automatisations multi-services' },
  { name: 'Prompt Engineering', desc: 'Conception de prompts systèmes et agents conversationnels' },
  { name: 'RAG / Embeddings', desc: 'Pipelines de recherche sémantique (multilingual-e5-base, ONNX)' },
  { name: 'Vector search', desc: 'pgvector, recherche par similarité dans PostgreSQL (Shimmer)' },
  { name: 'MCP servers', desc: 'Model Context Protocol pour étendre les agents IA (semble, context7)' },
  { name: 'Agents IA', desc: 'Conception d\'agents conversationnels e-commerce et vendeurs IA' },
  { name: 'Multi-agent', desc: 'Orchestration de sous-agents spécialisés (review, planning, exploration)' },
  { name: 'IA appliquée business', desc: 'Analyse SAV sur 80k+ mails, intégration Power BI, automatisations Jira' },
];

/* ── Projects ─────────────────────────────────────────── */

export type ProjectStatus = 'done' | 'wip' | 'paused' | 'active';
export type ProjectType = 'pro' | 'student' | 'personal';

export interface Production {
  label: string;
  url: string;
}

export interface SubProject {
  name: string;
  desc: string;
}

export interface Project {
  title: string;
  description: string;
  stack: string;
  status: ProjectStatus;
  type: ProjectType;
  github?: string;
  link?: string;
  colSpan?: number;
  subProjects?: SubProject[];
  productions?: Production[];
  period?: string;
}

export const statusLabels: Record<ProjectStatus, string> = {
  done: 'Terminé',
  wip: 'En cours',
  paused: 'En pause',
  active: 'Actif',
};

export const typeLabels: Record<ProjectType, string> = {
  pro: 'Pro',
  student: 'Étudiant',
  personal: 'Personnel',
};

export const projects: Project[] = [
  {
    title: 'Blindz',
    description: "Jeu de blind test sur ses propres playlists Spotify ou Deezer, sans rien préparer. Trois façons de jouer : autour d'une table, à distance, ou sur un seul téléphone. Multijoueur temps réel via Socket.IO, anti-triche côté serveur (la réponse n'est jamais envoyée aux joueurs avant la révélation) et suites E2E qui rejouent des soirées complètes. En production sur son propre domaine.",
    stack: 'Next.js · TypeScript · Node.js · Express · PostgreSQL · Socket.IO · Docker',
    status: 'active',
    type: 'personal',
    period: '10/2025 → en cours',
    link: 'https://blindz.app',
    github: 'https://github.com/tymmerc/blindify',
    productions: [
      { label: 'Jouer sur blindz.app', url: 'https://blindz.app' },
      { label: 'Code source', url: 'https://github.com/tymmerc/blindify' },
    ],
  },
  {
    title: 'Shimmer',
    description: "Vendeur IA conversationnel pour e-commerce : le client décrit ce qu'il cherche et Shimmer lui trouve le bon produit. Recherche par similarité (embeddings multilingual-e5-base via ONNX), pipeline RAG, fallback Ollama. Monorepo pnpm avec API Express, workers BullMQ et SDK embarquable avec consentement RGPD intégré. Le CA additionnel est prouvé par un groupe témoin, et la dépense IA est plafonnée par boutique. En bêta.",
    stack: 'Next.js · TypeScript · Express · Prisma · PostgreSQL · pgvector · Redis · BullMQ · Ollama · Claude API',
    status: 'wip',
    type: 'personal',
    period: '03/2026 → en cours',
    link: 'https://tymmerc.eu/shimmer/',
    github: 'https://github.com/tymmerc/shimmer',
    productions: [
      { label: 'Application en ligne', url: 'https://tymmerc.eu/shimmer/' },
    ],
  },
  {
    title: 'Cors\'Air Aventure',
    description: "Refonte du site d'une compagnie de balades en autogire en Corse du Sud. Le site WordPress/Divi a été reconstruit en Next.js sans changer le design, puis mis en ligne. J'en assure la maintenance : sauvegardes quotidiennes, monitoring de disponibilité avec alertes, correctifs et optimisations (vidéo d'accueil passée de 59 à 9 Mo).",
    stack: 'Next.js 15 · Tailwind v4 · Framer Motion · TypeScript · Vercel',
    status: 'active',
    type: 'pro',
    period: '04/2026 → en cours',
    link: 'https://corsairaventure.com',
    productions: [
      { label: 'Site en ligne', url: 'https://corsairaventure.com' },
    ],
  },
  {
    title: 'Clearpath',
    description: "Ma marque freelance : sites web, outils sur mesure et intégration d'IA pour les petites entreprises. C'est sous ce nom que je travaille avec mes clients. Site vitrine avec outils interactifs et témoignages.",
    stack: 'Next.js · TypeScript · Tailwind · Framer Motion',
    status: 'active',
    type: 'pro',
    link: 'https://tymmerc.eu/clearpath/',
    github: 'https://github.com/tymmerc/clearpath',
    productions: [
      { label: 'Site en ligne', url: 'https://tymmerc.eu/clearpath/' },
      { label: 'Code source', url: 'https://github.com/tymmerc/clearpath' },
    ],
  },
  {
    title: 'Calorifique',
    description: 'Compteur de calories personnel. Suivi des repas, scan de produits, statistiques quotidiennes. Stack Next.js avec Prisma et PostgreSQL, déployé sur le sous-domaine dev.',
    stack: 'Next.js · Prisma · PostgreSQL · Tailwind',
    status: 'wip',
    type: 'personal',
    period: '04/2026 → en cours',
    link: 'https://dev.tymmerc.eu/calorifique',
    productions: [
      { label: 'Application en ligne', url: 'https://dev.tymmerc.eu/calorifique' },
    ],
  },
  {
    title: 'ALVA',
    description: 'Assistant IA desktop par Clearpath. App Electron avec accès fichiers, transcription de réunions avec détection de speakers, analyse de documents (PDF, images), intégrations Outlook et Jira. Builds .dmg et .exe distribués via l\'infra.',
    stack: 'Electron · Node.js · Codex CLI · TypeScript',
    status: 'wip',
    type: 'pro',
    period: '03/2026 → en cours',
    link: 'https://tymmerc.eu/alva/',
    productions: [
      { label: 'Landing + downloads', url: 'https://tymmerc.eu/alva/' },
    ],
  },
  {
    title: 'MyOrigines',
    description: 'Stage de 2 mois chez MyOrigines. 4 projets livrés : wrapper IA Codex pour employés non-tech, refonte application Power BI pour partenaires, dashboard SAV (80k+ mails analysés), app Jira pour gestion de tickets.',
    stack: 'n8n · Next.js · Power BI · Jira API · IA (Codex)',
    status: 'done',
    type: 'pro',
    period: '01/2026 → 02/2026',
    link: 'https://docs.google.com/document/d/1lpiNqGjSyGjw-v0I1XnAWGxuR_Gt9OqtJD3yVOyLFd8/edit?usp=sharing',
    productions: [
      { label: 'Documentation', url: 'https://docs.google.com/document/d/1lpiNqGjSyGjw-v0I1XnAWGxuR_Gt9OqtJD3yVOyLFd8/edit?usp=sharing' },
    ],
  },
  {
    title: 'Dev Hub',
    description: 'Espace personnel regroupant mes projets expérimentaux et prototypes réalisés en alternance. Terrain de test pour explorer de nouvelles technos et idées.',
    stack: 'Next.js · FastAPI · PostgreSQL · Nginx',
    status: 'done',
    type: 'pro',
    period: '09/2024 → 06/2025',
    link: 'https://dev.tymmerc.eu',
    productions: [
      { label: 'Application en ligne', url: 'https://dev.tymmerc.eu' },
    ],
  },
  {
    title: 'E-comBox',
    description: 'Reprise et remise en état d\'un projet e-commerce existant. Analyse du fonctionnement, corrections et optimisations sur les parties incomplètes, intégration de SonarQube pour l\'analyse de qualité de code.',
    stack: 'Node.js · SonarQube · Git',
    status: 'done',
    type: 'pro',
    period: '05/2025 → 06/2025',
    productions: [
      { label: 'Rapport SonarQube', url: '#' },
    ],
  },
  {
    title: 'Suivi Compétences',
    description: 'Application web full-stack de suivi de compétences par projet. API REST en PHP/Slim avec Eloquent ORM, frontend Angular, base MariaDB. Déploiement sur VPS avec PHP-FPM et Nginx. Gestion d\'authentification, rôles utilisateurs et CRUD complet.',
    stack: 'Angular · PHP · Slim · MariaDB · Nginx',
    status: 'wip',
    type: 'student',
    period: '09/2024 → 02/2025',
    link: 'https://tymmerc.eu/competences/',
    productions: [
      { label: 'Application en ligne', url: 'https://tymmerc.eu/competences/' },
    ],
  },
  {
    title: 'Quiz App',
    description: 'Application de quiz interactive déployée en production. Système de scoring, gestion des sessions utilisateur via cookies, interface responsive. Déployée sur VPS avec Next.js standalone et reverse proxy Nginx.',
    stack: 'Next.js · React · Tailwind · Nginx',
    status: 'done',
    type: 'student',
    period: '11/2024 → 01/2025',
    github: 'https://github.com/tymmerc/quiz-app',
    link: 'https://tymmerc.eu/quiz/',
    productions: [
      { label: 'Code source', url: 'https://github.com/tymmerc/quiz-app' },
      { label: 'Application en ligne', url: 'https://tymmerc.eu/quiz/' },
    ],
  },
  {
    title: 'App Veille',
    description: 'Application de veille technologique IA personnalisée. L\'utilisateur décrit ses centres d\'intérêt, l\'IA se charge du reste : articles scorés, notifications Discord, interface de lecture.',
    stack: 'Next.js · Prisma · Tailwind · Discord API · Ollama',
    status: 'done',
    type: 'personal',
    period: '02/2026 → 03/2026',
    link: 'https://tymmerc.eu/veille',
    productions: [
      { label: 'Application en ligne', url: 'https://tymmerc.eu/veille' },
    ],
  },
];

/* ── Veille ───────────────────────────────────────────── */

export const veille = {
  theme: 'Intelligence Artificielle et développement web moderne',
  appUrl: 'https://tymmerc.eu/veille',
  description:
    "Application de veille IA personnalisée. L'utilisateur décrit ses centres d'intérêt et l'IA s'occupe du reste : agrégation d'articles, scoring par pertinence, notifications Discord automatiques.",
  stack: 'Next.js · Prisma · Tailwind · Discord API · Ollama',
  sources: [
    { name: 'GitHub Trending', type: 'tool', description: 'Repos et projets populaires du moment' },
    { name: 'Hacker News', type: 'community', description: 'Actualités tech et discussions' },
    { name: 'r/MachineLearning', type: 'community', description: 'Recherche et avancées IA' },
    { name: 'TLDR Newsletter', type: 'newsletter', description: 'Résumé quotidien des news tech' },
    { name: 'Anthropic Blog', type: 'blog', description: 'Avancées Claude et IA responsable' },
    { name: 'Vercel Blog', type: 'blog', description: 'Next.js, edge computing, déploiement' },
  ],
};

/* ── Certifications ───────────────────────────────────── */

export interface Certification {
  name: string;
  issuer: string;
  status: 'obtained' | 'in_progress';
}

export const certifications: Certification[] = [
  { name: 'BTS SIO SLAM', issuer: 'Éducation nationale', status: 'obtained' },
  { name: 'Parcours CLIC : conception logicielle, IA & cybersécurité', issuer: 'Aflokkat (ESIA)', status: 'in_progress' },
  { name: 'PIX', issuer: 'PIX', status: 'obtained' },
  { name: 'MOOC SecNumAcadémie', issuer: 'ANSSI', status: 'obtained' },
  { name: 'Azure AI Fundamentals', issuer: 'Microsoft', status: 'obtained' },
  { name: 'CCNA', issuer: 'Cisco', status: 'obtained' },
];

/* ── Online Presence ──────────────────────────────────── */

export const onlinePresence = [
  {
    platform: 'GitHub',
    url: 'https://github.com/tymmerc',
    description: 'Repos publics, contributions et projets open-source',
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/tym%C3%A9o-mercier-aa9618265/',
    description: 'Profil professionnel et réseau',
  },
  {
    platform: 'Landing',
    url: 'https://tymmerc.eu',
    description: 'Page d\'accueil présentant mes projets et mon parcours',
  },
  {
    platform: 'App Veille',
    url: 'https://tymmerc.eu/veille',
    description: 'Application de veille technologique IA personnalisée',
  },
];

/* ── Roadmap ──────────────────────────────────────────── */

export const roadmap = [
  {
    label: 'Parcours CLIC',
    detail: "Formation conception logicielle, IA & cybersécurité chez Aflokkat, avec Blindz comme projet fil rouge. Jury en février 2027.",
  },
  {
    label: 'Freelance',
    detail: "Développer mon activité : plus de clients suivis dans la durée, du site vitrine à l'outil sur mesure.",
  },
  {
    label: 'IA appliquée',
    detail: "Continuer à brancher de l'IA utile dans de vrais produits, comme Shimmer pour l'e-commerce.",
  },
];

/* ── Contact ──────────────────────────────────────────── */

export const contact = {
  email: 'tym.mercier@gmail.com',
};
