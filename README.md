# kk-portfolio

A personal design portfolio built with Next.js.

The website showcases projects across visual identity, motion design, and digital experiences.

## Tech Stack

- Next.js (App Router)
- React & TypeScript
- Tailwind CSS
- MDX & Content Collections
- pnpm

## Content

Projects are stored as MDX files in `content/projects/`.

Each project uses YAML frontmatter for metadata and MDX for its content. Content Collections validates project metadata and generates the data used by the application.

- `/` — Homepage
- `/projects` — Project index
- `/projects/[slug]` — Individual project pages

## Getting Started

**Requirements:** Node.js 24 and pnpm 10.

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

To create and run a production build:

```bash
pnpm build
pnpm start
```

## Status

Work in progress. The current version uses example content and a temporary interface.

## License

MIT. See [LICENSE](./LICENSE).
