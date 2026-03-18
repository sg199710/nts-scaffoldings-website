import type { Metadata } from "next";
import { headers } from "next/headers";
import { getBaseUrlFromHost } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = getBaseUrlFromHost((await headers()).get("host"));
  return {
    title: "Our Team",
    description: `Meet the leadership team at NTS Scaffoldings – driving India's trusted scaffolding rental solutions with over 45 years of excellence.`,
    openGraph: {
      title: "Our Team | NTS Scaffoldings Private Limited",
      description: "Leadership team at NTS Scaffoldings – scaffolding rental experts across India.",
      url: `${baseUrl}/team`,
    },
    alternates: { canonical: `${baseUrl}/team` },
  };
}

export default async function TeamLayout({ children }: { children: React.ReactNode }) {
  const baseUrl = getBaseUrlFromHost((await headers()).get("host"));
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Team", item: `${baseUrl}/team` },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {children}
    </>
  );
}
