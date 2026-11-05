import { skills } from "@/content/site";

export const metadata = { title: "About", description: "Background, education and skills of Vinayak Jaiwant Mooliyil.", alternates: { canonical: "/about/" }, openGraph: { title: "About", url: "/about/" } };

export default function AboutPage() {
  return <main id="main" className="page-shell frame"><div className="page-heading"><span className="micro">03 / Profile</span><h1>About<span className="heading-period">.</span></h1><p>A brief description of my education, career as well as my expertise.</p></div>
    <section className="split-section background-section"><h2>Background</h2><div className="body-copy"><p><strong>IT and Data Analytics Intern</strong> at <a href="https://www.dallasrugs.com/" target="_blank" rel="noopener noreferrer">Dallas Rugs&nbsp;↗</a>.</p><p>Master of Business Analytics &amp; AI at <a href="https://jindal.utdallas.edu/" target="_blank" rel="noopener noreferrer">Naveen Jindal School of Management, University of Texas at Dallas&nbsp;↗</a>.</p><p>~3 years of experience in the IT industry working for <a href="https://www.nttdata.com/global/en/" target="_blank" rel="noopener noreferrer">NTT Data&nbsp;↗</a> and <a href="https://www.owens-minor.com/" target="_blank" rel="noopener noreferrer">Owens &amp; Minor&nbsp;↗</a>.</p><p>Bachelors of Engineering in Computer Science and Engineering at <a href="https://www.kletech.ac.in/belagavi/" target="_blank" rel="noopener noreferrer">KLE Technological University, Dr. M.S Sheshgiri Campus&nbsp;↗</a>.</p><p>Skilled in developing agentic AI systems, data pipelines, backend services, web applications, and automated CI/CD workflows.</p><p>Ocassional tinkerer and hobbyist.</p></div></section>
    <section className="split-section"><h2>Skills</h2><dl className="skills-list">{skills.map(([label, values]) => <div key={label}><dt>{label}</dt><dd>{values}</dd></div>)}</dl></section>
  </main>;
}
