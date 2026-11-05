# Site map and destination behavior

| Route | Purpose |
| --- | --- |
| `/` | Intro, three featured projects, career entry point, social links |
| `/projects/` | Five-project directory |
| `/projects/{slug}/` | Five statically generated detail routes: `multi-agent-catalog-parser`, `tafsiri-s2st`, `europa`, `fairsplit`, `usnjournalcli` |
| `/career/` | Four original positions, dates and descriptions |
| `/about/` | Education, employment, skills and personal introduction |
| `/contact/` | Email, socials and résumé control |

Writing is intentionally omitted. `src/content/site.js` holds the single `resumeUrl` configuration. Empty by default: the visible résumé anchor literally has `href=""`; its click handler prevents navigation. When supplied an external PDF URL, it opens in a new tab with `noopener noreferrer`. Do not configure a URL without a user-supplied PDF destination. External employer, school, GitHub, LinkedIn and Tafsiri article destinations retain original URLs. `sitemap.xml` and `robots.txt` are generated from static routes; per-route canonical metadata uses the existing public domain. Unknown dynamic project slugs call `notFound` in the app, while the static export emits `out/404.html` for hosting fallback; HTTP status for an unknown exported URL depends on host configuration. The existing GitHub Pages workflow uploads `out/` unchanged.
