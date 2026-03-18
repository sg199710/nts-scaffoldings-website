import type { Metadata } from "next";
import { headers } from "next/headers";
import { getBaseUrlFromHost } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = getBaseUrlFromHost((await headers()).get("host"));
  return {
    title: "Our Projects – 76+ Scaffolding Projects Across India",
    description:
      "Browse 76+ scaffolding projects by NTS Scaffoldings across India — AIIMS, Bullet Train, Yashobhoomi, DLF, Prestige, Tata, L&T, and government projects. View locations and images.",
    keywords: [
      "scaffolding projects India",
      "NTS Scaffoldings projects",
      "Cuplock scaffolding projects",
      "scaffolding AIIMS",
      "scaffolding Bullet Train",
      "scaffolding Yashobhoomi",
      "construction scaffolding portfolio",
    ],
    openGraph: {
      title: "76+ Scaffolding Projects Across India | NTS Scaffoldings",
      description: "See NTS Scaffoldings' portfolio of 76+ projects: infrastructure, industrial, and commercial scaffolding across 20+ states.",
      url: `${baseUrl}/projects`,
    },
    alternates: { canonical: `${baseUrl}/projects` },
  };
}

export default async function ProjectsLayout({ children }: { children: React.ReactNode }) {
  const baseUrl = getBaseUrlFromHost((await headers()).get("host"));
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Projects", item: `${baseUrl}/projects` },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {children}
    </>
  );
}
