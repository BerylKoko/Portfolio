# Beryl Koko — Portfolio

**Live portfolio:** [beryl-koko-portfolio.onrender.com](https://beryl-koko-portfolio.onrender.com/)

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
- [Race Lens](https://github.com/BerylKoko/Race-Lens): interface audit, task-based interview protocol, design implications and interactive replay prototype.
- [Job Market](https://github.com/BerylKoko/Job-Market-Skills-Analysis): current notebook, README, `results/findings.md` and current charts. The older `results/summary.csv` uses a different grouping and is not used here.
- [Bookmatch](https://github.com/BerylKoko/Book-Recommendation): book-discovery interface, Flask routes, catalog retrieval, recommendation modules and regression tests. The case study focuses on product decisions, evidence-based matching, metadata handling and the finished interface.
- [Harvest](https://github.com/BerylKoko/Harvest-Festival): finished responsive event-guide pages, front-end behaviour and original wide/narrow layout sketches.

## Current status

The portfolio is deployable and includes five completed projects with live/source links, real project visuals and hand-edited case studies.

The September 2026 storytelling pass expands the project pages beyond summary paragraphs:

- Race Lens now walks from interface audit → research tasks → design translation → prototype iteration.
- McQueen shows the peak baseline, constructor context, teammate comparison and final interpretation.
- Job Market surfaces the relational workflow, role counts, entry-level mix, skills and salary caveats.
- Bookmatch shows the discovery flow, recommendation logic, product states and implementation decisions.
- Harvest stays lighter, focusing on information architecture, sketches, responsive design and front-end behaviour.

The homepage keeps the broader through-line; the individual case studies carry the project-specific reasoning. Detailed source/licensing documentation stays in the relevant project repositories rather than becoming portfolio copy.

The site is configured for static deployment on Render via `render.yaml`.
