# Abdulkarim Aljundubi — Portfolio

A bilingual (English + Arabic with RTL) portfolio built with Astro + Tailwind CSS v4.
Same design as the reference template, with the green accent replaced by a neon light-blue (#1ad1ff).

## Run locally
```bash
npm install
npm run dev      # http://localhost:4321  (English)
                 # http://localhost:4321/ar/  (Arabic)
npm run build    # production build into ./dist
```

## Languages
- English (default):  /
- Arabic (RTL):       /ar/
- The language toggle in the header switches between them (EN ⇄ AR).

## What you still need to add (place files in /public)
These are referenced by the site but not included yet:

1. /public/img/profile.jpg        ← your profile photo (square, ~400x400)
2. /public/img/medvision.webp      ← screenshot of the MedVision project (16:9)
3. /public/img/logos/kaggle_logo.png  ← Kaggle logo for the certification card
4. /public/img/logos/*.svg         ← tech logos used in the "Technologies" section:
   html_icon.svg, css_icon.svg, js_icon.svg, react_icon.svg, python_icon.svg,
   java_icon.svg, oracle_icon.svg, git_icon.svg, github_icon.svg, vscode_icon.svg,
   vercel_icon.svg, xampp_icon.svg
   (You can grab these from https://devicon.dev or simpleicons.org)
5. /public/fonts/Sansation-*.woff  ← the Sansation font files (Light, Regular, Bold + italics)
   or replace the @font-face blocks in src/styles/global.css with another font.
6. /public/favicon.svg             ← site icon (optional)
7. /public/files/Abdulkarim_CV.pdf ← your CV (optional; add a download button if wanted)

## Where your data lives
All text (both languages) is in ONE file: src/i18n/translations.ts
Edit that file to change any wording. The Arabic was translated from your English;
feel free to refine it.

## Color
The neon blue is defined once as --color-primary in src/styles/global.css.
Change that single value to adjust the accent across the whole site.

## Config
- Set your real domain in astro.config.mjs (the `site` field) before deploying.
