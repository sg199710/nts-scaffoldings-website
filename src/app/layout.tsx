import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgressClient";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: site.defaultTitle,
    template: "%s | NTS Scaffoldings Private Limited",
  },
  description: site.defaultDescription,
  keywords: [
    "scaffolding rental India",
    "Cuplock scaffolding",
    "NTS Scaffoldings",
    "construction scaffolding",
    "industrial scaffolding India",
    "formwork Noida",
    "scaffolding NCR",
  ],
  authors: [{ name: site.name, url: site.baseUrl }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.baseUrl,
    siteName: site.name,
    title: site.defaultTitle,
    description: site.defaultDescription,
    images: [{ url: `${site.baseUrl}/og.png`, width: 1200, height: 630, alt: `${site.name} – Scaffolding rental India` }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.defaultTitle,
    description: site.defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: site.baseUrl },
  category: "Construction & Scaffolding",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.baseUrl}/#organization`,
  name: site.name,
  description: site.longDescription,
  url: site.baseUrl,
  logo: `${site.baseUrl}/logo.png`,
  foundingDate: site.foundingDate,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.phone,
    email: site.email,
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: "English, Hindi",
    url: `${site.baseUrl}/contact`,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "D23, Sector 63",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    postalCode: "201301",
    addressCountry: "IN",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  description: site.longDescription,
  url: site.baseUrl,
  telephone: site.phone,
  email: site.email,
  foundingDate: site.foundingDate,
  address: {
    "@type": "PostalAddress",
    streetAddress: "D23, Sector 63",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    postalCode: "201301",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.latitude,
    longitude: site.geo.longitude,
  },
  areaServed: { "@type": "Country", name: "India" },
  priceRange: "$$",
  image: `${site.baseUrl}/logo.png`,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  description: site.defaultDescription,
  url: site.baseUrl,
  publisher: { "@id": `${site.baseUrl}/#organization` },
  inLanguage: "en-IN",
  potentialAction: {
    "@type": "ReadAction",
    target: [{ "@type": "EntryPoint", urlTemplate: `${site.baseUrl}/contact` }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <ScrollProgress />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        {/* WhatsApp floating button - inline so it always renders */}
        <a
          href="https://wa.me/919873696128?text=Hi%2C%20I'm%20interested%20in%20your%20scaffolding%20rental%20solutions."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          style={{
            position: "fixed",
            bottom: "1.5rem",
            right: "1.5rem",
            zIndex: 9999,
            width: "3.5rem",
            height: "3.5rem",
            borderRadius: "50%",
            backgroundColor: "#25D366",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        >
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.865 9.865 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
