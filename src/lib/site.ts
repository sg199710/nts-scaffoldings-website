/**
 * Site-wide config for SEO and canonical URLs.
 * Update baseUrl when deploying to production (e.g. https://ntsscaffoldings.com).
 */
export const site = {
  name: "NTS Scaffoldings Private Limited",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://ntsscaffoldings.com",
  defaultTitle: "NTS Scaffoldings Private Limited | Scaffolding Rental Solutions India",
  /** Meta description: aim 150–160 chars for search snippets. */
  defaultDescription:
    "Scaffolding rental in India since 45+ years. Cuplock scaffolding, formwork, props & safety equipment. Noida, NCR. Get a quote today.",
  /** Longer description for schema and OG (optional). */
  longDescription:
    "NTS Scaffoldings Private Limited offers trusted scaffolding rental solutions across India. Cuplock scaffolding systems, formwork, props, jacks, couplers, and safety equipment. Serving infrastructure, industrial, and commercial projects from Noida, NCR.",
  phone: "+91-98736-96128",
  phoneRaw: "+919873696128",
  email: "ntsscaff2004@gmail.com",
  address: "D23, Sector 63, Noida 201301, India",
  /** For schema.org founding date (45+ years = ~1979). */
  foundingDate: "1979",
  /** Noida coordinates for LocalBusiness geo (optional). */
  geo: { latitude: 28.6271, longitude: 77.3748 },
} as const;
