import LinkArrow from "@/components/LinkArrow";
import Link from "next/link";

export const metadata = { title: "Page not found", robots: { index: false, follow: false } };

export default function NotFound() {
  return <main id="main" className="not-found frame"><span className="micro">404 / Not found</span><h1>Nothing here<span className="heading-period">.</span></h1><p>This page isn’t part of the portfolio.</p><Link target="_blank" rel="noopener noreferrer" href="/">Return home<LinkArrow /></Link></main>;
}
