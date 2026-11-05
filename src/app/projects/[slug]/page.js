import LinkArrow from "@/components/LinkArrow";
import { notFound } from "next/navigation";
import { projects } from "@/content/site";
import Link from "next/link";

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Project not found" };
  return { title: project.title, description: project.description, alternates: { canonical: `/projects/${project.slug}/` }, openGraph: { title: project.title, description: project.description, url: `/projects/${project.slug}/` } };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const number = projects.indexOf(project) + 1;
  return <main id="main" className="project-detail frame">
    <div className="detail-top micro"><Link href="/projects/">← All projects</Link><span>Project / 0{number}</span></div>
    <div className="detail-hero"><div><span className="eyebrow">Selected work / 0{number}</span><h1>{project.title}<span className="heading-period">.</span></h1></div><div className="detail-mark" aria-hidden="true"><span>0{number}</span><svg viewBox="0 0 280 280" fill="none"><circle cx="140" cy="140" r="100" /><circle cx="140" cy="140" r="67" /><path d="M0 140h280M140 0v280" /></svg></div></div>
    <div className="detail-body"><h2>Overview</h2><div><p className="lead">{project.article ? <><a href={project.article} target="_blank" rel="noopener noreferrer">Tafsiri<LinkArrow /></a>{project.description.slice("Tafsiri".length)}</> : project.description}</p><div className="detail-facts"><div><h3>Technologies</h3><ul>{project.tech.map((tech) => <li key={tech}>{tech}</li>)}</ul></div><div><h3>Links</h3><a href={project.link} target="_blank" rel="noopener noreferrer">View source on GitHub<LinkArrow /></a>{project.article && <a href={project.article} target="_blank" rel="noopener noreferrer">Read Tafsiri article<LinkArrow /></a>}</div></div></div></div>
    <div className="detail-next"><span className="micro">Continue exploring</span><Link href={`/projects/${projects[number % projects.length].slug}/`}>Next project: {projects[number % projects.length].title}<LinkArrow /></Link></div>
  </main>;
}
