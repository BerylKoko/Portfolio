# Beryl Koko — Portfolio

A standalone static portfolio for product, data, design and technical execution. Includes five distinct case studies, source-backed project visuals, research artifacts, résumé and contact links.

## Local development

Requires Node 20.19+ (or 22.12+) for the Vite development server.

```sh
npm ci
npm run dev
```

Open the URL printed by Vite. The production site is plain HTML, CSS and JavaScript and has no runtime framework dependency.

```sh
npm run check
npm run build
```

The deployable output is `dist/`. Alternatively, serve the source with any ordinary static web server. All internal paths are relative, so the site can be hosted at a domain root or a GitHub Pages subpath.

## Render

Create a **Static Site** from this repository, or use the included `render.yaml` Blueprint.

- Build command: `npm ci && npm run check && npm run build`
- Publish directory: `dist`
- No environment variables, server process or database required.
- Add a custom domain in Render's site settings and apply the DNS records Render provides.
- Real HTML files exist for every case study; no single-page-app rewrite is required.

Render is optional. Any static host can serve the same build output.

## Editing

`index.html`, the five `work/*/index.html` files, `site.css`, and `script.js` are the current source of truth for the deployed site. Edit those files directly. `scripts/generate.py` is retained from an earlier generation pass and should not be used to overwrite the hand-edited case studies. Python is not needed to deploy the committed pages.

## Source of truth

- [McQueen](https://github.com/BerylKoko/F1-Analysis): season CSVs, Python analysis, documented conventions and completed editorial site. 2026 is explicitly YTD.
- [Race Lens](https://github.com/BerylKoko/Race-Lens): illustrative replay prototype, supplemented by Beryl's supplied interface analysis and interview-protocol PDFs. No participant findings or outcome metrics are inferred from the protocol.
- [Job Market](https://github.com/BerylKoko/Job-Market-Skills-Analysis): current notebook, README, `results/findings.md` and current charts. The older `results/summary.csv` uses a different grouping and is not used here.
- [Bookmatch](https://github.com/BerylKoko/Book-Recommendation): book-discovery interface, Flask routes, catalog retrieval, recommendation modules and regression tests. The case study focuses on product decisions, evidence-based matching, metadata handling and the finished interface.
- [Harvest](https://github.com/BerylKoko/Harvest-Festival): finished pages, responsive behaviour and original sketches. Historical student event guide; not an official current event service.

## Current status

The current site is a deployable working version of the portfolio. It contains the five completed projects and their supporting visuals and artifacts.

The next portfolio pass should focus on the case studies themselves: replace summary-style project pages with richer visual walkthroughs that show the actual reasoning, research, analysis, iterations, interfaces, and decisions behind each project. Preserve each project's individual identity rather than forcing the same repeated section structure across all five.

In particular, Race Lens should make fuller use of the interface audit, task-based interview protocol, design implications, and prototype iterations; McQueen should preserve the visual/data-story character of the original project; Job Market should foreground actual analysis and findings; Bookmatch should show the product experience and recommendation decisions through the interface; and Harvest can remain a lighter visual/front-end case study.

Avoid defensive or unnecessary provenance commentary in portfolio copy. Keep third-party attribution only where it is genuinely required and in the appropriate source documentation.

The repeated "How I work" block belongs on the homepage, not at the bottom of every case study. Project pages should end with a project-specific conclusion/result and a visually meaningful transition to the next project.

The site is configured for static deployment on Render via `render.yaml`.
