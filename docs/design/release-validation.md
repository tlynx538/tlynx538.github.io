# Release validation — 2026-11-05

## Follow-up: synchronized header torus

The owner observed that the GIF header icon's axis and spin did not match the original hero torus. The header now uses the same Three.js geometry, camera, material and renderer path as the hero. A shared clock sets rotation phase and a shared pointer response sets tilt, so independently mounted renderers stay aligned. Both retain the frame cap, visibility controls and static SVG reduced-motion/failure fallbacks. This replaces the GIF-header optimization described in the original release checks below; the GIF remains the favicon. The production build passed again after this correction.

Chrome checks at 1440px and 390px observed two active canvases on the homepage and matching model-view matrices before and after pointer movement (maximum element difference below 0.002). About retained one active header canvas. With reduced motion at load, both SVG fallbacks appeared and no canvas was created. No browser exceptions or horizontal overflow occurred. Captures are `screenshots/release-synced-home-{1440,390}.png`.

The owner authorized the completed portfolio's commit, merge into main, and remote push. Footer wording: “This website was built using the OpenCode workflow, with small adjustments made using Codex.” The workflow name links to its public GitHub repository.

## Build and delivery

- Installed dependencies in an isolated copy with `yarn install --frozen-lockfile`; completed successfully. Existing Bootstrap and React type peer-dependency warnings did not prevent installation or builds.
- Production `yarn build` completed successfully, generating 19 static outputs, including eight project detail pages. Next reports 102–107 kB first-load JavaScript across the public pages; this is build output, not a measured network or Web Vitals result.
- Development output uses `.next-dev/`, separately from production `.next/`. The development server compiled and served the homepage with HTTP 200 using this configuration.
- The small header donut uses the existing GIF instead of creating a second WebGL renderer or embedding the full fallback wireframe on every page. Reduced-motion visitors receive the static favicon. The homepage retains its lazy Three.js renderer and SVG fallback.
- Hero rendering is capped at 30 frames per second, uses elapsed time for rotation, and stops when offscreen, when the document is hidden, or when reduced motion is requested. Hardware frame time and battery use were not measured.
- Project columns and detail layouts allow long titles to shrink/wrap without widening the page. Project arrows stay with the preceding word. The existing mobile layout and content are retained.

## Browser checks

Headless Chrome using CDP viewport emulation and software WebGL checked all 13 public content routes at 360, 390, 768 and 1440px (52 combinations). No document-width overflow, overflowing inspected text blocks, or uncaught browser exceptions were observed. All content routes, robots.txt, sitemap.xml and favicon assets returned HTTP 200 from the production export.

Mobile menu expansion, navigation to Projects and automatic menu closing passed. The intentionally unavailable résumé link remained inert. Reduced motion showed no canvas, the static header icon and visible hero fallback. Restoring motion created one active WebGL canvas; simulated context loss returned to the SVG fallback. The hero link points to Wolfram MathWorld. The exact approved footer credit appears on every checked page.

Representative release screenshots are retained under `screenshots/release-*`. Historical screenshots and earlier QA notes describe previous candidates. These checks do not establish real-device, Safari, screen-reader or Web Vitals performance.
