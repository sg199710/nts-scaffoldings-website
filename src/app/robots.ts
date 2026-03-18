import { MetadataRoute } from "next";
import { headers } from "next/headers";
import { getBaseUrlFromHost } from "@/lib/site";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers();
  const base = getBaseUrlFromHost(headersList.get("host"));
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
    sitemap: `${base}/sitemap.xml`,
  };
}
