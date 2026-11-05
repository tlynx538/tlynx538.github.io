import { projects, siteUrl } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap() {
  return ["/", "/projects/", "/career/", "/about/", "/contact/", ...projects.map(({ slug }) => `/projects/${slug}/`)].map((path) => ({ url: `${siteUrl}${path}` }));
}
