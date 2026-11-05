import LinkArrow from "@/components/LinkArrow";
import { roles } from "@/content/site";

export const metadata = { title: "Career", description: "Experience across data, software and IT.", alternates: { canonical: "/career/" }, openGraph: { title: "Career", url: "/career/" } };

export default function CareerPage() {
  return <main id="main" className="page-shell frame"><div className="page-heading"><span className="micro">02 / Experience</span><h1>Career<span className="heading-period">.</span></h1><p>Experience across data, software and IT.</p></div><ol className="timeline">{roles.map((role, i) => <li key={role.employer} className="timeline-row"><span className="index-number">0{i + 1}</span><div><span className="micro">{role.dates}</span><h2>{role.title}</h2><h3>{role.employer}</h3><p>{role.website ? <>Built <a href={role.website} target="_blank" rel="noopener noreferrer">GSBAN.com<LinkArrow /></a>{role.description.slice("Built GSBAN.com".length)}</> : role.description}</p></div></li>)}</ol></main>;
}
