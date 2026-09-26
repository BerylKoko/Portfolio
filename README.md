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

`index.html`, `work/*/index.html`, `site.css`, and `script.js` are the actual site. `scripts/generate.py` holds the page copy and markup generator; after editing it, run `python3 scripts/generate.py`. CSS and browser JavaScript are edited directly. Python is not needed to deploy the committed pages.

## Source of truth

- [McQueen](https://github.com/BerylKoko/F1-Analysis): season CSVs, Python analysis, documented conventions and completed editorial site. 2026 is explicitly YTD.
- [Race Lens](https://github.com/BerylKoko/Race-Lens): illustrative replay prototype, supplemented by Beryl's supplied interface analysis and interview-protocol PDFs. No participant findings or outcome metrics are inferred from the protocol.
- [Job Market](https://github.com/BerylKoko/Job-Market-Skills-Analysis): current notebook, README, `results/findings.md` and current charts. The older `results/summary.csv` uses a different grouping and is not used here.
- [Bookmatch](https://github.com/BerylKoko/Book-Recommendation): book-discovery interface, Flask routes, catalog retrieval, recommendation modules and regression tests. The case study focuses on product decisions, evidence-based matching, metadata handling and the finished interface.
- [Harvest](https://github.com/BerylKoko/Harvest-Festival): finished pages, responsive behaviour and original sketches. Historical student event guide; not an official current event service.

## Asset credits

Screenshots depict Beryl's actual projects. Research crops and PDFs come from Beryl's supplied documents and retain third-party interface context. Harvest's source credits instructor-provided content and photography. The McQueen opening screenshot includes **Lewis Hamilton 2008 Britain.jpg**, Marc Evans, [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Lewis_Hamilton_2008_Britain.jpg). The screenshot incorporates the original project's crop and overlay. See that repository's `data/SOURCES.md` for the project's full photography provenance.

## Verification

`npm run check` checks every page's viewport, primary heading, image alt attributes, local assets, page links and fragment targets. `npm run build` produces the static output. Visual desktop/mobile QA should be run in a browser before launch; the authoring environment blocked the local browser preview for this content pass. Existing live project interfaces were inspected directly and captured for the case studies.
