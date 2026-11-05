import "./globals.css";
import SiteNav from "@/components/SiteNav";
import Torus from "@/components/Torus";
import Link from "next/link";
import { email, githubUrl, linkedinUrl, siteUrl } from "@/content/site";

export const metadata = {
  metadataBase: new URL(siteUrl),
  icons: { icon: [{ url: "/donut.gif", type: "image/gif", sizes: "64x64" }] },
  title: { default: "Vinayak Jaiwant Mooliyil — Portfolio", template: "%s — Vinayak Jaiwant Mooliyil" },
  description: "Projects, experience and background of Vinayak Jaiwant Mooliyil.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: "Vinayak Jaiwant Mooliyil", title: "Vinayak Jaiwant Mooliyil — Portfolio", description: "Projects, experience and background of Vinayak Jaiwant Mooliyil.", url: "/" },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header frame"><Link className="wordmark" href="/" aria-label="Vinayak Jaiwant Mooliyil, home"><Torus compact /></Link><SiteNav /></header>
    {children}
    <footer className="site-footer frame"><div className="footer-lead"><span className="micro">Get in touch / Portfolio</span><a href={`mailto:${email}`}>{email} ↗</a></div><div className="footer-links"><div><span className="micro">Explore</span><Link href="/projects/">Projects</Link><Link href="/career/">Career</Link><Link href="/about/">About</Link><Link href="/contact/">Contact</Link></div><div><span className="micro">Elsewhere</span><a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div></div><div className="footer-base micro"><span>© {new Date().getFullYear()} Vinayak Jaiwant Mooliyil</span><p className="footer-credit">This website was built using the <a href="https://github.com/tlynx538/OpenCode-Programming-Workflow" target="_blank" rel="noopener noreferrer">OpenCode workflow</a>, with small adjustments made using Codex.</p><a href="#main">Back to top ↑</a></div></footer>
  </body></html>;
}
