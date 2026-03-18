/**
 * Site-wide config for SEO and canonical URLs.
 * Primary domain: set NEXT_PUBLIC_SITE_URL in Vercel to https://ntsscaffoldings.com or https://ntsscaff.in.
 * Both domains can be added in Vercel → Settings → Domains; this is the one used for canonical/OG.
 */
export const site = {
  name: "NTS Scaffoldings Private Limited",
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://ntsscaffoldings.com",
  /** Alternate domain; add in Vercel Domains so the same site is served there. */
  alternateDomain: "https://ntsscaff.in",
  defaultTitle: "NTS Scaffoldings Pvt Ltd | #1 Scaffolding Rental Company in India – 45+ Years",
  /** Meta description: aim 150–160 chars for search snippets. */
  defaultDescription:
    "India's trusted scaffolding rental company since 1979. Cuplock scaffolding, formwork, props, jacks & safety equipment on hire. Pan-India delivery from Noida. Get a free quote.",
  /** Longer description for schema and OG (optional). */
  longDescription:
    "NTS Scaffoldings Private Limited is India's leading scaffolding rental company with 45+ years of experience. We supply Cuplock scaffolding systems, formwork, telescopic props, adjustable jacks, couplers, steel planks, and safety equipment on hire for infrastructure, industrial, and commercial projects pan-India. Headquartered in Noida, NCR, we serve clients including L&T, Tata Projects, DLF, Prestige, Godrej, and government bodies across 20+ states.",
  phone: "+91-98736-96128",
  phoneRaw: "+919873696128",
  email: "ntsscaff2004@gmail.com",
  address: "D23, Sector 63, Noida 201301, India",
  /** For schema.org founding date (45+ years = ~1979). */
  foundingDate: "1979",
  /** Noida coordinates for LocalBusiness geo (optional). */
  geo: { latitude: 28.6271, longitude: 77.3748 },
} as const;

/** Base URL from request host so ntsscaffoldings.com and ntsscaff.in both work. Use in server components via headers(). */
export function getBaseUrlFromHost(host: string | null): string {
  if (!host) return site.baseUrl;
  const protocol = host.includes("localhost") ? "http" : "https";
  return `${protocol}://${host}`;
}
