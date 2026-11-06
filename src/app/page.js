import LinkArrow from "@/components/LinkArrow";
import ProjectList from "@/components/ProjectList";
import ResumeLink from "@/components/ResumeLink";
import { githubUrl, linkedinUrl } from "@/content/site";
import Link from "next/link";

export default function Home() {
  return <main id="main">
    <section className="hero frame"><div className="hero-meta micro"><span>Portfolio / 2026</span><span>Engineering · Data · AI</span></div>
      <div className="hero-stage">
        <div className="hero-torus" data-torus-hero aria-hidden="true" />
        <div className="hero-title">
          <p className="eyebrow">Hello, I’m</p>
          <h1>Vinayak<br />Jaiwant<br /><em>Mooliyil.</em></h1>
          <p className="micro">In Pursuit of Pure Wisdom and Excellence</p></div>
          <div className="hero-context">
            <p>IT and Data Analytics Intern at <a href="https://www.dallasrugs.com/" target="_blank" rel="noopener noreferrer">Dallas Rugs<LinkArrow /></a>
            </p>
          </div>
        </div>
      <div className="hero-bottom"><span className="micro">Selected works ↓</span><div><Link target="_blank" rel="noopener noreferrer" href="/contact/">Get in touch<LinkArrow /></Link><ResumeLink /></div></div>
    </section>
    <section className="section frame" aria-labelledby="work-title"><div className="section-head"><span className="micro">01 / Work</span><h2 id="work-title">Selected projects</h2><Link target="_blank" rel="noopener noreferrer" href="/projects/">All projects<LinkArrow /></Link></div><ProjectList limit={4} /></section>
    <section className="intro-band frame"><span className="micro">02 / Background</span><h2>Building across data, software and AI.</h2><div><p>Skilled in developing agentic AI systems, data pipelines, backend services, web applications, and automated CI/CD workflows.</p><Link target="_blank" rel="noopener noreferrer" href="/career/">Explore career<LinkArrow /></Link></div></section>
    <section className="closing frame"><span className="micro">Elsewhere</span><div><a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub<LinkArrow /></a><a href={linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn<LinkArrow /></a></div></section>
  </main>;
}
