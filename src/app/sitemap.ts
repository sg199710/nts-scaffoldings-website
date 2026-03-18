import { MetadataRoute } from "next";
import { headers } from "next/headers";
import { getBaseUrlFromHost } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = await headers();
  const base = getBaseUrlFromHost(headersList.get("host"));
  const now = new Date();
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/#about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/products`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/projects`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/team`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
