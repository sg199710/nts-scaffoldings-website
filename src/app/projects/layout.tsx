import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore NTS Scaffoldings portfolio: scaffolding and formwork projects across India — infrastructure, industrial, and commercial.",
  openGraph: {
    title: "Projects | NTS Scaffoldings Private Limited",
    description: "Scaffolding and formwork projects across India. Infrastructure, industrial, commercial.",
    url: `${site.baseUrl}/projects`,
  },
  alternates: { canonical: `${site.baseUrl}/projects` },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
