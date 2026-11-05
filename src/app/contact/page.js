import LinkArrow from "@/components/LinkArrow";
import ResumeLink from "@/components/ResumeLink";
import { email, githubUrl, linkedinUrl } from "@/content/site";

export const metadata = { title: "Contact", description: "Get in touch with Vinayak Jaiwant Mooliyil.", alternates: { canonical: "/contact/" }, openGraph: { title: "Contact", url: "/contact/" } };

export default function ContactPage() {
  return <main id="main" className="contact-page frame"><span className="micro">04 / Contact</span><h1>Let’s talk<span className="heading-period">.</span></h1><p>If you happen to like my work and would like to reach out, please mail me at:</p><a className="contact-email" href={`mailto:${email}`}>{email}<LinkArrow /></a><div className="contact-links"><a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub<LinkArrow /></a><a href={linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn<LinkArrow /></a><ResumeLink /></div></main>;
}
