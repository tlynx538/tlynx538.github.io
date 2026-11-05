# Computed type and geometry — 2026-11-05

Measurements from actual Chrome CDP `getComputedStyle` and `getBoundingClientRect` after rendering. CSS font-family is the browser's computed *declaration*, not proof of the resolved font file or license. Coordinates are document-top at initial scroll (pixels); snapshot-dependent backgrounds and animation should not be promoted to design constants.

| Page/size | Computed text and geometry |
| --- | --- |
| AIR engineers 1440 | Header 1440×80 at 0,0. `About`: x20 y111, width690, `akzidenz-grotesk, sans-serif`, 30px, rgb(26,27,27). Lead paragraphs 18px/24px. |
| AIR engineers 390 | Header 390×89; `About`: x10 y111 width370, 24px; paragraphs 18px/24px. |
| AIR projects 1440 / 390 | `Selected Projects`: x20 y111 width220, 30px / x10 y111 width176, 24px; 14px/16px credit paragraphs; background rgb(235,252,199). |
| AIR history 1440 / 390 | First heading x20 y111 width1400 / x10 y111 width370; 30px / 24px; narrative paragraphs 18px/24px. |
| AIR detail 1440 / 390 | Name x20 y112, 30px / x10 y111, 24px. Desktop `Profile` x20 y910, 30px; mobile x20 y483, 21.008px. |
| Rotate 1440 / 390 | Header 1440×160 / 390×128; main h1 `Graphik, Trebuchet MS, Arial…`, 120px / 60px, white rgb(255,255,255), black body rgb(0,0,0). Browser h1 bounding width reads 0 because heading text is nested/positioned; do **not** use zero as a visual width. First ordinary paragraph 16px/24px / 14px/21.98px. |

| Live portfolio viewport | H1 computed size; x,y,width | $whoami size; y | Projects heading y | Document size |
| --- | --- | --- | --- | --- |
| 1440×900 | 40px; 80,20,1152 | 28px;169 | 835 | 1440×2346 |
| 1280×800 | 40px; 90,20,972 | 28px;169 | 835 | 1280×2368 |
| 1024×768 | 37.36px; 52,20,792 | 26.944px;166 | 906 | 1024×2459 |
| 768×1024 | 33.52px; 44,20,552 | 25.408px;161 | 1120 | 768×2766 |
| 390×844 | 27.85px; 20,20,222 | 23.14px;212 | 1399 | 390×3993 |
| 360×800 | 27.4px; 20,20,192 | 22.96px;244 | 1528 | 360×4229 |

Live h1 computed font-family starts `system-ui, -apple-system, "Segoe UI", Roboto…` and computed color rgb(250,250,250). Live body computed rgb(255,255,255) **does not represent** rendered dark main surface; screenshot shows the dark container. AIR homepage has no `h1`–`h3` nodes observed in the rendered capture; do not infer missing visible navigational text. TypeRoom screenshots were subsequently captured at 1440 and 390; computed typography remains unavailable. No font files or assets were extracted.

## AIR typography roles — existing rendered captures only

The prior CDP measurements captured representative elements, **not** each text node in the header/menu. Each `family` below is computed CSS (`akzidenz-grotesk, sans-serif` throughout measured AIR elements), not a verified rendered font. `normal` for letter-spacing is the CSS value, not a measured zero. D/M = 1440×900 / 390×844. Dimensions in CSS px.

| Role / measured element | D: family; weight; size / line / tracking | M: family; weight; size / line / tracking | Evidence limits |
| --- | --- | --- | --- |
| Hero heading | unknown | unknown | AIR home contains no captured `h1`–`h3`; visual stacked home menu is not a semantic heading measurement. |
| Page title (projects `h1`, “Selected Projects”) | akzidenz-grotesk, sans-serif; 300; 30 / 36 / normal | akzidenz-grotesk, sans-serif; 300; 24 / 28.8 / normal | x20 y111 desktop, x10 y111 mobile. |
| Section heading (engineers `h1`, “About”) | akzidenz-grotesk, sans-serif; 300; 30 / 36 / normal | akzidenz-grotesk, sans-serif; 300; 24 / 28.8 / normal | Semantic `h1` functioning visually as section heading, not proof of global heading hierarchy. |
| Body (engineers first prose `p`) | akzidenz-grotesk, sans-serif; 300; 18 / 24 / normal | akzidenz-grotesk, sans-serif; 300; 18 / 24 / normal | x730 width690 desktop, x10 width370 mobile. |
| Caption (projects first credit `p`) | akzidenz-grotesk, sans-serif; 300; 14 / 16 / normal | akzidenz-grotesk, sans-serif; 300; 14 / 16 / normal | `The Uprising` first credit at y663 desktop / y707 mobile. |
| Navigation (header **container**, not nav links) | akzidenz-grotesk, sans-serif; 300; 16 / 24 / normal | akzidenz-grotesk, sans-serif; 300; 16 / 24 / normal | Individual nav-link computed family/weight/size/line/tracking **unknown**; parent may be overridden by children. Header projects 1440×80 / 390×89. |
| Metadata (AIR home footer `p`, “AIR”) | akzidenz-grotesk, sans-serif; 300; 14 / 16 / normal | akzidenz-grotesk, sans-serif; 300; 14 / 16 / normal | x20 y941 desktop / x10 y885 mobile; not proof all metadata uses this style. |

**Declared vs resolved:** computed `font-family` lists `akzidenz-grotesk` first; Chrome capture did not query `CSS.getPlatformFontsForNode`, inspect font requests, or otherwise establish the actual font file used. Even if this declaration refers to an Akzidenz-Grotesk family, the specific foundry, variant and use rights are **unverified**. Do not bundle/reuse AIR's font based on this audit; choose a separately licensed alternative. AIR page palette and typography can differ with loading/animation state.

## Revision 1 — type-family comparison (no new browser measurement)

The current candidate declares locally hosted SIL OFL 1.1 Hanken Grotesk at weight 300 for body/headings, contrasted with AIR's **computed declaration** Akzidenz-Grotesk at weight 300 for the measured page title and prose. AIR homepage hero heading metrics remain unknown; the candidate's identity hero is not asserted to match a measured AIR heading. In `after-home-1440.png`, the earlier Arial-based name occupied three forced lines and looked more massive/heavy than AIR's measured lightweight page-title language; `after-home-390.png` showed the ornament cropped at the right edge, but that CLI capture may have an incorrect minimum layout width. Revised CSS sets hero desktop `clamp(68px, 9vw, 138px)` / mobile `clamp(56px, 12.8vw, 76px)` (after the <=800px intermediate rule), tracking `-.055em`, line-height `.98`, and centers the mobile ornament within its column. These values are **CSS declarations, not new rendered measurements**. The three explicit name lines are retained. Compare actual glyph widths, line wraps, font loading and overflow at viewport widths 1440, 390 and 360 in the coordinator-owned browser pass. License/provenance and design delta are documented in `visual-system.md`.
