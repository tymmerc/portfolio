# Portfolio — Tyméo Mercier

Site perso construit avec React + TypeScript + Vite pour présenter mon profil et mes projets.

## Stack
- React 19 + TypeScript
- Vite + Tailwind CSS
- React Icons

## Contenu & sections
- Hero avec punchlines dynamiques (`src/data/content.ts`).
- About : présentation courte.
- Skills : jauges de progression et statut.
- Projects : cartes avec stack et liens GitHub.
- Roadmap : étapes d'études/objectifs.
- Contact : mail direct.

## Démarrer en local
```bash
cd /opt/portfolio
npm install
npm run dev
```
Ouvrir http://localhost:5173.

## Personnaliser
- Textes et données : `src/data/content.ts`.
- Styles : `src/index.css` et tokens CSS (variables).

## Déploiement
```bash
npm run build
npm run preview
```

## Notes
- Pas de secret requis. `.env` éventuels sont ignorés (voir `.gitignore`).
