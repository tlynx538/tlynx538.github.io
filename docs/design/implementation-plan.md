# Editorial portfolio implementation plan

**Goal:** An AIR-informed, original, accessible portfolio with independent Home, Projects, project detail, Career, About and Contact routes. Writing is explicitly deferred. The résumé control remains clickable but inert with `href=""` until a configured external PDF URL is supplied, then opens in a new tab.

**Architecture:** Preserve Next.js 15 App Router and the existing GitHub Pages workflow; enable static export, use structured records for the five projects and four career entries, server-rendered content and a minimal client navigation control. No new framework or animation dependency unless evidence requires it. Avoid unlicensed bundled font files. Existing facts and outbound links are migration inputs, not permission to invent results.

**Review focus:** Direct nested URL refresh under static export; unknown project slug 404; keyboard/mobile menu and reduced motion; literal blank résumé href without reload; five project references and four roles retained; typography and composition compared to rendered reference evidence. Limit: three Coder/Reviewer repair cycles.

## 1. Audit and visual evidence
- [ ] Inventory repository, old content/links, CSS, assets, metadata, routing and deployment in `docs/design/current-site-audit.md`.
- [ ] Capture existing site at six requested viewport targets before editing (saved under `docs/design/screenshots/before-home-*.png`). Inspect reference pages in rendered Chrome, measure computed typography and geometry where possible, and explicitly mark unavailable measurements in `reference-audit.md` and `typography-audit.md`.
- [ ] Translate only AIR visual language, TypeRoom editorial structure (no article implementation without content), and Studio Rotate motion cues into `reference-mapping.md`.

## 2. Vertical slice, then migration
- [ ] Implement exported shared shell, local/open-licensed font, design tokens, responsive navigation, home and projects directory, then one project detail with original links. Verify local static build and direct loads.
- [ ] Migrate remaining project details, career, about, contact and all existing facts/links; make résumé destination one blank-by-default configuration value with inert blank click and new-tab configured behavior. Add 404, per-route metadata, sitemap and canonical URLs.
- [ ] Document `visual-system.md`, `motion-spec.md`, `sitemap.md`. Keep content readable without JS and reduced-motion visibility intact.

## 3. Candidate freeze and verification
- [ ] Build once against final source, inspect `out` and run one owner-controlled route/interaction test pass (desktop, mobile, keyboard, reduced motion, missing route, résumé states).
- [ ] Capture final screenshots at six viewports; compare structure, typography, spacing, overflow and mobile composition against baseline/reference in three review passes. Document actual differences and limits in `visual-qa.md`; independent reviewer inspects diff/logs first.

No commits, deployment, or publishing are authorized.
