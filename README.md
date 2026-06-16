# Abdulkarim Aljundubi — Portfolio

Personal portfolio website built with **Astro 5** and **Tailwind CSS v4**, featuring full bilingual support (English + Arabic with RTL).

**Live:** [Here](https://portfolio-abdulkarim.vercel.app)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Astro 5](https://astro.build) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Icons | [astro-icon](https://github.com/natemoo-re/astro-icon) + Devicons |
| SEO | [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) |
| Language | TypeScript |

---

## Features

- **Bilingual** — English (`/`) and Arabic (`/ar/`) with automatic RTL layout
- **Sections** — Hero, About, Education, Projects, Contact
- **Single source of truth** — all text for both languages lives in `src/i18n/translations.ts`
- **Path aliases** — `@components/*`, `@layouts/*`, `@i18n/*`, etc.
- **Sitemap** — auto-generated on build

---

## Getting Started

```bash
npm install
npm run dev      # → http://localhost:4321      (English)
                 # → http://localhost:4321/ar/  (Arabic)
npm run build    # production build → ./dist
npm run preview  # preview the production build locally
```

---

## Project Structure

```
src/
├── components/     # Hero, About, Projects, Contact, Header, Footer …
├── layouts/        # MainLayout, SectionLayout, BoxLayout
├── pages/
│   ├── index.astro   # English route  /
│   └── ar/
│       └── index.astro  # Arabic route  /ar/
├── i18n/
│   └── translations.ts  # All site text (EN + AR)
└── styles/
    └── global.css       # Global styles & CSS variables
```

---

## Customization

### Content
Edit `src/i18n/translations.ts` to update any text, projects, or education entries for both languages.

### Accent color
The neon blue (`#1ad1ff`) is defined once in `src/styles/global.css`:

```css
--color-primary: #1ad1ff;
```

Change that value and it updates across the entire site.

### Domain
Set your real domain in `astro.config.mjs` before deploying:

```js
site: 'https://your-domain.com',
```

---

## License

MIT
