"use client";

import LinkArrow from "@/components/LinkArrow";

import { resumeUrl } from "@/content/site";

export default function ResumeLink() {
  return <a href={resumeUrl} target={resumeUrl ? "_blank" : undefined} rel={resumeUrl ? "noopener noreferrer" : undefined} onClick={resumeUrl ? undefined : (event) => event.preventDefault()} aria-label={resumeUrl ? "Open résumé PDF in a new tab" : "Résumé PDF not available yet"}>Résumé<LinkArrow /></a>;
}
