# Project handoff for future agents

## Release update — 2026-11-05

The owner subsequently requested and authorized the final refinements, commit, merge to `main`, and remote push. These instructions supersede the earlier header, typography, project-selection and no-release decisions below. Current source uses regular, normally spaced hero type, a small transparent animated donut home link in the header, and a clickable homepage hero torus linking to MathWorld. Europa's description is updated; OpenCode Programming Workflow, ResumeGen and EV Adoption Washington are added. The footer credits the OpenCode workflow with small adjustments made using Codex. See [release validation](../design/release-validation.md) for current checks. Older screenshots and notes remain historical evidence.

This is the **project-specific workflow note** for the portfolio. Read it alongside current source and `docs/design/`; it records decisions and evidence, not authority to override the owner. The latest visual direction is the **dark refinement**, not older pistachio/coral screenshots retained as design history. Do not persist raw session transcripts, credentials or environment-specific IDs here.

## Owner-confirmed decisions

- Build an authentic editorial portfolio for Vinayak Jaiwant Mooliyil, inspired primarily by AIR Studios' composition and type, with original identity, content and artwork. TypeRoom informs editorial article layout only; Studio Rotate informs motion pacing only. Do not copy reference assets or fonts.
- The owner approved a focused *refinement*, **not** a rebuild: keep the multi-page structure, project/career content, grid and navigation. Use charcoal/deep slate, restrained cool cyan/blue illumination, a bold San Francisco-style **system-first** homepage heading, a hero-only interactive WebGL wireframe torus behind the text, a full-name header wordmark and a considered footer. Inner pages remain calm. Do not embed Apple font files.
- The owner explicitly **deferred Writing**. Do not invent articles or add a Writing page merely to fulfill an earlier sitemap sketch.
- The owner wants a clickable Résumé control with a literal blank `href` that goes nowhere until a PDF URL is supplied; when configured it should open the external PDF in a new tab. `src/content/site.js` owns `resumeUrl`; `src/components/ResumeLink.jsx` prevents blank clicks. No résumé PDF or `/resume` route exists. Do not silently change this behavior.
- Preserve real project descriptions, technologies, career roles/dates, education, skills, email, social and outbound links. Current source does **not** substantiate detailed case-study outcomes, architecture diagrams or metrics; obtain evidence before adding such claims. Do not invent location or availability text for the footer.
- The owner allowed framework upgrades or visual libraries if justified, **not** as a request to migrate. Keep Next.js App Router and GitHub Pages static export unless demonstrated need changes that decision. No commit, push, publication or deployment has been requested so far.

## Current source map and invariants

| Area | Location / rule |
| --- | --- |
| Routes and SEO | `src/app/` App Router; `next.config.mjs` uses `output: "export"` and `trailingSlash: true` for GitHub Pages. `src/app/projects/[slug]/page.js` statically enumerates five known slugs. Sitemap and robots live in `src/app/`. Direct nested URLs and unknown paths must remain usable. |
| Factual content and résumé configuration | `src/content/site.js` holds the five project entries, four roles, skills and verified links; set `resumeUrl` there only when the owner supplies an external PDF URL. |
| Shared shell | `src/app/layout.js` holds the full-name header and footer; `src/components/SiteNav.jsx` supplies mobile disclosure and active-page semantics. Internal links use `next/link`; outbound links remain native. |
| Visual system | `src/app/globals.css` defines charcoal/slate/cyan tokens and responsive composition. Editorial body uses locally bundled SIL-OFL Hanken Grotesk (`public/fonts/licensed/`); the hero heading uses a bold system-first stack. Older bundled Helvetica files are unused because redistribution rights were not established. |
| Hero torus | `src/components/Torus.jsx` is a homepage-only client component. It loads `three` dynamically when visible and motion is permitted, uses a toroidal SVG fallback, caps DPR, pauses when offscreen/reduced motion, handles WebGL context loss and disposes GPU resources/listeners on unmount. CSS reduced-motion fallback also overrides an already-active canvas. Never let decoration obscure text or block navigation. |

## Evidence and limits

- `docs/design/current-site-audit.md`, `reference-audit.md`, `typography-audit.md`, `reference-mapping.md`, `visual-system.md`, `motion-spec.md`, `sitemap.md`, `visual-qa.md` and `refinement-plan.md` hold observations and choices. `docs/design/screenshots/` holds baseline, references, intermediates and the dark refinement. Use `final-dark-local-*`, `rev1-gpu-local-home-*`, `rev1-fallback-local-home-*` and `footer-local-home-*` for the **latest** candidate; see `visual-qa.md` for capture provenance. Older `local-*` and `after-home-*` are historical, not final acceptance.
- The last local `yarn build` exited 0 and generated 16 static pages in ignored `out/`. Chrome/CDP checks used viewport emulation at 1440, 1280, 1024, 768, 390 and 360; inspected dark-candidate pages showed no document-width overflow. Software-rendered WebGL and fallback screenshots exist; a simulated context loss showed the fallback. Reduced motion before load avoided canvas creation. A dynamic preference-toggle defect was found and fixed by forcing SVG visible/canvas hidden in CSS, then remeasured at 1440/390. These are **lab/source-linked** results, not real-device performance or full WCAG acceptance.
- The sandbox install/build attempt was **blocked** by Corepack fetching Yarn from npm registry (`EAI_AGAIN`); do not call this a passing sandbox suite or silently replace required checks with weaker ones. Independent reviewer dispatch for the dark refinement was interrupted twice without findings; do not attribute approval to it. Local build/browser evidence is separate and documented in `visual-qa.md`.
- Not measured: deployed GitHub Pages refresh, iOS Safari/touch, hardware GPU frame time or battery, LCP/INP/CLS, full keyboard/screen-reader audit, and a configured résumé PDF opening in a new tab. Earlier soft-navigation/back and blank résumé checks preceded dark-only changes and were not repeated after them. No deployment was performed.

## Future work protocol

1. Inspect repository instructions, `git status`, affected source and current design evidence before editing. **Existing work is uncommitted** and must not be overwritten as though checked-in HEAD were the current product. Read `docs/agentic/checkpoint.md` for the last handoff.
2. Separate confirmed owner decisions, source/browser observations, assumptions and proposals. Reuse the settled dark direction and Writing/résumé decisions; ask only about genuinely new consequential choices. Keep the existing App Router/static export unless a compatibility failure demonstrates otherwise.
3. Assign one test owner per milestone. Prefer a focused reproducer and check, then a final local build and exported-route/browser check on frozen source; independent review starts with diff and candidate-linked logs. Default repair/recheck limit is three cycles unless the owner specifies another positive limit.
4. Compare desktop and mobile rendered evidence, including WebGL **and** fallback/reduced-motion states. Build/source inspection is not proof of visual/interaction fidelity. Keep the torus lazy and hero-only, retain visible no-JS fallback, and report performance measures only when actually measured.
5. After corrections update affected design notes and recapture stale evidence once. Do not commit or deploy without the owner's instruction. Report blocked/unverified checks explicitly rather than upgrading them into passes.

## Plausible next tasks (not authorized changes)

- Test the dark candidate on real mobile hardware and iOS Safari, including pointer/touch, focus, WebGL failure, battery/frame time; measure Web Vitals before performance claims.
- Obtain substantiated project documentation or owner-written case-study detail before expanding project narratives. Add Writing only if the owner supplies real articles and requests it.
- When the owner supplies a résumé PDF URL, set `resumeUrl`, verify new-tab behavior and safe external-link attributes, and update this handoff. Check GitHub Pages deep-link refresh on an authorized deployment.
