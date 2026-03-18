import type { Metadata } from "next";
import { headers } from "next/headers";
import { getBaseUrlFromHost } from "@/lib/site";
import { products } from "@/data/products";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = getBaseUrlFromHost((await headers()).get("host"));
  return {
    title: "Scaffolding Products – Cuplock, Formwork, Props, Couplers & Safety Equipment",
    description:
      "Browse NTS Scaffoldings full product catalog: Cuplock scaffolding, ledgers, standards, formwork, telescopic props, adjustable jacks, couplers, clamps, steel planks, staircase towers, and safety equipment for rental across India.",
    keywords: [
      "Cuplock scaffolding",
      "Cuplock scaffolding rental",
      "scaffolding products India",
      "formwork rental",
      "telescopic props",
      "adjustable jacks",
      "scaffolding couplers",
      "steel planks",
      "scaffolding safety equipment",
      "scaffolding accessories India",
      "staircase tower scaffolding",
      "walk-way boards",
    ],
    openGraph: {
      title: "Scaffolding Products for Rental | NTS Scaffoldings – Full Catalog",
      description:
        "Cuplock scaffolding, formwork, props, jacks, couplers, steel planks, and safety equipment. Full product catalog for scaffolding rental pan-India.",
      url: `${baseUrl}/products`,
    },
    alternates: { canonical: `${baseUrl}/products` },
  };
}

export default async function ProductsLayout({ children }: { children: React.ReactNode }) {
  const baseUrl = getBaseUrlFromHost((await headers()).get("host"));
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Products", item: `${baseUrl}/products` },
    ],
  };
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Scaffolding Products – NTS Scaffoldings",
    description: "Cuplock scaffolding, formwork, props, couplers, and safety equipment for rental.",
    numberOfItems: products.length,
    itemListElement: products.slice(0, 20).map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      item: `${baseUrl}/products`,
    })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      {children}
    </>
  );
}
