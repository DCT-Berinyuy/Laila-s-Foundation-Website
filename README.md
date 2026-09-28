# Laila's Foundation website

The public website for **Laila's Foundation**, a community-based non-profit in Buea, South West Region, Cameroon. It supports internally displaced people (IDPs), widows, orphans and out-of-school children affected by the Anglophone crisis.

> _Nurturing Hope, Growing Care_

The site is fully static. It has no database, CMS, accounts or online payments. All copy lives in two TypeScript data files.

## Pages

| Route           | Content                                                                          |
| --------------- | -------------------------------------------------------------------------------- |
| `/`             | Hero, appeal pillars, programs overview, yearly goals, team gallery, contact CTA |
| `/about`        | Mission, the challenges the foundation responds to, values, founder, location    |
| `/programs`     | The four core programs and wider commitments                                     |
| `/impact`       | Yearly goals, expected impact, 12-month plan, sustainability, funding goal       |
| `/get-involved` | Ways to help (donate, partner, volunteer), contact details, objectives           |

`/sitemap.xml`, `/robots.txt` and a `404.html` fallback are generated at build time.

## Tech stack

- [SvelteKit](https://svelte.dev/docs/kit) (Svelte 5, runes) with `@sveltejs/adapter-static`. Every page is prerendered to plain HTML.
- TypeScript.
- Self-hosted variable fonts: Playfair Display for headings, Inter for body text.
- No CSS framework. Design tokens live in `src/lib/styles/global.css`.

## Getting started

Requires Node.js 20.19+ or 22.12+ (required by Vite 8).

```sh
npm install
npm run dev        # http://localhost:5173
npm run check      # type and Svelte diagnostics
```

## Building for production

Set `SITE_URL` to the public domain. It is used for canonical links, Open Graph and Twitter image URLs, the sitemap and JSON-LD.

```sh
SITE_URL=https://www.example.org npm run build
npm run preview    # serve ./build locally at http://localhost:4173
```

If `SITE_URL` is missing, the build falls back to the Vercel deployment URL when it runs on Vercel. Otherwise it prints a warning and uses `http://localhost:4173`.

### Deploying to Vercel

The repository is ready to import as-is. `vercel.json` sets the build command, the `build/` output directory, clean URLs (`/about` rather than `/about.html`), the custom 404 page, long-term caching for hashed assets and basic security headers.

1. In Vercel, choose **Add New → Project** and import this GitHub repository. Leave the framework preset and build settings as detected; `vercel.json` overrides them.
2. Optional: once a custom domain is attached, add a `SITE_URL` environment variable (for example `https://www.lailasfoundation.org`) and redeploy. Until then, production builds use the project's `*.vercel.app` URL, and preview deployments use their own URL.
3. Each push to `main` deploys to production. Each pull request gets its own preview URL.

The build log will show `Detected Vercel. Please remove adapter-static options…`. This is expected and harmless: the site deliberately builds to `build/`, and `vercel.json` serves it from there.

### Other hosts

The output in `build/` is plain static files and can be hosted anywhere:

- **Netlify:** build command `npm run build`, publish directory `build`, plus a `SITE_URL` environment variable.
- **Cloudflare Pages:** same build command and output directory. Set `SITE_URL` under _Settings → Environment variables_.
- **GitHub Pages:** serving from a sub-path (such as `/repo-name`) needs [`paths.base`](https://svelte.dev/docs/kit/configuration#paths) set in `vite.config.ts`. A custom domain avoids this.

## Editing content

| What to change                                               | File                                                  |
| ------------------------------------------------------------ | ----------------------------------------------------- |
| Name, motto, mission, contact details, location, navigation  | `src/lib/data/site.ts`                                |
| Programs, objectives, goals, timeline, funding goal, gallery | `src/lib/data/content.ts`                             |
| Page-specific copy (headings, intros)                        | `src/routes/**/+page.svelte`                          |
| Colours, typography, spacing                                 | `src/lib/styles/global.css`                           |
| Social preview image and iOS icon                            | `static/og-image.png`, `static/apple-touch-icon.png`  |

To replace gallery photos, add images to `src/lib/assets/team/` and update the `gallery` array in `content.ts`. Every image needs meaningful `alt` text. Vite fingerprints the files for long-term caching.

## Design: "Warm Hope" palette

| Token             | Hex       | Used for                                       |
| ----------------- | --------- | ---------------------------------------------- |
| Terracotta        | `#C1502E` | Primary accent, buttons, large headings        |
| Terracotta (dark) | `#A8431F` | Small text and links on cream (5.7:1 contrast) |
| Deep Teal         | `#1B4B4F` | Header, hero, footer, dark sections            |
| Amber             | `#E3A857` | Accents on teal only (never as text on cream)  |
| Warm Cream        | `#FAF3E9` | Page background                                |
| Charcoal          | `#2B2620` | Body text                                      |

The site targets WCAG 2.2 AA. It has a skip link, visible focus styles, semantic landmarks and headings, an accessible mobile menu (Escape closes it), and it respects `prefers-reduced-motion`. Numbers are exposed to screen readers even while the counters animate.

## Content notes and open items

These need confirmation from the foundation before launch:

- **Photos:** the team images are cropped from the appeal poster and are low resolution. Replace them with the original photos, ideally at least 1200px wide, taken with consent from the people pictured.
- **Numbers are goals, not results.** The figures shown (100 children, 50 widows, 100 IDP families, 50 young people) are the proposal's targets for the year and are labelled that way. Update them once real results are available.
- **Budget:** only the annual funding goal (5,500,000 FCFA, about $9,000 USD) is published. The line-item budget from the proposal is deliberately left out.
- **Donations:** there is no online payment. Visitors are asked to call or email. Add Mobile Money or bank details only once they are confirmed.
- **Details to confirm:** the street location (taken from the poster, "Checkpoint, Muea"), the founder bio wording, and the registration status of the organization.
