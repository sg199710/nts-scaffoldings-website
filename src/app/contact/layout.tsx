import type { Metadata } from "next";
import { headers } from "next/headers";
import { site, getBaseUrlFromHost } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = getBaseUrlFromHost((await headers()).get("host"));
  return {
    title: "Contact Us – Get a Free Scaffolding Rental Quote",
    description: `Get a free scaffolding rental quote from NTS Scaffoldings. Call ${site.phone}, email ${site.email}, or WhatsApp. Office: ${site.address}. Pan-India delivery.`,
    keywords: [
      "scaffolding rental quote",
      "scaffolding rental Noida",
      "scaffolding rental Delhi NCR",
      "NTS Scaffoldings contact",
      "scaffolding hire quote India",
    ],
    openGraph: {
      title: "Contact NTS Scaffoldings – Free Quote | Call +91-98736-96128",
      description: "Get a free scaffolding rental quote. Call, email, or WhatsApp NTS Scaffoldings. Pan-India delivery from Noida, NCR.",
      url: `${baseUrl}/contact`,
    },
    alternates: { canonical: `${baseUrl}/contact` },
  };
}

export default async function ContactLayout({ children }: { children: React.ReactNode }) {
  const baseUrl = getBaseUrlFromHost((await headers()).get("host"));
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${baseUrl}/contact` },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {children}
    </>
  );
}
