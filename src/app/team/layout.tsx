import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Team",
  description: `Meet the leadership team at NTS Scaffoldings – driving India's trusted scaffolding rental solutions with over 45 years of excellence.`,
  openGraph: {
    title: "Our Team | NTS Scaffoldings Private Limited",
    description: "Leadership team at NTS Scaffoldings – scaffolding rental experts across India.",
    url: `${site.baseUrl}/team`,
  },
  alternates: { canonical: `${site.baseUrl}/team` },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.baseUrl },
    { "@type": "ListItem", position: 2, name: "Team", item: `${site.baseUrl}/team` },
  ],
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {children}
    </>
  );
}
