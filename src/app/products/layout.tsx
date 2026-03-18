import type { Metadata } from "next";
import { site } from "@/lib/site";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Cuplock scaffolding, props & jacks, couplers, formwork, and safety equipment. Browse NTS Scaffoldings product catalog for rental across India.",
  keywords: [
    "Cuplock scaffolding",
    "scaffolding products India",
    "formwork rental",
    "props and jacks",
    "scaffolding safety equipment",
  ],
  openGraph: {
    title: "Products | NTS Scaffoldings Private Limited",
    description:
      "Cuplock scaffolding, formwork, and safety equipment. Full product catalog for scaffolding rental in India.",
    url: `${site.baseUrl}/products`,
  },
  alternates: { canonical: `${site.baseUrl}/products` },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: site.baseUrl },
    { "@type": "ListItem", position: 2, name: "Products", item: `${site.baseUrl}/products` },
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
    item: `${site.baseUrl}/products`,
  })),
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      {children}
    </>
  );
}
