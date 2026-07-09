# Alejandro Matta — Portfolio

Personal portfolio site built with Next.js, Tailwind CSS, and Framer Motion, using a terminal-inspired theme.

## Stack

- [Next.js](https://nextjs.org) (App Router)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide](https://lucide.dev) for icons

## Getting started

This project targets Node.js 22 (see `.nvmrc`).

```bash
nvm use
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Content

Site copy and data live in `src/lib/data.ts`:

- `profile` — name, role, tagline, location, email, and social links
- `projects` — currently placeholder entries (`Project One`–`Four`); replace with real projects
- `skills` — grouped skill tags shown in the Skills section
- `credentials` — education and certifications shown in the About section

Section components live in `src/components/`.

## Scripts

- `npm run dev` — start the development server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — run ESLint

## Deployment

Deploys to [Vercel](https://vercel.com/new) with zero configuration, connected to the GitHub repo and it builds and deploys on every push to main.
