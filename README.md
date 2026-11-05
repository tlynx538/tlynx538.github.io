# Vinayak Jaiwant Mooliyil — portfolio

An editorial portfolio built with Next.js App Router and exported as a static site for GitHub Pages. The current visual direction is dark charcoal/slate with a hero-only WebGL torus and a static fallback.

Built using the [OpenCode Programming Workflow](https://github.com/tlynx538/OpenCode-Programming-Workflow), with small adjustments made using Codex. The header and homepage donuts share the same 3D geometry, animation clock and pointer response; visitors who prefer reduced motion see static SVG fallbacks instead. The transparent GIF remains the tab icon.

Start with the [project-specific agent handoff](docs/agentic/README.md) and [current checkpoint](docs/agentic/checkpoint.md) for owner-confirmed decisions, source boundaries, verification history and next steps. Audits and screenshot provenance are in [design QA](docs/design/visual-qa.md).

## Local development

```bash
yarn install --frozen-lockfile
yarn dev
```

Visit `http://localhost:3000`. `yarn build` generates the ignored `out/` static export. The workflow in `.github/workflows/nextjs.yml` deploys that export on pushes to `main` or manual dispatch; do not push or deploy without the owner's authorization.

Development output lives in `.next-dev/`, separately from production's `.next/`, so building does not overwrite a running development server's files. To preview the production export, run `python3 -m http.server 3000 --directory out` after building; `next start` does not serve static exports.

The Résumé PDF URL is intentionally blank; set `resumeUrl` in `src/content/site.js` when the owner supplies a verified destination. Writing is deferred. The included legacy Helvetica files are unused; Hanken Grotesk's license is at `public/fonts/licensed/OFL.txt`.
