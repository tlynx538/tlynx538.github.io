"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [["/", "Home"], ["/projects/", "Projects"], ["/career/", "Career"], ["/about/", "About"], ["/contact/", "Contact"]];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return <nav className="site-nav" aria-label="Main navigation">
    <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-links" onClick={() => setOpen(!open)}>{open ? "Close menu −" : "Menu +"}</button>
    <div id="primary-links" className={`nav-links ${open ? "is-open" : ""}`}>
      {links.map(([href, label]) => <Link target="_blank" rel="noopener noreferrer" key={href} href={href} aria-current={pathname === href || (href === "/projects/" && pathname.startsWith("/projects/")) ? "page" : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
    </div>
  </nav>;
}
