import ProjectList from "@/components/ProjectList";

export const metadata = { title: "Projects", description: "Software, data and AI projects by Vinayak Jaiwant Mooliyil.", alternates: { canonical: "/projects/" }, openGraph: { title: "Projects", url: "/projects/" } };

export default function ProjectsPage() {
  return <main id="main" className="page-shell frame"><div className="page-heading"><span className="micro">01 / Index</span><h1>Projects<span className="heading-period">.</span></h1><p>Selected software, data and AI work. Explore each project for its description, technologies and source.</p></div><ProjectList /></main>;
}
