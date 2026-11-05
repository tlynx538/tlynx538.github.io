import { projects } from "@/content/site";
import Link from "next/link";

export default function ProjectList({ limit }) {
  return <ol className="project-list">{projects.slice(0, limit).map((project, index) => <li key={project.slug} className="project-row">
    <span className="index-number">0{index + 1}</span>
    <div><h3><Link href={`/projects/${project.slug}/`}>{project.title}<span aria-hidden="true">&nbsp;↗</span></Link></h3><p>{project.description}</p><p className="micro">{project.tech.join(" · ")}</p></div>
  </li>)}</ol>;
}
