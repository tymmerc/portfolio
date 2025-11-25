import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiFastapi,
  SiPostgresql,
  SiTailwindcss,
  SiN8N,
  SiDocker,
} from 'react-icons/si';

export const heroSentences = [
  "Étudier de la data ou de l'IA",
  'Aller à la salle',
  'Construire des interfaces propres et performantes',
  'Ecouter de la musique',
  "Faire joujou avec de l'IA"
];

export const aboutText =
  "Je suis Tyméo MERCIER, étudiant BTS SIO SLAM en route vers une Licence IA. Mon objectif : rejoindre un écosystème tech pour participer au déploiement et l'utilisation d'intelligence artificielle";

export const skills = [
  { name: 'React', progress: 70, status: 'En cours', icon: SiReact, accent: '#5ed3f3' },
  { name: 'TypeScript', progress: 65, status: 'En cours', icon: SiTypescript, accent: '#3578c6' },
  { name: 'Node.js', progress: 60, status: 'En cours', icon: SiNodedotjs, accent: '#6abf4b' },
  { name: 'FastAPI', progress: 55, status: 'À renforcer', icon: SiFastapi, accent: '#02998b' },
  { name: 'PostgreSQL', progress: 72, status: 'Maîtrisé', icon: SiPostgresql, accent: '#2f5e9f' },
  { name: 'Tailwind CSS', progress: 75, status: 'Maîtrisé', icon: SiTailwindcss, accent: '#38bdf8' },
  { name: 'n8n', progress: 58, status: 'En cours', icon: SiN8N, accent: '#f97362' },
  { name: 'Docker', progress: 50, status: 'En cours', icon: SiDocker, accent: '#0db7ed' },
];

export const projects = [
  {
    title: 'Blindify',
    description: 'Blind-test connecté à Spotify avec génération IA de snippets, scoreboard en direct et attention sur la latence.',
    stack: 'React · Node · FastAPI · PostgreSQL',
    github: 'https://github.com/tymmerc/blindify',
  },
  {
    title: 'Finansphere',
    description: 'Dashboard financier automatisé : intégrations bancaires, automatisations n8n, scorecards temps réel.',
    stack: 'React · Node · n8n · Neon',
    github: 'https://github.com/tymmerc/finansphere',
    status: 'En cours',
  },
  {
    title: 'e-comBox',
    description: 'Console interne pour exécuter des scripts shell, PDF automatiques et CI/CD GitLab sécurisée.',
    stack: 'Angular · Node · GitLab CI',
    status: 'Terminé',
  },
  {
    title: 'SuiviCompétences',
    description: 'Application de suivi de compétences étudiants avec GraphQL, dashboards pédagogiques et retours instantanés.',
    stack: 'Angular · Node · GraphQL',
  },
];

export const roadmap = [
  {
    label: 'Licence IA',
    detail: 'Poursuivre après le BTS pour solidifier l’IA, le ML et les maths appliquées.',
  },
  {
    label: 'Master IA/Data',
    detail: 'Approfondir les pipelines data temps réel, l’IA générative et le design produit.',
  },
  {
    label: 'Stockholm',
    detail: 'Rejoindre Spotify / Klarna / Northvolt pour builder des expériences data-driven.',
  },
];

export const contact = {
  email: 'tym.mercier@gmail.com',
};
