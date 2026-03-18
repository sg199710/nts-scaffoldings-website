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
    "scaffolding on hire",
    "Cuplock scaffolding",
    "Cuplock scaffolding rental",
    "NTS Scaffoldings",
    "NTS Scaffoldings Noida",
    "scaffolding company India",
    "construction scaffolding rental",
    "industrial scaffolding India",
    "formwork rental India",
    "formwork Noida",
    "scaffolding NCR",
    "scaffolding Delhi NCR",
    "telescopic props rental",
    "adjustable jacks scaffolding",
    "steel planks rental",
    "scaffolding for construction",
    "scaffolding equipment hire India",
    "scaffolding supplier Noida",
    "scaffolding rental near me",
  ],
  authors: [{ name: site.name, url: site.baseUrl }],
  creator: site.name,
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
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
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 50 },
  sameAs: [
    "https://wa.me/919873696128",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: site.phone,
      email: site.email,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
      url: `${site.baseUrl}/contact`,
    },
    {
      "@type": "ContactPoint",
      telephone: site.phone,
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "D23, Sector 63",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    postalCode: "201301",
    addressCountry: "IN",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Scaffolding Equipment Rental",
    itemListElement: [
      { "@type": "OfferCatalog", name: "Cuplock Scaffolding Systems" },
      { "@type": "OfferCatalog", name: "Props & Jacks" },
      { "@type": "OfferCatalog", name: "Formwork Systems" },
      { "@type": "OfferCatalog", name: "Couplers & Clamps" },
      { "@type": "OfferCatalog", name: "Access & Safety Equipment" },
    ],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.baseUrl}/#localbusiness`,
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
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "State", name: "Uttar Pradesh" },
    { "@type": "State", name: "Delhi" },
    { "@type": "State", name: "Haryana" },
    { "@type": "State", name: "Maharashtra" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
  priceRange: "$$",
  image: `${site.baseUrl}/logo.png`,
  paymentAccepted: "Cash, Bank Transfer, Cheque",
  currenciesAccepted: "INR",
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  description: site.defaultDescription,
  url: site.baseUrl,
  publisher: { "@id": `${site.baseUrl}/#organization` },
  inLanguage: "en-IN",
  potentialAction: [
    {
      "@type": "ReadAction",
      target: [{ "@type": "EntryPoint", urlTemplate: `${site.baseUrl}/contact` }],
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of scaffolding does NTS Scaffoldings offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NTS Scaffoldings offers Cuplock scaffolding systems, formwork, telescopic props, adjustable jacks, couplers, clamps, steel planks, walk-way boards, staircase towers, and safety equipment on rental across India.",
      },
    },
    {
      "@type": "Question",
      name: "Which cities does NTS Scaffoldings deliver to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NTS Scaffoldings delivers pan-India from our Noida, NCR headquarters. We have supplied scaffolding to projects in Delhi, Mumbai, Chennai, Hyderabad, Pune, Kolkata, Gurgaon, Ahmedabad, Assam, Rajasthan, and 20+ states.",
      },
    },
    {
      "@type": "Question",
      name: "How long has NTS Scaffoldings been in business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NTS Scaffoldings Private Limited was established in 1979 and has over 45 years of experience in scaffolding rental for construction projects across India.",
      },
    },
    {
      "@type": "Question",
      name: "Who are some of the clients NTS Scaffoldings has worked with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "NTS Scaffoldings has served clients including L&T, Tata Projects, DLF, Prestige Group, Godrej Properties, Oberoi Realty, IKEA, Wipro, Foxconn, Reliance, Maruti Suzuki, and multiple government bodies such as AIIMS, IIT, and CIDCO.",
      },
    },
    {
      "@type": "Question",
      name: "How can I get a scaffolding rental quote from NTS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can get a free quote by calling +91-98736-96128, emailing ntsscaff2004@gmail.com, messaging on WhatsApp, or filling out the contact form on our website at ntsscaffoldings.com/contact.",
      },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
